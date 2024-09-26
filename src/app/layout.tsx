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
        <div className="bg-grid pb-10 md:py-28 relative z-10 bg-fixed bg-cover bg-center min-h-screen">
          {/* Fade effect background */}
          <div className="fixed -inset-10 fade-out -z-10" />

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <main className="flex flex-col min-h-screen z-[5]">
              <div className="flex flex-col h-full flex-1">{children}</div>
            </main>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
