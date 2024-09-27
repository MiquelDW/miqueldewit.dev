// clsx is a utility for constructing className strings conditionally. It takes in various arguments (which can be strings, objects, arrays, etc.) and combines them into a single string of class names
// clsx(inputs): Combines the class names from 'inputs' into a single string
import { type ClassValue, clsx } from "clsx";
// twMerge ensures that later classes in the list take precedence over the earlier ones when there are tailwind classname conflicts
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

// this function allows you to merge classnames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// function that returns Metadata for your application
// set a default value of an empty object for the destructured parameter (= {})
export function constructMetadata({
  title = "Miquel de Wit - Portfolio",
  description = "This is my portfolio project for future colleages!",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    // enhances how the app appears when shared on social media
    openGraph: {
      title,
      description,
    },
    // enhances how the app appears when shared on Twitter
    twitter: {
      title,
      description,
      creator: "@miqueldewit",
    },
    // icons metadata
    icons,
    // specify root URL that will be used as the base for constructing absolute URLs in your metadata
    metadataBase: new URL("https://neoncloud.vercel.app/"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
