/**
 * @fileoverview Test suite for the renderWithProviders test-rendering helper.
 * Pins down the helper's observable contract: it mounts a supplied element inside
 * the styled-components provider tree, returns the full React Testing Library
 * result with a working rerender, forwards caller-supplied render options, and
 * propagates a render-time component error with its message intact.
 *
 * @version 1.0.0
 * @requires react ^18.0.0
 * @requires @testing-library/react ^13.4.0
 * @requires jest ^27.5.1
 */

import React, { FC } from 'react';
import { renderWithProviders } from './testUtils';

// Fixtures stay theme-agnostic: the theme the helper injects defines only `colors`.
// Elements are built with `createElement` because this `.ts` suite cannot contain JSX.
const Ok: FC = () => React.createElement('span', { 'data-testid': 'ok' }, 'ok');

const Next: FC = () => React.createElement('span', { 'data-testid': 'next' }, 'next');

const Exploding: FC = () => {
  throw new Error('component exploded during render');
};

describe('renderWithProviders', () => {
  // `resetMocks: true` strips a module-scope mock before every test, so the spy that
  // silences React's expected render-error output is created per test.
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  describe('Rendering', () => {
    it('renders the supplied element inside the theme providers', () => {
      const { getByTestId, container } = renderWithProviders(React.createElement(Ok));

      expect(getByTestId('ok')).toBeInTheDocument();
      expect(container.innerHTML).toContain('data-testid="ok"');
    });
  });

  describe('Returned Contract', () => {
    it('returns the full render result with a working rerender', () => {
      const result = renderWithProviders(React.createElement(Ok));

      expect(result.container).toBeInstanceOf(HTMLElement);
      expect(typeof result.rerender).toBe('function');
      expect(typeof result.unmount).toBe('function');

      // Exercise the rebound rerender callback rather than only checking its type.
      result.rerender(React.createElement(Next));

      expect(result.getByTestId('next')).toBeInTheDocument();
    });

    it('forwards caller-supplied render options', () => {
      const host = document.createElement('div');

      const { container } = renderWithProviders(React.createElement(Ok), {
        container: host,
      });

      // Referential identity, not equivalence: the helper spreads `...options`
      // after its own `wrapper` entry, so a caller-supplied container wins and
      // must come back as the very same node that was handed in.
      expect(container).toBe(host);
    });
  });

  describe('Error Handling', () => {
    it('propagates a readable error when a component throws during render', () => {
      expect(() => renderWithProviders(React.createElement(Exploding))).toThrow(
        'component exploded during render'
      );
      expect(consoleErrorSpy).toHaveBeenCalled();
    });
  });
});
