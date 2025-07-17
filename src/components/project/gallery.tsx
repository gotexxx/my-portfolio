"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export function GalleryItem({ item }: { item: { description: string, img: string } }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    };

    return (
        <motion.div
            ref={ref}
            className="my-12 flex flex-col gap-6 bg-gray-800 p-6 rounded-xl shadow-lg"
            // @ts-ignore
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Animate based on visibility
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
        </motion.div>
    );
}