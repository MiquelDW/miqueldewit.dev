"use client";

import { useTheme } from "next-themes";

interface IconType {
  iconDark: JSX.Element;
  iconLight: JSX.Element;
  name: string;
}
interface SmoothScrollProps {
  icons: IconType[];
  direction: "leftToRight" | "rightToLeft";
}

const SmoothScroll = ({ icons, direction }: SmoothScrollProps) => {
  const { theme } = useTheme();

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex w-full space-x-4 ${
          direction === "leftToRight"
            ? "animate-leftToRight"
            : "animate-rightToLeft"
        }`}
      >
        {/* Render items twice for the infinite scroll effect */}
        {[...icons, ...icons, ...icons].map((iconObj, i) => (
          <div
            key={i}
            className="py-2 border dark:border-white/50 border-black/50 rounded-lg min-w-[75px]"
          >
            <div className="flex flex-col items-center justify-center space-y-1 flex-shrink-0">
              {theme === "light" ? iconObj.iconLight : iconObj.iconDark}
              <span className="text-muted-foreground">{iconObj.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmoothScroll;
