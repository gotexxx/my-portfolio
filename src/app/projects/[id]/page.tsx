import {projects} from "@/app/data/projects";
import Image from "next/image";
import {notFound} from "next/navigation";
import {Footer, NavbarSection, CardContainer, CardBody, CardItem} from "@/components";
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: {
        id: string;
        slug?: any;
    }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const resolvedParams = await params;
    const projectId = parseInt(resolvedParams.id, 10);
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



export default async  function ProjectPage({ params }: { params: { id: string } }) {

    const resolvedParams = await params;
    const projectId = parseInt(resolvedParams.id, 10);
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
        <div className="relative min-h-screen  overflow-hidden">
            <NavbarSection navItems={navItems}/>

            <div className="max-w-6xl mx-auto px-4 pb-20 relative z-10">

                <div className="relative my-16 md:my-24 group">
                    <h1 className={"text-3xl md:text-4xl lg:text-6xl font-bold  text-center pb-10"}>
                        {project.title}
                    </h1>
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={1200}
                        height={720}
                        className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                        priority
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    <div className="md:col-span-2 space-y-12">
                        <section id="description">
                            <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                                <span
                                    className="bg-gradient-to-r from-blue-500 to-cyan-300 w-3 h-3 rounded-full mr-3"></span>
                                Projektbeschreibung
                            </h2>
                            <p className="text-whiteleading-relaxed text-lg">
                                {project.description}
                            </p>
                        </section>

                        <section id="role">
                            <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                                <span
                                    className="bg-gradient-to-r from-emerald-500 to-green-300 w-3 h-3 rounded-full mr-3"></span>
                                Meine Rolle
                            </h2>
                            <p className="text-text-white leading-relaxed text-lg">
                                {project.role}
                            </p>
                        </section>

                        <section id="challenge">
                            <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                                <span
                                    className="bg-gradient-to-r from-amber-500 to-yellow-300 w-3 h-3 rounded-full mr-3"></span>
                                Herausforderung & Lösung
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-800  p-6 rounded-xl border border-white/[0.2] ">
                                    <h3 className="text-xl font-semibold text-rose-400 mb-3">Herausforderung</h3>
                                    <p className="text-white">{project.challenge}</p>
                                </div>
                                <div className="bg-gray-800  p-6 rounded-xl border border-white/[0.2] ">
                                    <h3 className="text-xl font-semibold text-emerald-400 mb-3">Lösung</h3>
                                    <p className="text-white">{project.solution}</p>
                                </div>
                            </div>
                        </section>

                        <section id="core">
                            <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                                <span
                                    className="bg-gradient-to-r from-purple-500 to-fuchsia-300 w-3 h-3 rounded-full mr-3"></span>
                                Kernfunktionen
                            </h2>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {project?.features?.map((feature, index) => (
                                    <li
                                        key={feature}
                                        className="flex items-start bg-gray-800  p-4 rounded-lg border border-white/[0.2] "
                                    >
                                        <span className="text-blue-400 mr-2 text-lg">▹</span>
                                        <span className="text-white">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section id="gallerie">
                            <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                                <span
                                    className="bg-gradient-to-r from-cyan-500 to-sky-300 w-3 h-3 rounded-full mr-3"></span>
                                Galerie
                            </h2>
                            <div className="grid grid-cols-1 gap-6">
                                {project.gallery?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="my-12 flex flex-col gap-6 bg-gray-800 p-6 rounded-xl shadow-lg"
                                    >
                                        <p className="text-xl font-medium text-neutral-300">{item.description}</p>
                                        <div className="w-full overflow-hidden rounded-lg">
                                            <Image
                                                src={item.img}
                                                width={1000}
                                                height={1000}
                                                alt={item.description}
                                                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </section>

                        <section id="findings">
                            <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                                <span
                                    className="bg-gradient-to-r from-violet-500 to-purple-300 w-3 h-3 rounded-full mr-3"></span>
                                Erkenntnisse
                            </h2>
                            <div
                                className="text-white leading-relaxed text-lg bg-gray-800 p-6 rounded-xl border border-white/[0.2] ">
                                {project.learned}
                            </div>
                        </section>
                    </div>

                    <div className="md:col-span-1">
                        <div
                            className="sticky top-32 p-1 rounded-2xl  ">
                            <div className="bg-gray-800 rounded-xl p-6 border border-white/[0.2]  relative">
                                <h3 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/[0.2] ">
                                    Projekt Details
                                </h3>

                                <div className="mb-8">
                                    <h4 className="text-lg font-semibold text-neutral-300 mb-3">
                                        Technologien
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag,index) => (
                                            <span
                                                 key={index}
                                                className="px-3 py-1.5 bg-gray-600 text-neutral-200 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-lg bg-gradient-to-r from-neutral-800 to-gray-900 hover:from-neutral-700  hover:to-gray-850 transition-all duration-300 shadow-lg"
                                    >
                                        Projekt ansehen
                                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}