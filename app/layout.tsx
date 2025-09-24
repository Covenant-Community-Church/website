import type { Metadata } from "next";
import { Libre_Baskerville, Almarai } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import React from "react";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from 'next/font/local'

const libreBaskerville = Libre_Baskerville({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-libre-baskerville",
});

const almarai = Almarai({
    subsets: ["arabic"],
    weight: ["300", "400", "700"],
    variable: "--font-almarai",
});

const goldenbook = localFont({
  src: [
    {
      path: '../public/fonts/Goldenbook-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Goldenbook-Heavy.otf',
      weight: '700',
      style: 'bold',
    },
    {
        path: '../public/fonts/Goldenbook-Light.otf',
        weight: '300',
        style: 'light',
    }
  ],
    variable: '--font-goldenbook',
});

export const metadata: Metadata = {
    title: "Covenant Community Church - Rome, Illinois",
    description: "Reformed Baptist Church in Rome, Illinois. Our purpose is to glorify God as we proclaim Jesus Christ as Lord and prepare His people to worship Him forever.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${libreBaskerville.variable} ${almarai.variable} ${goldenbook.variable} font-body antialiased min-h-screen flex flex-col`}>

                <Header />

                <main id="main-content" className="flex-grow">
                    {children}
                </main>

                <footer className="bg-black text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="text-center">
                            <p className="text-sm font-body">
                                © 2025 Covenant Community Church
                            </p>
                        </div>
                    </div>
                </footer>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}