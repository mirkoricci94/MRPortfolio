"use client";

import React, { useEffect, useState } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills?: string[];
}

export function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const res = await fetch("/api/experiences");
        if (!res.ok) throw new Error("Failed to fetch experiences");
        const data = await res.json();
        setExperiences(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <section id="experience" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            My journey in software development, from academic foundations to leading complex projects.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background z-10 mt-1.5" />

                {/* Date (Desktop) */}
                <div className="hidden md:block w-1/2 text-right px-8 pt-1">
                  <div className={`flex items-center gap-2 text-muted-foreground ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <Calendar size={14} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="md:w-1/2 pl-8 md:pl-0 md:px-8">
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    
                    {/* Date (Mobile) */}
                    <div className="md:hidden flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <span className="text-xs font-medium">{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-1">{exp.role}</h3>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Briefcase size={14} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-foreground/80 leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.skills && (
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
