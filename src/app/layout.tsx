import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scaledown.ai"),
  title: {
    default: "ScaleDown AI | Task-specific SLMs",
    template: "%s · ScaleDown",
  },
  description:
    "Purpose-built models for compression, summarization, extraction, and classification. Frontier quality at a fraction of the cost.",
  icons: {
    icon: "/brand/favicon.png",
    apple: "/brand/logo.png",
  },
  openGraph: {
    title: "ScaleDown.ai — Task-Specific Small Language Models",
    description:
      "Purpose-built models for compression, summarization, extraction, and classification. Frontier quality at a fraction of the cost.",
    type: "website",
    images: [{ url: "/brand/logo-full.png", width: 1200, height: 630, alt: "ScaleDown" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleDown.ai — Task-Specific Small Language Models",
    description:
      "Purpose-built models for compression, summarization, extraction, and classification.",
    images: ["/brand/logo-full.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
