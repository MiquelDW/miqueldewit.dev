interface IconType {
  icon: JSX.Element;
  name: string;
}
interface SmoothScrollProps {
  icons: IconType[];
  direction: "leftToRight" | "rightToLeft";
}

const SmoothScroll = ({ icons, direction }: SmoothScrollProps) => {
  return (
    <div className="relative overflow-hidden">
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
            className="min-w-[75px] select-none rounded-lg border border-black/50 px-10 py-2 dark:border-white/50"
          >
            <div className="flex flex-shrink-0 flex-col items-center justify-center space-y-1">
              {iconObj.icon}
              <span className="text-muted-foreground">{iconObj.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmoothScroll;
