import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import { Providers } from './ThemeProvider';
import "./globals.css";
import type { Viewport } from 'next';
import {Container} from '@/components/Container';
import Header from '@/components/Header';

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="var(--bg)" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
            <Container>
            <Header/>
          {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
