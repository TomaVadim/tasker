import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { SessionProvider } from "@/components/providers/session-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/header/header";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={montserrat.className} lang="en">
      <body className="h-svh flex flex-col">
        <SessionProvider>
          <ThemeProvider>
            <Header />

            <main className="container mx-auto grow px-3">{children}</main>
            <footer className="container mx-auto grow-0 px-3 py-3 flex justify-center">
              <span className="text-sm text-gray-500">© Tacker 2024</span>
            </footer>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
