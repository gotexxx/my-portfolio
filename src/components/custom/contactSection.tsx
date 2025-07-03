import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BackgroundBeams } from "@/components";

export const ContactSection = () => {
    return (
        <section id="contact" className="relative py-12 overflow-hidden w-full">
            <div className="relative z-10 p-8 md:p-16 text-center">
                <h2 className="text-4xl font-bold mb-4">Kontakt aufnehmen</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto text-neutral-200">
                    Interessiert an einer Zusammenarbeit? Ich bin immer offen für neue Möglichkeiten und Herausforderungen. Lassen Sie
                    uns in Kontakt treten!
                </p>
                <div className="flex justify-center gap-6 mb-8">
                    <a
                        href="https://github.com/gotexxx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-black/50 border border-neutral-700 hover:bg-blue-500 hover:border-blue-500 transition-all"
                    >
                        <FaGithub size={24} />
                    </a>
                    {/*<a*/}
                    {/*    href="https://linkedin.com"*/}
                    {/*    target="_blank"*/}
                    {/*    rel="noopener noreferrer"*/}
                    {/*    className="p-4 rounded-full bg-black/50 border border-neutral-700 hover:bg-blue-500 hover:border-blue-500 transition-all"*/}
                    {/*>*/}
                    {/*    <FaLinkedin size={24} />*/}
                    {/*</a>*/}
                    <a
                        href="mailto:f.stosik1@gmail.com"
                        className="p-4 rounded-full bg-black/50 border border-neutral-700 hover:bg-blue-500 hover:border-blue-500 transition-all"
                    >
                        <FaEnvelope size={24} />
                    </a>
                </div>
            </div>
            <BackgroundBeams />
        </section>
    );
}