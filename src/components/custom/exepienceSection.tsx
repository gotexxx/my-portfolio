"use client"

import Image from "next/image";
import { Timeline } from "@/components";
import Link from "next/link";

export const ExperienceSection = () => {
    const experienceData = [
        {
            title: "2022 - 2025",
            content: (
                <div>
                    <p className="text-2xl">
                        Ausbildung zum Fachinformatiker für Anwendungsentwicklung
                    </p>
                    <Link href="https://alphanauten.de/" target="_blank" className="text-xl mb-8 text-gray-300 hover:underline">
                        <span className="text-base pr-1">bei</span> Alphanauten GmbH & Co. KG 🚀
                    </Link>
                    <p className="mb-8">
                        Schwerpunkt moderne Webentwicklung mit React, Next.js, Tailwind CSS, Shopware, Strapi und Neos CMS.
                        Entwicklung klassischer Websites sowie Headless- und E-Commerce-Lösungen.
                        Praktische Erfahrung mit REST APIs, komponentenbasierter Entwicklung, Deployment und agilem Arbeiten.
                    </p>
                    <div>
                        <Image
                            src="/experience/alphanauten.png"
                            alt="Alphanauten GmbH & Co. KG."
                            width={300}
                            height={300}
                            className="w-full object-contain min-w-0 rounded-tr-lg rounded-bl-lg h-[269px]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className="text-xl">
                        Auslandspraktikum (remote)
                    </p>
                    <Link href="https://www.ifcenter.de/" target="_blank" className="text-xl mb-8 text-gray-300 hover:underline">
                        <span className="text-base pr-1">bei</span> International Formation Center, Madrid ⚽🍷🌞
                    </Link>
                    <p className="mb-8">
                        Entwicklung einer interaktiven Lern-App mit Kotlin für Android.
                        Erste Erfahrungen in App-Entwicklung, UI-Design, Navigation und strukturierter Inhaltsdarstellung.
                    </p>
                    <div>
                        <Image
                            src="/experience/international.png"
                            alt="International Formation Center, Madrid"
                            width={300}
                            height={300}
                            className="w-full object-contain min-w-0 rounded-tr-lg rounded-bl-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2019 - 2020",
            content: (
                <div>
                    <p className="text-xl">
                        Schulpraktikum
                    </p>
                    <Link href="https://kerf.de/" target="_blank" className="text-xl mb-8 text-gray-300 hover:underline">
                        <span className="text-base pr-1">bei</span> Kerf 🕷🕸
                    </Link>
                    <p className="mb-8">
                        Pflege von Produkt- und Tierdaten und Kennenlernen der Abläufe im Onlinehandel.
                        Weckte meine Interesse an digitaler Produktverwaltung und Online-Shops.
                    </p>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <Image
                            src="/experience/kerf_2.png"
                            alt="Kerf"
                            width={300}
                            height={250}
                            className="h-[270px] w-full object-contain min-w-0 rounded-tr-lg rounded-bl-lg"
                        />
                        <Image
                            src="/experience/kerf.png"
                            alt="Kerf"
                            width={300}
                            height={250}
                            className="w-full object-contain min-w-0 rounded-tr-lg rounded-bl-lg"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section id="experience" className="py-12">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold">Berufserfahrung</h2>
                <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
                    Meine berufliche Reise durch innovative Unternehmen, bei denen ich zu spannenden Projekten beigetragen und meine
                    Fähigkeiten verfeinert habe.
                </p>
            </div>
            <Timeline data={experienceData} />
        </section>
    );
}