import type { Metadata } from "next";
import { Inter, Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lexa.money"),
  title: "Lexa — Prediction Markets, Reimagined",
  description:
    "Ask. Allocate. Win — Lexa turns your beliefs into real positions instantly.",
  applicationName: "Lexa",
  keywords: ["prediction markets", "Lexa", "trading", "beliefs", "positions"],
  authors: [{ name: "Lexa", url: "https://lexa.money" }],
  creator: "Lexa",
  icons: {
    icon: "/favicon2.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lexa.money",
    siteName: "Lexa",
    title: "Lexa — Prediction Markets, Reimagined",
    description:
      "Ask. Allocate. Win — Lexa turns your beliefs into real positions instantly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexa — Prediction Markets, Reimagined",
    description:
      "Ask. Allocate. Win — Lexa turns your beliefs into real positions instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${orbitron.variable}`}>
      <body>{children}</body>
    </html>
  );
}
