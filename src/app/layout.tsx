import type { Metadata } from "next";
import "./globals.css";
import { constructMetadata } from "@/lib/utils";
import { ThemeProvider } from "@/components/Theming/theme-provider";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans">
        <div className="bg-grid relative z-10 min-h-screen bg-cover bg-fixed bg-center">
          {/* Fade effect background */}
          <div className="fixed -inset-10 -z-10 fade-out" />

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <div className="z-[5] flex min-h-screen flex-col">
              <main className="flex h-full flex-1 flex-col">{children}</main>

              <Footer />
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
