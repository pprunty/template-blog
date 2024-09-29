import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";
import type { Viewport } from 'next';
import Header from '@/components/Header';
import { doge } from "./doge";
import { themeEffect } from "@/components/ThemeSwitcher/theme-effect";
import 'highlight.js/styles/atom-one-dark.css';

// Define viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// Font settings (example with Inter)
const inter = Inter({ subsets: ['latin'] });

// Define metadata with ternary operator
const metadata: Metadata = {
  title: "PWA NextJS",
  description: "It's a simple progressive web application made with NextJS",
  generator: "Next.js",
  manifest: process.env.NODE_ENV === 'production' ? "/manifest.prod.json" : "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  authors: [
    {
      name: "imvinojanv",
      url: "https://www.linkedin.com/in/imvinojanv/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "/icons/180x180.png", sizes: "180x180" },
    { rel: "icon", url: "/icons/192x192.png", sizes: "192x192", type: "image/png" },
  ]
};

export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
             <meta name="google-site-verification" content="5GuQpmfOzq72Xmm56vDEj1o3L0LEngpUlkmqYPgn7iw" />
           </head>
      <body className={`dark:text-gray-100 max-w-2xl m-auto`}>
            <main className="p-6 pt-3 md:pt-6 min-h-screen">
            <Header/>
          {children}
          </main>
      </body>
    </html>
  );
}
