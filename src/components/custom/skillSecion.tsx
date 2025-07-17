"use client";

import {HoverEffect} from "@/components";
import {motion, AnimatePresence, useInView} from "framer-motion";
import {useRef} from "react";

export const SkillsSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 0.001});

    const groupedSkills = {
        Frontend: [
            {title: "React", icon: "⚛️", description: "Moderne UI-Entwicklung mit Komponenten und Hooks."},
            {title: "Next.js", icon: "⏭️", description: "Full-Stack-Framework für performante React-Anwendungen."},
            {
                title: "TypeScript",
                icon: "🟦",
                description: "Typsicheres JavaScript für bessere Wartbarkeit und Skalierung."
            },
            {
                title: "Tailwind CSS",
                icon: "💨",
                description: "Utility-First-CSS für schnelle und flexible UI-Gestaltung."
            },
        ],
        "Backend & APIs": [
            {
                title: "Node.js",
                icon: "🟢",
                description: "Serverseitige Entwicklung mit JavaScript und hoher Performance."
            },
            {
                title: "Symfony",
                icon: "🎼",
                description: "PHP-Framework für strukturierte und skalierbare Webanwendungen."
            },
            {
                title: "REST & GraphQL",
                icon: "🔌",
                description: "Datenabfrage und -übertragung zwischen Frontend und Backend."
            },
            {
                title: "MySQL",
                icon: "🗄️",
                description: "Relationale Datenbank für strukturierte und performante Datenspeicherung."
            },
        ],
        "CMS & E-Commerce": [
            {
                title: "Strapi",
                icon: "🛠️",
                description: "Headless CMS zur einfachen API-Erstellung und Content-Verwaltung."
            },
            {title: "Neos", icon: "🧠", description: "Content-Management mit Fokus auf Redaktion und Struktur."},
            {title: "Shopware", icon: "🛒", description: "Moderne E-Commerce-Plattform mit API-First-Ansatz."},
            {
                title: "WordPress",
                icon: "📝",
                description: "Weit verbreitetes CMS mit Fokus auf Blogging und einfache Website-Erstellung."
            },
        ],
        Tools: [
            {
                title: "Git",
                icon: "🔧",
                description: "Versionskontrolle für kollaborative und nachvollziehbare Entwicklung."
            },
            {title: "Postman", icon: "📭", description: "Tool zur Entwicklung, Dokumentation und zum Testen von APIs."},
            {
                title: "GitHub Actions",
                icon: "⚙️",
                description: "Automatisierte Workflows für CI/CD direkt in GitHub integriert."
            },
        ],
    };

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2,
                ease: "easeOut",
                when: "beforeChildren",
            },
        },
        exit: {opacity: 0, transition: {duration: 0.3, ease: "easeIn"}},
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20, scale: 0.95},
        visible: {opacity: 1, y: 0, scale: 1, transition: {duration: 0.4, ease: "easeOut"}},
    };


    return (
        <AnimatePresence>
            <motion.section
                animate={"visible"}
                // @ts-ignore
                variants={containerVariants}
                initial="hidden"
                exit="exit"
                id="skills"
                className="py-12 z-100"
            >
                <motion.div
                    // @ts-ignore
                    variants={itemVariants}
                    className="text-center mb-16">
                    <h2
                        className="text-4xl font-bold mb-4">Meine Fähigkeiten</h2>
                    <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
                        Eine Auswahl meiner technischen Fähigkeiten und Werkzeuge, die ich nutze, um Ideen zum Leben zu
                        erwecken.
                    </p>
                </motion.div>
                <motion.div
                ref={ref}
                    // @ts-ignore
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{duration: 0.3}}
                >
                {Object.entries(groupedSkills).map(([category, items]) => (
                    <motion.div
                        key={category}
                        // @ts-ignore
                        variants={itemVariants}
                        className="max-w-6xl mx-auto">
                        <h3 className="text-2xl font-semibold mb-4 text-center">{category}</h3>
                        <HoverEffect items={items}/>
                    </motion.div>
                ))}
                </motion.div>
            </motion.section>
        </AnimatePresence>
    );
};