import { useNavigate } from "react-router-dom";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnailSrc?: string;
}

interface ProjectRowProps {
  title: string;
  projects: Project[];
}

const ProjectRow = ({ title, projects }: ProjectRowProps) => {
  const navigate = useNavigate();
  const revealRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <div ref={revealRef} className="reveal">
      <h2 className="text-2xl md:text-3xl tracking-wide text-foreground mb-6">{title}</h2>

      {/* Responsive grid: desktop 2-up, centered and full */}
      <div className="grid sm:grid-cols-2 gap-6 max-w-[1200px] mx-auto sm:[&>*:only-child]:col-span-2 sm:[&>*:only-child]:max-w-[580px] sm:[&>*:only-child]:justify-self-center">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => navigate(`/project/${project.id}`)}
            className="group bg-card rounded-xl border border-border overflow-hidden cursor-pointer glow-hover"
          >
            {/* 16:9 tile */}
            <div className="relative aspect-video bg-secondary">
              {project.thumbnailSrc ? (
                <img
                  src={project.thumbnailSrc}
                  alt={`${project.title} preview`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                {!project.thumbnailSrc ? (
                  <span className="font-display text-6xl tracking-wider text-muted-foreground/25 select-none">
                    {project.title.charAt(0)}
                  </span>
                ) : null}
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 ring-1 ring-netflix-red/30" />
              </div>
            </div>

            <div className="p-4 space-y-2">
              <h3 className="font-display text-xl tracking-wide text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectRow;
