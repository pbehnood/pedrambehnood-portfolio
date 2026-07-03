import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pedrambehnood.com"),
  title: {
    default: "Pedram Behnood - UX Portfolio",
    template: "%s | Pedram Behnood",
  },
  description:
    "UX portfolio for Pedram Behnood featuring case studies, product thinking, research, and interaction design.",
  openGraph: {
    title: "Pedram Behnood - UX Portfolio",
    description:
      "UX portfolio for Pedram Behnood featuring case studies, product thinking, research, and interaction design.",
    url: "https://www.pedrambehnood.com",
    siteName: "Pedram Behnood Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedram Behnood - UX Portfolio",
    description:
      "UX portfolio for Pedram Behnood featuring case studies, product thinking, research, and interaction design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
