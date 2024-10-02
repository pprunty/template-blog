"use client";

import { useSelectedLayoutSegments } from "next/navigation";
// import useSWR from "swr";
import { getViewCount } from '@/utils/fetchViewCount';
import { formatDistanceToNow } from 'date-fns';
import { AUTHOR } from '@/config';
import formatDate from '@/utils/formatDate';
import Views from '@/components/Views';

export default async function Header() {
  const segments = useSelectedLayoutSegments();

  console.log(segments[0])
  if (!segments || segments.length === 0) return <></>;

  const slug = segments[0];
  const { metadata } = await import(`./${slug}/page.mdx`);
  const views = await getViewCount(slug);

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
            {/* Views Component if you have one */}
              <span className="pr-1.5">
                  <Views id={slug} defaultValue={views} incrementOnMount={true} />
              </span>
          </p>
        </div>
  );
}