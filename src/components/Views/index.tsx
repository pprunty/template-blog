'use client';

import { useEffect, useState, useRef } from 'react';
import { getViewCount, incrementViewCount } from '@/utils/fetchViewCount';

interface ViewsProps {
  id: string;
  defaultValue?: number;
  incrementOnMount?: boolean;
}

export default function Views({ id, defaultValue = 0, incrementOnMount = false }: ViewsProps) {
  const [views, setViews] = useState<number>(defaultValue);
  const hasIncremented = useRef(false);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        if (process.env.NODE_ENV === 'development') {
          // In development mode, fetch the view count but don't increment
          const currentCount = await getViewCount(id);
          setViews(currentCount);
          return; // Skip increment logic in development
        }

        if (incrementOnMount && !hasIncremented.current) {
          // Increment view count if incrementOnMount is true and we're not in development
          const incrementedCount = await incrementViewCount(id);
          setViews(incrementedCount);
          hasIncremented.current = true;
        } else {
          // Only fetch the current view count if incrementOnMount is false
          const currentCount = await getViewCount(id);
          setViews(currentCount);
        }
      } catch (error) {
        console.error('Error fetching/incrementing view count:', error);
      }
    };

    fetchViews();
  }, [id, incrementOnMount]);

  return <span>{views} views</span>;
}
