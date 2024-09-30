"use client";

import React, { useState } from 'react';

const ShareButton = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  // Function to detect if the user is on a desktop device
  const isDesktopDevice = () => {
    return window.innerWidth >= 1024; // Adjust width as needed for desktop detection
  };

  const handleShare = async () => {
    const url = window.location.href;
    const title = document.title;
    const text = 'Check out this blog post!';

    // Always show the notification on desktop devices
    if (isDesktopDevice()) {
      setIsNotificationVisible(true);
      setTimeout(() => setIsNotificationVisible(false), 2000); // Hide the notification after 2 seconds
    }

    if (navigator.share && !isDesktopDevice()) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        console.log('Successfully shared');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        if (!isDesktopDevice()) {
          // Show notification if it's not already shown on desktop
          setIsNotificationVisible(true);
          setTimeout(() => setIsNotificationVisible(false), 2000); // Hide the notification after 2 seconds
        }
      } catch (error) {
        console.error('Failed to copy URL:', error);
        alert('Failed to copy URL. Please copy it manually: ' + url);
      }
    }
  };

  return (
    <>
      <button
        onClick={handleShare}
        className="inline-flex items-center font-mono hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]"
        aria-label="Share"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          className="w-6 h-6 fill-current"
        >
          <path d="M242.57-60q-25.79 0-44.18-18.39T180-122.57v-449.07q0-25.79 18.39-44.18 18.39-18.38 44.18-18.38h126.25v50.25H242.57q-4.62 0-8.47 3.85-3.84 3.84-3.84 8.46v449.07q0 4.62 3.84 8.47 3.85 3.84 8.47 3.84h474.86q4.62 0 8.47-3.84 3.84-3.85 3.84-8.47v-449.07q0-4.62-3.84-8.46-3.85-3.85-8.47-3.85H590.36v-50.25h127.07q25.79 0 44.18 18.38Q780-597.43 780-571.64v449.07q0 25.79-18.39 44.18T717.43-60H242.57Zm211.89-283.13v-446.1l-85.64 85.64-36.05-36 146.82-146.56 146.56 146.56-35.79 36-85.64-85.64v446.1h-50.26Z" />
        </svg>
      </button>

      <div
        className={`fixed top-0 left-0 right-0 mx-auto transform mt-2 w-full max-w-full sm:w-2/5 h-10 text-center py-2 text-sm z-50
          transition-opacity duration-500 ease-in-out ${isNotificationVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}
          bg-black dark:bg-white text-white dark:text-black`}
      >
        <p className="m-0">Link copied</p>
      </div>
    </>
  );
};

export default ShareButton;
