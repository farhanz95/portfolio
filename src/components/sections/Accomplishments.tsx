import { Reveal } from "../Reveal";
import { AnimatedCounter } from "../AnimatedCounter";
import {
  Trophy, Bug, Network, Calendar, ShieldCheck,
  Briefcase, Building2, ShoppingBag, Brain, Code2,
  Database, LifeBuoy, Users, GraduationCap, Target,
} from "lucide-react";

const wins = [
  {
    icon: Trophy,
    title: "Built Business-Critical Features",
    desc: "Successfully delivered production-ready features used in active commercial systems.",
  },
  {
    icon: Bug,
    title: "Solved High-Impact Bugs",
    desc: "Resolved real operational issues affecting users, customers, and business flows.",
  },
  {
    icon: Network,
    title: "Magento 2 API Expertise",
    desc: "Built and maintained robust REST APIs powering integrations and services.",
  },
  {
    icon: Calendar,
    title: "Long-Term Industry Experience",
    desc: "Sustained 8+ years of growth in real-world software engineering.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted in Production Environments",
    desc: "Worked on live systems where reliability, speed, and quality matter.",
  },
];

const stats = [
  { value: 8, suffix: "+", label: "Years Experience", icon: Calendar },
  { value: 50, suffix: "+", label: "Features Shipped", icon: Code2 },
  { value: 100, suffix: "+", label: "Bugs Resolved", icon: Bug },
  { value: 5, suffix: "+", label: "Major Projects", icon: Briefcase },
];

const general = [
  { icon: Calendar, label: "8+ Years Professional Experience" },
  { icon: Building2, label: "Enterprise Project Exposure" },
  { icon: ShoppingBag, label: "E-Commerce Platform Specialist" },
  { icon: Brain, label: "Strong Problem Solver" },
  { icon: Network, label: "API Development Experience" },
  { icon: Database, label: "Database Optimization Experience" },
  { icon: LifeBuoy, label: "Production Support Experience" },
  { icon: Users, label: "Team Collaboration" },
  { icon: GraduationCap, label: "Continuous Learner" },
  { icon: Target, label: "Business-Oriented Thinking" },
];

export const Accomplishments = () => {
  return (
    <section id="wins" className="py-24 md:py-32 bg-muted/40 relative overflow-hidden">
      <div className="container relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-eyebrow">Track Record</span>
          <h2 className="section-title mt-4">Biggest Accomplishments</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Real wins from real production systems — measured in business
            impact, not just commits.
          </p>
        </Reveal>

        {/* counters */}
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="glass-card p-6 text-center">
                <s.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <p className="font-display text-3xl md:text-4xl font-extrabold text-gradient">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1 font-semibold">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* major wins */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {wins.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <div className="glass-card p-6 h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-primary opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" />
                <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <w.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* general grid */}
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              General Accomplishments
            </h3>
            <p className="text-muted-foreground mt-2">
              The foundation of consistent, high-quality engineering.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {general.map((g, i) => (
            <Reveal key={g.label} delay={i * 30}>
              <div className="glass-card p-4 h-full flex flex-col items-center text-center gap-3 group">
                <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                  <g.icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold leading-snug">{g.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
