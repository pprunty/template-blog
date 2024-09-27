// src/app/about/layout.tsx
import BottomBar from '@/components/BottomBar'; // Import your BottomBar component

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        {children}
        <BottomBar />
    </>
  );
}
