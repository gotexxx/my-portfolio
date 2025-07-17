"use client"
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

export function FeaturesList({ features }: { features: string[] }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.01 });

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };

    return (
        <motion.ul
            ref={ref}
            variants={listVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{duration: 0.3}}
            className="grid md:grid-cols-2 gap-4"
        >
            {features.map((feature, index) => (
                <motion.li
                    key={index}
                    // @ts-ignore
                    variants={itemVariants}
                    className="flex items-start bg-gray-800 p-4 rounded-lg border border-white/[0.2]"
                >
                    <span className="text-blue-400 mr-2 text-lg">▹</span>
                    <span className="text-white">{feature}</span>
                </motion.li>
            ))}
        </motion.ul>
    );
}