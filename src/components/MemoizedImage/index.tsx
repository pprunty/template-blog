"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";  // Import ImageProps to use all valid props

interface MemoizedImageProps extends Omit<ImageProps, 'onClick'> { // Extend the props from ImageProps except onClick
  focusable?: boolean;  // Add any custom props (like focusable) if needed
}

export const MemoizedImage = React.memo(function MemoizedImage({
  src,
  alt,
  width,
  height,
  priority,
  loading = "eager",
  focusable = true,
  fill,
  sizes,
  ...rest
}: MemoizedImageProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to prevent scrolling on mobile and desktop
  const preventScroll = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const openModal = () => {
    if (focusable) {
      setModalOpen(true);
      document.body.style.overflow = "hidden";  // Disable scrolling

      // Add event listeners to prevent scrolling on touch and wheel events
      document.addEventListener('touchmove', preventScroll, { passive: false });
      document.addEventListener('wheel', preventScroll, { passive: false });
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "";  // Re-enable scrolling

    // Remove event listeners to allow scrolling again
    document.removeEventListener('touchmove', preventScroll);
    document.removeEventListener('wheel', preventScroll);
  };

  // Ensure scrolling is restored when the modal is closed using the escape key or other methods
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";  // Cleanup on component unmount
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('wheel', preventScroll);
    };
  }, []);

  return (
    <>
      <Image
        src={src}
        alt={alt || "Image"}
        width={width}
        height={height}
        className={`mt-4 mb-4 ${focusable ? 'cursor-pointer' : ''}`}
        onClick={openModal}
        priority={priority}
        loading={loading}
        fill={fill}
        sizes={sizes}
        {...rest}
      />

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-45 backdrop-blur-lg dark:bg-black dark:bg-opacity-50 flex justify-center items-center z-50 p-4 transition-colors duration-300"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={src}
              alt={alt || 'Image'}
              width={width}
              height={height}
              className="cursor-pointer p-4"
              onClick={closeModal}
              priority={true}  // Ensure preloading for the modal image
              {...rest}  // Ensure rest props are also passed to the modal image
            />
          </div>
        </div>
      )}
    </>
  );
});
