// src/app/about/layout.tsx

import { PostContainer } from '@/components/PostContainer';
import BottomBar from '@/components/BottomBar'; // Import your BottomBar component

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PostContainer>
        {children}
        <BottomBar />
      </PostContainer>
    </>
  );
}
