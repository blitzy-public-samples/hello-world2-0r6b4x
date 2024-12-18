// styled-components v5.3.0
import 'styled-components';

// Type augmentation for DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

/**
 * Theme interface defining the structure of our application's theme
 * Contains tokens for colors, typography, and spacing
 */
export interface Theme {
  colors: {
    /**
     * Main background color - pure white
     */
    background: string;
    /**
     * Primary text color - pure black
     */
    text: string;
  };
  typography: {
    /**
     * System font stack for optimal text rendering across platforms
     */
    fontFamily: string;
    /**
     * Base font size in pixels
     */
    fontSize: number;
    /**
     * Regular font weight
     */
    fontWeight: number;
  };
  spacing: {
    /**
     * Full viewport height for container sizing
     */
    vertical: string;
    /**
     * Automatic horizontal centering
     */
    horizontal: string;
  };
}

/**
 * Default theme implementation providing concrete values
 * matching design specifications
 */
export const defaultTheme: Theme = {
  colors: {
    background: '#FFFFFF', // Pure white background
    text: '#000000', // Pure black text
  },
  typography: {
    // Modern system font stack for optimal performance and consistency
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    fontSize: 16, // Base font size of 16px
    fontWeight: 400, // Regular font weight
  },
  spacing: {
    vertical: '100vh', // Full viewport height
    horizontal: 'auto', // Automatic horizontal centering
  },
} as const; // Make the theme object deeply immutable

// Type guard to check if a value matches the Theme interface
export const isTheme = (theme: unknown): theme is Theme => {
  if (typeof theme !== 'object' || theme === null) return false;
  
  const themeObject = theme as Partial<Theme>;
  
  return (
    typeof themeObject.colors === 'object' &&
    typeof themeObject.typography === 'object' &&
    typeof themeObject.spacing === 'object'
  );
};