// @testing-library/jest-dom v5.16.0
import '@testing-library/jest-dom';

// jest-environment-jsdom v29.0.0
import 'jest-environment-jsdom';

// Import custom test utilities
import { renderWithProviders } from '../utils/testUtils';

/**
 * Extend the global expect interface with DOM-specific matchers
 */
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveStyle(style: Record<string, any>): R;
      toBeVisible(): R;
      toHaveClass(className: string): R;
      // Add other @testing-library/jest-dom matchers as needed
    }
  }
}

/**
 * Validate test environment configuration
 */
const validateTestEnvironment = (): void => {
  // Verify JSDOM environment
  if (typeof window === 'undefined') {
    throw new Error('Test environment must include JSDOM');
  }

  // Verify extended matchers are loaded
  if (typeof expect.extend !== 'function') {
    throw new Error('@testing-library/jest-dom matchers not properly loaded');
  }
};

/**
 * Debug helper to log test environment configuration
 */
export const logTestEnvironment = (): void => {
  console.log('Test Environment Configuration:', {
    jsdomAvailable: typeof window !== 'undefined',
    testingLibraryDom: typeof expect.extend === 'function',
    customRenderAvailable: typeof renderWithProviders === 'function'
  });
};

// Run environment validation
validateTestEnvironment();

// Configure global test timeout
jest.setTimeout(10000);

// Configure test environment settings
beforeAll(() => {
  // Reset any global state before all tests
  jest.clearAllMocks();
});

beforeEach(() => {
  // Clean up DOM after each test
  document.body.innerHTML = '';
});

afterEach(() => {
  // Additional cleanup after each test if needed
  jest.clearAllTimers();
});

// Make custom render utility available globally
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      renderWithProviders: typeof renderWithProviders;
    }
  }
}

// Assign custom render utility to global scope
(global as any).renderWithProviders = renderWithProviders;

// Export commonly used testing utilities for convenience
export { renderWithProviders };