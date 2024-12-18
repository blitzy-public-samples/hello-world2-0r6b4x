import { useState, useCallback } from 'react'; // ^18.0.0
import { ErrorBoundary } from '../utils/errorBoundary';

/**
 * Interface defining the return type of the useErrorBoundary hook
 */
interface ErrorBoundaryHook {
  error: Error | null;
  hasError: boolean;
  resetError: () => void;
}

/**
 * Custom React hook that provides error boundary functionality for functional components.
 * Manages error state and provides reset capabilities for error recovery.
 * 
 * Features:
 * - Error state management
 * - Error reset functionality
 * - Integration with ErrorBoundary component
 * - Type-safe implementation
 * 
 * @returns {ErrorBoundaryHook} Object containing error state and management functions
 * 
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const { error, hasError, resetError } = useErrorBoundary();
 * 
 *   if (hasError) {
 *     return (
 *       <div>
 *         Error occurred: {error?.message}
 *         <button onClick={resetError}>Retry</button>
 *       </div>
 *     );
 *   }
 * 
 *   return <div>Normal component content</div>;
 * };
 * ```
 */
const useErrorBoundary = (): ErrorBoundaryHook => {
  // Initialize error state
  const [error, setError] = useState<Error | null>(null);
  
  // Initialize error flag state
  const [hasError, setHasError] = useState<boolean>(false);

  /**
   * Memoized callback to reset error state and clear the error boundary
   * Maintains referential stability across renders
   */
  const resetError = useCallback(() => {
    // Reset local error states
    setError(null);
    setHasError(false);
    
    // Reset the ErrorBoundary component's state
    ErrorBoundary.reset();
  }, []);

  return {
    error,
    hasError,
    resetError
  };
};

export default useErrorBoundary;