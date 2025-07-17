"use client"
import {motion, useInView} from "framer-motion";
import {useRef} from "react";


export function ChallengeSolution({ challenge, solution }: { challenge: string, solution: string }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.01 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };



    return (
        <motion.div
            ref={ref}
            //@ts-ignore
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6">
            <motion.div
                //@ts-ignore
                variants={itemVariants}
                className="bg-gray-800 p-6 rounded-xl border border-white/[0.2]">
                <h3 className="text-xl font-semibold text-rose-400 mb-3">Herausforderung</h3>
                <p className="text-white">{challenge}</p>
            </motion.div>
            <motion.div
                //@ts-ignore
                variants={itemVariants} className="bg-gray-800 p-6 rounded-xl border border-white/[0.2]">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Lösung</h3>
                <p className="text-white">{solution}</p>
            </motion.div>
        </motion.div>
    );
}
