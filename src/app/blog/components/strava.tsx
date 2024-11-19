'use client';

import React, { useEffect } from 'react';

interface StravaProps {
  activityId: string;
  styleType?: 'standard' | 'minimal';
}

const Strava: React.FC<StravaProps> = ({
  activityId,
  styleType = 'standard',
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://strava-embeds.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center my-6">
      <div
        className="strava-embed-placeholder rounded-2xl w-full max-w-2xl"
        data-embed-type="activity"
        data-embed-id={activityId}
        data-style={styleType}
      ></div>
    </div>
  );
};

export default Strava;
