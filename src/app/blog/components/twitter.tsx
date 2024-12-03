'use client';

import React, { useState, useEffect } from 'react';
import { TwitterEmbed } from 'react-social-media-embed';

interface TwitterProps {
  tweetUrl: string; // Full URL of the Twitter post
}

const Twitter: React.FC<TwitterProps> = ({ tweetUrl }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set to true only on client side after component mounts
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Don't render on the server side

  return (
    <div className="flex justify-center my-6">
      <div className="w-full max-w-lg rounded-2xl overflow-hidden border border-gray-300 shadow-md">
        <TwitterEmbed url={tweetUrl} width="100%" />
      </div>
    </div>
  );
};

export default Twitter;
