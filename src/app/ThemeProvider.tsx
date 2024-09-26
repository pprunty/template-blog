'use client';

import { ThemeProvider } from 'next-themes';
import { StyledComponentsRegistry } from './StyledComponentsRegistry';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider disableTransitionOnChange attribute="class" defaultTheme='system' enableSystem>
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
