/**
 * @file babel.config.ts
 * @description Babel configuration for React application with TypeScript support
 * @version 1.0.0
 */

// @babel/preset-env: ^7.0.0 - Smart preset for transpiling modern JavaScript features
import type { TransformOptions } from '@babel/core';

/**
 * Babel configuration object defining transpilation settings for the React application.
 * Ensures compatibility with modern and legacy browsers while supporting TypeScript
 * and React features.
 * 
 * @type {TransformOptions}
 */
const config: TransformOptions = {
  presets: [
    [
      /**
       * @babel/preset-env configuration
       * Handles JavaScript feature transpilation based on target environments
       */
      '@babel/preset-env',
      {
        // Browser targets aligned with browserslist configuration
        targets: {
          browsers: [
            '>0.2%',      // Browser versions with more than 0.2% market share
            'not dead',    // Exclude browsers without official support/updates
            'not op_mini all' // Exclude Opera Mini due to limited feature support
          ]
        },
        modules: 'esnext', // Preserve ES modules for better tree-shaking
        useBuiltIns: 'usage', // Automatically detect and include needed polyfills
        corejs: 3, // Use core-js version 3 for polyfills
      }
    ],
    [
      /**
       * @babel/preset-react configuration
       * Handles React-specific syntax transformation
       */
      '@babel/preset-react',
      {
        runtime: 'automatic', // Use new JSX transform from React 17+
        development: process.env.NODE_ENV === 'development', // Enable development-specific features
      }
    ],
    [
      /**
       * @babel/preset-typescript configuration
       * Handles TypeScript transpilation
       */
      '@babel/preset-typescript',
      {
        isTSX: true, // Enable TSX parsing
        allExtensions: true, // Process all file extensions
        allowNamespaces: true, // Enable TypeScript namespaces
      }
    ]
  ],
  plugins: [] // No additional plugins required for current specifications
};

export default config;