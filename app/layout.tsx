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
    "UX designer portfolio featuring selected case studies, product thinking, research, and interface design.",
  openGraph: {
    title: "Pedram Behnood — UX Designer",
    description:
      "UX designer portfolio featuring selected case studies, product thinking, research, and interface design.",
    url: "https://www.pedrambehnood.com",
    siteName: "Pedram Behnood Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedram Behnood — UX Designer",
    description:
      "UX designer portfolio featuring selected case studies, product thinking, research, and interface design.",
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