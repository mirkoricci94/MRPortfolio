'use client';
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { Rocket } from "@/components/Rocket";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              {language === 'it' ? (
                <>
                  Costruisco <span className="text-primary">esperienze</span> <br />
                  digitali che contano.
                </>
              ) : (
                <>
                  Building digital <br />
                  <span className="text-primary">experiences</span> that matter.
                </>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
              {language === 'it' ? (
                <>
                  Sono Mirko Ricci, un Frontend Developer specializzato in React, Next.js e React Native. Attualmente costruisco il futuro dei servizi di delivery presso <span className="text-primary font-medium">Alfonsino</span>.
                </>
              ) : (
                <>
                  I&apos;m Mirko Ricci, a Frontend Developer specializing in React, Next.js, and React Native. Currently building the future of delivery services at <span className="text-primary font-medium">Alfonsino</span>.
                </>
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <Link
                href="#experience"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 active:scale-95"
              >
                {language === 'it' ? 'Vedi Esperienza' : 'View Experiences'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-border bg-background hover:bg-muted transition-colors"
              >
                {t.cta}
              </Link>
            </div>
          </div>
          
          {/* Rocket Animation */}
          <div className="animate-in fade-in slide-in-from-right-10 duration-1000 delay-500">
            <Rocket />
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-50 animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] opacity-30" />
    </section>
  );
}
