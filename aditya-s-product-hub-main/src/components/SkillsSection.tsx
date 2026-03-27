const skillCategories = [
  {
    label: "Product & Growth",
    skills: ["PRD Writing", "User Research", "Roadmapping", "A/B Testing", "Funnel Analysis", "DAU/MAU", "CAC", "LTV", "Stakeholder Management"],
  },
  {
    label: "Analytics",
    skills: ["SQL (MySQL/Postgres)", "Excel", "Python (pandas)", "GA4", "Mixpanel/Amplitude", "Tableau/Power BI"],
  },
  {
    label: "Technical",
    skills: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "AWS", "Docker"],
  },
  {
    label: "Automation & AI",
    skills: ["n8n", "Postman", "Prompt Engineering", "Voice AI (Cartesia, ElevenLabs)"],
  },
];

const SkillsSection = () => (
  <section className="px-6 md:px-12 lg:px-16 py-20 section-surface-b section-divider">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl tracking-wide text-foreground mb-6">WHAT I WORK WITH</h2>
      <div className="netflix-row">
      {skillCategories.map((cat) => (
        <div
          key={cat.label}
          className="min-w-[280px] md:min-w-[320px] p-5 rounded-xl bg-card border border-border flex-shrink-0 scroll-snap-align-start glow-hover"
        >
          <p className="font-display text-xl tracking-wide text-netflix-red mb-3">{cat.label}</p>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span key={skill} className="text-xs px-2.5 py-1 rounded bg-secondary text-secondary-foreground">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  </section>
);

export default SkillsSection;
