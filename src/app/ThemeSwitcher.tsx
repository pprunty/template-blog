'use client';

import { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from 'next-themes'; // or your custom useTheme hook

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        resolvedTheme === 'dark' ? '#000000' : '#ffffff'
      );
    }
  }, [resolvedTheme]);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, setTheme]);

  // Determine if dark mode is currently active
  const isDarkMode =
    resolvedTheme === 'dark' || (resolvedTheme === 'system' && systemTheme === 'dark');

  if (!mounted || !resolvedTheme) {
    return null; // Prevent rendering until the theme is resolved
  }

  return (
    <div
      className="inline-flex items-center hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]"
    >
      <DarkModeSwitch
        checked={isDarkMode} // Set based on resolved theme
        onChange={toggleTheme} // Toggle between dark and light modes
        size={18}
      />
    </div>
  );
};

export default ThemeSwitcher;
