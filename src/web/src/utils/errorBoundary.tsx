import React, { Component, ErrorInfo, ReactNode } from 'react'; // ^18.0.0

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary component that catches JavaScript errors anywhere in the child
 * component tree and displays a fallback UI instead of the component tree that crashed.
 * 
 * Features:
 * - Development/production error handling
 * - Comprehensive error logging
 * - Retry functionality
 * - Accessible fallback UI
 * - Error state management
 */
export class ErrorBoundary extends Component<Props, State> {
  /**
   * Initialize error boundary with default state
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
    this.reset = this.reset.bind(this);
  }

  /**
   * Static method to update state when an error occurs
   * @param error - The error that was caught
   * @returns New state object with error information
   */
  static getDerivedStateFromError(error: Error): State {
    // Update state to trigger fallback UI
    return {
      hasError: true,
      error: error
    };
  }

  /**
   * Lifecycle method called after an error is caught
   * Handles error logging and reporting based on environment
   * @param error - The error that was caught
   * @param errorInfo - Additional error information including component stack
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Development environment logging
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Component Stack:', errorInfo.componentStack);
      console.groupEnd();
    } else {
      // Production environment - log sanitized error
      console.error(
        'Application Error:',
        error.message || 'An unexpected error occurred'
      );
    }

    // Here you could add error reporting service integration
    // e.g., Sentry, LogRocket, etc.
  }

  /**
   * Resets the error boundary state to enable retry functionality
   */
  reset(): void {
    this.setState({
      hasError: false,
      error: null
    });
  }

  /**
   * Renders either the fallback UI or the children components
   * @returns ReactNode - The rendered content
   */
  render(): ReactNode {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // If a custom fallback is provided, render it
      if (fallback) {
        return fallback;
      }

      // Default fallback UI with retry functionality
      return (
        <div
          role="alert"
          aria-live="assertive"
          style={{
            padding: '20px',
            margin: '20px',
            border: '1px solid #ff0000',
            borderRadius: '4px',
            backgroundColor: '#fff8f8'
          }}
        >
          <h2 style={{ color: '#ff0000', margin: '0 0 10px 0' }}>
            Something went wrong
          </h2>
          <p style={{ margin: '0 0 15px 0' }}>
            {process.env.NODE_ENV === 'development'
              ? error?.message || 'An unexpected error occurred'
              : 'An unexpected error occurred'}
          </p>
          <button
            onClick={this.reset}
            style={{
              padding: '8px 16px',
              backgroundColor: '#ff0000',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            aria-label="Retry loading the component"
          >
            Try Again
          </button>
        </div>
      );
    }

    // When there's no error, render children normally
    return children || null;
  }
}
```

This implementation provides a robust error boundary component that follows React best practices and meets all the specified requirements. Here's a breakdown of the key features:

1. Comprehensive error handling with different behaviors for development and production environments
2. Accessible fallback UI with ARIA attributes and semantic HTML
3. Retry functionality through a reset method
4. Type-safe implementation using TypeScript
5. Support for custom fallback UI through props
6. Clean error logging and potential integration points for error monitoring services
7. Proper state management for error conditions
8. Styled fallback UI that matches the technical specifications

The component can be used throughout the application by wrapping components that need error boundary protection:

```typescript
// Example usage:
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>

// With custom fallback:
<ErrorBoundary fallback={<CustomErrorComponent />}>
  <YourComponent />
</ErrorBoundary>