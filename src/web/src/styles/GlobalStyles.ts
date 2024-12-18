import { createGlobalStyle } from 'styled-components'; // v5.3.0
import { defaultTheme } from './theme';

/**
 * Global styles component that applies base styling across the entire application.
 * Implements typography, spacing, and layout requirements from the technical specification.
 * Uses theme values for consistent styling and maintainability.
 */
const GlobalStyles = createGlobalStyle<{ theme: typeof defaultTheme }>`
  /* CSS Reset and Box Sizing */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Base HTML and Body Styles */
  html, body {
    /* Typography settings from theme */
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize}px;
    font-weight: ${({ theme }) => theme.typography.fontWeight};
    
    /* Color settings from theme */
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    
    /* Text rendering optimizations */
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    /* Ensure full page height */
    width: 100%;
    height: 100%;
  }

  /* Root Container Layout */
  #root {
    /* Full viewport container with centered content */
    min-height: ${({ theme }) => theme.spacing.vertical};
    width: 100%;
    
    /* Flexbox centering */
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* Horizontal spacing */
    margin-left: ${({ theme }) => theme.spacing.horizontal};
    margin-right: ${({ theme }) => theme.spacing.horizontal};
  }

  /* Accessibility Improvements */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;