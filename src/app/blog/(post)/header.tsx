"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import useSWR from "swr";
import { getViewCount } from '@/utils/fetchViewCount';
import { formatDistanceToNow } from 'date-fns';
import { AUTHOR } from '@/config';
import formatDate from '@/utils/formatDate';
import Views from '@/components/Views';

// Fetcher function for the MDX metadata
const fetchMetadata = async (slug: string) => {
  const { metadata } = await import(`./${slug}/page.mdx`);
  return metadata;
};

export default function Header() {
  const segments = useSelectedLayoutSegments();
  if (!segments || segments.length === 0) return <></>;

  const slug = segments[0];

  // Using SWR to fetch MDX metadata
  const { data: metadata, error: metadataError } = useSWR(slug ? `mdx-metadata-${slug}` : null, () => fetchMetadata(slug));

  // Using SWR to fetch view count
  const { data: views, error: viewsError } = useSWR(slug ? `views-${slug}` : null, () => getViewCount(slug));

  if (metadataError || viewsError) return <div>Error loading post...</div>;
  if (!metadata || views === undefined) return <div>Loading...</div>;

  const postDate = new Date(metadata.date);
  const timeAgo = formatDistanceToNow(postDate, { addSuffix: true });

  return (
    <div>
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
