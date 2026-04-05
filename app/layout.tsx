import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pedrambehnood.com"),
  title: {
    default: "Pedram Behnood — UX Designer",
    template: "%s | Pedram Behnood",
  },
  description:
    "Portfolio of Pedram Behnood, featuring UX design work, Behance projects, LinkedIn profile, and Figma portfolio presentation.",
  openGraph: {
    title: "Pedram Behnood — UX Designer",
    description:
      "Portfolio of Pedram Behnood, featuring UX design work, Behance projects, LinkedIn profile, and Figma portfolio presentation.",
    url: "https://www.pedrambehnood.com",
    siteName: "Pedram Behnood Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedram Behnood — UX Designer",
    description:
      "Portfolio of Pedram Behnood, featuring UX design work, Behance projects, LinkedIn profile, and Figma portfolio presentation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}