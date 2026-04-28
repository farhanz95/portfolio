import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "../ParticlesBackground";
import profileImg from "@/assets/profile-farhan.jpg";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden hero-bg"
    >
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
      <ParticlesBackground />

      {/* floating blobs */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-float-slow" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-20 h-80 w-80 rounded-full bg-secondary/15 blur-3xl animate-float-slow [animation-delay:-9s]" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="space-y-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 text-success text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success/60 animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Available for new opportunities
            </div>

            <div>
              <p className="font-mono text-sm text-primary mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Hello, I'm
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
                Mohd Farhan
                <br />
                <span className="text-gradient">bin Ramli</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl font-medium text-muted-foreground">
              Backend Software Developer
              <span className="text-primary mx-2">·</span>
              E-Commerce Specialist
              <span className="text-primary mx-2">·</span>
              Problem Solver
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              A results-driven software developer with{" "}
              <span className="text-foreground font-semibold">8+ years</span> of
              experience building scalable business systems, e-commerce
              platforms, APIs, and enterprise solutions. Passionate about
              solving complex technical problems, improving systems, and
              delivering measurable business value.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="hero" size="xl">
                <a href="#journey">
                  View Career Journey <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline-strong" size="xl">
                <a href="/resume.pdf" download>
                  <Download className="mr-1 h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button asChild variant="ghost" size="xl">
                <a href="#contact">
                  <Mail className="mr-1 h-4 w-4" /> Contact Me
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <MapPin className="h-4 w-4 text-primary" /> Based in Malaysia ·
              Open to remote
            </div>
          </div>

          {/* Right: portrait */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in [animation-delay:200ms]">
            <div className="relative">
              {/* rotating ring */}
              <div className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" aria-hidden="true" />
              <div className="absolute -inset-12 rounded-full border border-secondary/20" aria-hidden="true" />

              {/* glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-40 scale-95" aria-hidden="true" />

              <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full overflow-hidden border-4 border-card shadow-elevated">
                <img
                  src={profileImg}
                  alt="Mohd Farhan bin Ramli, backend software developer"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* floating chips */}
              <div className="absolute -top-2 -right-4 sm:-right-8 glass-card px-4 py-2.5 animate-float">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold font-mono text-sm">
                    PHP
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold">Backend</p>
                    <p className="text-muted-foreground">Specialist</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-4 sm:-left-10 glass-card px-4 py-2.5 animate-float [animation-delay:-3s]">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold font-mono text-sm">
                    M2
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold">Magento 2</p>
                    <p className="text-muted-foreground">Expert</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-6 sm:-right-12 glass-card px-3 py-2 animate-float [animation-delay:-6s]">
                <p className="font-display font-bold text-2xl text-gradient">8+</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
