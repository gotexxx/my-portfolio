"use client";

import {FaGithub, FaEnvelope} from "react-icons/fa";
import {BackgroundBeams} from "@/components";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {useRef} from "react";

export const ContactSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1});

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
        exit: {opacity: 0, transition: {duration: 0.3, ease: "easeIn"}},
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20, scale: 0.95},
        visible: {opacity: 1, y: 0, scale: 1, transition: {duration: 0.4, ease: "easeOut"}},
    };

    const iconVariants = {
        hidden: {opacity: 0, scale: 0.8},
        visible: {opacity: 1, scale: 1, transition: {duration: 0.3, ease: "easeOut"}},
        hover: {scale: 1.2, rotate: 5, transition: {duration: 0.2}},
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
                id="contact"
                className="relative py-12 overflow-hidden w-full"
            >
                <motion.div
                    // @ts-ignore
                    variants={itemVariants}
                    className="relative z-10 p-8 md:p-16 text-center">
                    <motion.h2
                        // @ts-ignore
                        variants={itemVariants}
                        className="text-4xl font-bold mb-4">
                        Kontakt aufnehmen
                    </motion.h2>
                    <motion.p
                        // @ts-ignore
                        variants={itemVariants}
                        className="text-lg mb-8 max-w-2xl mx-auto text-neutral-200"
                    >
                        Interessiert an einer Zusammenarbeit? Ich bin immer offen für neue Möglichkeiten und
                        Herausforderungen. Lassen Sie uns in Kontakt treten!
                    </motion.p>
                    <motion.div
                        // @ts-ignore
                        variants={itemVariants}
                        className="flex justify-center gap-6 mb-8">
                        <motion.a
                            href="https://github.com/gotexxx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full bg-black/50 border border-neutral-700 hover:bg-blue-500 hover:border-blue-500 transition-all"
                            // @ts-ignore
                            variants={iconVariants}
                            whileHover="hover"
                        >
                            <FaGithub size={24}/>
                        </motion.a>
                        <motion.a
                            href="mailto:f.stosik1@gmail.com"
                            className="p-4 rounded-full bg-black/50 border border-neutral-700 hover:bg-blue-500 hover:border-blue-500 transition-all"
                            // @ts-ignore
                            variants={iconVariants}
                            whileHover="hover"
                        >
                            <FaEnvelope size={24}/>
                        </motion.a>
                    </motion.div>
                </motion.div>
                <BackgroundBeams/>
            </motion.section>
        </AnimatePresence>
    );
};