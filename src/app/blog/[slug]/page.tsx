import RelatedPosts from '@/components/RelatedPosts';
import { getAllPosts } from '@/utils/getAllPosts';
import BottomBar from '@/components/BottomBar';
import { formatDistanceToNow } from 'date-fns';
import { AUTHOR } from '@/config';
import formatDate from '@/utils/formatDate';
import Views from '@/components/Views';
import ClientMDXContent from './ClientMDX'; // Import the client-side component

export async function generateStaticParams() {
  const posts = await getAllPosts();

  // Loop through the keys (slugs) of the hash map and return an array of slugs
  return Object.keys(posts).map((slug) => ({ slug }));
}

interface Params {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = params;
  const posts = await getAllPosts();

  // Look up the post by slug
  const post = posts[slug];
  if (!post) {
    return <div>Post not found</div>; // Handle case where post is not found
  }


  // Format the date
  const postDate = post.date ? new Date(post.date) : new Date(); // Fallback to current date if null
  const timeAgo = formatDistanceToNow(postDate, { addSuffix: true });

  return (
    <div>
      {/* Header Section */}
      <h1 className="text-2xl font-bold mb-1 dark:text-gray-100">
        {post.title}
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
            {formatDate(post.date || '')} ({timeAgo}) {/* Fallback to empty string */}
          </span>
        </span>
        {/* Views Component */}
        <span className="pr-1.5">
          <Views id={slug} defaultValue={post.views} incrementOnMount={true} />
        </span>
      </p>

      {/* Post Content */}
      <ClientMDXContent source={post.content} /> {/* Use the client component */}

      {/* Related Posts */}
      <RelatedPosts
        currentPostSlug={slug}
        currentPostKeywords={post.keywords || []}
      />

      {/* Bottom Bar */}
      <BottomBar />
    </div>
  );
}
