import { Briefcase } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const experiences = [
  {
    role: "Product Intern",
    company: "OSVI AI",
    meta: "Bangalore, India • Jan 2026 – April 2026",
    bullets: [
      "Scoped and defined an LLM-powered Agent Builder, creating PRDs, user flows, and success criteria to guide engineering execution",
      "Owned end-to-end agent creation including prompt structuring, voice selection (Cartesia, ElevenLabs), and handling edge cases to improve interaction quality",
      "Acted as a client-facing point of contact, conducting discovery calls and translating business requirements into working agent configurations",
    ],
  },
  {
    role: "Growth Intern",
    company: "Segwise",
    meta: "Bangalore, India • Oct 2025 – Nov 2025",
    bullets: [
      "Conducted user interviews to identify friction points and unmet needs, converting qualitative insights into structured product recommendations",
      "Collaborated across product, success, and marketing teams to refine workflows and improve alignment between user needs and execution",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "NYXify",
    meta: "Bangalore, India (Remote) • June 2025 – August 2025",
    bullets: [
      "Built and shipped responsive user-facing features using React.js and Next.js, integrating backend APIs for functionality",
      "Worked closely with product managers to scope features and contribute to both technical implementation and product decisions",
    ],
  },
];

const ExperienceSection = () => (
  <section className="px-6 md:px-12 lg:px-16 py-16 section-surface-a section-divider">
    <h2 className="text-2xl md:text-3xl tracking-wide text-foreground mb-6">EXPERIENCE</h2>
    <div className="max-w-4xl divide-y divide-border/70">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.company} exp={exp} />
      ))}
    </div>
  </section>
);

export default ExperienceSection;

function ExperienceCard({
  exp,
}: {
  exp: { role: string; company: string; meta: string; bullets: string[] };
}) {
  const revealRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <div ref={revealRef} className="py-7 reveal">
      <div className="p-6 rounded-xl bg-card border border-border shadow-[0_16px_40px_rgba(0,0,0,0.28)] glow-hover">
        <div className="flex items-start gap-3 mb-3">
          <Briefcase className="w-5 h-5 text-netflix-red mt-0.5 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-base md:text-lg font-semibold text-foreground">
              {exp.role} — <span className="text-netflix-red">{exp.company}</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">{exp.meta}</p>
          </div>
        </div>
        <ul className="space-y-2.5 pl-8">
          {exp.bullets.map((b, i) => (
            <li key={i} className="text-sm text-muted-foreground leading-relaxed list-disc">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
