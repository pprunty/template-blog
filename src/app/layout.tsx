import { Inter } from 'next/font/google';
import "./globals.css";
import { AUTHOR, SITE_URL, DEFAULT_KEYWORDS } from '@/config';
import { doge } from "./doge";
import { themeEffect } from "@/components/ThemeSwitcher/theme-effect";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Viewport } from 'next';
import { Suspense } from "react";
import type { Metadata } from 'next';
import dynamic from 'next/dynamic'; // Import dynamic

const Analytics = dynamic(() => import('./analytics'), { ssr: false });

// Define viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: "transparent",
};

// Font settings
const inter = Inter({
  subsets: ['latin'], // Only include necessary subsets
  weight: ['400', '700'], // Specify required font weights
});

// Define metadata
export const metadata: Metadata = {
  title: `${AUTHOR.name}'s blog`,
  description: `${AUTHOR.description}`, // Use AUTHOR's updated description from config
  keywords: DEFAULT_KEYWORDS,
  manifest: process.env.NODE_ENV === 'production' ? '/manifest.prod.json' : '/manifest.json',
  openGraph: {
    title: `${AUTHOR.name}'s blog`,
    description: `${AUTHOR.description}`, // Use AUTHOR's updated description from config
    url: SITE_URL,
    siteName: `${AUTHOR.name}'s blog`,
    images: [
      {
        url: `${SITE_URL}/icon.png`,
        alt: `${AUTHOR.name} out hiking`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: `${AUTHOR.twitterHandle}`,
    creator: `${AUTHOR.twitterHandle}`,
    images: [
      {
        url: `${SITE_URL}/icon.png`,
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
    "description": `${AUTHOR.description}`,
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
        {/* ensure your logo/icon is named "icon.png" and in the public directory for favicon support */}
        <link rel="icon" href="/icons/32x32.png" sizes="any" />
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
