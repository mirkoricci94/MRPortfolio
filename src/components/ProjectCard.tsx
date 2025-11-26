import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  demoUrl,
  repoUrl,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      {/* Image Placeholder or Real Image */}
      <div className="aspect-video w-full bg-muted/50 overflow-hidden relative">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No Image
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            {repoUrl && (
              <Link
                href={repoUrl}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
            )}
            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>

        <p className="text-muted-foreground mb-6 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
