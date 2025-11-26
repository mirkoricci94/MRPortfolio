import { NextResponse } from 'next/server';

const works = [
    {
        id: 1,
        title: "Alfonsino S.P.A. - Delivery Super App",
        description: "",
        tags: ["React Native", "React", "Next.js", "TypeScript", "Redux"],
        image: "",
        demoUrl: "https://alfonsino.delivery",
        repoUrl: "",
    },
    {
        id: 2,
        title: "Rushers Srl",
        description: "",
        tags: ["Delivery Logistics", "React Native", "TypeScript", "Redux"],
        image: "",
        demoUrl: "https://rushers.io",
        repoUrl: "",
    },


];

export async function GET() {
    return NextResponse.json(works);
}
