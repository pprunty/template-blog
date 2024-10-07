"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import { getViewCount } from '@/utils/fetchViewCount';
import { formatDistanceToNow } from 'date-fns';
import { AUTHOR, SITE_URL, DEFAULT_SECTION } from '@/config';
import formatDate from '@/utils/formatDate';
import Views from '@/components/Views';
import Head from "next/head";
import { cache } from "react"; // cache utility to cache metadata fetch
import useSWR from "swr";

// Caching metadata fetch
const fetchMetadata = cache(async (slug: string) => {
  const { metadata } = await import(`./${slug}/page.mdx`);
  return metadata;
});

export default function Header() {
  const segments = useSelectedLayoutSegments();

  // Call useSWR unconditionally
  const slug = segments && segments.length > 0 ? segments[0] : null;

  const { data: metadata, error: metadataError } = useSWR(
    slug ? `mdx-metadata-${slug}` : null,
    () => slug ? fetchMetadata(slug) : null,  // Ensuring slug is a string before calling the fetcher
    { suspense: false }
  );

  const { data: views, error: viewsError } = useSWR(
    slug ? `views-${slug}` : null,
    () => slug ? getViewCount(slug) : null,  // Ensuring slug is a string before calling the fetcher
    { suspense: false }
  );

  // Early return for error state
  if (metadataError || viewsError) return <div>Error loading post...</div>;

  // Loading state
  if (!metadata || !views) return <div>Loading...</div>;

  const postDate = new Date(metadata.date);
  const timeAgo = formatDistanceToNow(postDate, { addSuffix: true });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": 'Article',
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`
    },
    "headline": metadata.title,
    "description": metadata.description,
    "image": metadata.image ? `${SITE_URL}${metadata.image}` : undefined,
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
    "articleBody": metadata.articleBody || '',
    "keywords": metadata.keywords,
    "articleSection": DEFAULT_SECTION
  };

  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      {/* Header Section */}
      <h1 className="text-2xl font-bold mb-1 dark:text-gray-100">
        {metadata.title}
      </h1>
      <p className="font-mono flex text-xs text-gray-700 dark:text-gray-300">
        <span className="flex-grow">
          <span className="hidden md:inline">
            <span>
              <a
                href={AUTHOR.url}
                className="hover:text-gray-400 dark:hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                {AUTHOR.name}
              </a>
            </span>
            <span className="mx-2">|</span>
          </span>
          <span suppressHydrationWarning={true}>
            {formatDate(metadata.date)} ({timeAgo})
          </span>
        </span>
        <span className="pr-1.5" suppressHydrationWarning={true}>
          {slug && <Views id={slug} defaultValue={views} incrementOnMount={true} />}
        </span>
      </p>
    </div>
  );
}
