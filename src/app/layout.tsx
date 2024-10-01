import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";
import { AUTHOR, SITE_URL, DEFAULT_KEYWORDS } from '@/config';
import { doge } from "./doge";
import { themeEffect } from "@/components/ThemeSwitcher/theme-effect";
import 'highlight.js/styles/atom-one-dark.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Viewport } from 'next';
import { Analytics } from "./analytics";
import { Suspense } from "react";

export const revalidate = 60; // Revalidate the page every 60 seconds

// Define viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: false,
  themeColor: "transparent",
};

// Font settings
const inter = Inter({ subsets: ['latin'] });

// Define metadata
export const metadata: Metadata = {
  title: `${AUTHOR.name}'s blog`,
  description: `${AUTHOR.name} is a blogger and professional software developer who writes about life on screen, outdoor adventures, hiking, triathlons, and travel.`,
  generator: "Next.js",
  manifest: process.env.NODE_ENV === 'production' ? "/manifest.prod.json" : "/manifest.json",
  openGraph: {
    title: `${AUTHOR.name}'s blog`,
    description: `${AUTHOR.name} is a blogger and professional software developer who writes about life on screen, outdoor adventures, hiking, triathlons, and travel.`,
    url: SITE_URL,
    siteName: `${AUTHOR.name}'s blog`,
    images: [
      {
        url: `${SITE_URL}/icons/512x512.png`, // Path to your Open Graph image
        width: 1200,
        height: 630,
        alt: `${AUTHOR.name}'s blog cover image`,
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@patrickprunty",
    creator: "@patrickprunty",
    images: [
      {
        url: `${SITE_URL}/twitter-image.png`, // Path to your Twitter image (can be same as OG image)
        alt: `${AUTHOR.name}'s blog cover image`,
      }
    ],
  },
  keywords: DEFAULT_KEYWORDS,
  icons: [
    { rel: "apple-touch-icon", url: "/icons/180x180.png", sizes: "180x180" },
    { rel: "icon", url: "/icons/192x192.png", sizes: "192x192", type: "image/png" },
  ],
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": AUTHOR.name,
    "jobTitle": "Software Engineer",
    "description": `${AUTHOR.name} is a blogger and professional software developer who writes about life on screen, outdoor adventures, hiking, triathlons, and travel.`,
    "url": SITE_URL,
    "sameAs": [
      AUTHOR.twitterUrl,
      AUTHOR.stravaUrl,
      AUTHOR.githubUrl,
      AUTHOR.redditUrl,
      AUTHOR.linkedinUrl
    ]
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();(${doge.toString()})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <meta name="google-site-verification" content="5GuQpmfOzq72Xmm56vDEj1o3L0LEngpUlkmqYPgn7iw" />
      </head>
      <body className={`dark:text-gray-100 max-w-2xl m-auto`}>
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
            <Suspense fallback={null}>
          <Header />
          {children}
          <Footer/>
          </Suspense>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
