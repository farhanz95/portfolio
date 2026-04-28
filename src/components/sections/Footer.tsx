import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-card/40">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-2 text-center">
            Built by <span className="text-foreground font-semibold">Mohd Farhan bin Ramli</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline-flex items-center gap-1">
              Designed with <Heart className="h-3.5 w-3.5 text-primary fill-primary" /> for technology
            </span>
          </p>
          <p className="font-mono text-xs">© {new Date().getFullYear()} · All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
