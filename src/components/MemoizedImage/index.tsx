"use client";

import React, { useState } from "react";
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
  fill,       // Now supporting fill prop
  sizes,      // Now supporting sizes prop
  ...rest     // Rest operator for any other props you might want to pass
}: MemoizedImageProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    if (focusable) {
      setModalOpen(true);
    }
  };

  const closeModal = () => setModalOpen(false);

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
        fill={fill}  // Pass the fill prop
        sizes={sizes}  // Pass the sizes prop
        {...rest}  // Pass any other props dynamically
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
              {...rest}  // Ensure rest props are also passed to the modal image
            />
          </div>
        </div>
      )}
    </>
  );
});
