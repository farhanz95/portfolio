import { Reveal } from "../Reveal";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Technical depth across PHP, frameworks, and databases",
  "Real production experience on live commercial systems",
  "Business awareness — I think beyond the code",
  "Consistency: 8+ years of reliable, sustained delivery",
  "Practical execution focused on results and reliability",
];

export const WhyMe = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-accent opacity-[0.04]" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <span className="section-eyebrow">Why Work With Me</span>
            <h2 className="section-title mt-4">
              Reliability meets <span className="text-gradient">real-world impact</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-card p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
                I bring a combination of <span className="text-foreground font-semibold">technical depth</span>, real production experience, business awareness, and consistency. I understand how to maintain mission-critical systems while continuously improving them. I focus on results, reliability, and practical execution.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
