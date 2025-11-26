import { NextResponse } from 'next/server';

const experiences = [
    {
        id: 1,
        role: "Frontend Developer",
        company: "Alfonsino",
        period: "Set 2020 - Presente",
        location: "Caserta · Ibrida",
        description: {
            it: [
                "Sviluppo app mobile e PWA per clienti, rider e ristoranti.",
                "Esperienza con l'integrazione di tecnologie e servizi di terze parti come Sentry, FCM, Google Analytics, Google API, Zendesk, websocket, Facebook Pixel, Redux, Reanimated, RxJS, Mercure. React Native Web e altri.",
                "Responsabile sviluppo web per Rushers srl (powered by Alfonsino S.p.a.).",
                "Creazione di moduli nativi.",
                "Apps profiling con Flipper, Android Studio, Xcode.",
                "Gestione di un'app dalla creazione al rilascio in store (IOS / ANDROID).",
                "Gestione rilasci aggiornamenti app IOS e Android.",
                "Responsabile di progetto, pair programming, code review.",
                "Tutor per studenti universitari durante gli stage e tutor per nuove figure.",
                "Colloqui tecnici durante i processi di selezione di figure Frontend.",
            ],
            en: [
                "Development of mobile apps and PWAs for customers, riders, and restaurants.",
                "Experience integrating third-party technologies and services such as Sentry, FCM, Google Analytics, Google API, Zendesk, websockets, Facebook Pixel, Redux, Reanimated, RxJS, Mercure, React Native Web, and others.",
                "Head of web development for Rushers srl (powered by Alfonsino S.p.a.).",
                "Creation of native modules.",
                "App profiling with Flipper, Android Studio, Xcode.",
                "Management of an app from creation to store release (iOS / Android).",
                "Management of iOS and Android app update releases.",
                "Project manager, pair programming, code review.",
                "Tutor for university students during internships and mentor for new hires.",
                "Technical interviews during the selection process for Frontend figures.",
            ]
        },
        skills: ["React Native", "Next.js", "React JS", "TypeScript", "Redux", "RxJS"],
    },
    {
        id: 2,
        role: "Responsabile dello sviluppo dei progetti web",
        company: "Rushers",
        period: "Apr 2023 - Presente",
        location: "Caserta · Ibrida",
        description: {
            it: [
                "Responsabile dello sviluppo dei progetti web.",
                "Coordinamento del team di sviluppo e gestione delle scadenze.",
            ],
            en: [
                "Head of web project development.",
                "Coordination of the development team and deadline management.",
            ]
        },
        skills: ["Sviluppo Front-end", "Sviluppo Web", "Gestione Team"],
    },
    {
        id: 3,
        role: "Sviluppatore app e siti web",
        company: "Autonomo",
        period: "Gen 2018 - Presente",
        location: "Remoto",
        description: {
            it: [
                "Realizzazione di 60+ siti web e app mobile per piccole/medie imprese.",
                "Studio e applicazione del framework EXPO per utilizzo a scopo professionale (Giugno 2020 - Settembre 2021).",
                "Studio e applicazione del framework REACT NATIVE per utilizzo a scopo professionale (Dicembre 2019 - Presente).",
                "Studio e applicazione del framework LARAVEL (2019 - 2020).",
                "Studio e applicazione del framework Wordpress per utilizzo a scopo professionale (Dicembre 2017 - Presente).",
            ],
            en: [
                "Creation of 60+ websites and mobile apps for small/medium businesses.",
                "Study and application of the EXPO framework for professional use (June 2020 - September 2021).",
                "Study and application of the REACT NATIVE framework for professional use (December 2019 - Present).",
                "Study and application of the LARAVEL framework (2019 - 2020).",
                "Study and application of the Wordpress framework for professional use (December 2017 - Present).",
            ]
        },
        skills: ["Expo", "React Native", "Laravel", "WordPress"],
    },
    {
        id: 4,
        role: "Web Developer",
        company: "ZeroToZero.it",
        period: "Dic 2017 - Gen 2022",
        location: "Caserta, Campania, Italia",
        description: {
            it: [
                "Realizzazione di 50+ siti web per piccole/medie imprese.",
                "Responsabile della supervisione di progetti.",
                "Contatto diretto con clienti per richieste di sviluppo.",
            ],
            en: [
                "Creation of 50+ websites for small/medium businesses.",
                "Responsible for project supervision.",
                "Direct contact with clients for development requests.",
            ]
        },
    },
    {
        id: 5,
        role: "Studente",
        company: "Apple Developer Academy @Unina Federico II",
        period: "Set 2018 - Lug 2019",
        location: "Napoli, Italia",
        description: {
            it: [
                "Apprendimento basato su Challenge Based Learning (CBL).",
                "Incremento delle competenze di lingua Inglese parlato e nello scritto.",
                "Sviluppo Frontend di app native in Swift.",
                "Progetti: REALTA' AUMENTATA E MACHINE LEARNING (Game app IOS con AR), ASILI (App IOS gamification per attività fisica), ADOTTA UN'AIUOLA (App IOS per digitalizzazione adozione aree verdi).",
            ],
            en: [
                "Learning based on Challenge Based Learning (CBL).",
                "Improvement of spoken and written English skills.",
                "Frontend development of native apps in Swift.",
                "Projects: AUGMENTED REALITY AND MACHINE LEARNING (iOS game app with AR), ASILI (iOS gamification app for physical activity), ADOPT A FLOWERBED (iOS app for digitizing green area adoption).",
            ]
        },
        skills: ["Swift", "iOS Development", "ARKit", "Machine Learning"],
    },
    {
        id: 6,
        role: "Frontend Developer",
        company: "A contratto",
        period: "Set 2018 - Giu 2019",
        location: "Napoli · In sede",
        description: {
            it: [
                "Sviluppo frontend e UX design.",
                "Collaborazione con il team per la realizzazione di interfacce utente intuitive.",
            ],
            en: [
                "Frontend development and UX design.",
                "Collaboration with the team to create intuitive user interfaces.",
            ]
        },
        skills: ["UX Design", "Team Management"],
    },
];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'it'; // Default to Italian

    const localizedExperiences = experiences.map(exp => ({
        ...exp,
        description: exp.description[lang as keyof typeof exp.description] || exp.description.it
    }));

    return NextResponse.json(localizedExperiences);
}
