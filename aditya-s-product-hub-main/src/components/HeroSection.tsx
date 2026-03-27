import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const INTRO_EMBED_URL = "https://www.loom.com/embed/14c6b526c8004ce8b6d8cbe87fac6cb9";
const RESUME_URL =
  "https://drive.google.com/file/d/1mML7dg0LlgxE7B48hi1PI_9LpZEmXmKj/view?usp=sharing";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <>
      <section
        ref={revealRef}
        className="relative px-6 md:px-12 lg:px-16 pt-14 md:pt-18 pb-14 section-surface-a section-divider reveal"
      >
        {/* subtle hero glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-[-120px] w-[520px] h-[520px] rounded-full bg-netflix-red/10 blur-3xl" />
          <div className="absolute top-16 left-16 w-[420px] h-[420px] rounded-full bg-netflix-red/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: text */}
          <div className="space-y-5">
            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-wider text-foreground leading-none">
              ADITYA MUNDRA
            </h1>
            <p className="text-3xl md:text-4xl text-foreground font-light leading-[1.12] max-w-[34ch]">
              I don't just ship features. I ask why they should exist.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-[62ch]">
              CS undergrad working at the intersection of product, growth, and engineering.
              Experienced in taking ideas from messy requirements to working systems through
              user research, experimentation, and execution.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                variant="netflix"
                size="lg"
                onClick={() => setShowModal(true)}
                className="transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(229,9,20,0.25)]"
              >
                <Play className="w-5 h-5 fill-current" />
                Play Introduction
              </Button>
              <Button variant="netflixOutline" size="lg" asChild>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(229,9,20,0.18)]"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right: visual thumbnail */}
          <div className="lg:justify-self-end w-full max-w-xl">
            <div
              onClick={() => setShowModal(true)}
              className="relative aspect-video rounded-xl overflow-hidden border border-border bg-card cursor-pointer glow-hover"
            >
              <iframe
                className="absolute inset-0 h-full w-full pointer-events-none"
                src={INTRO_EMBED_URL}
                title="Introduction video (preview)"
                allow="fullscreen; picture-in-picture"
              />
              {/* integration overlay: slight blur + dark tint for premium blend */}
              <div className="absolute inset-0 backdrop-blur-[2px] bg-background/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/15 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-background/70 border border-border flex items-center justify-center">
                  <Play className="w-7 h-7 text-netflix-red fill-current ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-foreground">Introduction</p>
                  <p className="text-xs text-muted-foreground">Click to play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video bg-card rounded-lg overflow-hidden border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 z-10 p-1 rounded-full bg-background/80 text-foreground hover:bg-background"
              aria-label="Close video"
            >
              <span className="sr-only">Close</span>
            </button>
            <iframe
              className="h-full w-full"
              src={INTRO_EMBED_URL}
              title="Introduction video"
              allow="fullscreen; picture-in-picture"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
