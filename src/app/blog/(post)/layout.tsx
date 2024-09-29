// src/app/about/layout.tsx
import BottomBar from '@/components/BottomBar'; // Import your BottomBar component

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        {children}
        <BottomBar />
        <h1 className="text-2xl font-bold mb-1 dark:text-gray-100">
            Recommended For You:
          </h1>
    </>
  );
}
