import { cache } from 'react';
import path from 'path';
import fs from 'fs/promises';
import { BlogPostType } from '@/types/BlogPost';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface BlogMetadata {
  title?: string;
  date?: string;
  image?: string;
  description?: string;
  excerpt?: string;
  type?: string;
  keywords?: string[];
  readingTime?: number;
  views?: number;
}

const MAX_DESCRIPTION_LENGTH = 200; // Set the max length for clamping

const getAllPosts = cache(async (): Promise<BlogPostType[]> => {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', '(post)');
  const dirEntries = await fs.readdir(postsDirectory, { withFileTypes: true });

  // Create an array of promises for each post's metadata
  const postsPromises = dirEntries.map(async (entry) => {
    if (
      entry.isDirectory() &&
      !['[slug]', 'layout.js', 'page.tsx', 'components'].includes(entry.name)
    ) {
      const slug = entry.name;
      const filePath = path.join(postsDirectory, slug, 'page.mdx');

      try {
        // Import the metadata from the MDX file
        const { metadata } = (await import(`./blog/(post)/${slug}/page.mdx`)) as { metadata: BlogMetadata };

        return {
          slug,
          title: metadata.title || 'Untitled Post',
          date: metadata.date || null,
          image: metadata.image || '',
          description: metadata.description || '',
          excerpt: metadata.excerpt || '',
          type: metadata.type || 'article',
          keywords: metadata.keywords || [],
          readingTime: metadata.readingTime || 5,
          views: metadata.views || 5,
        } as BlogPostType;
      } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return null; // Return null if there's an error
      }
    }
  });

  // Wait for all metadata to be fetched in parallel
  const posts = (await Promise.all(postsPromises)).filter(Boolean) as BlogPostType[];

  // Sort blog posts by latest date first
  posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  return posts;
});

// Create a memoized Image component to prevent re-renders
const OptimizedImage = React.memo(function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean; // Optional priority prop for critical images
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority} // Load critical images faster
      className="object-cover w-full h-full"
    />
  );
});

export default async function PostsPage() {
  const posts = await getAllPosts();

  const postsByYear = posts.reduce((acc, post) => {
    const year = post.date ? new Date(post.date).getFullYear() : 'Unknown Year';
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<string, BlogPostType[]>);

  return (
      <div className="mb-2 text-sm">
        {Object.entries(postsByYear).map(([year, posts]) => (
          <div key={year} className="mb-2">
            {/* Display the year as a header */}
            <h2 className="text-lg mb-2 text-primary dark:text-primary-dark font-semibold">
              {year}
            </h2>
            <ul className="list-none p-0">
              {posts.map((post) => (
                <li key={post.slug} className="mb-0 sm:mb-4">
                  <Link href={`/blog/${post.slug}`}>
                    <span
                      className="
                        flex items-center transition-all ease-in-out
                        border-b border-[#333] dark:border-[#fcfcfc] sm:border sm:border-gray-300 dark:sm:border-gray-600
                        sm:hover:border-gray-500 dark:sm:hover:border-gray-400
                        active:opacity-80 active:scale-98
                        py-4 sm:py-4 sm:px-4 sm:pb-4 sm:px-4
                      "
                    >
                      {/* Image Container with responsive sizes */}
                      {post.image && (
                        <div className="flex-shrink-0 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] overflow-hidden mr-4">
                          <OptimizedImage
                            src={post.image}
                            alt={post.title || "Blog post image"}
                            width={120}
                            height={120}
                            priority
                          />
                        </div>
                      )}

                      {/* Post Details */}
                      <div className="flex flex-col justify-between grow">
                        {/* Views */}
                        <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
                          {post.date} &#8226; {post.views} views
                        </span>

                        {/* Title */}
                        <span className="text-gray-900 text-lg dark:text-gray-100 font-semibold">
                          {post.title}
                        </span>

                        {/* Render tags below description */}
                        {post.keywords && post.keywords.length > 0 && (
                          <div className="mt-2 flex gap-2 flex-wrap">
                            {post.keywords.slice(0, 4).map((tag, index) => (
                              <span
                                key={index}
                                className="text-[11px] border font-mono border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-400 px-1"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Display description below tags */}
                        {post.description && (
                          <Description description={post.description} />
                        )}
                      </div>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  );
}

function Description({ description }: { description: string }) {
  const truncatedDescription = description.length > MAX_DESCRIPTION_LENGTH
    ? `${description.substring(0, 200)}...`
    : description;

  return (
    <div className="text-m text-gray-600 dark:text-gray-400 mt-2">
      {/* Clamped description with CSS line-clamp */}
      <p className="line-clamp-4">
        {truncatedDescription}
      </p>

      {/* Conditionally render "See more" only if the text is truncated */}
      {description.length > 200 && (
        <span className="inline text-black dark:text-white cursor-pointer hover:underline">
          See more
        </span>
      )}
    </div>
  );
}
