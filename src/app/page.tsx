"use client";

import Image from "next/image";
import {
  ColourfulText,
  HoverEffect,
  TypewriterEffect,
  BackgroundGradient,
  AnimatedTooltip,
  BackgroundBeams,
  CardBody,
  CardContainer,
  CardItem,
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu, Timeline,
} from "@/components";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

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
      image: "/me.png",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Mkm",
      description: "Für die Kanzlei MKM wurde eine moderne Website mit Fokus auf klarer Struktur und responsivem Design entwickelt. Die Seite präsentiert Kanzleiprofil und Rechtsgebiete übersichtlich.",
      tags: ["Next.js", "TypeScript", "Shopware", "Neos"],
      link: "https://mkm.legal/",
      thumbnail: "/img_mkm.png",
    },
    {
      id: 2,
      title: "Klima Unna",
      description: "Diese Plattform informiert Bürgerinnen und Bürger über Klimaschutzmaßnahmen in Unna. Sie bietet interaktive Inhalte, Projektübersichten und Beteiligungsmöglichkeiten, alles optimiert für Desktop und mobile Geräte.",
      tags: ["Next.js", "TypeScript", "Strapi"],
      link: "https://klima-unna.de/",
      thumbnail: "/img_klima.png",
    },
    {
      id: 3,
      title: "Lebenszentrum Königsborn",
      description: "Die Website des Lebenszentrums stellt medizinische Angebote und Fachbereiche in einer strukturierten Übersicht dar. Sie richtet sich an Patienten und Angehörige und wurde für leichte Bedienbarkeit gestaltet.",
      tags: ["Next.js", "TypeScript", "Neos"],
      link: "https://www.lebenszentrum-koenigsborn.de/",
      thumbnail: "/img_leben.png",
    },
    {
      id: 4,
      title: "Algorithmus-Visualisierung",
      description: "Eine interaktive Web-App zur Visualisierung von Sortier- und Maze-Suchalgorithmen. Nutzer können eigene Szenarien erstellen und das Verhalten der Algorithmen Schritt für Schritt beobachten.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://sortinng-algorithms-visualisation.netlify.app/sort",
      thumbnail: "/img_algo.png",
    },
  ];

  const words = [
    { text: "Entwickeln" },
    { text: "beeindruckende" },
    { text: "digitale", className: "text-blue-500" },
    { text: "Erfahrungen." },
  ];

  const experienceData = [
    {
      title: "2022 - 2025",
      content: (
          <div>

            <p className="text-2xl">
              Ausbildung zum Fachinformatiker für Anwendungsentwicklung
            </p>
            <Link href="https://alphanauten.de/" target="_blank" className="text-xl mb-8 text-gray-300 hover:underline">
              <span className="text-base pr-1 ">bei</span> Alphanauten GmbH & Co. KG 🚀
            </Link>
            <p className="mb-8">
              Schwerpunkt moderne Webentwicklung mit React, Next.js, Tailwind CSS, Shopware, Strapi und Neos CMS.
              Entwicklung klassischer Websites sowie Headless- und E-Commerce-Lösungen.
              Praktische Erfahrung mit REST APIs, komponentenbasierter Entwicklung, Deployment und agilem Arbeiten.
            </p>
            <div className="">
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
              <span className="text-base pr-1">bei</span>  International Formation Center, Madrid ⚽🍷🌞
            </Link>
            <p className="mb-8">
              Entwicklung einer interaktiven Lern-App mit Kotlin für Android.
              Erste Erfahrungen in App-Entwicklung, UI-Design, Navigation und strukturierter Inhaltsdarstellung.
            </p>
            <div className="">
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
              <span className="text-base pr-1 ">bei</span>  Kerf  🕷🕸
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
                  className="w-full object-contain min-w-0 rounded-tr-lg rounded-bl-lg "
              />
            </div>
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
            <NavBody className=" bg-gray-600/50 items-center h-10 w-fit px-10 fixed mx-auto left-1/2  transform -translate-x-1/2 ">
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

          <main className="mx-auto md:py-20 flex flex-col md:gap-20 items-center px-10">
            {/* --- Hero Section --- */}
            <section id="about" className="pt-10 md:pt-32 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div className="flex flex-col gap-6 z-100">
                  <TypewriterEffect words={words} className="text-3xl md:text-4xl max-w-[600px] h-[144px]" />
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                    Hi, ich bin <ColourfulText text={"Filip "}/> 👋
                  </h1>
                  <p className="text-lg text-neutral-300 leading-relaxed max-w-xl">
                    Nach meiner Ausbildung zum Fachinformatiker für Anwendungsentwicklung entwickle ich benutzerfreundliche Webanwendungen, gerne im Frontend, aber auch mit Blick aufs Backend.
                    <br/> Ob React, Next.js oder Schnittstellenanbindung, ich lerne stetig dazu und bringe technisches Verständnis und Praxiserfahrung mit.
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
                      <div className={"mt-10"}> Ich programmiere gern coole Web-Apps, besonders CMS-Seiten, und will mich als Frontend- oder Full-Stack-Entwickler richtig reinhauen. Neues lernen und Projekte rocken macht mir Spaß!</div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1352px] gap-y-10">
                {projects.map((project) => (
                    <CardContainer className={"h-full py-0"} key={project.id}>
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
                              className="h-60 w-full object-contain min-w-0 rounded-tr-lg rounded-bl-lg"
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
                          <CardItem translateZ={20} as="a" href={project.link} target="_blank" className="border border-neutral-600 hover:bg-neutral-800 px-3 py-2 rounded-full transition-all">
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
              <Timeline data={experienceData} />
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