import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Covenant Community Church",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="antialiased min-h-screen">
          <Navbar />
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
