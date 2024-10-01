"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const greetings = [
  "Hello",
  "Guten Tag",
  "Hallo",
  "Bonjour",
  "Hola",
  "Ciao",
  "こんにちは",
];

const Welcome = () => {
  // state var keeps track of the current greeting to display
  const [currentGreetIndex, setCurrentGreetIndex] = useState(0);
  // state var keeps track if animation is currently executing or not
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // disable scrolling when the animation is running
    if (isAnimating) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      // cleanup: ensure scrolling is enabled when the component unmounts or animation ends
      document.body.style.overflow = "auto";
    };
  }, [isAnimating]);

  useEffect(() => {
    if (currentGreetIndex < greetings.length - 1) {
      // keeps running until all greetings have been displayed
      const timer = setTimeout(
        () => {
          setCurrentGreetIndex((prev) => prev + 1);
        },
        // first greeting has a longer pause
        currentGreetIndex === 0 ? 600 : 200,
      );

      return () => clearTimeout(timer);
    } else {
      const endAnimationTimeout = setTimeout(() => {
        setIsAnimating(false); // animation ends
      }, 500); // allow some time for the last word to show

      return () => clearTimeout(endAnimationTimeout);
    }
  }, [currentGreetIndex]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex select-none items-center justify-center bg-white transition-transform duration-1000 dark:bg-[#18181b]",
        isAnimating ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <h1 className="animate-fadeIn text-4xl text-black dark:text-white">
        👋 {greetings[currentGreetIndex]}
      </h1>
    </div>
  );
};

export default Welcome;
