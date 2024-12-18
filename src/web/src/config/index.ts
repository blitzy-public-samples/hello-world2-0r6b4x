/**
 * @fileoverview Central configuration file that aggregates and exports all configuration settings
 * for the Hello World application. Provides a single point of access for application-wide
 * configuration including constants, environment settings, and type definitions.
 * @version 1.0.0
 */

// Import configuration constants
// @version 1.0.0
import {
  APP_CONFIG,
  TYPOGRAPHY_CONFIG,
  LAYOUT_CONFIG,
  // Individual config members for direct access
  APP_NAME,
  APP_VERSION,
  IS_PRODUCTION,
  IS_DEVELOPMENT,
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_WEIGHT,
  BREAKPOINTS,
  CONTAINER_MAX_WIDTH
} from './constants';

// Import environment configuration
// @version 1.0.0
import { environment } from './environment';

/**
 * Type definition for the aggregated configuration object
 * Combines all configuration aspects into a single, strongly-typed interface
 */
interface ApplicationConfig {
  readonly app: typeof APP_CONFIG;
  readonly typography: typeof TYPOGRAPHY_CONFIG;
  readonly layout: typeof LAYOUT_CONFIG;
  readonly environment: typeof environment;
}

/**
 * Aggregated configuration object that combines all configuration aspects
 * Provides a single point of access for all application configuration
 * @constant
 */
export const config: ApplicationConfig = {
  app: APP_CONFIG,
  typography: TYPOGRAPHY_CONFIG,
  layout: LAYOUT_CONFIG,
  environment
} as const;

// Freeze the configuration object to prevent runtime modifications
Object.freeze(config);

// Re-export individual configuration objects for direct access
export {
  APP_CONFIG,
  TYPOGRAPHY_CONFIG,
  LAYOUT_CONFIG,
  environment
};

// Re-export individual configuration members for convenience
export {
  // App configuration
  APP_NAME,
  APP_VERSION,
  IS_PRODUCTION,
  IS_DEVELOPMENT,
  
  // Typography configuration
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_WEIGHT,
  
  // Layout configuration
  BREAKPOINTS,
  CONTAINER_MAX_WIDTH
};

/**
 * Default export of the complete configuration object
 * Provides a clean import syntax for consuming components
 * @example
 * import config from '@config';
 * console.log(config.app.APP_NAME);
 */
export default config;

/**
 * Type guard to validate configuration object structure
 * Useful for runtime validation of configuration values
 * @param config - Configuration object to validate
 * @returns True if the configuration object is valid
 */
export function isValidConfig(config: unknown): config is ApplicationConfig {
  if (typeof config !== 'object' || config === null) {
    return false;
  }

  const requiredKeys = ['app', 'typography', 'layout', 'environment'];
  return requiredKeys.every(key => key in config);
}

// Validate configuration on module initialization
if (!isValidConfig(config)) {
  throw new Error('Invalid configuration structure detected');
}