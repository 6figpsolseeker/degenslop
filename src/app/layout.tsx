import type { Metadata } from "next";
import { Bangers, Permanent_Marker, Inter } from "next/font/google";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
  display: "swap",
});

const marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DegenSlop Detector — Solana Rug Registry",
  description:
    "A community-maintained, open-source registry of Solana tokens flagged as rugs. Insiders, snipers, and malicious devs — exposed.",
  openGraph: {
    title: "DegenSlop Detector",
    description: "Solana rug registry. Open source.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bangers.variable} ${marker.variable} ${inter.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
