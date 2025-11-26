import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

interface Work {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  repoUrl: string;
}

export function ProjectsSection() {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();
  const t = translations[language].projects;

  useEffect(() => {
    async function fetchWorks() {
      setLoading(true);
      try {
        const res = await fetch(`/api/works?lang=${language}`);
        if (!res.ok) throw new Error("Failed to fetch works");
        const data = await res.json();
        setWorks(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchWorks();
  }, [language]);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            {t.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            {t.description}
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-[400px] rounded-xl border border-border bg-card animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work) => (
              <ProjectCard
                key={work.id}
                title={work.title}
                description={work.description}
                tags={work.tags}
                image={work.image}
                demoUrl={work.demoUrl}
                repoUrl={work.repoUrl}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
