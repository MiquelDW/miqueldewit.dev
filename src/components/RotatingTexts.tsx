"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const RotatingText = ({ rotatingTexts }: { rotatingTexts: string[] }) => {
  // state that keeps track which word from the array is currently being displayed
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  // state that holds the portion of a word that's currently visible
  const [displayedText, setDisplayedText] = useState("");
  // state that determines if underscore should be displayed or hidden
  const [isUnderscoreVisible, setIsUnderscoreVisible] = useState(true);
  // state var that determines if the current phase is typing or deleting a word
  const [isDeleting, setIsDeleting] = useState(false);
  // state var that determines if typing should be paused
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // stores delay between each step of the animation
    let timeout: NodeJS.Timeout;
    // stores the word that is currently being tyoed or deleted
    let currentWord = rotatingTexts[currentTextIndex];
    // store the position of the next letter to type or delete (starts at 0 when typing, and starts at the word's length when deleting)
    let letterIndex = isDeleting ? currentWord.length : 0;

    // function handles typing and deleting the text step by step
    // the function 'type' is constantly being scheduled to be run again by the setTimeout function 'timeout' after a short delay
    const type = () => {
      if (isPaused) {
        // pause after typing is complete (0.5 seconds delay)
        timeout = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true); // start deleting after the pause
        }, 500);
      } else if (!isDeleting && letterIndex < currentWord.length) {
        // typing the text
        setDisplayedText(currentWord.slice(0, letterIndex + 1));
        letterIndex++;
        // schedule next call
        timeout = setTimeout(type, 100); // typing speed slower
      } else if (isDeleting && letterIndex > 0) {
        // deleting the text after the pause
        setDisplayedText(currentWord.slice(0, letterIndex - 1));
        letterIndex--;
        // schedule next call
        timeout = setTimeout(type, 50); // deleting speed faster
      } else {
        // switch between typing and deleting mode
        if (isDeleting) {
          setIsDeleting(false);
          // modulo operation ensures the index wraps back to 0 once it reaches the end of the array
          setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        } else {
          setIsPaused(true); // pause after fully typing the word
        }
        // delay between switching from typing mode to deleting mode (or vice versa)
        timeout = setTimeout(type, 1000);
      }
    };

    // initial call
    // wait 1 second before first execution of function 'type'
    timeout = setTimeout(type, 1000);

    // cleanup setTimeout function on unmount
    return () => clearTimeout(timeout);
  }, [currentTextIndex, isDeleting, isPaused]);

  useEffect(() => {
    // blink underscore every 450ms
    const underscoreInterval = setInterval(() => {
      setIsUnderscoreVisible((prev) => !prev);
    }, 450);

    return () => clearInterval(underscoreInterval);
  }, []);

  return (
    <div className="text-xl text-center lg:text-start lg:justify-start w-full sm:text-2xl">
      <span>{displayedText}</span>
      <span
        className={cn(
          "duration-0 text-3xl dark:text-purple-300 text-blue-400 ml-0.5",
          {
            "opacity-100": isUnderscoreVisible,
            "opacity-0": !isUnderscoreVisible,
          }
        )}
      >
        _
      </span>
    </div>
  );
};

export default RotatingText;
