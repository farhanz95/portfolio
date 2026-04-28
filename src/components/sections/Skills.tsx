import { Reveal } from "../Reveal";
import {
  Code2, ShoppingBag, Layers, Server, Database, Container, GitBranch,
  FileCode2, Palette, Terminal, Table, Boxes,
  Network, Bug, Sparkles, Gauge, Workflow, Puzzle, Brain,
} from "lucide-react";

const expertise = [
  { icon: FileCode2, label: "PHP Development" },
  { icon: ShoppingBag, label: "Magento 2" },
  { icon: Layers, label: "Laravel" },
  { icon: Boxes, label: "Yii Framework" },
  { icon: Network, label: "REST APIs" },
  { icon: Database, label: "MySQL" },
  { icon: Container, label: "Docker" },
  { icon: GitBranch, label: "Git / Bitbucket" },
  { icon: Code2, label: "JavaScript" },
  { icon: Palette, label: "CSS" },
  { icon: Terminal, label: "VS Code" },
  { icon: Table, label: "DBeaver" },
];

const strengths = [
  { icon: Server, label: "Backend Architecture" },
  { icon: ShoppingBag, label: "E-Commerce Systems" },
  { icon: Bug, label: "Bug Fixing & Troubleshooting" },
  { icon: Sparkles, label: "Feature Development" },
  { icon: Gauge, label: "Performance Optimization" },
  { icon: Database, label: "Database Design" },
  { icon: Workflow, label: "System Integration" },
  { icon: Puzzle, label: "Business Logic Engineering" },
  { icon: Brain, label: "Continuous Learner" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-eyebrow">Skillset Snapshot</span>
          <h2 className="section-title mt-4">Core Toolkit & Strengths</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            The technologies and disciplines I rely on every day to ship
            reliable, scalable backend systems.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mb-14">
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
              <span className="h-1 w-8 rounded-full bg-gradient-primary" />
              Core Expertise
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {expertise.map((s, i) => (
                <div
                  key={s.label}
                  className="glass-card p-5 text-center group cursor-default"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <div className="mx-auto h-12 w-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
              <span className="h-1 w-8 rounded-full bg-gradient-primary" />
              Strength Areas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {strengths.map((s) => (
                <div
                  key={s.label}
                  className="glass-card p-5 flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <p className="font-semibold">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
