"use client";
import { useEffect, useState } from 'react';
import { getViewCount, incrementViewCount } from '@/utils/fetchViewCount'; // Adjust your imports

interface ViewsProps {
  id: string;
  defaultValue: number;
  incrementOnMount?: boolean;
}

const Views: React.FC<ViewsProps> = ({ id, defaultValue, incrementOnMount = false }) => {
  const [views, setViews] = useState<number>(defaultValue);

  useEffect(() => {
    async function fetchViews() {
      const count = await getViewCount(id);
      setViews(count);
    }

    fetchViews();

    if (incrementOnMount) {
      incrementViewCount(id).then((newCount) => setViews(newCount));
    }
  }, [id, incrementOnMount]);

  return (
    <span>{views} views</span>
  );
};

export default Views;
