/**
 * @fileoverview Application Entry Point
 * Bootstraps the React application using React 18's createRoot API for concurrent rendering.
 * Implements strict type safety, error handling, and performance monitoring through web vitals.
 * 
 * @version 1.0.0
 * @requires React ^18.0.0
 * @requires ReactDOM ^18.0.0
 */

import React from 'react'; // ^18.0.0
import { createRoot } from 'react-dom/client'; // ^18.0.0
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Initializes and renders the React application with error handling
 * and performance monitoring.
 * 
 * @throws {Error} If root element is not found in the DOM
 */
const renderApp = (): void => {
  // Get root element with type safety
  const rootElement = document.getElementById('root');

  // Validate root element existence
  if (!rootElement) {
    throw new Error(
      'Failed to find root element. Ensure there is a <div id="root"></div> in your HTML.'
    );
  }

  try {
    // Create React 18 root instance
    const root = createRoot(rootElement);

    // Render App within StrictMode for development checks
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    // Initialize performance monitoring
    if (process.env.NODE_ENV === 'production') {
      // Production: Report to analytics service if configured
      reportWebVitals((metric) => {
        // Example: Send metrics to analytics
        // Analytics implementation would go here
        console.log(metric);
      });
    } else {
      // Development: Log metrics to console
      reportWebVitals();
    }
  } catch (error) {
    // Log render errors appropriately based on environment
    if (process.env.NODE_ENV === 'development') {
      console.error('Error rendering application:', error);
    }
    // Re-throw to trigger error boundary
    throw error;
  }
};

// Initialize application
renderApp();

// Enable Hot Module Replacement in development
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}