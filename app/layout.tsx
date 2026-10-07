import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://techruise.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: ["AI", "Artificial Intelligence", "AI Consulting", "Machine Learning", "LLM", "Automation", "SaaS"],
  authors: [{ name: "Techruise" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    siteName: "Techruise",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
