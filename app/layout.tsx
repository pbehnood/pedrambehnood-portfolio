import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pedrambehnood.com"),
  title: {
    default: "Pedram Behnood — UX Portfolio",
    template: "%s | Pedram Behnood",
  },
  description:
    "Dark UX portfolio for Pedram Behnood featuring modern case studies, product thinking, and interaction design.",
  openGraph: {
    title: "Pedram Behnood — UX Portfolio",
    description:
      "Dark UX portfolio for Pedram Behnood featuring modern case studies, product thinking, and interaction design.",
    url: "https://www.pedrambehnood.com",
    siteName: "Pedram Behnood Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedram Behnood — UX Portfolio",
    description:
      "Dark UX portfolio for Pedram Behnood featuring modern case studies, product thinking, and interaction design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}