"use client";

import Image from "next/image";
import {
  ColourfulText,
  HoverEffect,
  TypewriterEffect,
  StickyScroll,
  BackgroundGradient,
  FloatingNav,
  AnimatedTooltip,
  BackgroundBeams,
  CardBody,
  CardContainer,
  CardItem,
  PointerHighlight,
  Meteors, BackgroundBeamsWithCollision,
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );
  }

  const skills = [
    {
      title: "React",
      icon: "⚛️",
      description: "Moderne UI-Entwicklung mit Komponenten und Hooks."
    },
    {
      title: "Next.js",
      icon: "⏭️",
      description: "Full-Stack-Framework für performante React-Anwendungen."
    },
    {
      title: "TypeScript",
      icon: "🟦",
      description: "Typsicheres JavaScript für bessere Wartbarkeit und Skalierung."
    },
    {
      title: "Node.js",
      icon: "🟢",
      description: "Serverseitige Entwicklung mit JavaScript und hoher Performance."
    },
    {
      title: "Tailwind CSS",
      icon: "💨",
      description: "Utility-First-CSS für schnelle und flexible UI-Gestaltung."
    },
    {
      title: "Strapi",
      icon: "🛠️",
      description: "Headless CMS zur einfachen API-Erstellung und Content-Verwaltung."
    },
    {
      title: "Shopware",
      icon: "🛒",
      description: "Moderne E-Commerce-Plattform mit API-First-Ansatz."
    },
    {
      title: "Symfony",
      icon: "🎼",
      description: "PHP-Framework für strukturierte und skalierbare Webanwendungen."
    },
    {
      title: "Neos",
      icon: "🧠",
      description: "Content-Management mit Fokus auf Redaktion und Struktur."
    },
  ];


  const people = [
    {
      id: 1,
      name: "Filip Stosik",
      designation: "Full-Stack-Entwickler",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce-Plattform",
      description: "Ein vollständiger Online-Shop mit Warenkorbfunktion und Zahlungsabwicklung.",
      tags: ["Next.js", "Shopware", "Neos"],
      link: "https://mkm.legal/",
      thumbnail: "/img.png",
    },
    {
      id: 2,
      title: "Aufgabenverwaltungs-App",
      description: "Ein kollaborativer Aufgabenmanager mit Echtzeit-Updates.",
      tags: ["Next.js", "Strapi"],
      link: "https://klima-unna.de/",
      thumbnail: "/img_1.png",
    },
    {
      id: 3,
      title: "KI-Bildgenerator",
      description: "Generieren Sie benutzerdefinierte Bilder mit KI-Prompts und speichern Sie diese.",
      tags: ["Next.js", "Neos"],
      link: "https://www.lebenszentrum-koenigsborn.de/",
      thumbnail: "/img_2.png",
    },
  ];

  const words = [
    { text: "Entwickeln" },
    { text: "beeindruckende" },
    { text: "digitale", className: "text-blue-500" },
    { text: "Erfahrungen." },
  ];

  const experienceContent = [
    {
      title: "Senior Frontend-Entwickler",
      company: "Tech Innovations GmbH",
      period: "2021 - Heute",
      description: "Leitung der Entwicklung einer SaaS-Plattform mit über 10.000 Kunden. Implementierung von Leistungsoptimierungen, die die Ladezeiten um 40% verbesserten und die Bundle-Größe um 35% reduzierten. Betreuung von Junior-Entwicklern und Etablierung von Frontend-Best Practices.",
      content: (
          <div className="h-full w-full flex items-center justify-center text-white">
            <Image
                src="/images/experience1.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="Tech Innovations"
            />
          </div>
      ),
    },
    {
      title: "Full-Stack-Entwickler",
      company: "Digital Solutions AG",
      period: "2019 - 2021",
      description: "Entwicklung und Wartung mehrerer Kunden-Websites und Webanwendungen. Erstellung eines benutzerdefinierten CMS, das die Aktualisierungszeit von Inhalten um 60% reduzierte. Integration von Drittanbieter-APIs und Implementierung von CI/CD-Pipelines für automatisierte Bereitstellungen.",
      content: (
          <div className="h-full w-full flex items-center justify-center text-white">
            <Image
                src="/images/experience2.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="Digital Solutions"
            />
          </div>
      ),
    },
    {
      title: "Webentwickler",
      company: "Kreativ Agentur",
      period: "2017 - 2019",
      description: "Erstellung responsiver Websites für verschiedene Kunden aus unterschiedlichen Branchen. Zusammenarbeit mit Designern für pixelgenaue UI-Implementierungen. Optimierung von Websites für Leistung und SEO, was zu 25% schnelleren Ladezeiten führte.",
      content: (
          <div className="h-full w-full flex items-center justify-center text-white">
            <Image
                src="/images/experience3.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="Kreativ Agentur"
            />
          </div>
      ),
    },
  ];

  const navItems = [
    { name: "Über mich", link: "#about" },
    { name: "Projekte", link: "#projects" },
    { name: "Fähigkeiten", link: "#skills" },
    { name: "Erfahrung", link: "#experience" },
    { name: "Kontakt", link: "#contact" },
  ];

  return (
      <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <div className="relative z-10">

          {/* --- Navbar ---*/}
          <Navbar className={" h-10 z-1000 w-fit mx-auto pt-10 "}>
            {/* Desktop Navigation */}
            <NavBody className=" bg-gray-600/80 items-center h-10 w-fit px-10 fixed mx-auto left-1/2  transform -translate-x-1/2 ">
              <NavItems  items={navItems} />
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav className="bg-gray-600/80  h-10 z-1000 w-fit mx-0 fixed ">
              <MobileNavHeader className="px-4 w-fit">
                <MobileNavToggle
                    isOpen={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </MobileNavHeader>

              <MobileNavMenu
                  isOpen={isMobileMenuOpen}
                  onClose={() => setIsMobileMenuOpen(false)}
                  className="w-fit"
              >
                {navItems.map((item, idx) => (
                    <a
                        key={`mobile-link-${idx}`}
                        href={item.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="relative text-neutral-600 dark:text-neutral-300"
                    >
                      <span className="block">{item.name}</span>
                    </a>
                ))}

              </MobileNavMenu>
            </MobileNav>
          </Navbar>

          <main className="mx-auto py-20 flex flex-col gap-20 items-center px-10">
            {/* --- Hero Section --- */}
            <section id="about" className="pt-24 md:pt-32 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div className="flex flex-col gap-6 z-100">
                  <TypewriterEffect words={words} className="text-3xl md:text-4xl max-w-[600px] h-[144px]" />
                  <h1 className="text-5xl md:text-6xl font-bold">
                    Hallo, ich bin <ColourfulText text={"Filip "}/> 👋
                  </h1>
                  <p className="text-lg text-neutral-300 leading-relaxed max-w-xl">
                    Ich bin ein leidenschaftlicher Full-Stack-Entwickler, spezialisiert auf die Erstellung sauberer, leistungsstarker Webanwendungen. Mit über 5 Jahren Erfahrung bin ich Experte für React-Ökosysteme und moderne JavaScript-Frameworks.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <a href="/resume.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-500/30">
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
                      <div className={"mt-10"}>test</div>
                    </BackgroundGradient>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-neutral-800" />

            {/* --- Skills Section --- */}
            <section id="skills" className="py-12 z-100">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold">Meine Fähigkeiten</h2>
                <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">Eine Auswahl meiner technischen Fähigkeiten und Werkzeuge, die ich nutze, um Ideen zum Leben zu erwecken.</p>
              </div>
              <div className="max-w-6xl mx-auto">
                <HoverEffect items={skills.map(skill => ({...skill}))} />
              </div>
            </section>

            <hr className="border-neutral-800" />

            {/* --- Projects Section --- */}
            <section id="projects" className="py-12">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold">Ausgewählte Projekte</h2>
                <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
                  Einige meiner besten Arbeiten, die meine Fähigkeiten und Expertise in der Webentwicklung zeigen.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project) => (
                    <CardContainer key={project.id}>
                      <CardBody className="bg-gray-800 relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.2] border-white/[0.2] w-full h-full rounded-xl p-6 border">
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-50">
                          {project.title}
                        </CardItem>
                        <CardItem as="p" translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2">
                          {project.description}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                          <Image
                              src={project.thumbnail}
                              height="1000"
                              width="1000"
                              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                              alt={project.title}
                          />
                        </CardItem>
                        <div className="flex justify-between items-center mt-10">
                          <CardItem translateZ={20} as="div" className="flex gap-2 flex-wrap">
                            {project.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-xs">
                            {tag}
                          </span>
                            ))}
                          </CardItem>
                          <CardItem translateZ={20} as="a" href={project.link} target="_blank" className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold">
                            Ansehen
                          </CardItem>
                        </div>

                      </CardBody>
                    </CardContainer>
                ))}
              </div>
            </section>

            <hr className="border-neutral-500" />

            <section id="experience" className="py-12">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold">Berufserfahrung</h2>
                <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
                  Meine berufliche Reise durch innovative Unternehmen, bei denen ich zu spannenden Projekten beigetragen und meine Fähigkeiten verfeinert habe.
                </p>
              </div>
              <StickyScroll content={experienceContent} />
            </section>

            <hr className="border-neutral-800" />

            {/* --- Contact Section --- */}
            <section id="contact" className="relative py-12 overflow-hidden w-full">
              <div className="relative z-10 p-8 md:p-16 text-center">
                <h2 className="text-4xl font-bold mb-4">Kontakt aufnehmen</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto text-neutral-200">
                  Interessiert an einer Zusammenarbeit? Ich bin immer offen für neue Möglichkeiten und Herausforderungen. Lassen Sie uns in Kontakt treten!
                </p>
                <div className="flex justify-center gap-6 mb-8">
                  <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-full bg-black/50 border border-neutral-700 hover:bg-blue-500 hover:border-blue-500 transition-all"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-full bg-black/50 border border-neutral-700 hover:bg-blue-500 hover:border-blue-500 transition-all"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                      href="mailto:alex@example.com"
                      className="p-4 rounded-full bg-black/50 border border-neutral-700 hover:bg-blue-500 hover:border-blue-500 transition-all"
                  >
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
              <BackgroundBeams />
            </section>

          </main>

          {/* --- Footer --- */}
          <footer className="py-8 text-center border-t border-neutral-900">
            <div className="max-w-6xl mx-auto">
              <div className="mb-2 text-xl font-bold">
                <ColourfulText text={"Filip Stosik"} />
              </div>
              <p className="text-sm text-neutral-500">
                © {new Date().getFullYear()} Mein Portfolio. Alle Rechte vorbehalten.
              </p>
            </div>
          </footer>

        </div>
      </div>
  );
}