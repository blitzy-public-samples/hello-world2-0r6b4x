/**
 * @fileoverview Environment configuration management with strict type safety and runtime validation
 * @version 1.0.0
 */

// Internal imports
import type { Environment, AppConfig } from '../types';

/**
 * Valid environment values
 * @constant
 */
const VALID_ENVIRONMENTS = ['development', 'production'] as const;

/**
 * Runtime type guard for Environment type
 * @param env - Value to check
 * @returns True if value is a valid environment
 */
const validateEnvironment = (env: string): env is Environment => {
  if (!VALID_ENVIRONMENTS.includes(env as Environment)) {
    throw new Error(
      `Invalid environment "${env}". Must be one of: ${VALID_ENVIRONMENTS.join(', ')}`
    );
  }
  return true;
};

/**
 * Retrieves and validates the current environment
 * @throws {Error} If environment is invalid
 * @returns Validated environment value
 */
const getEnvironment = (): Environment => {
  const env = process.env.NODE_ENV;
  
  try {
    if (env && validateEnvironment(env)) {
      return env as Environment;
    }
  } catch (error) {
    console.error(`Environment validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
  
  // Default to development if validation fails or env not set
  console.warn('Environment not set or invalid, defaulting to development');
  return 'development';
};

/**
 * Type-safe check for production environment
 * @returns True if running in production
 */
const isProduction = (): boolean => {
  return getEnvironment() === 'production';
};

/**
 * Type-safe check for development environment
 * @returns True if running in development
 */
const isDevelopment = (): boolean => {
  return getEnvironment() === 'development';
};

/**
 * Environment configuration object with runtime validation
 * Provides type-safe access to environment settings
 */
export const environment = {
  /**
   * Current validated environment
   * @type {Environment}
   */
  current: getEnvironment(),

  /**
   * Type-safe production environment check
   * @type {boolean}
   */
  isProduction: isProduction(),

  /**
   * Type-safe development environment check
   * @type {boolean}
   */
  isDevelopment: isDevelopment(),

  /**
   * Runtime validation of environment configuration
   * @throws {Error} If configuration is invalid
   */
  validate(): void {
    validateEnvironment(this.current);
  }
} as const;

// Validate environment on module initialization
environment.validate();

// Freeze the environment object to prevent modifications
Object.freeze(environment);

/**
 * Export the environment configuration as default
 * Provides centralized access to environment settings
 */
export default environment;