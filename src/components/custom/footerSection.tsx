export const Footer = () => {
    return (
        <footer className="py-8 text-center border-t border-neutral-900">
            <div className="max-w-6xl mx-auto space-y-2">
                <div className="mb-2 text-xl font-bold">Filip Stosik</div>
                <p className="text-sm text-neutral-500">
                    © {new Date().getFullYear()} Mein Portfolio. Alle Rechte vorbehalten.
                </p>
                <nav className="flex justify-center gap-6 text-sm text-neutral-400">
                    <a href="/impressum" className="hover:underline">
                        Impressum
                    </a>
                    <a href="/datenschutz" className="hover:underline">
                        Datenschutzerklärung
                    </a>
                </nav>
            </div>
        </footer>
    );
};
