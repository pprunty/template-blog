import { getAllPosts } from '@/__samwise/utils/getAllPosts';
import { Posts } from '@/modules/blog/templates/ArchiveList';
import { AUTHOR, SITE_URL, DEFAULT_KEYWORDS } from '@/config';
import { Metadata } from 'next';

// Revalidate the page every 60 seconds
export const revalidate = 60;

// Define metadata for the Archive Page
export const metadata: Metadata = {
  title: `Archived Posts - ${AUTHOR.name}`,
  description: `Explore the archived posts by ${AUTHOR.name}. Find all the posts that have been published in the past.`,
  openGraph: {
    title: `Archived Posts - ${AUTHOR.name}`,
    description: `Explore the archived posts by ${AUTHOR.name}.`,
    url: `${SITE_URL}/blog/archive`,
    siteName: `Archived Posts by ${AUTHOR.name}`,
    images: [
      {
        url: `${SITE_URL}/icon.webp`,
        alt: `${AUTHOR.name}`,
      },
    ],
    type: 'website',
  },
  metadataBase: new URL(SITE_URL),
};

export default async function ArchivePage() {
  // Fetch all posts, overriding the default limit
  const posts = await getAllPosts(true, 0); // Pass 0 to fetch all posts

  return (
    <>
      <Posts posts={posts} />
    </>
  );
}
