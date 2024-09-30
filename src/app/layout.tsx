import type { Metadata } from "next";
import "./globals.css";
import { constructMetadata } from "@/lib/utils";
import { ThemeProvider } from "@/components/Theming/theme-provider";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans">
        <div className="bg-grid relative z-10 min-h-screen bg-cover bg-fixed bg-center pb-10 md:py-28">
          {/* Fade effect background */}
          <div className="fixed -inset-10 -z-10 fade-out" />

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <main className="z-[5] flex min-h-screen flex-col">
              <div className="flex h-full flex-1 flex-col">{children}</div>
            </main>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
