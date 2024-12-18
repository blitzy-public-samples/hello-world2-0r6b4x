// styled-components v5.3.0
import styled from 'styled-components';
import { defaultTheme } from '../../styles/theme';

/**
 * Container component that provides a full-viewport centered layout
 * Implements the layout structure requirements with flexbox for perfect centering
 */
export const Container = styled.div`
  /* Flexbox layout for vertical and horizontal centering */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Full viewport height with minimum height constraint */
  min-height: ${({ theme }) => theme.spacing.vertical};

  /* Horizontal padding from theme */
  padding: ${({ theme }) => theme.spacing.horizontal};

  /* Background color from theme */
  background-color: ${({ theme }) => theme.colors.background};

  /* Ensure the container takes full width */
  width: 100%;

  /* Prevent content overflow */
  box-sizing: border-box;
`;

/**
 * Text component for the Hello World message
 * Implements typography specifications with theme-based values
 */
export const Text = styled.p`
  /* Typography settings from theme */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight};
  color: ${({ theme }) => theme.colors.text};

  /* Reset margins and padding */
  margin: 0;
  padding: 0;

  /* Ensure text doesn't break */
  white-space: nowrap;

  /* Optimal text rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`;