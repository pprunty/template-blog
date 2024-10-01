// components/Views/index.tsx

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
        let count;
        if (incrementOnMount && !hasIncremented.current) {
          count = await incrementViewCount(id);
          hasIncremented.current = true;
        } else {
          count = await getViewCount(id);
        }
        setViews(count);
      } catch (error) {
        console.error('Error fetching/incrementing view count:', error);
      }
    };

    fetchViews();
  }, [id, incrementOnMount]);

  return <span>{views} views</span>;
}
