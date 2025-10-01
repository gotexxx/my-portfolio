import { Footer, NavbarSection } from "@/components";

export default function DatenschutzPage() {
    const navItems = [
        { name: "Startseite", link: "/" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 mx-auto md:py-20 flex flex-col md:gap-20 items-center px-10">
                <NavbarSection navItems={navItems} />
                <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
                <section className="space-y-4 max-w-3xl">
                    <p>
                        Ich, Filip Stosik, nehme den Schutz Ihrer persönlichen Daten sehr ernst und informiere Sie hiermit, wie Ihre Daten auf dieser Portfolio-Website verarbeitet werden.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Server-Logfiles</h2>
                    <p>
                        Beim Besuch dieser Website werden Daten wie IP-Adresse, Browsertyp, Zeitstempel und besuchte Seiten temporär gespeichert. Diese Daten dienen ausschließlich dem sicheren und störungsfreien Betrieb der Website.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Chatbot (Google Gemini)</h2>
                    <p>
                        Beim Nutzen des Chatbots werden Ihre eingegebenen Nachrichten und die Kommunikationshistorie über eine von mir bereitgestellte Next.js API-Route an <strong>Google Gemini (Google LLC)</strong> weitergeleitet. Die Verarbeitung erfolgt zur Beantwortung Ihrer Anfragen.
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Verarbeitete Daten: Ihr Chattext, Sitzungsdaten (z. B. Fragezahl), eventuell IP-Adresse</li>
                        <li>Empfänger: Google LLC, ggf. außerhalb der EU</li>
                        <li>Zweck: Sammlung und Beantwortung Ihrer Anfrage</li>
                        <li>Speicherdauer: Nachrichten werden nur in der aktuellen Sitzung gespeichert und nach Seiten-Neuladen gelöscht.</li>
                        <li>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
                        <li>Keine Profilbildung, kein Tracking durch mich; mögliche Verarbeitung und Speicherung durch Google gemäß deren Datenschutzrichtlinie</li>
                        <li>
                            <a href="https://cloud.google.com/privacy/gdpr" target="_blank" rel="noopener noreferrer">
                                Google Cloud DSGVO-Informationen
                            </a>
                        </li>
                    </ul>
                    <p>
                        Hinweis: Mit Klick auf „Chat starten“ stimmen Sie zu, dass die eingegebenen Daten an Google Gemini für die Antwortgenerierung weitergeleitet werden.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Vercel Analytics</h2>
                    <p>
                        Zur Analyse und Verbesserung der Website verwende ich Vercel Analytics. Dabei werden Daten wie anonymisierte IP-Adresse, Browserdaten, Zeitstempel und Seitenaufrufe verarbeitet, um die Performance und Nutzerfreundlichkeit zu optimieren.
                    </p>
                    <p>
                        Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Es werden keine personenbezogenen Profile erstellt oder Daten zu Werbezwecken genutzt. Weiterführende Informationen finden Sie in der <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Vercel</a>.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Ihre Rechte</h2>
                    <p>
                        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie auf Beschwerde bei einer Datenschutzaufsichtsbehörde.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Kontakt</h2>
                    <p>
                        Für Anliegen zum Datenschutz können Sie sich an mich wenden: <a href="mailto:f.stosik1@gmail.com" className="underline">f.stosik1@gmail.com</a>
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
}
