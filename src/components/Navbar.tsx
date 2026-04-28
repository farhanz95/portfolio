import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#wins", label: "Wins" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${
            scrolled
              ? "bg-card/85 backdrop-blur-xl shadow-card border border-border/60"
              : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold shadow-glow group-hover:scale-105 transition-transform">
              MF
            </div>
            <span className="font-display font-semibold hidden sm:block">
              Mohd Farhan
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-lg hover:bg-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="md:hidden h-10 w-10 rounded-full border border-border bg-card/80 flex items-center justify-center"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl bg-card/95 backdrop-blur-xl border border-border shadow-card p-2 animate-fade-in">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-accent rounded-xl"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
