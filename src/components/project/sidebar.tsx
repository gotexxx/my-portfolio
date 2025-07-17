"use client"
import { motion } from "framer-motion";



export function Sidebar({ tags, link }: { tags: string[]; link: string }) {
    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };


    return (
        <div className="sticky top-32 p-1 rounded-2xl">
            <div className="bg-gray-800 rounded-xl p-6 border border-white/[0.2] relative">
                <h3 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/[0.2]">Projekt Details</h3>
                <div className="mb-8">
                    <h4 className="text-lg font-semibold text-neutral-300 mb-3">Technologien</h4>
                    <motion.div
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <motion.span
                                key={index}
                                // @ts-ignore
                                variants={itemVariants}
                                className="px-3 py-1.5 bg-gray-600 text-neutral-200 rounded-full text-sm font-medium">
                {tag}
              </motion.span>
                        ))}
                    </motion.div>
                </div>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-lg bg-gradient-to-r from-neutral-800 to-gray-900 hover:from-neutral-700 hover:to-gray-850 transition-all duration-300 shadow-lg"
                >
                    Projekt ansehen
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                </a>
            </div>
        </div>
    );
}
