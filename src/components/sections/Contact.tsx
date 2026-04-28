import { Reveal } from "../Reveal";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "farhanz95@gmail.com", href: "mailto:farhanz95@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/mohd-farhan-ramli-7b3b8862", href: "https://www.linkedin.com/in/mohd-Farhan-ramli-7b3b8862" },
  { icon: Github, label: "GitHub", value: "github.com/farhanz95", href: "https://github.com/farhanz95" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/40 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div className="container relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title mt-4">Let's build something solid</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Open to backend, e-commerce, and full-stack opportunities. I respond within 24 hours.
          </p>
        </Reveal>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4 mb-10">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass-card p-6 flex flex-col items-center text-center gap-3 group h-full"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
                  <c.icon className="h-6 w-6" />
                </div>
                <p className="font-display font-bold text-lg">{c.label}</p>
                <p className="text-sm text-muted-foreground break-all">{c.value}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}>
          <div className="text-center">
            <Button asChild variant="hero" size="xl" className="shadow-glow">
              <a href="mailto:farhan.ramli@example.com">
                Let's Connect <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
