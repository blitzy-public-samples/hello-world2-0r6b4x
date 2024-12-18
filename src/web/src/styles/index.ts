/**
 * @fileoverview Central export point for all styling-related components, themes, and utilities.
 * This barrel file maintains a single source of truth for the application's styling system
 * and provides type-safe access to all styling resources.
 * 
 * @version 1.0.0
 */

// Import theme types and implementation
import { Theme, defaultTheme, isTheme } from './theme';

// Import global styles component
import GlobalStyles from './GlobalStyles';

// Re-export theme interface and implementation
export type { Theme };
export { defaultTheme, isTheme };

// Re-export global styles component
export { GlobalStyles };

/**
 * Type-safe theme tokens for direct access to theme values
 * These types provide autocompletion and type checking when accessing theme properties
 */
export type ThemeColors = Theme['colors'];
export type ThemeTypography = Theme['typography'];
export type ThemeSpacing = Theme['spacing'];

/**
 * Utility type to ensure type safety when extending the theme
 * @template T - The type to merge with the base theme
 */
export type ExtendTheme<T> = Theme & T;

/**
 * Type guard to check if a color value exists in the theme
 * @param color - The color value to check
 * @returns Boolean indicating if the color exists in the theme
 */
export const isThemeColor = (color: unknown): color is keyof Theme['colors'] => {
  return typeof color === 'string' && color in defaultTheme.colors;
};

/**
 * Type guard to check if a typography value exists in the theme
 * @param typographyKey - The typography key to check
 * @returns Boolean indicating if the typography key exists in the theme
 */
export const isThemeTypography = (typographyKey: unknown): typographyKey is keyof Theme['typography'] => {
  return typeof typographyKey === 'string' && typographyKey in defaultTheme.typography;
};

/**
 * Type guard to check if a spacing value exists in the theme
 * @param spacingKey - The spacing key to check
 * @returns Boolean indicating if the spacing key exists in the theme
 */
export const isThemeSpacing = (spacingKey: unknown): spacingKey is keyof Theme['spacing'] => {
  return typeof spacingKey === 'string' && spacingKey in defaultTheme.spacing;
};