import React from 'react';
import Link from 'next/link';
import { BlogPostType } from '@/types/BlogPost';
// import Views from '@/components/Views'; // Import the Views component
import OptimizedImage from '@/components/OptimizedImage';

interface BlogPostListProps {
  postsByYear: Record<string, BlogPostType[]>;
}

const BlogPostList: React.FC<BlogPostListProps> = ({ postsByYear }) => {
  const sortedYears = Object.keys(postsByYear).sort((a, b) => {
    if (a === 'Unknown Year') return 1;
    if (b === 'Unknown Year') return -1;
    return parseInt(b) - parseInt(a);
  });

  return (
    <div className="mb-2 text-sm">
      {sortedYears.map((year) => (
        <div key={year} className="mb-2">
          <h1 className="text-2xl mb-0 sm:mb-4 sm:mt-0 mt-4 text-primary dark:text-primary-dark font-semibold">
            {year}
          </h1>
          <ul className="list-none p-0">
            {postsByYear[year].map((post, index) => (
              <li key={post.slug} className="mb-0 sm:mb-4">
                {index === 0 ? (
                  // Headline article for the first post
                  <Link
                    href={`/blog/${post.slug}`}
                    className="no-underline cursor-pointer"
                    prefetch={index < 6}
                  >
                    <div
                      className="
                       transition-all ease-in-out
                       border-b border-[#313131] dark:border-[#fcfcfc]
                       sm:border-2 sm:border-gray-200 dark:sm:border-[#313131]
                       sm:hover:border-gray-500 dark:sm:hover:border-gray-400
                       active:opacity-80 active:scale-98
                       py-4 sm:py-4 sm:px-4
                       relative
                     "
                    >
                      {post.draft && (
                        <div className="absolute top-2 z-50 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-tl-lg rounded-br-lg">
                          Draft
                        </div>
                      )}
                      {post.image && (
                        <div className="relative w-full h-[200px] mt-2 sm:h-[300px] overflow-hidden mb-4">
                          <OptimizedImage
                            src={post.image}
                            alt={post.title || 'Blog post image'}
                            priority
                            loading={'eager'}
                          />
                        </div>
                      )}
                      <div className="flex flex-col justify-between grow">
                        <span className="text-2xl font-bold mt-2">
                          {post.title}
                        </span>
                        {post.keywords && post.keywords.length > 0 && (
                          <div className="mt-2 flex gap-2 flex-wrap">
                            {post.keywords.slice(0, 4).map((tag, index) => (
                              <span
                                key={index}
                                className="text-[11px] text-lowercase border font-mono border-gray-400 text-gray-700 dark:text-gray-300 px-1"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        {post.description && (
                          <span className="mt-2 text-gray-700 dark:text-gray-300">
                            <p className="text-[16px] line-clamp-4">
                              {post.description}
                            </p>
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ) : (
                  // Regular list item for other posts
                  <Link
                    href={`/blog/${post.slug}`}
                    className="no-underline cursor-pointer"
                    prefetch={true}
                  >
                    <div
                      className="
                       flex items-center transition-all ease-in-out
                       border-b border-[#313131] dark:border-[#fcfcfc]
                       sm:border-2 sm:border-gray-200 dark:sm:border-[#313131]
                       sm:hover:border-gray-500 dark:sm:hover:border-gray-400
                       active:opacity-80 active:scale-98
                       py-4 sm:py-4 sm:px-4
                       relative
                     "
                    >
                      {post.draft && (
                        <div className="absolute top-2 z-50 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-tl-lg rounded-br-lg">
                          Draft
                        </div>
                      )}
                      {post.image && (
                        <div className="relative w-[113px] h-[113px] xs:w-[80px] xs:h-[80px] sm:w-[110px] sm:h-[110px] overflow-hidden mr-4 flex-shrink-0">
                          <OptimizedImage
                            src={post.image}
                            alt={post.title || 'Blog post image'}
                            sizes="(max-width: 640px) 80px, (min-width: 640px) 113px, (min-width: 768px) 110px"
                            priority={index === 0} // Prioritize the first image
                          />
                        </div>
                      )}
                      <div className="flex flex-col justify-between grow">
                        {/* Views Component Positioned above the Title on the Left */}
                        <span className="text-xl font-semibold">
                          {post.title}
                        </span>

                        {/*                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-[11px] mt-1">
                        {post.date && (
                          <span className="mr-4 font-mono text-[12px]">
                            {post.date} | {post.readingTime} min read | {post.slug}
                          </span>
                        )}
                      </div>*/}
                        {post.keywords && post.keywords.length > 0 && (
                          <div className="mt-2 flex gap-2 flex-wrap">
                            {post.keywords.slice(0, 4).map((tag, index) => (
                              <span
                                key={index}
                                className="text-[11px] text-lowercase border font-mono border-gray-400 text-gray-700 dark:text-gray-300 px-1"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        {post.description && (
                          <span className="mt-2 text-gray-700 dark:text-gray-300">
                            <p className="text-[16px] line-clamp-4">
                              {post.description}
                            </p>
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
