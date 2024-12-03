import React from 'react';
import { BlogPostType } from '@/__samwise/types/BlogPost';
import BlogPost from '@/modules/blog/components/BlogPost';
interface PostListProps {
  posts: BlogPostType[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <div className="mb-2 text-sm">
    <ul className="list-none p-0">
      {posts.map((post, index) => (
        <li key={post.slug} className="mb-0 sm:mb-4">
          <BlogPost post={post} index={index} />
        </li>
      ))}
    </ul>
  </div>
);

export default PostList;
