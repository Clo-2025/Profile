export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  liveUrl?: string;
  thumbnailSrc?: string;
  problem: string;
  approach: string;
  execution: string;
  outcome: string;
  learnings: string;
}

export const allProjects: ProjectDetail[] = [
  {
    id: "gharsure",
    title: "GharSure",
    description:
      "Built a landlord reputation platform aimed at solving tenant deposit risks. Designed a system of verified reviews backed by rental agreements to ensure data authenticity. Introduced quantifiable trust metrics such as average deposit return percentage to help tenants make informed decisions.",
    liveUrl: "https://gharsure-prototype.vercel.app/",
    thumbnailSrc: "/project-thumbs/gharsure.png",
    problem:
      "Tenants in India face widespread deposit fraud with no reliable way to verify a landlord's reputation before signing a lease. Existing review platforms lack verification and are easily gamed.",
    approach:
      "Designed a reputation system where reviews are backed by rental agreements, creating a verified trust layer. Introduced quantifiable metrics like average deposit return percentage.",
    execution:
      "Built the platform with verified review submission flows, document upload for rental agreements, and a scoring algorithm that weighs recency, verification status, and return history.",
    outcome:
      "Created a functional prototype that demonstrated the concept. Early user testing validated that tenants valued verified reviews significantly more than anonymous ones.",
    learnings:
      "Cold-start problem is critical for marketplace trust platforms. Would focus more on supply-side acquisition (landlord onboarding) and consider partnering with property listing sites for initial traction.",
  },
  {
    id: "clo",
    title: "Clo (Thrift Marketplace Experiment)",
    description:
      "Tested the hypothesis of 'trust as a feature' in a thrift marketplace by launching a waitlist instead of building the full product. Used this as a smoke test to validate demand, capture early users, and evaluate whether the idea justified further development.",
    liveUrl: "https://waitlist-zeta-olive.vercel.app/",
    thumbnailSrc: "/project-thumbs/clo.png",
    problem:
      "Thrift marketplaces struggle with trust — buyers can't verify quality, and sellers lack credibility. The question was whether 'trust' alone could be a differentiating feature worth building around.",
    approach:
      "Instead of building a full product, launched a waitlist-first experiment to validate demand. Framed 'trust' as the core value proposition and measured sign-up intent as a proxy for market interest.",
    execution:
      "Created a landing page with clear value proposition, collected emails, and tracked conversion rates. Analyzed sign-up demographics and intent signals to evaluate whether the hypothesis held.",
    outcome:
      "The waitlist validated moderate interest but revealed that trust alone wasn't sufficient — users also needed curation and convenience. The experiment saved months of development on an unvalidated idea.",
    learnings:
      "Smoke tests are powerful but need careful metric design. Sign-up intent doesn't always translate to willingness to pay. Would add a fake-door payment test to measure stronger commitment signals.",
  },
];

export const builtProjects = allProjects.filter((p) => ["gharsure"].includes(p.id));
export const experiments = allProjects.filter((p) => ["clo"].includes(p.id));
