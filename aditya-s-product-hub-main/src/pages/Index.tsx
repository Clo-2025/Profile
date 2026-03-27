import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectRow from "@/components/ProjectRow";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import JoinTeamSection from "@/components/JoinTeamSection";
import ContactSection from "@/components/ContactSection";
import { builtProjects, experiments } from "@/data/projects";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <SkillsSection />
    <section className="px-6 md:px-12 lg:px-16 py-20 section-surface-a section-divider">
      <div className="max-w-6xl mx-auto space-y-14">
        <ProjectRow title="BUILT & SHIPPED" projects={builtProjects} />
        <ProjectRow title="EXPERIMENTS" projects={experiments} />
      </div>
    </section>
    <ExperienceSection />
    <JoinTeamSection />
    <ContactSection />
  </div>
);

export default Index;
