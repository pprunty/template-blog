"use client";
import YT, { YouTubeProps } from 'react-youtube'; // Import YouTubeProps from react-youtube

export function YouTube(props: YouTubeProps) {
  return (
    <div className="w-full max-w-full my-5 relative overflow-hidden pt-[56.25%]">
      <div className="absolute top-0 left-0 w-full h-full">
        <YT {...props} />
      </div>
    </div>
  );
}
