import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
              MR<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Mirko Ricci. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/mirko-ricci-032935165/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
