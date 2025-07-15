
import {
    NavbarSection,
    HeroSection,
    SkillsSection,
    ProjectsSection,
    ExperienceSection,
    ContactSection,
    Footer,
    MountingWrapper
} from "@/components"
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Filip Stosik  Portfolio",
    description: "Portfolio von Filip Stosik. Entdecken Sie meine Projekte, Fähigkeiten und Berufserfahrung in der Webentwicklung mit React, Next.js und mehr.",
    keywords: "Filip Stosik, Webentwicklung, React, Next.js, TypeScript, Portfolio",
    authors: [{ name: "Filip Stosik" }],
};

export default function Home() {

    const navItems = [
        {name: "Über mich", link: "#about"},
        {name: "Projekte", link: "#projects"},
        {name: "Fähigkeiten", link: "#skills"},
        {name: "Erfahrung", link: "#experience"},
        {name: "Kontakt", link: "#contact"},
    ];

    return (
        <MountingWrapper>
            <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
                <div className="relative z-10">
                    <NavbarSection navItems={navItems}/>
                    <main className="mx-auto md:py-20 flex flex-col md:gap-20 items-center px-10">
                        <HeroSection/>
                        <hr className="border-neutral-800"/>
                        <SkillsSection/>
                        <hr className="border-neutral-800"/>
                        <ProjectsSection/>
                        <hr className="border-neutral-500"/>
                        <ExperienceSection/>
                        <hr className="border-neutral-800"/>
                        <ContactSection/>
                    </main>
                    <Footer/>
                </div>
            </div>
        </MountingWrapper>
    );
}