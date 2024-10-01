"use client";

import { useEffect, useState } from 'react';

interface ViewsProps {
  id: string;
  defaultValue?: number;
}

export default function Views({ id, defaultValue = 0 }: ViewsProps) {
  const [views, setViews] = useState(defaultValue);

  useEffect(() => {
    // Fetch view count from your API or analytics service
    fetch(`/api/views/${id}`)
      .then((res) => res.json())
      .then((data) => setViews(data.views));
  }, [id]);

  return <>{views} views</>;
}
