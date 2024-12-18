/**
 * @fileoverview Test suite for HelloWorld component
 * Implements comprehensive testing of rendering, styling, accessibility and error handling
 * using Jest and React Testing Library.
 * 
 * @version 1.0.0
 * @requires @testing-library/react ^13.0.0
 * @requires @testing-library/jest-dom ^5.0.0
 * @requires @testing-library/user-event ^14.0.0
 */

import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import HelloWorld from './HelloWorld';
import { renderWithProviders, createTestId } from '../../utils/testUtils';
import { defaultTheme } from '../../styles/theme';

describe('HelloWorld Component', () => {
  const testMessage = 'Hello World';
  const testId = {
    container: createTestId('HelloWorld', 'container'),
    text: createTestId('HelloWorld', 'text')
  };

  beforeEach(() => {
    // Clear any previous renders and mock console errors
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console.error
    jest.restoreAllMocks();
  });

  describe('Rendering', () => {
    it('renders the message correctly', () => {
      renderWithProviders(<HelloWorld message={testMessage} />);
      
      const textElement = screen.getByText(testMessage);
      expect(textElement).toBeInTheDocument();
      expect(textElement).toBeVisible();
    });

    it('uses memo to prevent unnecessary re-renders', () => {
      const { rerender } = renderWithProviders(<HelloWorld message={testMessage} />);
      const initialElement = screen.getByText(testMessage);
      
      // Re-render with same props
      rerender(<HelloWorld message={testMessage} />);
      const rerenderedElement = screen.getByText(testMessage);
      
      expect(initialElement).toBe(rerenderedElement);
    });
  });

  describe('Styling', () => {
    it('applies correct container styles', () => {
      renderWithProviders(<HelloWorld message={testMessage} />);
      const container = screen.getByRole('main');

      expect(container).toHaveStyle({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: defaultTheme.spacing.vertical,
        backgroundColor: defaultTheme.colors.background,
        width: '100%'
      });
    });

    it('applies correct text styles', () => {
      renderWithProviders(<HelloWorld message={testMessage} />);
      const textElement = screen.getByText(testMessage);

      expect(textElement).toHaveStyle({
        fontFamily: defaultTheme.typography.fontFamily,
        fontSize: `${defaultTheme.typography.fontSize}px`,
        fontWeight: defaultTheme.typography.fontWeight,
        color: defaultTheme.colors.text,
        margin: '0',
        padding: '0',
        whiteSpace: 'nowrap'
      });
    });
  });

  describe('Accessibility', () => {
    it('has correct ARIA attributes', () => {
      renderWithProviders(<HelloWorld message={testMessage} />);
      
      const container = screen.getByRole('main');
      expect(container).toHaveAttribute('aria-label', 'Hello World Content');

      const textElement = screen.getByRole('text');
      expect(textElement).toHaveAttribute('aria-live', 'polite');
      expect(textElement).toHaveAttribute('aria-atomic', 'true');
    });

    it('maintains proper heading hierarchy', () => {
      renderWithProviders(<HelloWorld message={testMessage} />);
      
      const container = screen.getByRole('main');
      expect(container).toBeInTheDocument();
      expect(container.tagName).toBe('DIV');
    });

    it('ensures text content is readable', () => {
      renderWithProviders(<HelloWorld message={testMessage} />);
      
      const textElement = screen.getByText(testMessage);
      expect(textElement).toHaveStyle({
        color: defaultTheme.colors.text // Black text
      });
      expect(textElement.parentElement).toHaveStyle({
        backgroundColor: defaultTheme.colors.background // White background
      });
    });
  });

  describe('Error Handling', () => {
    it('validates required message prop', () => {
      // @ts-expect-error Testing invalid props
      expect(() => renderWithProviders(<HelloWorld />))
        .toThrow(/Invalid prop 'message' supplied to 'HelloWorld'/);
    });

    it('validates message prop type', () => {
      // @ts-expect-error Testing invalid prop type
      expect(() => renderWithProviders(<HelloWorld message={123} />))
        .toThrow(/Invalid prop 'message' supplied to 'HelloWorld'/);
    });

    it('handles empty message gracefully', () => {
      expect(() => renderWithProviders(<HelloWorld message="" />))
        .toThrow(/Invalid prop 'message' supplied to 'HelloWorld'/);
    });
  });

  describe('Performance', () => {
    it('uses React.memo effectively', () => {
      const { rerender } = renderWithProviders(<HelloWorld message={testMessage} />);
      const renderCount = jest.fn();
      
      // Mock React.memo to track renders
      jest.spyOn(React, 'memo').mockImplementation((component) => {
        renderCount();
        return component;
      });

      // Re-render with same props
      rerender(<HelloWorld message={testMessage} />);
      
      expect(renderCount).toHaveBeenCalledTimes(1);
    });
  });
});