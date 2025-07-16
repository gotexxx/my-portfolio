"use client";

import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.01 }); // Trigger when 20% of section is visible

  const projects = [
    {
      id: 1,
      title: "Mkm",
      description:
        "Für die Kanzlei MKM wurde eine moderne Website mit Fokus auf klarer Struktur und responsivem Design entwickelt. Die Seite präsentiert Kanzleiprofil und Rechtsgebiete übersichtlich.",
      tags: ["Next.js", "TypeScript", "Shopware", "Neos"],
      link: "https://mkm.legal/",
      thumbnail: "/img_mkm.png",
    },
    {
      id: 2,
      title: "Klima Unna",
      description:
        "Diese Plattform informiert Bürgerinnen und Bürger über Klimaschutzmaßnahmen in Unna. Sie bietet interaktive Inhalte, Projektübersichten und Beteiligungsmöglichkeiten, alles optimiert für Desktop und mobile Geräte.",
      tags: ["Next.js", "TypeScript", "Strapi"],
      link: "https://klima-unna.de/",
      thumbnail: "/img_klima.png",
    },
    {
      id: 3,
      title: "Lebenszentrum Königsborn",
      description:
        "Die Website des Lebenszentrums stellt medizinische Angebote und Fachbereiche in einer strukturierten Übersicht dar. Sie richtet sich an Patienten und Angehörige und wurde für leichte Bedienbarkeit gestaltet.",
      tags: ["Next.js", "TypeScript", "Neos"],
      link: "https://www.lebenszentrum-koenigsborn.de/",
      thumbnail: "/img_leben.png",
    },
    {
      id: 5,
      title: "Intuitech",
      description:
        "Intuitech bietet smarte Lösungen für mehr Wohnkomfort von elektrischen Vorhangschienen und innenliegendem Sonnenschutz bis zu Alarmanlagen. Die Website präsentiert Produkte, Rundgänge und Beratung übersichtlich.",
      tags: ["Next.js", "TypeScript", "Shopware"],
      link: "https://intuitech.de/",
      thumbnail: "/img_intuitech.png",
    },
    {
      id: 4,
      title: "Algorithmus-Visualisierung",
      description:
        "Eine interaktive Web-App zur Visualisierung von Sortier- und Maze-Suchalgorithmen. Nutzer können eigene Szenarien erstellen und das Verhalten der Algorithmen Schritt für Schritt beobachten.",
      tags: ["Next.js", "TypeScript"],
      link: "https://sortinng-algorithms-visualisation.netlify.app/sort",
      thumbnail: "/img_algo.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      <motion.section
        ref={ref}
        // @ts-ignore
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        id="projects"
        className="py-12"
      >
        <motion.div
            // @ts-ignore
            variants={itemVariants} className="text-center mb-16">
          <motion.h2
              // @ts-ignore
              variants={itemVariants} className="text-4xl font-bold">
            Ausgewählte Projekte
          </motion.h2>
          <motion.p
              // @ts-ignore
            variants={itemVariants}
            className="mt-3 text-neutral-400 max-w-2xl mx-auto"
          >
            Einige meiner besten Arbeiten, die meine Fähigkeiten und Expertise in der Webentwicklung zeigen.
          </motion.p>
        </motion.div>
        <motion.div
            // @ts-ignore
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1352px] gap-y-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
                // @ts-ignore
              variants={cardVariants}
              whileHover="hover"
            >
              <CardContainer className="h-full py-0 max-w-[450px]">
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
                        <span
                          key={tag}
                          className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.link}
                      target="_blank"
                      className="border border-neutral-600 hover:bg-neutral-800 px-3 py-2 rounded-full transition-all"
                    >
                      Ansehen
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};