import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Officer Snowball vs. The Scooter Squirrel",
  description: "A whimsical morning romp featuring Officer Snowball, Ricky Rat, Gogo, and a scooter-riding squirrel."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
