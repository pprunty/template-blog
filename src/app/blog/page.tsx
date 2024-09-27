import { cache } from 'react';
import path from 'path';
import fs from 'fs/promises';
import { BlogPostType } from '@/types/BlogPost'; // Make sure BlogPostType matches the structure of your posts
import Link from 'next/link'; // Import Link from next/link
import Image from 'next/image'; // Import Image from next/image
import { Suspense } from "react";

// Define metadata type
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

// Memoize the function to avoid repeated file reads
const getAllPosts = cache(async (): Promise<BlogPostType[]> => {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', '(post)');
  const dirEntries = await fs.readdir(postsDirectory, { withFileTypes: true });
  const posts: BlogPostType[] = [];

  for (const entry of dirEntries) {
    if (
      entry.isDirectory() &&
      !['[slug]', 'layout.js', 'page.tsx', 'components'].includes(entry.name)
    ) {
      const slug = entry.name;
      const filePath = path.join(postsDirectory, slug, 'page.mdx');

      try {
        // Type metadata explicitly
        const { metadata } = (await import(`./(post)/${slug}/page.mdx`)) as { metadata: BlogMetadata };

        // Push post data into posts array
        posts.push({
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
        });
      } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
      }
    }
  }

  // Sort posts by date, ensuring date is properly handled
  posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  return posts;
});

export default async function PostsPage() {
  const posts = await getAllPosts();

  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = post.date ? new Date(post.date).getFullYear() : 'Unknown Year';
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<string, BlogPostType[]>);

  return (
    <Suspense fallback={null}>
      <div className="font-mono m-auto mb-10 text-sm">
        {Object.entries(postsByYear).map(([year, posts]) => (
          <div key={year} className="mb-8">
            {/* Display the year as a header */}
            <h2 className="text-lg font-semibold mb-4">{year}</h2>
            <ul className="list-none p-0">
              {posts.map((post) => (
                <li key={post.slug} className="mb-4">
                  <Link href={`/blog/${post.slug}`}>
                    <span
                      className="flex flex-row transition-[background-color] hover:bg-gray-100 dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222] border-y border-gray-200 dark:border-[#313131] p-4"
                    >
                      {/* Image Container with responsive sizes */}
                      {post.image && (
                        <div className="w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] md:w-[60px] md:h-60px] lg:w-[60px] lg:h-[60px] flex-shrink-0 overflow-hidden mr-4">
                          <Image
                            src={post.image}
                            alt={post.title || "Blog post image"}
                            width={200}
                            height={200}
                            className="object-cover w-full h-full" // Ensure images fit correctly
                          />
                        </div>
                      )}

                      {/* Post Details */}
                      <div className="flex flex-col justify-between grow">
                        {/* Views Count */}
{/*                        <span className="text-gray-500 dark:text-gray-500 text-xs mb-1">
                          {post.views || 5} views
                        </span>*/}

                        {/* Title */}
                        <span className="dark:text-gray-100">
                          {post.title}
                        </span>

                        {/* Description */}

                        {/* Render tags below title and description */}
                        {post.keywords && post.keywords.length > 0 && (
                          <div className="mt-2 flex gap-2 flex-wrap">
                            {post.keywords.slice(0, 4).map((tag, index) => (
                              <span
                                key={index}
                                className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1"
                              >
                                {tag} {/* No rounded class for square corners */}
                              </span>
                            ))}
                          </div>
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
    </Suspense>
  );
}
