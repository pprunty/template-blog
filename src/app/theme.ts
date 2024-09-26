// theme.ts
export const lightThemeVars = {
  '--background': '#fff',
  '--text': '#333',
  '--button-background': 'transparent',
  '--button-text': '#333',
  '--button-border': '#e3e2e0',
  '--button-hover-background': '#e5e7eb',
  '--input-text': '#333',
  '--input-background': 'transparent',
  '--input-border': '#e3e2e0',
  '--input-placeholder-color': '#999999',
  '--modal-background': '#fffefc',
  '--primary': '#772DE6',
  // Add more variables as needed
};

export const darkThemeVars = {
  '--background': 'rgb(28,28,28)',
  '--text': '#f0f0f0',
  '--button-background': 'transparent',
  '--button-text': '#F0F0F0',
  '--button-border': '#313131',
  '--button-hover-background': '#4b5563',
  '--input-text': '#f0f0f0',
  '--input-background': 'transparent',
  '--input-border': '#313131',
  '--input-placeholder-color': '#666666',
  '--modal-background': 'rgb(28,28,28)',
  '--primary': '#00BFFF',
  // Add more variables as needed
};

export const themeColors = {
  light: lightThemeVars,
  dark: darkThemeVars,
};
