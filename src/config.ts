export const SITE_URL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://patrickprunty.vercel.app";

export const AUTHOR = {
  name: "Patrick Prunty",
  url: `${SITE_URL}/about`, // Full URL to the about page
  publisherName: "Patrick's Blog",
  publisherLogo: `${SITE_URL}/icon.png`,
  description: `Patrick Prunty is a professional software developer, who writes on the intersection of software development and the great outdoors.`,
  twitterHandle: "@pprunty_",
  twitterUrl: "https://twitter.com/pprunty_", // TODO: Update this with your Twitter URL
  stravaUrl: "https://www.strava.com/athletes/72636452", // TODO: Update this with your Strava URL
  githubUrl: "https://github.com/pprunty", // TODO: Update this with your GitHub URL
  linkedinUrl: "https://www.linkedin.com/in/patrickprunty/", // TODO: Update this with your LinkedIn URL
  redditUrl: "https://www.reddit.com/user/patrickprunty97/", // TODO: Update this with your Reddit URL
};

export const GA_MEASUREMENT_ID = "G-LSBKKYLNC4";
export const DEFAULT_COUNTER_ID = "ppruntyx86";

// Default section and keywords
export const DEFAULT_SECTION = "Life & Adventures";
export const DEFAULT_KEYWORDS = ["software development", "triathlon", "hiking", "travel", "outdoor adventures"];
