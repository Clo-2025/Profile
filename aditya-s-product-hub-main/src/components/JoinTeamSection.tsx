import { useState } from "react";
import { Play } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const WHY_HIRE_ME_EMBED_URL = "https://www.loom.com/embed/1003cda56e524d3597cc64889a0cd4cf";

const RouteMap = () => (
  <div className="w-full rounded-md bg-secondary/40 border border-border overflow-hidden">
    <div className="px-4 py-3 flex items-center justify-between">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Route</p>
      <p className="text-xs text-muted-foreground">User truth → Edge cases → Validation → Ship</p>
    </div>

    <div className="px-4 pb-4">
      <svg
        viewBox="0 0 720 220"
        className="w-full h-[140px]"
        role="img"
        aria-label="A route map showing a path from discovery to shipped impact."
      >
        <defs>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.35)" />
          </filter>
          <linearGradient id="pathFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.35" />
            <stop offset="60%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        <path
          d="M 70 165 C 165 165, 190 60, 300 75 C 390 87, 420 175, 520 160 C 595 148, 610 80, 655 85"
          fill="none"
          stroke="url(#pathFade)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="6 10"
        />

        <g transform="translate(58,108)" filter="url(#softShadow)">
          <path
            d="M28 0c-15.5 0-28 12.5-28 28 0 20 24 46 28 50 4-4 28-30 28-50C56 12.5 43.5 0 28 0z"
            fill="#22c55e"
          />
          <circle cx="28" cy="28" r="11" fill="white" opacity="0.95" />
        </g>

        <g>
          <circle cx="300" cy="75" r="5.5" fill="hsl(var(--foreground))" opacity="0.85" />
          <circle cx="520" cy="160" r="5.5" fill="hsl(var(--foreground))" opacity="0.85" />
        </g>

        <g transform="translate(615,28)" filter="url(#softShadow)">
          <path
            d="M28 0c-15.5 0-28 12.5-28 28 0 20 24 46 28 50 4-4 28-30 28-50C56 12.5 43.5 0 28 0z"
            fill="hsl(var(--netflix-red))"
          />
          <circle cx="28" cy="28" r="11" fill="white" opacity="0.95" />
        </g>

        <g fontSize="12" fill="hsl(var(--muted-foreground))">
          <text x="40" y="205">Discover</text>
          <text x="266" y="56">Pressure-test</text>
          <text x="493" y="195">Validate</text>
          <text x="610" y="22">Ship impact</text>
        </g>
      </svg>
    </div>
  </div>
);

const JoinTeamSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <>
      <section ref={revealRef} className="px-6 md:px-12 lg:px-16 py-16 section-surface-b section-divider reveal">
        <h2 className="text-2xl md:text-3xl tracking-wide text-foreground mb-8">
          WHAT HAPPENS IF I JOIN YOUR TEAM
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl items-start">
          {/* Left — map-style journey */}
          <div className="p-6 rounded-xl bg-card border border-border space-y-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.25em] text-netflix-red">HOW I’D BE USEFUL</p>

            <RouteMap />

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                I’m most useful when I can <span className="text-foreground font-medium">sit close to the problem</span>—not just execute on a roadmap.
                For me, it’s less about shipping features and more about <span className="text-foreground font-medium">figuring out what’s actually worth building</span>.
              </p>

              <div className="relative pl-8 space-y-5">
                <span className="absolute left-1 top-1 bottom-1 w-px bg-border" />

                <div className="relative pl-2">
                  <span className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-netflix-red" />
                  <p className="font-medium text-foreground">Start at the user</p>
                  <p className="text-sm text-muted-foreground">
                    At Segwise, talking to users taught me that what people say and what they actually do are often different.
                    I try to anchor decisions on <span className="text-foreground font-medium">real behaviour</span>, not just feedback.
                  </p>
                </div>

                <div className="relative pl-2">
                  <span className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-netflix-red" />
                  <p className="font-medium text-foreground">Stress‑test edge cases</p>
                  <p className="text-sm text-muted-foreground">
                    At OSVI, working on an AI product made it clear that if you don’t think through edge cases, things break fast.
                    I like to <span className="text-foreground font-medium">pressure‑test flows</span> before we rely on them.
                  </p>
                </div>

                <div className="relative pl-2">
                  <span className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-netflix-red" />
                  <p className="font-medium text-foreground">Validate before over‑building</p>
                  <p className="text-sm text-muted-foreground">
                    With Clo, I learned that building fast is good, but validating first is better.
                    I’d rather run a <span className="text-foreground font-medium">small, clear test</span> than spend weeks on something unproven.
                  </p>
                </div>
              </div>

              <p>
                If I join, my first weeks would be about understanding the product deeply, finding where things are breaking for users,
                and then <span className="text-foreground font-medium">fixing what actually matters—quickly</span>. I’m comfortable in messy contexts and don’t mind asking hard questions
                if it helps us <span className="text-foreground font-medium">move in the right direction</span>.
              </p>
            </div>
          </div>

          {/* Right — video preview */}
          <div className="self-start space-y-3">
            <div
              onClick={() => setShowVideo(true)}
              className="relative aspect-video bg-card border border-border rounded-xl overflow-hidden cursor-pointer group glow-hover"
            >
              <iframe
                className="absolute inset-0 h-full w-full pointer-events-none"
                src={WHY_HIRE_ME_EMBED_URL}
                title="Why you should hire me (preview)"
                allow="fullscreen; picture-in-picture"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent pointer-events-auto" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-background/70 border border-border flex items-center justify-center mx-auto mb-3 group-hover:border-netflix-red/50 transition-colors">
                    <Play className="w-6 h-6 text-netflix-red fill-current ml-0.5" />
                  </div>
                  <p className="text-sm text-foreground">Why you should hire me</p>
                  <p className="text-xs text-muted-foreground/80 mt-1">Click to play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showVideo && (
        <div
          className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video bg-card rounded-lg overflow-hidden border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 z-10 p-1 rounded-full bg-background/80 text-foreground hover:bg-background"
              aria-label="Close preview"
            >
              <span className="sr-only">Close</span>
            </button>
            <iframe
              className="h-full w-full"
              src={WHY_HIRE_ME_EMBED_URL}
              title="Why you should hire me"
              allow="fullscreen; picture-in-picture"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default JoinTeamSection;
