// app/blog/(post)/[slug]/page.tsx

import { Metadata } from 'next';
import { useMDXComponents } from '../../../../mdx-components';
import RelatedPosts from '@/components/RelatedPosts';
import { getAllPosts } from '@/utils/getAllPosts';
import BottomBar from '@/components/BottomBar';
import { formatDistanceToNow } from 'date-fns';
import { AUTHOR } from '@/config';
import formatDate from '@/utils/formatDate';
import Views from '@/components/Views';
import { getViewCount } from '@/utils/fetchViewCount';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

interface Params {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = params;
  const { metadata } = await import(`./${slug}/page.mdx`);
  return metadata as Metadata;
}

export default async function PostPage({ params }: Params) {
  const { slug } = params;
  const { default: MDXContent, metadata } = await import(`./${slug}/page.mdx`);
const views = await getViewCount(slug);

  const MDXComponents = useMDXComponents();

  // Format the date
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

      {/* Post Content */}
      <MDXContent components={MDXComponents} />

      {/* Related Posts */}
      <RelatedPosts
        currentPostSlug={slug}
        currentPostKeywords={metadata.keywords || []}
      />

      {/* Bottom Bar */}
      <BottomBar />
    </div>
  );
}
