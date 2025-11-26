import { NextResponse } from 'next/server';

const works = [
    {
        id: 1,
        title: "Alfonsino S.P.A. - Delivery Super App",
        description: {
            it: "Un'applicazione di delivery completa che connette utenti con attività locali. Funzionalità di tracciamento in tempo reale, pagamenti sicuri e un'esperienza di ordine fluida.",
            en: "A comprehensive delivery application connecting users with local businesses. Features real-time tracking, secure payments, and a seamless ordering experience."
        },
        tags: ["React Native", "React", "Next.js", "TypeScript", "Redux"],
        image: "",
        demoUrl: "https://alfonsino.delivery",
        repoUrl: "",
    },
    {
        id: 2,
        title: "Rushers Srl",
        description: {
            it: "Piattaforma di gestione logistica per flotte di consegna. Ottimizza i percorsi, gestisce i turni dei driver e fornisce analisi dettagliate per l'efficienza operativa.",
            en: "Logistics management platform for delivery fleets. Optimizes routes, manages driver schedules, and provides detailed analytics for operational efficiency."
        },
        tags: ["Delivery Logistics", "React Native", "TypeScript", "Redux"],
        image: "",
        demoUrl: "https://rushers.io",
        repoUrl: "",
    },
    {
        id: 3,
        title: "Nebula Dashboard",
        description: {
            it: "Una dashboard analitica ad alte prestazioni per visualizzare set di dati complessi. Include grafici interattivi, aggiornamenti in tempo reale e widget personalizzabili.",
            en: "A high-performance analytics dashboard for visualizing complex data sets. Includes interactive charts, real-time updates, and customizable widgets."
        },
        tags: ["React", "D3.js", "TypeScript", "Tailwind CSS"],
        image: "",
        demoUrl: "https://example.com/nebula",
        repoUrl: "https://github.com/example/nebula",
    },
    {
        id: 4,
        title: "Cosmic Chat",
        description: {
            it: "Applicazione di messaggistica in tempo reale con crittografia end-to-end. Supporta chat di gruppo, condivisione di file e messaggi vocali.",
            en: "Real-time messaging application with end-to-end encryption. Supports group chats, file sharing, and voice messages."
        },
        tags: ["Next.js", "Socket.io", "Node.js", "MongoDB"],
        image: "",
        demoUrl: "https://example.com/cosmic",
        repoUrl: "https://github.com/example/cosmic",
    },
    {
        id: 5,
        title: "Stellar E-commerce",
        description: {
            it: "Piattaforma e-commerce moderna con focus sull'esperienza utente. Include filtri prodotti, gestione carrello e checkout sicuro.",
            en: "Modern e-commerce platform with a focus on user experience. Features include product filtering, cart management, and secure checkout."
        },
        tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
        image: "",
        demoUrl: "https://example.com/stellar",
        repoUrl: "https://github.com/example/stellar",
    },
    {
        id: 6,
        title: "Orbit Task Manager",
        description: {
            it: "Strumento di produttività per gestire task e progetti. Offre board drag-and-drop, promemoria scadenze e funzionalità di collaborazione in team.",
            en: "Productivity tool for managing tasks and projects. Offers drag-and-drop boards, deadline reminders, and team collaboration features."
        },
        tags: ["React", "Redux Toolkit", "Firebase", "Material UI"],
        image: "",
        demoUrl: "https://example.com/orbit",
        repoUrl: "https://github.com/example/orbit",
    },
    {
        id: 7,
        title: "Galaxy Weather",
        description: {
            it: "Bellissima applicazione meteo che fornisce previsioni accurate e allerte meteo. Utilizza geolocalizzazione e mappe interattive.",
            en: "Beautiful weather application providing accurate forecasts and severe weather alerts. Uses geolocation and interactive maps."
        },
        tags: ["React Native", "Expo", "OpenWeatherMap API"],
        image: "",
        demoUrl: "https://example.com/galaxy",
        repoUrl: "https://github.com/example/galaxy",
    },
    {
        id: 8,
        title: "Void Music Player",
        description: {
            it: "Player musicale web-based con un'interfaccia elegante. Supporta creazione playlist, visualizzazione audio e riproduzione in background.",
            en: "Web-based music player with a sleek interface. Supports playlist creation, audio visualization, and background playback."
        },
        tags: ["Vue.js", "Web Audio API", "Tailwind CSS"],
        image: "",
        demoUrl: "https://example.com/void",
        repoUrl: "https://github.com/example/void",
    },
    {
        id: 9,
        title: "Quantum Finance",
        description: {
            it: "Tracker di finanza personale per budget e monitoraggio spese. Visualizza abitudini di spesa e aiuta gli utenti a risparmiare.",
            en: "Personal finance tracker for budgeting and expense monitoring. Visualizes spending habits and helps users save money."
        },
        tags: ["Angular", "RxJS", "Chart.js", "NestJS"],
        image: "",
        demoUrl: "https://example.com/quantum",
        repoUrl: "https://github.com/example/quantum",
    },
];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'it'; // Default to Italian

    const localizedWorks = works.map(work => ({
        ...work,
        description: work.description[lang as keyof typeof work.description] || work.description.it
    }));

    return NextResponse.json(localizedWorks);
}
