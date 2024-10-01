"use client";

import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { Globe } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type LatestWork = {
  img: string;
  alt: string;
  title: string;
  description: string;
  tools: string[];
  websiteHref: string;
  sourceHref: string;
  learnMore?: {
    title: string;
    description: string;
  };
};

interface FadeInUpProps {
  latestWorks: LatestWork[];
}

const FadeInUp = ({ latestWorks }: FadeInUpProps) => {
  // state var keeps track of the current visible items
  const [visibleItems, setVisibleItems] = useState<LatestWork[]>([]);
  // state var keeps determines when animation should begin
  const [amount, setAmount] = useState(0.4);
  // ref object that points to the <div> container to directly interact and manipulate the component
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const screenAmount = window.innerWidth < 950 ? 0.1 : 0.4;
      setAmount(screenAmount);
    }
  }, []);

  // check if the container <div> element is inside the user's viewport
  // only animate the first time the div container is inside the viewport
  // start animating when the user is a bit past the div container
  const isInView = useInView(containerRef, {
    once: true,
    amount: amount,
  });

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];

    latestWorks.forEach((latest, index) => {
      const timeoutId = setTimeout(() => {
        setVisibleItems((prevItems) => [...prevItems, latest]);
      }, index * 300); // delay each item by 300ms

      // store the id of current setTimeout function to clean later
      timeoutIds.push(timeoutId);
    });

    // clear all the created setTimeout functions
    return () => timeoutIds.forEach((id) => clearTimeout(id));
  }, [latestWorks]);

  return (
    <div
      ref={containerRef}
      className="mt-10 flex h-full flex-col items-center justify-center space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0"
    >
      {visibleItems.map((latest, i) => {
        return (
          <div
            key={i}
            className={cn(
              "w-full max-w-[500px] rounded-lg border border-black/20 bg-white px-5 pb-6 pt-5 shadow-lg dark:border-white/50 dark:bg-[#18181b] dark:shadow-[#18181b]",
              { "animate-fadeInUp": isInView, "opacity-0": !isInView },
            )}
          >
            <div className="flex w-full flex-col items-center">
              {/* image */}
              <div className="flex h-[200px] w-full items-center justify-center rounded-lg md:w-[90%]">
                <img
                  src={latest.img}
                  alt={latest.alt}
                  className="h-full w-full rounded-lg object-cover sm:max-w-[375px]"
                />
              </div>

              {/* visual seperator */}
              <div className="mx-auto mb-3 mt-5 w-full border-t border-gray-200" />

              {/* title & description */}
              <div className="flex flex-col space-y-2 text-balance text-center lg:text-wrap lg:text-start">
                <h1 className="text-xl font-bold">{latest.title}</h1>
                <p className="max-w-prose text-sm text-muted-foreground dark:text-gray-300 sm:text-base">
                  {latest.description}
                </p>
              </div>

              {/* technology used & link to website and GitHub */}
              <div className="mt-16 flex w-full flex-col space-y-2 self-start">
                <div className="mb-2 flex w-full flex-wrap justify-center gap-2 lg:justify-start">
                  {latest.tools.map((tool, i) => {
                    return (
                      <div
                        key={i}
                        className="rounded-lg bg-gray-200 p-1.5 text-sm font-medium text-black"
                      >
                        {tool}
                      </div>
                    );
                  })}
                </div>

                <div className="flex w-full items-start justify-between">
                  <div
                    className={cn("flex w-full flex-wrap space-x-2", {
                      "justify-center lg:justify-start": !latest.learnMore,
                      "hidden sm:flex": latest.learnMore,
                    })}
                  >
                    <Link
                      target="_blank"
                      href={latest.sourceHref}
                      className="flex items-center justify-start space-x-2 rounded-lg bg-black p-2 text-sm font-medium text-white"
                    >
                      <FaGithub className="h-5 w-5" />
                      <p>Source</p>
                    </Link>

                    <Link
                      target="_blank"
                      href={latest.websiteHref}
                      className="flex items-center justify-start space-x-2 rounded-lg bg-black p-2 text-sm font-medium text-white"
                    >
                      <Globe className="h-5 w-5" />
                      <p>Website</p>
                    </Link>
                  </div>

                  {latest.learnMore && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="flex p-2 text-base" variant="link">
                          Important info &rarr;
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="sm:text-xl">
                            {latest.learnMore.title}
                          </DialogTitle>
                          <DialogDescription className="text-base sm:text-lg">
                            {latest.learnMore.description}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="flex w-full flex-wrap items-center justify-center space-x-5 sm:hidden">
                          <Link
                            target="_blank"
                            href={latest.sourceHref}
                            className="flex items-center justify-start space-x-2 rounded-lg bg-black p-2 text-sm font-medium text-white"
                          >
                            <FaGithub className="h-5 w-5" />
                            <p>Source</p>
                          </Link>

                          <Link
                            target="_blank"
                            href={latest.websiteHref}
                            className="flex items-center justify-start space-x-2 rounded-lg bg-black p-2 text-sm font-medium text-white"
                          >
                            <Globe className="h-5 w-5" />
                            <p>Website</p>
                          </Link>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FadeInUp;
