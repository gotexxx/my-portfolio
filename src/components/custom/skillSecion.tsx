"use client"

import { HoverEffect } from "@/components";

export const  SkillsSection = () => {
    const skills = [
        { title: "React", icon: "⚛️", description: "Moderne UI-Entwicklung mit Komponenten und Hooks." },
        { title: "Next.js", icon: "⏭️", description: "Full-Stack-Framework für performante React-Anwendungen." },
        { title: "TypeScript", icon: "🟦", description: "Typsicheres JavaScript für bessere Wartbarkeit und Skalierung." },
        { title: "Node.js", icon: "🟢", description: "Serverseitige Entwicklung mit JavaScript und hoher Performance." },
        { title: "Tailwind CSS", icon: "💨", description: "Utility-First-CSS für schnelle und flexible UI-Gestaltung." },
        { title: "Strapi", icon: "🛠️", description: "Headless CMS zur einfachen API-Erstellung und Content-Verwaltung." },
        { title: "Shopware", icon: "🛒", description: "Moderne E-Commerce-Plattform mit API-First-Ansatz." },
        { title: "Symfony", icon: "🎼", description: "PHP-Framework für strukturierte und skalierbare Webanwendungen." },
        { title: "Neos", icon: "🧠", description: "Content-Management mit Fokus auf Redaktion und Struktur." },
    ];

    return (
        <section id="skills" className="py-12 z-100">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold">Meine Fähigkeiten</h2>
                <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
                    Eine Auswahl meiner technischen Fähigkeiten und Werkzeuge, die ich nutze, um Ideen zum Leben zu erwecken.
                </p>
            </div>
            <div className="max-w-6xl mx-auto">
                <HoverEffect items={skills} />
            </div>
        </section>
    );
}