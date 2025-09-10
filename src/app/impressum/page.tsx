import {Footer, NavbarSection} from "@/components";

export default function ImpressumPage() {
    const navItems = [
        {name: "Startseite", link: "/"},
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <NavbarSection navItems={navItems} />

            <main className="flex-1 mx-auto md:py-20 flex flex-col md:gap-20 items-center px-10">
                <h1 className="text-3xl font-bold mb-6">Impressum</h1>
                <section className="space-y-3 w-full max-w-2xl">
                    <div><strong>Name:</strong> Filip Stosik</div>
                    <div><strong>Anschrift:</strong> Kortschstr. 13 44319 Dortmund</div>
                    <div><strong>E-Mail:</strong> f.stosik1@gmail.com</div>
                    <div><strong>Verantwortlich für den Inhalt:</strong> Filip Stosik</div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
