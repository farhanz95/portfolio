import { Reveal } from "../Reveal";
import { Quote } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted/40 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div className="container relative">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <Reveal>
            <span className="section-eyebrow">About</span>
            <h2 className="section-title mt-4">Who I Am</h2>
            <div className="mt-8 glass-card p-6 max-w-sm">
              <Quote className="h-8 w-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Bridging the gap between code and business results — that's
                where I do my best work."
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I am a dedicated <span className="text-foreground font-semibold">backend developer</span> who enjoys building systems that create real business impact. My career has been focused on delivering stable, scalable, and maintainable software solutions across <span className="text-foreground font-semibold">e-commerce, enterprise operations, and government-linked projects</span>.
              </p>
              <p>
                I value clean architecture, practical solutions, long-term maintainability, and continuous improvement. I enjoy understanding both technical systems and business needs, allowing me to bridge the gap between code and results.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                {[
                  { k: "Clean", v: "Architecture" },
                  { k: "Scalable", v: "Systems" },
                  { k: "Business", v: "Impact" },
                  { k: "Maintainable", v: "Code" },
                  { k: "Continuous", v: "Improvement" },
                  { k: "Practical", v: "Solutions" },
                ].map((c) => (
                  <div key={c.k} className="rounded-xl border border-border bg-card/60 backdrop-blur-sm p-3">
                    <p className="text-xs uppercase tracking-wider text-primary font-semibold">{c.k}</p>
                    <p className="font-display font-semibold text-foreground">{c.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
