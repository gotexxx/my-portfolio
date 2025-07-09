"use client"

import { ColourfulText, TypewriterEffect, BackgroundGradient, AnimatedTooltip } from "@/components";
import { FaFileDownload } from "react-icons/fa";

export const  HeroSection = () => {
    const words = [
        { text: "Entwickeln" },
        { text: "beeindruckende" },
        { text: "digitale", className: "text-blue-500" },
        { text: "Erfahrungen." },
    ];

    const people = [
        {
            id: 1,
            name: "Filip Stosik",
            designation: "Full-Stack-Entwickler",
            image: "/me.png",
        },
    ];

    return (
        <section id="about" className="pt-10 md:pt-32 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div className="flex flex-col gap-6 z-100">
                    <TypewriterEffect words={words} className="text-3xl md:text-4xl max-w-[600px] h-[144px]" />
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        Hi, ich bin <ColourfulText text={"Filip "} /> 👋
                    </h1>
                    <p className="text-lg text-neutral-300 leading-relaxed max-w-xl">
                        Nach meiner Ausbildung zum Fachinformatiker für Anwendungsentwicklung entwickle ich benutzerfreundliche
                        Webanwendungen, gerne im Frontend, aber auch mit Blick aufs Backend.
                        <br /> Ob React, Next.js oder Schnittstellenanbindung, ich lerne stetig dazu und bringe technisches Verständnis
                        und Praxiserfahrung mit.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a
                            href="/Lebenslauf Filip Stosik.pdf"
                            download
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-500/30"
                        >
                            <FaFileDownload /> Lebenslauf
                        </a>
                        <a href="#contact" className="border border-neutral-600 hover:bg-neutral-800 px-6 py-3 rounded-full transition-all">
                            Kontaktieren Sie mich
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-72 h-72 relative">
                        <BackgroundGradient className="rounded-full p-1" containerClassName="w-full h-full">
                            <AnimatedTooltip items={people} />
                            <div className="mt-10">
                                Ich programmiere gern coole Web-Apps, besonders CMS-Seiten, und will mich als Frontend- oder Full-Stack-Entwickler beweisen.
                                Ich möchte neues Lernen und erfreue mich an Projekten, bei denen ich mich weiterentwickeln kann.

                            </div>
                        </BackgroundGradient>
                    </div>
                </div>
            </div>
        </section>
    );
}