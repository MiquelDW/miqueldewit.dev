"use client";

import Link from "next/link";
import "./globals.css";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <html className="dark">
      <body className="font-sans">
        <div className="bg-grid relative z-10 min-h-screen bg-cover bg-fixed bg-center">
          {/* Fade effect background */}
          <div className="fixed -inset-10 -z-10 fade-out" />

          <div className="z-[5] flex min-h-screen flex-col">
            <main className="mb-16 flex h-full flex-1 flex-col items-center justify-center space-y-5">
              <h1 className="text-center text-4xl">Page Not Found</h1>
              <p className="max-w-[700px] text-balance text-center">
                Oops! It seems like you've stumbled upon a page that doesn't
                exist. Don't worry, our internationalization magic is still hard
                at work on other parts of the app. Feel free to navigate back to
                explore more!
              </p>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "link",
                  className: "text-lg",
                })}
              >
                Go to Homepage &rarr;
              </Link>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
