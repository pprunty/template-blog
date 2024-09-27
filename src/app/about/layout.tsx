// src/app/about/layout.tsx
import { PostContainer } from '@/components/PostContainer'; // Assuming it's exported with this name

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        {children}
    </>
  );
}
