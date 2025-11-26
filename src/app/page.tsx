import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <LanguageSwitcher />
        <Hero />
{/*         <SkillsSection />
 */}        <ExperienceSection />
        {/* <ProjectsSection /> */}
        
        {/* Contact Section Placeholder */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              Interested in working together? Let&apos;s talk.
            </p>
            <a
              href="mailto:ricci.mirko94@gmail.com"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105"
            >
              Say Hello
            </a>
          </div>
        </section>
      </main>
    </LanguageProvider>
  );
}
