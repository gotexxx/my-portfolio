import {projects} from "@/app/data/projects";
import Image from "next/image";
import {notFound} from "next/navigation";
import {Footer, NavbarSection} from "@/components";
import { FaGithub } from "react-icons/fa"; // Beispiel für ein Icon

export default function ProjectPage({params}: { params: { id: string } }) {
    const projectId = parseInt(params.id, 10);
    const project = projects.find((p) => p.id === projectId);
    if (!project) {
        notFound();
    }

    const navItems = [
        {name: "Startseite", link: "/"},
    ];

    return (
        <div className="relative z-10">
            <NavbarSection navItems={navItems}/>

            <div className="max-w-5xl mx-auto px-4">
                {/* --- Thumbnail & Titel --- */}
                <div className="relative my-20">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={1200}
                        height={720}
                        className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-neutral-700"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"/>
                    <h1 className="absolute bottom-6 left-6 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                        {project.title}
                    </h1>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-semibold text-white mb-4">Projektbeschreibung</h2>
                        <p className="text-neutral-300 leading-relaxed mb-8">{project.description}</p>

                        <h2 className="text-2xl font-semibold text-white mb-4">Meine Rolle</h2>
                        <p className="text-neutral-300 leading-relaxed mb-8">{project.role}</p>

                        <h2 className="text-2xl font-semibold text-white mb-4">Herausforderung & Lösung</h2>
                        <p className="text-neutral-300 leading-relaxed mb-4"><strong className="text-white">Herausforderung:</strong> {project.challenge}</p>
                        <p className="text-neutral-300 leading-relaxed mb-8"><strong className="text-white">Lösung:</strong> {project.solution}</p>

                        <h2 className="text-2xl font-semibold text-white mb-4">Kernfunktionen</h2>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2 mb-8">
                            {project?.features?.map(feature => <li key={feature}>{feature}</li>)}
                        </ul>
                        <h2 className="text-2xl font-semibold text-white mb-4">Galerie</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {project.gallery?.map((img, index) => (
                                <Image
                                    key={index}
                                    src={img}
                                    alt={`${project.title} Screenshot ${index + 1}`}
                                    width={800}
                                    height={600}
                                    className="rounded-lg shadow-lg border border-neutral-700"
                                />
                            ))}
                        </div>

                        <h2 className="text-2xl font-semibold text-white mb-4">Was ich gelernt habe</h2>
                        <div className="prose prose-invert max-w-none text-neutral-300">
                            <p>{project.learned}</p>
                        </div>
                    </div>

                    {/* --- Seitenleiste (rechts) --- */}
                    <div className="md:col-span-1">
                        <div className="sticky top-28 p-6 bg-neutral-900 rounded-2xl border border-neutral-800 shadow-xl">
                            <h3 className="text-xl font-semibold text-white mb-4">Technologien</h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-neutral-800 text-neutral-200 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col space-y-4">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg">
                                    Projekt ansehen
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}