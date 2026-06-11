import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oceannova — Software, AI & Digital Solutions for UK Businesses",
  description:
    "Oceannova is a UK digital agency building websites, mobile apps, AI automation, e-commerce and cloud solutions for every kind of British business — from startups and local trades to regulated enterprises.",
  keywords: [
    "UK software agency",
    "web development UK",
    "mobile app development UK",
    "AI automation",
    "e-commerce development",
    "IT support UK",
    "digital agency London",
  ],
  openGraph: {
    title: "Oceannova — Software, AI & Digital Solutions for UK Businesses",
    description:
      "Websites, apps, AI automation and cloud solutions for every kind of UK business. UK-based team, transparent pricing, GDPR-first.",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${sora.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
