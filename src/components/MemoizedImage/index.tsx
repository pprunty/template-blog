"use client";

import React, { useState, useEffect, useRef } from "react";
import Image, { ImageProps } from "next/image";

interface MemoizedImageProps extends Omit<ImageProps, 'onClick'> {
  focusable?: boolean;
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
  const scrollPositionRef = useRef(0);

  const openModal = () => {
    if (focusable) {
      // Save the current scroll position
      scrollPositionRef.current = window.scrollY || window.pageYOffset;

      // Apply fixed positioning to the body
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';

      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);

    // Remove the fixed positioning
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';

    // Restore the scroll position
    window.scrollTo({
      top: scrollPositionRef.current,
      behavior: 'instant', // Use 'instant' or 'auto' for immediate scrolling
    });
  };

  useEffect(() => {
    // Cleanup on unmount to prevent side effects
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
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
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt || 'Image'}
              width={width}
              height={height}
              className="cursor-pointer p-4 bg-gray-100"
              onClick={closeModal}
              priority={true}
              {...rest}
            />
          </div>
        </div>
      )}
    </>
  );
});
