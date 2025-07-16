export const projects = [
    {
        "id": 1,
        "title": "Mkm",
        "description": "Für die Kanzlei MKM wurde eine moderne Website mit Fokus auf klarer Struktur und responsivem Design entwickelt. Die Seite präsentiert Kanzleiprofil und Rechtsgebiete übersichtlich.",
        "tags": ["Next.js", "Shopware", "Neos"],
        "link": "https://mkm.legal/",
        "githubLink": null,
        "thumbnail": "/project/mkm/hero.png",
        "gallery": [
            {
                "img": "/project/mkm/1.png",
                "description": "Headless-Integration von Shopware mit vollständig angebundenem Warenkorb- und Bestellsystem"
            },
            {
                "img": "/project/mkm/2.png",
                "description": "CMS-basierter Blog mit anpassbaren Beiträgen und strukturierter Darstellung"
            },
            {
                "img": "/project/mkm/3.png",
                "description": "DSGVO-konforme YouTube-Einbindung mit Benutzerzustimmung"
            }
        ],
        "role": "Fullstack-Entwickler",
        "challenge": "Die größte Herausforderung bestand in der Entwicklung eines Headless Shopware-Systems mit Warenkorb- und Produktkaufseiten unter Berücksichtigung der DSGVO-Richtlinien. Zusätzlich musste eine nahtlose Integration zwischen Neos CMS und Shopware implementiert werden. Erhebliche Performance-Probleme mit der Cache-Revalidierung führten zu Systemabstürzen.",
        "solution": "Durch die Implementierung einer benutzerdefinierten Verbindung über die Neos-Schnittstelle sowie die Integration der Shopware API konnte ein funktionierendes Headless-System aufgebaut werden. Die Performance-Probleme wurden durch ein Update von Next.js 13 auf Version 14 gelöst, wobei der App Router und Revalidate Tags für eine stabilere Cache-Handhabung eingesetzt wurden.",
        "features": [
            "Headless Shopware-Integration mit vollständigem Warenkorb- und Bestellsystem",
            "DSGVO-konforme Komponenten für Datenschutzanforderungen",
            "Nahtlose Verbindung zwischen Neos CMS und Shopware API",
            "Anpassung von Shopware-Produkten und -Kategorien für die Headless-API",
            "Implementierung von Canonicals und Structured Data für Blog, FAQ und weitere Inhalte"
        ],
        "learned": "Dieses Projekt hat mein Wissen über DSGVO-konforme Webentwicklung erheblich erweitert. Ich konnte meine Expertise in der Entwicklung von Headless Shopware-Systemen vertiefen und wichtige Erfahrungen in der API-Integration sammeln. Die Herausforderungen bei der Cache-Revalidierung haben mein Verständnis für Next.js-Performance-Optimierung deutlich verbessert, insbesondere im Kontext des Übergangs von Next.js 13 zum App Router in Version 14."
    },
    {
        "id": 2,
        "title": "Klima Unna",
        "description": "Diese Plattform informiert Bürgerinnen und Bürger über Klimaschutzmaßnahmen in Unna. Sie bietet interaktive Inhalte, Projektübersichten und Beteiligungsmöglichkeiten, alles optimiert für Desktop und mobile Geräte.",
        "tags": ["Next.js", "TypeScript", "Strapi"],
        "link": "https://klima-unna.de/",
        "githubLink": null,
        "thumbnail": "/project/klima/hero.png",
        "gallery": [
            {
                "img": "/project/klima/1.png",
                "description": "Interaktive Karte mit Projektmarkern basierend auf React Leaflet"
            },
            {
                "img": "/project/klima/2.png",
                "description": "Projektübersicht mit integrierter Vorlesefunktion für Barrierefreiheit"
            },
            {
                "img": "/project/klima/3.png",
                "description": "Formular zur Einreichung neuer Klimaschutzprojekte durch Nutzer:innen"
            }
        ],
        "role": "Fullstack-Entwickler",
        "challenge": "Die Hauptherausforderungen lagen in der Instabilität der lokalen Live-Vorschau sowie in CORS-Problemen bei der Verbindung zwischen Frontend und Backend. Zusätzlich musste die Plattform umfassende Barrierefreiheitsstandards erfüllen.",
        "solution": "Durch ein Update von Strapi 4 auf 5 und entsprechende Anpassungen der Projekt-Boilerplate konnte die Live-Vorschau stabilisiert werden. Die CORS-Problematik wurde durch eine angepasste NGINX-Konfiguration gelöst. Für die Barrierefreiheit wurden umfassende Maßnahmen wie ALT-Tags, Title-Attribute und Vorlesefunktionen implementiert.",
        "features": [
            "Interaktives Nutzerformular zur Einreichung von Klimaschutzprojekten",
            "Automatisierter E-Mail-Versand bei Veröffentlichung von Nutzerprojekten",
            "Integration von React Leaflet für standortbasierte Projektdarstellung mit Entfernungsanzeige",
            "Umfassende Barrierefreiheitsfunktionen inklusive Vorleseoption für Projekte",
            "Responsive Design für optimale Nutzung auf allen Endgeräten"
        ],
        "learned": "Die Arbeit an 'Klima Unna' hat mir die Bedeutung von zugänglichen und interaktiven Inhalten für die Bürgerbeteiligung verdeutlicht. Durch die Anbindung von Strapi als Headless CMS konnte ich flexible und leicht zu verwaltende Inhaltsstrukturen schaffen. Die Implementierung umfassender Barrierefreiheitsfeatures hat mein Bewusstsein für inklusive Webentwicklung geschärft, während die Lösung der CORS-Probleme meine Fähigkeiten in der Serverkonfiguration verbessert hat."
    },
    {
        "id": 3,
        "title": "Lebenszentrum Königsborn",
        "description": "Die Website des Lebenszentrums stellt medizinische Angebote und Fachbereiche in einer strukturierten Übersicht dar. Sie richtet sich an Patienten und Angehörige und wurde für leichte Bedienbarkeit gestaltet.",
        "tags": ["Next.js", "TypeScript", "Neos"],
        "link": "https://www.lebenszentrum-koenigsborn.de/",
        "githubLink": null,
        "thumbnail": "/project/leben/hero.png",
        "gallery": [
            {
                "img": "/project/leben/1.png",
                "description": "Darstellung des Sozialpädiatrischen Zentrums als Beispiel einer medizinischen Einrichtung"
            },
            {
                "img": "/project/leben/2.png",
                "description": "Informationsseite zum Sozialpädiatrischen Zentrum in Leichter Sprache"
            }
        ],
        "role": "Fullstack-Entwickler & Support",
        "challenge": "Die Hauptaufgabe bestand darin, eine vollständig barrierefreie Website für den Gesundheitsbereich zu entwickeln, die sowohl für Patienten als auch für Angehörige zugänglich und leicht verständlich ist. Besonderes Augenmerk lag auf der Implementierung einer Option für leichte Sprache und einer klaren Struktur für medizinische Informationen.",
        "solution": "Durch die Kombination von Next.js im Frontend und Neos CMS im Backend konnte eine flexible, aber strukturierte Plattform geschaffen werden. Die barrierefreien Komponenten wurden speziell für die Anforderungen des Gesundheitssektors entwickelt und optimiert.",
        "features": [
            "Vollständig barrierefreie Gestaltung nach aktuellen Standards",
            "Option für leichte Sprache zur Verbesserung der Zugänglichkeit",
            "Maßgeschneiderte CMS-Komponenten für medizinische Inhalte",
            "Benutzerfreundliches Kontaktformular",
            "Responsive Design für alle Endgeräte"
        ],
        "learned": "Dieses Projekt hat mein Verständnis für die Anforderungen im Gesundheitswesen geschärft, insbesondere in Bezug auf Barrierefreiheit und eine klare Informationsarchitektur. Die Zusammenarbeit mit medizinischen Fachkräften war entscheidend für den Erfolg. Die regelmäßigen Meetings und die Schulung verschiedener Abteilungen im Umgang mit dem CMS haben mir wertvolle Einblicke in die Kommunikation mit Stakeholdern gegeben und meine Fähigkeiten im Bereich Kundenservice und -schulung weiterentwickelt."
    },
    {
        "id": 4,
        "title": "Intuitech",
        "description": "Intuitech bietet smarte Lösungen für mehr Wohnkomfort von elektrischen Vorhangschienen und innenliegendem Sonnenschutz bis zu Alarmanlagen. Die Website präsentiert Produkte, Rundgänge und Beratung übersichtlich.",
        "tags": ["Next.js", "TypeScript", "Shopware"],
        "link": "https://intuitech.de/",
        "githubLink": null,
        "thumbnail": "/project/intuitech/hero.png",
        "gallery": [
            {
                "img": "/project/intuitech/1.png",
                "description": "Vergleich zweier Bilder per Slider: Beim Bewegen des Reglers wird ein Bild dynamisch durch das andere ersetzt"
            },
            {
                "img": "/project/intuitech/2.png",
                "description": "Produktkatalog im individuell gestalteten Shopware-6-Theme"
            }
        ],

        "role": "Fullstack-Entwickler",
        "challenge": "Die größte Herausforderung bestand in der Performance-Optimierung bei der Verbindung von Shopware mit Neos. Aufgrund der hohen Anzahl an Produkten wurde die maximale Ladezeit regelmäßig überschritten, was zu Leistungsproblemen führte. Zusätzlich musste eine nahtlose E-Commerce-Erfahrung mit barrierefreiem Design geschaffen werden.",
        "solution": "Durch die Implementierung einer Ladebegrenzung, die nur die 30 relevantesten Produkte pro Abfrage lädt, konnte die Performance deutlich verbessert werden. Die Integration erfolgte über eine maßgeschneiderte PHP-basierte Neos-Anwendung. Ein responsives Design und ein angepasstes Shopware 6-Theme sorgten für eine optimale Darstellung auf allen Endgeräten.",
        "features": [
            "Next.js-basierter Warenkorb mit direkter Anbindung an Shopware",
            "Produkthinzufügung aus der Next.js-Website in den Shopware-Warenkorb",
            "Performanceoptimierte Produktdarstellung mit intelligenter Ladebegrenzung",
            "Responsives Design für alle Endgeräte",
            "Barrierefreie Gestaltung für verbesserte Zugänglichkeit"
        ],
        "learned": "Bei 'Intuitech' habe ich gelernt, komplexe technische Produkte verständlich und ansprechend zu präsentieren. Die Herausforderung bestand darin, die Vorteile der Smart-Home-Lösungen in den Vordergrund zu stellen und eine benutzerfreundliche E-Commerce-Erfahrung mit Shopware zu schaffen. Besonders wertvoll waren die Erfahrungen in der Performance-Optimierung bei umfangreichen Produktkatalogen und die Integration verschiedener Systeme für einen nahtlosen Einkaufsprozess."
    },
    {
        "id": 5,
        "title": "Algorithmus-Visualisierung",
        "description": "Eine interaktive Web-App zur Visualisierung von Sortier- und Maze-Suchalgorithmen. Nutzer können eigene Szenarien erstellen und das Verhalten der Algorithmen Schritt für Schritt beobachten.",
        "tags": ["Next.js", "TypeScript", "React"],
        "link": "https://sortinng-algorithms-visualisation.netlify.app",
        "githubLink": "https://github.com/gotexxx/algorithm-visualization",
        "thumbnail": "/project/algo/hero.png",
        "gallery": [
            {
                "img": "/project/algo/1.png",
                "description": "Labyrinthlöser mit visueller Pfadfindung"
            },
            {
                "img": "/project/algo/2.png",
                "description": "Schrittweise Visualisierung des Quicksort-Algorithmus"
            },
            {
                "img": "/project/algo/3.png",
                "description": "Darstellung des Bubblesort-Vorgangs mit animierten Vergleichen"
            }
        ],
        "role": "Einzelentwickler",
        "challenge": "Die größte Herausforderung bestand in der eigenständigen Entwicklung komplexer Algorithmen, insbesondere des Labyrinthlösers und des Labyrintherstellungsprozesses. Die Visualisierung der algorithmischen Prozesse in Echtzeit und die Umsetzung einer intuitiven Benutzeroberfläche stellten weitere Hürden dar.",
        "solution": "Durch intensive Recherche und Experimentieren konnte ich verschiedene Algorithmen implementieren. Bei komplexeren Problemen nutzte ich KI-Unterstützung als Lernhilfe, um Fehler zu identifizieren und Code-Strukturen besser zu verstehen. Die Architektur wurde in React und Next.js mit TypeScript für bessere Wartbarkeit umgesetzt.",
        "features": [
            "Implementierung mehrerer Sortieralgorithmen (Bubblesort, Quicksort, Bogosort, Selectionsort)",
            "Labyrintherstellung mit Depth-First-Algorithmus",
            "Labyrinthlöser mit Breadth-First-Search",
            "Schrittweise Visualisierung aller algorithmischen Prozesse",
            "Einstellbare Parameter für Algorithmen-Performance und Visualisierungsgeschwindigkeit",
            "Benutzerfreundliche Oberfläche mit interaktiven Kontrollelementen"
        ],
        "learned": "Dieses Projekt war eine intensive Auseinandersetzung mit komplexen Algorithmen und deren visueller Darstellung. Ich habe gelernt, wie man abstrakte Prozesse in eine interaktive und verständliche Webanwendung übersetzt, was meine Problemlösungsfähigkeiten erheblich verbessert hat. Die Vorbereitung auf meine Abschlussprüfung durch dieses praktische Projekt hat nicht nur zu einer hervorragenden Note bei meiner Präsentation geführt, sondern auch mein Verständnis für algorithmische Konzepte nachhaltig vertieft. Der Prozess hat mir gezeigt, wie man komplexe Probleme in kleinere, lösbare Teile zerlegt."
    }
];