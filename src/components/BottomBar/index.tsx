"use client";

import React from 'react';
import ShareButton from '@/components/ShareButton'; // Assuming ShareButton component is in the same directory
import { useRouter } from 'next/navigation';

const BottomBar = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex justify-between items-center w-full max-w-2xl mt-10 mb-5 md:mb-10">
      <button
        onClick={handleBack}
        className="text-sm uppercase font-mono font-medium cursor-pointer transition-colors duration-300 hover:text-gray-400"
      >
        &larr; Back
      </button>
      <ShareButton />
    </div>
  );
};

export default BottomBar;
