"use client";

import { Code2, Database, Layout, Smartphone, Terminal, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3",],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    skills: ["React Native", "Expo", "Swift", "iOS", "Android"],
  },

  {
    title: "Tools & DevOps",
    icon: <Wrench className="w-6 h-6 text-primary" />,
    skills: ["Git", "Docker", "VS Code", "Webstorm","Agile","Jira","Trello","Asana","Slack","Figma","Framer Motion"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            My technical toolbelt. I'm constantly learning and exploring new technologies to build better software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
