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

import React, { FC } from 'react'; // ^18.0.0
import { renderWithProviders } from './testUtils';

/**
 * Inline, theme-agnostic test doubles.
 *
 * `renderWithProviders` injects its own local theme, which supplies only
 * `colors` - it declares no `spacing` and no `typography`. A styled-component
 * reading, say, `theme.spacing.vertical` therefore throws a TypeError that has
 * nothing to do with the helper. Bare `span` elements carrying a `data-testid`
 * sidestep the theme entirely, keeping every case below pinned to the helper's
 * own behaviour rather than to the shape of the theme it happens to inject.
 *
 * Each element is built with `React.createElement` rather than JSX because this
 * file carries a `.ts` extension, and TypeScript decides whether to parse JSX
 * purely from the file extension - JSX here would be a parse error that no
 * compiler or transformer option can suppress. `createElement` returns the
 * `ReactElement` the helper's signature requires, so nothing is lost.
 */
const Ok: FC = () => React.createElement('span', { 'data-testid': 'ok' }, 'ok');

const Next: FC = () =>
  React.createElement('span', { 'data-testid': 'next' }, 'next');

const Exploding: FC = () => {
  throw new Error('component exploded during render');
};

describe('renderWithProviders', () => {
  /**
   * React reports a render-time failure through `console.error` before
   * re-throwing it. Silencing that keeps the run output readable and, in the
   * error case, yields an assertable signal that React observed the failure
   * rather than the error being swallowed somewhere in between.
   *
   * The spy has to be created per test rather than once at module scope:
   * `jest.config.ts` sets `resetMocks: true`, which strips a module-scope mock
   * implementation before every test and would let React's output back onto the
   * console. This is a correctness requirement, not a stylistic preference.
   */
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  describe('Rendering', () => {
    it('renders the supplied element inside the theme providers', () => {
      const { getByTestId, container } = renderWithProviders(
        React.createElement(Ok)
      );

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

      // Proving `rerender` is intact means exercising it, not enumerating the
      // result's keys. Swapping in a different component and re-querying the
      // replacement shows the re-bound callback still mounts into the original
      // container, inside the same provider tree.
      result.rerender(React.createElement(Next));

      expect(result.getByTestId('next')).toBeInTheDocument();
    });

    it('forwards caller-supplied render options', () => {
      const host = document.createElement('div');

      const { container } = renderWithProviders(React.createElement(Ok), {
        container: host
      });

      // Referential identity, not equivalence: the helper spreads `...options`
      // after its own `wrapper` entry, so a caller-supplied container wins and
      // must come back as the very same node that was handed in.
      expect(container).toBe(host);
    });
  });

  describe('Error Handling', () => {
    it('propagates a readable error when a component throws during render', () => {
      // The helper contains no try/catch, and React together with React Testing
      // Library re-throws, so the component's own message reaches the caller
      // verbatim. Matching that exact message - rather than calling a bare
      // `toThrow()` - stops some unrelated error from satisfying the assertion.
      expect(() => renderWithProviders(React.createElement(Exploding))).toThrow(
        'component exploded during render'
      );
      expect(consoleErrorSpy).toHaveBeenCalled();
    });
  });
});
