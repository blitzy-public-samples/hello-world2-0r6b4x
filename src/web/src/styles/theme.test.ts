/**
 * @fileoverview Unit tests for the isTheme type guard exported by the theme module.
 * Covers acceptance of a valid theme, early and structural rejection, and behavior
 * when a property access throws.
 *
 * @version 1.0.0
 * @requires jest ^27.5.1
 */

import { defaultTheme, isTheme } from './theme';

describe('isTheme', () => {
  describe('Happy Path', () => {
    it('returns true for the shipped defaultTheme', () => {
      expect(isTheme(defaultTheme)).toBe(true);
    });
  });

  describe('Early Rejection', () => {
    // `typeof null === 'object'`, so the `theme === null` operand of the initial
    // guard is a branch that no other input can reach. It therefore needs a
    // dedicated case rather than a row in the primitive table below.
    it('returns false for null', () => {
      expect(isTheme(null)).toBe(false);
    });

    it.each([
      ['a string', 'nope'],
      ['a number', 42],
      ['a boolean', true],
      ['undefined', undefined],
    ])('returns false for %s', (label, candidate) => {
      expect(isTheme(candidate)).toBe(false);
    });
  });

  describe('Structural Rejection', () => {
    // Each operand of the guard's three-operand `&&` chain is a distinct branch, so
    // every omission position is exercised. Covering only one position would leave
    // the other two branches unmeasured.
    it.each([
      ['colors', { typography: {}, spacing: {} }],
      ['typography', { colors: {}, spacing: {} }],
      ['spacing', { colors: {}, typography: {} }],
    ])('returns false when %s is absent', (label, candidate) => {
      expect(isTheme(candidate)).toBe(false);
    });
  });

  describe('Hostile Property Access', () => {
    it('propagates an error thrown by a hostile colors getter', () => {
      const hostile = {};
      Object.defineProperty(hostile, 'colors', {
        get() {
          throw new Error('hostile getter');
        },
        enumerable: true,
      });

      // The guard contains no try/catch, so `colors` -- the first property the
      // conjunction reads -- throws straight through to the caller. Asserting the
      // exact message documents that real contract and stops an unrelated error
      // from silently satisfying this case.
      expect(() => isTheme(hostile)).toThrow('hostile getter');
    });

    it('returns false without invoking a later throwing getter', () => {
      const guarded = { colors: 'not-an-object' };
      Object.defineProperty(guarded, 'typography', {
        get() {
          throw new Error('hostile getter');
        },
        enumerable: true,
      });

      // The invalid colors value short-circuits before the later hostile getter is evaluated.
      expect(isTheme(guarded)).toBe(false);
    });
  });
});
