'use client';

import React, { useEffect, useRef, useState } from 'react';
import OptimizedImage from '@/modules/common/components/OptimizedImage';

interface ZoomImageProps {
  src: string;
  alt?: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  className?: string;
  sizes?: string;
  inView: boolean;
}

const ZoomImage: React.FC<ZoomImageProps> = ({
  src,
  alt = 'Image',
  priority = false,
  loading = 'lazy',
  className = '',
  sizes,
  inView,
}) => {
  return (
    <div
      className={`relative w-full h-[200px] sm:h-[300px] overflow-hidden
                  transition-transform duration-[1500ms] ease-out
                  ${inView ? 'scale-100' : 'scale-110'}`}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        priority={priority}
        loading={loading}
        sizes={sizes}
        className={`object-cover w-full h-full ${className}`}
      />
    </div>
  );
};

interface PersonCardProps {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt?: string;
  blackAndWhite?: boolean;
  className?: string; // Allow additional class names for PersonCard
}

const PersonCard: React.FC<PersonCardProps> = ({
  name,
  role,
  imageSrc,
  imageAlt = '',
  blackAndWhite = false,
  className = '', // Default to an empty string if no className is provided
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentCardRef = cardRef.current; // Copy the ref value to a variable

    if (!currentCardRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(currentCardRef);

    return () => {
      observer.unobserve(currentCardRef); // Use the copied ref value here
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-[#E6E6E6] dark:bg-[#252525] w-full sm:max-w-xs lg:max-w-xs mx-auto overflow-hidden
                  transition-[border-radius] duration-[1500ms] ease-out ${
                    inView ? 'rounded-[3.5rem]' : 'rounded-[1rem]'
                  } ${className}`} // Apply additional class names
      style={{ minHeight: '300px' }}
    >
      {/* Name and Role Section */}
      <div className="mb-2 p-8">
        <p className="text-lg font-mono font-semibold tracking-tight">{name}</p>
        <p className="text-md pl-10 text-gray-400 tracking-tight">{role}</p>
      </div>

      {/* ZoomImage Section */}
      <ZoomImage
        src={imageSrc}
        alt={imageAlt || name}
        sizes="(min-width: 1600px) 390px, (min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className={`w-full h-full ${blackAndWhite ? 'grayscale' : ''} object-cover`}
        inView={inView}
      />
    </div>
  );
};

export default PersonCard;
