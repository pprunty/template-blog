import { Inter } from 'next/font/google';
import "./globals.css";
import { AUTHOR, SITE_URL, DEFAULT_KEYWORDS } from '@/config';
import { doge } from "./doge";
import { themeEffect } from "@/components/ThemeSwitcher/theme-effect";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Viewport } from 'next';
import { Analytics } from "./analytics";
import { Suspense } from "react";
import type { Metadata } from 'next';

// Define viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: "transparent",
};

// Font settings
const inter = Inter({ subsets: ['latin'] });

// Define metadata
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${AUTHOR.name}'s blog`,
  description: `${AUTHOR.name} is a professional software developer who writes on the intersection of software development and the great outdoors.`,
  keywords: DEFAULT_KEYWORDS,
  manifest: process.env.NODE_ENV === 'production' ? '/manifest.prod.json' : '/manifest.json',
  openGraph: {
    title: `${AUTHOR.name}'s blog`,
    description: `${AUTHOR.name} is a professional software developer who writes on the intersection of software development and the great outdoors.`,
    url: SITE_URL,
    siteName: `${AUTHOR.name}'s blog`,
    images: [
      {
        url: `${SITE_URL}/images/icon.png`,
        alt: `${AUTHOR.name} out hiking`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pprunty_',
    creator: '@pprunty_',
    images: [
      {
        url: `${SITE_URL}/images/icon.png`,
        alt: `${AUTHOR.name} out hiking`,
      },
    ],
  },
  icons: {
    icon: [
      { url: '/icons/192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/180x180.png', sizes: '180x180' },
    ],
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": AUTHOR.name,
    "jobTitle": "Software Engineer",
    "description": `${AUTHOR.name} is a professional software developer, who writes on the intersection of software development and the great outdoors.`,
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
