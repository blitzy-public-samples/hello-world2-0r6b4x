/**
 * @fileoverview Barrel file that exports utility functions and components from the utils directory.
 * Provides a centralized entry point for all utility functionality with comprehensive type safety and documentation.
 * @version 1.0.0
 */

// Error Handling Components - React v18.0.0
export { ErrorBoundary } from './errorBoundary';

// Testing Utilities - @testing-library/react v13.0.0
export {
  renderWithProviders,
  createTestId,
  createWrapper,
  screen,
  fireEvent,
  waitFor
} from './testUtils';

// Type exports for enhanced type safety
export type {
  RenderOptions,
  RenderResult
} from './testUtils';

/**
 * @example
 * // Import error boundary for component error handling
 * import { ErrorBoundary } from '@/utils';
 * 
 * // Wrap components that need error boundary protection
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 * 
 * @example
 * // Import testing utilities for component testing
 * import { renderWithProviders, createTestId } from '@/utils';
 * 
 * // Use in test files
 * const testId = createTestId('MyComponent', 'button');
 * const { container } = renderWithProviders(<MyComponent />);
 */