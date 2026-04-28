import { useEffect, useState } from "react";
import { MessageCircle, X, Mail, Linkedin, Github } from "lucide-react";

export const FloatingContact = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 animate-fade-in-up">
          {[
            { icon: Mail, label: "Email", href: "mailto:farhanz95@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohd-Farhan-ramli-7b3b8862" },
            { icon: Github, label: "GitHub", href: "https://github.com/farhanz95" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-2 pl-4 pr-3 py-2 rounded-full bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-x-1 transition-all text-sm font-medium"
            >
              {c.label}
              <span className="h-7 w-7 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground">
                <c.icon className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Quick contact"
        className="h-14 w-14 rounded-full bg-gradient-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-transform"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};
