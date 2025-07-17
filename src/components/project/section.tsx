"use client"

import { motion, useInView } from "framer-motion";
import {useRef} from "react";




export function Section({ id, title, color, children }: { id: string, title: string, color: string, children: React.ReactNode }) {


    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.01 });

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


    return (
        <motion.section
            ref={ref}
            //@ts-ignore
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{duration: 0.3}}
            id={id}>
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                <span className={`bg-gradient-to-r ${color} w-3 h-3 rounded-full mr-3`} />
                {title}
            </h2>
            {children}
        </motion.section>
    );
}
