import { isNil } from './is-nil';
import { isTrue } from './is-true';

/**
 * Returns true if `x` is a [JavaScript primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
 *
 * @example
 *
 * ```ts
 * isPrimitive(11235);
 * // => true
 *
 * isPrimitive(null);
 * // => true
 *
 * isPrimitive([3, 6, 9]);
 * // => false
 * ```
 */
export const isPrimitive = (x: unknown) => [
  typeof x === 'bigint',
  typeof x === 'boolean',
  typeof x === 'number',
  typeof x === 'string',
  typeof x === 'symbol',
  isNil(x)
].some(isTrue);
