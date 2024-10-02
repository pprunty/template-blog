import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google';
import { GA_MEASUREMENT_ID } from "@/config";


export function Analytics() {
  // Only enable analytics in production mode
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  return (
    <>
      {/* Vercel & Google Analytics */}
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID}/>
      <VercelAnalytics />
    </>
  );
}
