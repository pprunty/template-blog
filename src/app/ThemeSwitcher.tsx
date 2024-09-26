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
    <DarkModeSwitch
      checked={isDarkMode} // Set based on resolved theme
      onChange={toggleTheme} // Toggle between dark and light modes
      size={18}
    />
  );
};

export default ThemeSwitcher;
