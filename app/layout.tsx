import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dark Art Spyce Music",
  description:
    "Official website of Dark Art Spyce Music featuring OLY DASINGER, YUNGG DADDY FW, VIBEZ-KING, BLACK D-C, LEVEL, and KING BRIXXY.",
  keywords: [
    "Dark Art Spyce Music",
    "OLY DASINGER",
    "YUNGG DADDY FW",
    "VIBEZ-KING",
    "BLACK D-C",
    "LEVEL",
    "KING BRIXXY",
    "Afrobeats",
    "Nigerian Music Label",
    "African Music",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
