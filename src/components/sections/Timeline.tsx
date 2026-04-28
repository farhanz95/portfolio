import { Reveal } from "../Reveal";
import { Briefcase, Rocket, ShoppingBag, Building2 } from "lucide-react";

const stages = [
  {
    year: "2016",
    title: "Early Career",
    role: "Junior Software Developer",
    icon: Rocket,
    desc: "Started professional journey as software developer, learning production systems, debugging, databases, and real business operations.",
    tags: ["PHP", "MySQL", "Debugging"],
  },
  {
    year: "2017 – 2019",
    title: "Framework & API Mastery",
    role: "Software Developer",
    icon: Briefcase,
    desc: "Expanded expertise in PHP frameworks, backend systems, APIs, and handling real-world client requirements.",
    tags: ["Laravel", "Yii", "REST APIs"],
  },
  {
    year: "2020 – 2022",
    title: "E-Commerce Deep Dive",
    role: "E-Commerce Backend Developer",
    icon: ShoppingBag,
    desc: "Worked deeply in e-commerce technology, mastering the Magento 2 ecosystem, integrations, customization, and scalable commerce operations.",
    tags: ["Magento 2", "Integrations", "Scale"],
  },
  {
    year: "2023 – Present",
    title: "WOWSHOP @ Media Prima",
    role: "Software Developer · IT Software Development Department",
    org: "Sistem Televisyen Malaysia Berhad / Media Prima Berhad",
    icon: Building2,
    desc: "Enhance internal systems, fix production issues, develop new features, build Magento 2 REST APIs, work with Dockerized environments, and maintain reliable business operations.",
    tags: ["Magento 2 APIs", "Docker", "Bitbucket", "Production"],
    current: true,
  },
];

export const Timeline = () => {
  return (
    <section id="journey" className="py-24 md:py-32 relative">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-eyebrow">Career Journey</span>
          <h2 className="section-title mt-4">From 2016 to Today</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Eight years of growth across frameworks, e-commerce platforms, and
            production-grade enterprise systems.
          </p>
        </Reveal>

        <div className="relative max-w-5xl mx-auto">
          {/* center line (desktop) / left line (mobile) */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/40 to-transparent left-6 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-20">
            {stages.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={s.year} delay={i * 80}>
                  <div className={`relative md:grid md:grid-cols-2 md:gap-12 items-center`}>
                    {/* node */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                      <div className="relative">
                        {s.current && (
                          <span className="absolute inset-0 rounded-full bg-primary/40 animate-pulse-ring" />
                        )}
                        <div className="h-12 w-12 rounded-full bg-gradient-primary border-4 border-background flex items-center justify-center text-primary-foreground shadow-glow">
                          <s.icon className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    {/* card */}
                    <div className={`pl-20 md:pl-0 ${left ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                      <div className="glass-card p-6 group">
                        <div className={`flex items-center gap-2 mb-2 ${left ? "md:justify-end" : ""}`}>
                          <span className="font-mono text-sm font-bold text-primary">{s.year}</span>
                          {s.current && (
                            <span className="px-2 py-0.5 rounded-full bg-success/15 text-success text-[10px] font-bold uppercase tracking-wider border border-success/20">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="font-display text-xl font-bold mb-1">{s.title}</h3>
                        <p className="text-sm font-semibold text-secondary mb-1">{s.role}</p>
                        {s.org && (
                          <p className="text-xs text-muted-foreground mb-3">{s.org}</p>
                        )}
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                        <div className={`flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}>
                          {s.tags.map((t) => (
                            <span key={t} className="px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
