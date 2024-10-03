"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import useSWR from "swr";
import { getViewCount } from '@/utils/fetchViewCount';
import { formatDistanceToNow } from 'date-fns';
import { AUTHOR, SITE_URL, DEFAULT_SECTION } from '@/config'; // Make sure you have SITE_URL and DEFAULT_SECTION in your config
import formatDate from '@/utils/formatDate';
import Views from '@/components/Views';
import Head from "next/head"; // Import Head component

// Fetcher function for the MDX metadata
const fetchMetadata = async (slug: string) => {
  const { metadata } = await import(`./${slug}/page.mdx`);
  return metadata;
};

export default function Header() {
  const segments = useSelectedLayoutSegments();
  const slug = segments && segments.length > 0 ? segments[0] : null;

  // Using SWR to fetch MDX metadata
  const { data: metadata, error: metadataError } = useSWR(slug ? `mdx-metadata-${slug}` : null, () => {
    if (slug) {
      return fetchMetadata(slug);
    }
  }, {
    revalidateOnFocus: false,
  });

  // Using SWR to fetch view count
  const { data: views, error: viewsError } = useSWR(slug ? `views-${slug}` : null, () => {
    if (slug) {
      return getViewCount(slug);
    }
  }, {
    revalidateOnFocus: false,
  });

  // Early return for invalid states
  if (!slug || metadataError || viewsError) return <div>Error loading post...</div>;
  if (!metadata || views === undefined) return <div>Loading...</div>;

  const postDate = new Date(metadata.date);
  const timeAgo = formatDistanceToNow(postDate, { addSuffix: true });

  // Constructing the JSON-LD structured data
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
    "articleBody": metadata.articleBody || '', // Optionally extract article body if needed
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
        {/* Views Component */}
        <span className="pr-1.5" suppressHydrationWarning={true}>
          <Views id={slug} defaultValue={views} incrementOnMount={true} />
        </span>
      </p>
    </div>
  );
}
