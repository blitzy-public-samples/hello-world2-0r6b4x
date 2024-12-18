/**
 * @fileoverview Core type definitions and interfaces for the React application
 * @version 1.0.0
 */

// External imports
// @version ^18.0.0
import { ReactNode } from 'react';

/**
 * Base interface for React component props
 * Provides common properties used across components
 * Can be extended by other interfaces for specific components
 * 
 * @interface BaseProps
 * @example
 * interface MyComponentProps extends BaseProps {
 *   additionalProp: string;
 * }
 */
export interface BaseProps {
  /**
   * Child elements that can be passed to components
   * Allows for flexible component composition while maintaining type safety
   * 
   * @type {ReactNode}
   * @optional
   * @default undefined
   */
  children?: ReactNode;

  /**
   * Optional CSS class name for styling components
   * Enables consistent styling patterns across the application
   * 
   * @type {string}
   * @optional
   * @default undefined
   */
  className?: string;
}

/**
 * Type guard to check if a value is a non-null object
 * Useful for runtime type checking of props and other objects
 * 
 * @param value - The value to check
 * @returns {boolean} True if the value is a non-null object
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

/**
 * Type guard to check if a value is a valid ReactNode
 * Helps ensure type safety when working with component children
 * 
 * @param value - The value to check
 * @returns {boolean} True if the value is a valid ReactNode
 */
export function isValidReactNode(value: unknown): value is ReactNode {
  return value === undefined || value === null || 
         typeof value === 'string' || typeof value === 'number' ||
         typeof value === 'boolean' || React.isValidElement(value) ||
         Array.isArray(value);
}

// Type aliases for common React-related types
/**
 * Represents a function that can be used as an event handler
 * Provides type safety for event handling in components
 */
export type EventHandler<E extends React.SyntheticEvent> = (event: E) => void;

/**
 * Represents a style object that can be applied to React components
 * Ensures type safety when applying inline styles
 */
export type StyleObject = React.CSSProperties;

/**
 * Represents the ref object type for DOM elements
 * Provides type safety when working with refs
 */
export type DOMRef<T extends HTMLElement> = React.RefObject<T>;

// Export additional type utilities
/**
 * Makes all properties of a type required and non-nullable
 */
export type Required<T> = {
  [P in keyof T]-?: NonNullable<T[P]>;
};

/**
 * Makes all properties of a type optional
 */
export type Optional<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Extracts the type of an array element
 */
export type ArrayElement<T extends readonly unknown[]> = T extends readonly (infer E)[] ? E : never;