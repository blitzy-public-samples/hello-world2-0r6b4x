/**
 * @fileoverview Barrel export file for custom React hooks
 * Centralizes all custom hooks used throughout the application for better organization
 * and maintainability. Follows TypeScript best practices and maintains a clean export pattern.
 * 
 * Current exports:
 * - useErrorBoundary: Hook for error boundary functionality and error state management
 * 
 * @version 1.0.0
 */

// Import error boundary hook from its module
// React version: ^18.0.0
import useErrorBoundary from './useErrorBoundary';

// Re-export the error boundary hook
export { useErrorBoundary };

// Type exports for better TypeScript integration
export type { ErrorBoundaryHook } from './useErrorBoundary';

/**
 * Note: As new hooks are added to the application, they should be:
 * 1. Imported above this comment
 * 2. Added to the exports section
 * 3. Have their types exported if applicable
 * 
 * This maintains a clean, organized structure for hook management.
 */