import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-5 z-50 p-2 rounded-full border border-primary bg-background/80 shadow-lg hover:bg-primary/10 transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-primary"
      )}
      aria-label="Toggle dark mode"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 transition-transform duration-300 scale-110" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900 transition-transform duration-300 scale-110" />
      )}
    </button>
  );
};