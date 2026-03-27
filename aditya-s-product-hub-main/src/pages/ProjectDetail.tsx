import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { allProjects } from "@/data/projects";

const sectionLabels = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach" },
  { key: "execution", label: "Execution" },
  { key: "outcome", label: "Outcome" },
  { key: "learnings", label: "Learnings" },
] as const;

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-2xl font-display tracking-wide text-foreground">Project not found</p>
          <Link to="/" className="text-netflix-red hover:underline">← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 lg:px-16 py-4 bg-gradient-to-b from-background to-transparent">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-display text-2xl tracking-widest text-netflix-red">AM</span>
        </Link>
      </nav>

      <div className="pt-24 pb-16 px-6 md:px-12 lg:px-16 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-display tracking-wider text-foreground mb-4">
          {project.title}
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          {project.description}
        </p>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-netflix-red/60 hover:text-netflix-red transition-colors mb-12"
          >
            Visit Project
          </a>
        )}

        <div className="space-y-10">
          {sectionLabels.map(({ key, label }) => (
            <div key={key}>
              <h2 className="font-display text-2xl tracking-wide text-netflix-red mb-3">{label}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
