// tailwind.config.ts

import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

// Import the scrollbar-hide plugin
const scrollbarHide = require('tailwind-scrollbar-hide');

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./scripts/*.{js,ts,jsx,tsx,mdx}"
  ],
   theme: {
      extend: {
      }
    },
  plugins: [
    plugin(function ({ addVariant }: { addVariant: (name: string, rule: string) => void }) {
      // Adding theme-system variant
      addVariant("theme-system", ".theme-system &");
    }),
    scrollbarHide, // Add the scrollbar-hide plugin here
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
