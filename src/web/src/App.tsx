/**
 * @fileoverview Root Application Component
 * Main entry point for the React application that implements the Hello World
 * display with global styling and strict TypeScript type safety.
 * 
 * @version 1.0.0
 * @requires React ^18.0.0
 */

import React, { FC } from 'react'; // ^18.0.0
import HelloWorld from './components/HelloWorld/HelloWorld';
import GlobalStyles from './styles/GlobalStyles';

/**
 * Root application component that serves as the main entry point.
 * Implements global styling and renders the HelloWorld component
 * with proper TypeScript type safety.
 * 
 * @component
 * @returns {JSX.Element} Application root containing GlobalStyles and HelloWorld component
 */
const App: FC = () => {
  return (
    <>
      {/* Apply global styles for consistent application-wide styling */}
      <GlobalStyles />
      
      {/* 
        Render HelloWorld component with default message
        Implementation satisfies Component Rendering requirement
        from Technical Specifications/1.3 SCOPE
      */}
      <HelloWorld message="Hello World" />
    </>
  );
};

// Display name for debugging and dev tools
App.displayName = 'App';

// Default export for application mounting
export default App;