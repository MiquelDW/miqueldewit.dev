"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <button
          className="transition-all hover:scale-[1.2]"
          onClick={() => setTheme("dark")}
        >
          <Moon className="h-7 w-7" />
        </button>
      ) : (
        <button
          className="transition-all hover:scale-[1.2]"
          onClick={() => setTheme("light")}
        >
          <Sun className="h-7 w-7" />
        </button>
      )}
    </>
  );
};

export default ThemeToggler;
