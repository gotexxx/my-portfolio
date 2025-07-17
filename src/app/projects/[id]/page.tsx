import {projects} from "@/app/data/projects";
import {notFound} from "next/navigation";
import {Footer, NavbarSection, Section, ChallengeSolution, FeaturesList, GalleryItem, Sidebar, } from "@/components";
import {ProjectHeader} from "../../../components/project/projectHeader"
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: Promise<{ id: string; slug?: any }>;
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await params; // Unwrap the Promise
    const projectId = parseInt(id, 10);
    const project = projects.find((p) => p.id === projectId);
    if (!project) {
        return {
            title: "not found",
            description: "not found",
        };
    }
    return {
        title: `${project.title} - Projekt`,
        description: project.description,
    };
}

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
    const { id } = await params;
    const projectId = parseInt(id, 10);
    const project = projects.find((p) => p.id === projectId);
    if (!project) notFound();

    const navItems = [
        {name: "🏠 Startseite", link: "/"},
        {name: "Projektbeschreibung", link: "#description"},
        {name: "Herausforderung", link: "#challenge"},
        {name: "Galerie", link: "#gallerie"},
        {name: "Erkenntnisse", link: "#findings"},
    ];

    return (
        <div className="relative min-h-screen overflow-hidden">
            <NavbarSection navItems={navItems} />

            <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
                <ProjectHeader title={project.title} thumbnail={project.thumbnail} />

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    <div className="md:col-span-2 space-y-12">
                        <Section id="description" title="Projektbeschreibung" color="from-blue-500 to-cyan-300">
                            <p className="text-white leading-relaxed text-lg">{project.description}</p>
                        </Section>

                        <Section id="role" title="Meine Rolle" color="from-emerald-500 to-green-300">
                            <p className="text-text-white leading-relaxed text-lg">{project.role}</p>
                        </Section>

                        <Section id="challenge" title="Herausforderung & Lösung" color="from-amber-500 to-yellow-300">
                            <ChallengeSolution challenge={project.challenge} solution={project.solution} />
                        </Section>

                        <Section id="core" title="Kernfunktionen" color="from-purple-500 to-fuchsia-300">
                            <FeaturesList features={project.features ?? []} />
                        </Section>

                        <Section id="gallerie" title="Galerie" color="from-cyan-500 to-sky-300">
                            {project.gallery.map((item, index) => (
                                // Render the self-animating GalleryItem for each item in the array
                                <GalleryItem key={index} item={item} />
                            ))}
                        </Section>

                        <Section id="findings" title="Erkenntnisse" color="from-violet-500 to-purple-300">
                            <div className="text-white leading-relaxed text-lg bg-gray-800 p-6 rounded-xl border border-white/[0.2]">
                                {project.learned}
                            </div>
                        </Section>
                    </div>

                    <div className="md:col-span-1">
                        <Sidebar tags={project.tags} link={project.link} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}