'use client';

import {MemoizedImage} from '@/components/MemoizedImage';

interface PhotoGridProps {
  images: string[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 py-4">
      {images.map((src, index) => (
        <div key={index} className="relative aspect-square">
          <MemoizedImage
            src={src}
            alt={`Photo ${index + 1}`}
            width={500}
            height={500}
            loading={"lazy"}
            priority={false}
            sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
