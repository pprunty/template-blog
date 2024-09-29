import { cache } from 'react';
import path from 'path';
import fs from 'fs/promises';
import { BlogPostType } from '@/types/BlogPost';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from "react";

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
        const { metadata } = (await import(`./(post)/${slug}/page.mdx`)) as { metadata: BlogMetadata };

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

  posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  return posts;
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
    <Suspense fallback={null}>
      <div className="m-auto mb-10 text-sm font-mono">
        {Object.entries(postsByYear).map(([year, posts]) => (
          <div key={year} className="mb-8">
            {/* Display the year as a header */}
            <h2 className="text-m mb-4 text-gray-600 dark:text-gray-400 font-mono font-semibold">{year}</h2>
            <ul className="list-none p-0">
              {posts.map((post) => (
                <li key={post.slug} className="mb-4">
                  <Link href={`/blog/${post.slug}`}>
                    <span
                      className="
                        flex items-center  /* Centers image and content vertically */
                        transition-[border-color] ease-in-out
                        border-b border-gray-300 dark:border-gray-600
                        sm:border sm:border-gray-300 dark:sm:border-gray-600
                        sm:hover:border-gray-500 dark:sm:hover:border-gray-400
                        py-4 sm:px-4 /* Padding on x-axis only for sm and above */
                      "
                    >
                      {/* Image Container with responsive sizes */}
                      {post.image && (
                        <div className="flex-shrink-0 w-[100px] h-[100px] overflow-hidden mr-4">
                          <Image
                            src={post.image}
                            alt={post.title || "Blog post image"}
                            width={100}
                            height={100}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}

                      {/* Post Details */}
                      <div className="flex flex-col justify-between grow">
                        {/* Views */}
                        <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 mb-1">
                          {post.date} &#8226; {post.views} views
                        </span>

                        {/* Title */}
                        <span className="text-gray-900 text-m dark:text-gray-100 font-semibold">
                          {post.title}
                        </span>

                        {/* Render tags below description */}
                        {post.keywords && post.keywords.length > 0 && (
                          <div className="mt-2 flex gap-2 flex-wrap">
                            {post.keywords.slice(0, 4).map((tag, index) => (
                              <span
                                key={index}
                                className="text-[11px] border font-mono border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-400 px-1 "
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Display description below tags */}
                        {post.description && (
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            {post.description}
                          </p>
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
