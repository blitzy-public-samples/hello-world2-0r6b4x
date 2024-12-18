/**
 * @fileoverview Application-wide constants including typography, layout, and core configuration settings
 * @version 1.0.0
 */

// process.env version: latest
import { env } from 'process';

// Environment detection
const NODE_ENV = env.NODE_ENV || 'development';

/**
 * Type definition for core application configuration
 */
type AppConfig = {
  readonly APP_NAME: string;
  readonly APP_VERSION: string;
  readonly IS_PRODUCTION: boolean;
  readonly IS_DEVELOPMENT: boolean;
} as const;

/**
 * Type definition for typography configuration
 */
type TypographyConfig = {
  readonly DEFAULT_FONT_SIZE: string;
  readonly DEFAULT_FONT_FAMILY: string;
  readonly DEFAULT_FONT_WEIGHT: string;
} as const;

/**
 * Type definition for layout and responsive design configuration
 */
type LayoutConfig = {
  readonly BREAKPOINTS: {
    readonly MOBILE: string;
    readonly TABLET: string;
    readonly DESKTOP: string;
  };
  readonly CONTAINER_MAX_WIDTH: string;
} as const;

/**
 * Core application configuration constants
 * @constant
 */
export const APP_CONFIG: AppConfig = {
  APP_NAME: 'Hello World',
  APP_VERSION: '1.0.0',
  IS_PRODUCTION: NODE_ENV === 'production',
  IS_DEVELOPMENT: NODE_ENV === 'development'
} as const;

/**
 * Typography configuration constants
 * Defines font-related settings as per UI specifications
 * @constant
 */
export const TYPOGRAPHY_CONFIG: TypographyConfig = {
  DEFAULT_FONT_SIZE: '16px',
  DEFAULT_FONT_FAMILY: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  DEFAULT_FONT_WEIGHT: '400'
} as const;

/**
 * Layout and responsive design constants
 * Defines breakpoints and container sizes as per UI specifications
 * @constant
 */
export const LAYOUT_CONFIG: LayoutConfig = {
  BREAKPOINTS: {
    MOBILE: '768px',
    TABLET: '1024px',
    DESKTOP: '1280px'
  },
  CONTAINER_MAX_WIDTH: '1200px'
} as const;

// Named exports for individual config members
export const {
  APP_NAME,
  APP_VERSION,
  IS_PRODUCTION,
  IS_DEVELOPMENT
} = APP_CONFIG;

export const {
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_WEIGHT
} = TYPOGRAPHY_CONFIG;

export const {
  BREAKPOINTS,
  CONTAINER_MAX_WIDTH
} = LAYOUT_CONFIG;