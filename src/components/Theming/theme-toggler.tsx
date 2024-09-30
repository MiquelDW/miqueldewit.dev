"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <button
          className="transition-all hover:scale-[1.1]"
          onClick={() => setTheme("dark")}
        >
          <div className="h-7 w-7 lg:h-8 lg:w-8">
            <Moon className="h-full w-full" />
          </div>
        </button>
      ) : (
        <button
          className="transition-all hover:scale-[1.1]"
          onClick={() => setTheme("light")}
        >
          <div className="h-7 w-7 lg:h-8 lg:w-8">
            <Sun className="h-full w-full" />
          </div>
        </button>
      )}
    </>
  );
};

export default ThemeToggler;
