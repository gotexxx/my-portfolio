"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { renderMarkdown } from "@/lib/utils/render-text";

const MAX_QUESTIONS_PER_SESSION = 5;

function getCount() {
    if (typeof window === "undefined") return 0;
    const raw = sessionStorage.getItem("chat_count");
    return raw ? parseInt(raw, 10) || 0 : 0;
}

function setCount(n: number) {
    if (typeof window === "undefined") return;
    sessionStorage.setItem("chat_count", String(n));
}

function getMessages() {
    if (typeof window === "undefined") return [];
    try {
        const raw = sessionStorage.getItem("chat_messages");
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function setMessagesStorage(msgs: { role: "user" | "model"; text: string }[]) {
    if (typeof window === "undefined") return;
    sessionStorage.setItem("chat_messages", JSON.stringify(msgs));
}
export const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<{ role: "user" | "model"; text: string }[]>(() =>
        getMessages()
    );
    const [loading, setLoading] = useState(false);
    const [count, setCountState] = useState(() => getCount());
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMessagesStorage(messages);
    }, [messages]);

    useEffect(() => {
        setCountState((c) => c);
    }, []);

    useEffect(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }, [messages, open]);

    const remaining = useMemo(() => Math.max(0, MAX_QUESTIONS_PER_SESSION - count), [count]);
    const limitReached = remaining <= 0;

    const exampleQuestions = [
        "Welche Skills hat Filip? 💡",
        "Zeig mir ein Projekt von Filip 🚀",
        "Wie kann ich Filip kontaktieren? ✉️",
        "Wie organisiert Filip seine Arbeit im Team? 🤝",
        "Welche Tools nutzt Filip für Webentwicklung? 🧰",
        "Welche IDE bevorzugt Filip? 💻"
    ];

    async function ask() {
        const question = input.trim();
        if (!question || limitReached) return;

        setLoading(true);
        setInput("");

        const updatedMessages = [...messages, { role: "user", text: question }];
        // @ts-ignore
        setMessages(updatedMessages);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: question, history: updatedMessages.slice(-6) }),
            });

            const data = await res.json();

            if (data?.error) {
                setMessages((m) => [...m, { role: "model", text: `Fehler: ${data.error}` }]);
            } else {
                setMessages((m) => [...m, { role: "model", text: data.reply }]);
                const next = count + 1;
                setCount(next);
                setCountState(next);
            }
        } catch {
            setMessages((m) => [...m, { role: "model", text: "Netzwerkfehler. Bitte später erneut versuchen." }]);
        } finally {
            setLoading(false);
        }
    }

    function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            void ask();
        }
    }

    return (
        <>
            <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Chatbot öffnen"
                className="fixed bottom-4 right-4 z-99999 w-fit duration-200 ease-linear text-sm text-center md:text-[24px] border bg-gray-700 border-neutral-600 hover:bg-neutral-800 px-1 md:px-6 py-4 rounded-full transition-all"
            >
                {open ? "Chat schließen" : "Chat starten 🤖"}
            </button>

            {open && (
                <div className="fixed bottom-25 right-4 z-99999 w-[90%] max-w-[500px] max-h-[70vh] bg-gray-800/90 backdrop-blur-xs border rounded-2xl shadow-xl flex flex-col overflow-hidden">
                    <div className="p-3 border-b font-medium">Filips Portfolio-Chat 🤖🚀</div>

                    <div ref={listRef} className="flex-1 p-3 space-y-2 overflow-y-auto">
                        {messages.length === 0 && (
                            <div className="text-gray-400space-y-3">
                                <p>Hallo! Ich beantworte deine Fragen zu Filip, seinen Projekten, Fähigkeiten und Kontaktmöglichkeiten. 🧑‍💻</p>
                                <div>
                                    <p className="mb-1 font-medium">Frag mich zum Beispiel:</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        {exampleQuestions.map((q, i) => (
                                            <li key={i} className="cursor-pointer hover:underline" onClick={() => setInput(q)}>
                                                {q}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="text-xs text-gray-400 mt-2">Hinweis: Deine Eingaben werden an Google Gemini (Google LLC, USA) gesendet, um Antworten zu generieren.</p>
                            </div>
                        )}

                        {messages.map((m, i) => (
                            <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                                <div
                                    className={`grid cols-1 px-3 py-2 rounded-xl whitespace-pre-wrap backdrop-blur-xs w-fit ${
                                        m.role === "user" ? "bg-gray-700 ml-auto" : "bg-gray-500"
                                    }`}
                                >
                                    {renderMarkdown(m.text)}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="text-gray-500 animate-pulse  ">
                                <div className=" bg-gray-600  w-6/8 mb-2 h-[40px] rounded-xl"></div>
                            </div>
                        )}
                    </div>

                    <div className="px-3 pb-2 text-sm text-gray-400">
                        {limitReached ? (
                            <span>
                Limit erreicht (max. {MAX_QUESTIONS_PER_SESSION} Fragen pro Sitzung). Schreibe gerne Filip an:{" "}
                                <a className="font-bold text-base" href="mailto:f.stosik1@gmail.com">
                  f.stosik1@gmail.com
                </a>{" "}
                                ✉️.
              </span>
                        ) : (
                            <span>Noch {remaining} Frage(n) in dieser Sitzung verfügbar.</span>
                        )}
                    </div>

                    <div className="p-3 border-t flex items-center gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={onKeyDown}
                            disabled={loading || limitReached}
                            placeholder={limitReached ? "Limit erreicht" : "Frage eingeben und Enter drücken…"}
                            className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring"
                        />
                        <button
                            onClick={ask}
                            disabled={loading || limitReached}
                            className="w-fit duration-200 ease-linear text-sm text-center md:text-base border bg-gray-700 border-neutral-600 hover:bg-neutral-800 px-1 md:px-3 py-2 rounded-full transition-all"
                        >
                            {loading ? "Lädt…" : "Senden"}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
