import { isPrimitive } from './predicate';

/**
 * Returns a deep copy of an object or array of any depth. Returns `x` unchanged
 * if it's a [JavaScript primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
 *
 * @example
 *
 * ```ts
 * clone({ hello: 'world' });
 * // => { hello: 'world' }
 *
 * clone('a simple string');
 * // => 'a simple string'
 *
 * clone(null);
 * // => null
 * ```
 */
export const clone = <T>(x: T): T => isPrimitive(x) ? x : JSON.parse(JSON.stringify(x));
