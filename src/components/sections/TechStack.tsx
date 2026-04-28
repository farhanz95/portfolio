import { Reveal } from "../Reveal";

const groups = [
  {
    label: "Languages",
    color: "from-primary to-primary-glow",
    items: ["PHP", "JavaScript", "SQL"],
  },
  {
    label: "Frameworks",
    color: "from-secondary to-primary",
    items: ["Magento 2", "Laravel", "Yii"],
  },
  {
    label: "Tools",
    color: "from-primary to-secondary",
    items: ["Docker", "Git", "Bitbucket", "Postman", "VS Code", "DBeaver"],
  },
  {
    label: "Databases",
    color: "from-secondary to-primary-glow",
    items: ["MySQL"],
  },
  {
    label: "Methods",
    color: "from-primary-glow to-secondary",
    items: ["REST APIs", "Debugging", "Feature Delivery", "Optimization"],
  },
];

export const TechStack = () => {
  return (
    <section id="stack" className="py-24 md:py-32 relative">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-eyebrow">Technical Stack</span>
          <h2 className="section-title mt-4">The Tools Behind the Work</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            A focused, battle-tested stack for building enterprise-grade
            backend systems.
          </p>
        </Reveal>

        <div className="space-y-6 max-w-5xl mx-auto">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 80}>
              <div className="glass-card p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-44 shrink-0">
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${g.color} text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-soft`}>
                    {g.label}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5 flex-1">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="px-4 py-2 rounded-xl bg-card border border-border font-mono text-sm font-medium hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all cursor-default shadow-soft"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
