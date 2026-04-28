import type { Metadata } from "next";
import "./globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletContextProvider } from "@/components/WalletProvider";

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
    <html lang="en">
      <body className="antialiased">
        <WalletContextProvider>{children}</WalletContextProvider>
      </body>
    </html>
  );
}
