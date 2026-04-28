import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative h-10 w-10 rounded-full border border-border bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-card transition-all hover:scale-105 flex items-center justify-center"
    >
      <Sun className={`h-4 w-4 absolute transition-all ${dark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"} text-primary`} />
      <Moon className={`h-4 w-4 absolute transition-all ${dark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"} text-primary`} />
    </button>
  );
};
