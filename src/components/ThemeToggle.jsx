import React from "react";
import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

export function ThemeToggle() {
  const [isDark, setIsDark] = useDarkMode(true);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );;
}
