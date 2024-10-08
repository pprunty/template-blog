"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  sizes,
  priority,
  loading,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-300 dark:bg-gray:800 animate-pulse"></div>
      )}
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        priority={priority}
        loading={loading}
        fill
        className={`object-cover transition-opacity duration-100 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default OptimizedImage;
