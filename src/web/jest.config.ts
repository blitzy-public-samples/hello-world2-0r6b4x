// @jest/types version: ^29.0.0
import type { Config } from '@jest/types';

/**
 * Comprehensive Jest configuration for React TypeScript application testing
 * Configures test environment, coverage reporting, module resolution, and other test settings
 * @returns {Config.InitialOptions} Complete Jest configuration object
 */
const jestConfig: Config.InitialOptions = {
  // Use jsdom environment to simulate browser environment for React component testing
  testEnvironment: 'jsdom',

  // Define root directories for test discovery
  roots: ['<rootDir>/src'],

  // Configure coverage collection patterns
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/__tests__/**',
    '!src/**/__mocks__/**',
  ],

  // Coverage thresholds to ensure code quality
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },

  // Setup files for test environment configuration
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // Test file patterns
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{ts,tsx}',
  ],

  // Transform configuration for TypeScript files
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  // Module name mapping for static assets and style files
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },

  // File extensions to consider for module resolution
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],

  // Reset mocks automatically between tests
  resetMocks: true,

  // Additional configuration for TypeScript and React
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      diagnostics: true,
      isolatedModules: true,
    },
  },

  // Verbose output for detailed test results
  verbose: true,

  // Cache configuration for faster subsequent runs
  cache: true,
  cacheDirectory: '<rootDir>/node_modules/.cache/jest',

  // Error handling configuration
  errorOnDeprecated: true,
  
  // Test timeout configuration
  testTimeout: 10000,

  // Coverage reporting configuration
  coverageReporters: ['text', 'lcov', 'html'],
  coverageDirectory: '<rootDir>/coverage',
};

export default jestConfig;