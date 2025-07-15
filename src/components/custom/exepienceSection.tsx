"use client";

import Image from "next/image";
import { Timeline } from "@/components";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {useRef} from "react";


export const ExperienceSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.0010});

    const experienceData = [
        {
            title: "2022 - 2025",
            content: (
                <div>
                    <p className="text-2xl">Ausbildung zum Fachinformatiker für Anwendungsentwicklung</p>
                    <Link
                        href="https://alphanauten.de/"
                        target="_blank"
                        className="text-xl mb-8 text-gray-300 hover:underline"
                    >
                        <span className="text-base pr-1">bei</span> Alphanauten GmbH & Co. KG 🚀
                    </Link>
                    <p className="mb-8">
                        Schwerpunkt moderne Webentwicklung mit React, Next.js, Tailwind CSS, Shopware, Strapi und Neos
                        CMS. Entwicklung klassischer Websites sowie Headless- und E-Commerce-Lösungen. Praktische
                        Erfahrung mit REST APIs, komponentenbasierter Entwicklung, Deployment und agilem Arbeiten.
                    </p>
                    <div>
                        <Image
                            src="/experience/alphanauten.png"
                            alt="Alphanauten GmbH & Co. KG."
                            width={300}
                            height={300}
                            className="object-contain min-w-0 rounded-tr-lg rounded-bl-lg h-[269px]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className="text-xl">Auslandspraktikum (remote)</p>
                    <Link
                        href="https://www.ifcenter.de/"
                        target="_blank"
                        className="text-xl mb-8 text-gray-300 hover:underline"
                    >
                        <span className="text-base pr-1">bei</span> International Formation Center, Madrid ⚽🍷🌞
                    </Link>
                    <p className="mb-8">
                        Entwicklung einer interaktiven Lern-App mit Kotlin für Android. Erste Erfahrungen in
                        App-Entwicklung, UI-Design, Navigation und strukturierter Inhaltsdarstellung.
                    </p>
                    <div>
                        <Image
                            src="/experience/international.png"
                            alt="International Formation Center, Madrid"
                            width={300}
                            height={300}
                            className="w-[500px] object-contain min-w-0 rounded-tr-lg rounded-bl-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2019 - 2020",
            content: (
                <div>
                    <p className="text-xl">Schulpraktikum</p>
                    <Link
                        href="https://kerf.de/"
                        target="_blank"
                        className="text-xl mb-8 text-gray-300 hover:underline"
                    >
                        <span className="text-base pr-1">bei</span> Kerf 🕷🕸
                    </Link>
                    <p className="mb-8">
                        Pflege von Produkt- und Tierdaten und Kennenlernen der Abläufe im Onlinehandel. Weckte mein
                        Interesse an digitaler Produktverwaltung und Online-Shops.
                    </p>
                    <div>
                        <Image
                            src="/experience/kerf.png"
                            alt="Kerf"
                            width={300}
                            height={250}
                            className="h-[270px] object-contain min-w-0 rounded-tr-lg rounded-bl-lg bg-white w-fit"
                        />
                    </div>
                </div>
            ),
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
        exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    };

    return (
        <AnimatePresence>
            <motion.section
                ref={ref}
                animate={isInView ? "visible" : "hidden"}
                // @ts-ignore
                variants={containerVariants}
                initial="hidden"
                exit="exit"
                id="experience"
                className="py-12"
            >
                <motion.div
                    // @ts-ignore
                    variants={itemVariants}
                    className="text-center mb-16">
                    <motion.h2
                        // @ts-ignore
                        variants={itemVariants} className="text-4xl font-bold">
                        Berufserfahrung
                    </motion.h2>
                    <motion.p
                        // @ts-ignore
                        variants={itemVariants}
                        className="mt-3 text-neutral-400 max-w-2xl mx-auto"
                    >
                        Meine berufliche Reise durch innovative Unternehmen, bei denen ich zu spannenden Projekten
                        beigetragen und meine Fähigkeiten verfeinert habe.
                    </motion.p>
                </motion.div>
                <motion.div
                    // @ts-ignore
                    variants={itemVariants}>
                    <Timeline data={experienceData} />
                </motion.div>
            </motion.section>
        </AnimatePresence>
    );
};