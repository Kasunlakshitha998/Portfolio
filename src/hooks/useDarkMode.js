import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    try {
      return savedTheme ? JSON.parse(savedTheme) : true; // Default to dark mode
    } catch (e) {
      return true; // Default to dark mode if JSON parsing fails
    }
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return [isDark, setIsDark];
}