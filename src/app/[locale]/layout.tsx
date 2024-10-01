import type { Metadata } from "next";
import "../globals.css";
import { constructMetadata } from "@/lib/utils";
import { ThemeProvider } from "@/components/Theming/theme-provider";
import Footer from "@/components/Layout/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = constructMetadata();

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
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
              <main className="flex h-full flex-1 flex-col">
                <NextIntlClientProvider messages={messages}>
                  {children}
                </NextIntlClientProvider>
              </main>

              <Footer />
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
