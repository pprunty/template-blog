// app/blog/(post)/[slug]/head.tsx

import { AUTHOR, SITE_URL, DEFAULT_SECTION } from '@/config'; // Import variables from your config
import path from 'path';
import fs from 'fs/promises';

interface Params {
  params: {
    slug: string;
  };
}

export default async function Head({ params }: Params) {
  const { slug } = params;

  // Only import 'metadata' since 'MDXContent' is not used
  const { metadata } = await import(`./${slug}/page.mdx`);

  // Read the MDX file content
  const mdxFilePath = path.join(
    process.cwd(),
    'src',
    'app',
    'blog',
    '(post)',
    slug,
    'page.mdx'
  );
  const mdxContent = await fs.readFile(mdxFilePath, 'utf-8');

  // Extract article body (this is a simplistic approach)
  const articleBody = mdxContent.replace(/export const metadata = {[^}]*};/, '').trim();

  // Build JSON-LD data
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": metadata.type || 'Article',
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${slug}`
    },
    "headline": metadata.title,
    "description": metadata.description,
    "image": metadata.image ? `https://yourwebsite.com${metadata.image}` : undefined,
    "author": {
      "@type": "Person",
      "name": AUTHOR.name,
      "url": AUTHOR.url
    },
    "publisher": {
      "@type": "Organization",
      "name": AUTHOR.publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": AUTHOR.publisherLogo
      }
    },
    "datePublished": metadata.date,
    "dateModified": metadata.dateModified || metadata.date,
    "articleBody": articleBody, // Optionally extract article body if needed
    "keywords": metadata.keywords,
    "articleSection": DEFAULT_SECTION
  };

  // Remove undefined properties
    Object.keys(jsonLdData).forEach((key) => {
      if (jsonLdData[key as keyof typeof jsonLdData] === undefined) {
        delete jsonLdData[key as keyof typeof jsonLdData];
      }
    });

  return (
    <>
      {/* Existing metadata */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />

      {/* JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
    </>
  );
}
