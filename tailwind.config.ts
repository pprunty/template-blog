import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./scripts/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }: { addVariant: (name: string, rule: string) => void }) {
      // Adding theme-system variant
      addVariant("theme-system", ".theme-system &");
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
