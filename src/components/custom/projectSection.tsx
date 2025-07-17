"use client";

import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { projects } from "@/app/data/projects";

export const ProjectsSection = () => {
  // This ref is now for the grid container itself
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.1 });

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
      <section id="projects" className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Ausgewählte Projekte</h2>
          <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
            Einige meiner besten Arbeiten, die meine Fähigkeiten und Expertise in der Webentwicklung zeigen.
          </p>
        </div>

        <motion.div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1352px] gap-y-10"
            variants={gridVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
              // @ts-ignore
              <motion.div key={project.id} variants={cardVariants}>
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
                          as={Link}
                          href={`/projects/${project.id}`}
                          className="text-sm text-center md:text-base border bg-gray-700 border-neutral-600 hover:bg-neutral-800 px-1 md:px-3 py-2 rounded-full transition-all"
                      >
                        Mehr erfahren
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
          ))}
        </motion.div>
      </section>
  );
};