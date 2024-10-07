// src/app/blog/[slug]/header.tsx
import { getViewCount } from '@/utils/fetchViewCount';
import { formatDistanceToNow } from 'date-fns';
import { AUTHOR } from '@/config';
import formatDate from '@/utils/formatDate';
import Views from '@/components/Views';

interface HeaderProps {
  slug: string;
}

export default async function Header({ slug }: HeaderProps) {
  // Import the metadata from the MDX file
  const { metadata } = await import(`@/posts/${slug}/page.mdx`);
  const views = await getViewCount(slug);

  console.log("Got the metadata for the header")

  const postDate = new Date(metadata.date);
  const timeAgo = formatDistanceToNow(postDate, { addSuffix: true });

  return (
    <div suppressHydrationWarning={true}>
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
          <Views id={slug} defaultValue={views} incrementOnMount={true} />
        </span>
      </p>
    </div>
  );
}
