// @testing-library/react v13.0.0
import { 
  render, 
  RenderOptions, 
  RenderResult, 
  screen, 
  fireEvent, 
  waitFor 
} from '@testing-library/react';

// styled-components v5.3.0
import { 
  ThemeProvider, 
  DefaultTheme 
} from 'styled-components';

// react v18.0.0
import { 
  ReactElement, 
  ReactNode, 
  FC 
} from 'react';

// Default theme for testing
const defaultTheme: DefaultTheme = {
  // Add theme properties as needed for your application
  colors: {
    primary: '#000000',
    background: '#FFFFFF'
  }
};

/**
 * Creates a wrapper component with all necessary providers for testing
 * @param children - React nodes to be wrapped with providers
 * @returns Functional component with all providers configured
 */
export const createWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  );
};

/**
 * Interface extending RenderResult with custom utilities
 */
interface CustomRenderResult extends RenderResult {
  rerender: (ui: ReactElement) => void;
}

/**
 * Enhanced render utility that wraps components with necessary providers
 * @param ui - React element to render
 * @param options - Optional render options to customize rendering behavior
 * @returns Extended render result with additional utilities
 */
export const renderWithProviders = (
  ui: ReactElement,
  options?: Partial<RenderOptions>
): CustomRenderResult => {
  const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
    return createWrapper({ children });
  };

  const renderOptions: RenderOptions = {
    wrapper: Wrapper,
    ...options
  };

  const renderResult = render(ui, renderOptions);

  return {
    ...renderResult,
    rerender: (ui: ReactElement) => renderResult.rerender(
      <Wrapper>{ui}</Wrapper>
    )
  };
};

/**
 * Generates consistent and type-safe data-testid attributes
 * @param componentName - Name of the component being tested
 * @param elementName - Specific element identifier within the component
 * @returns Formatted test ID string
 * @throws Error if parameters are empty strings
 */
export const createTestId = (
  componentName: string,
  elementName: string
): string => {
  if (!componentName || !elementName) {
    throw new Error('Component name and element name must not be empty');
  }

  return `${componentName.toLowerCase()}-${elementName.toLowerCase()}`;
};

// Re-export commonly used testing utilities for convenience
export {
  screen,
  fireEvent,
  waitFor
};

// Type exports for enhanced type safety in tests
export type {
  RenderOptions,
  RenderResult
};