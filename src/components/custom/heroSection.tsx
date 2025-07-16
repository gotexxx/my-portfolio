"use client"

import {TypewriterEffect} from "@/components";
import {FaFileDownload} from "react-icons/fa";
import {motion} from "motion/react";
import Image from "next/image";

export const HeroSection = () => {
    const words = [
        {text: " Hi,"},
        {text: "ich"},
        {text: "heiße"},
        {text: "Filip,"},
        {text: "willkommen "},
        {text: "auf "},
        {text: "meinem "},
        {text: "Portfolio!"},
    ];

    return (
        <section id="about" className="pt-10  relative">
            <motion.div
                animate={{
                    opacity: 1,
                    // @ts-ignore
                    "@initial": {opacity: 0},
                    "@exit": {opacity: 0}
                }}
                transition={{duration: 0.3}}
                className="grid grid-cols-1   items-center gap-12">

                <div className="flex justify-center items-center order-first md:order-none">
                    <div className="relative group">
                        <div
                            className="border-8 border-gray-800 rounded-full p-5 hover-glow-animation"
                        >
                            <Image
                                src="/me.png"
                                alt="International Formation Center, Madrid"
                                width={230}
                                height={230}
                                className="rounded-full z-[10001]"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 z-100">
                    <div className=" w-full h-[80px] md:w-[610px] lg:h-[160px]">
                        <div className="w-full h-full">
                            <TypewriterEffect
                                className="w-full text-2xl sm:text-3xl md:text-4xl"
                                words={words}
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="/Lebenslauf Filip Stosik.pdf"
                            download
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-500/30"
                        >
                            <FaFileDownload /> Lebenslauf
                        </a>
                        <a
                            href="#contact"
                            className="border border-neutral-600 hover:bg-neutral-800 px-6 py-3 rounded-full transition-all"
                        >
                            Kontaktieren Sie mich
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}