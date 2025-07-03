"use client"

import { ColourfulText } from "@/components";

export const  Footer = () => {
    return (
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
    );
}