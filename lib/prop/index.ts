import { curry } from '../curry';

/**
 * Returns the value of the supplied property. Same as `obj[key]`.
 *
 * Inspired by [Krzysztof Czernek](https://medium.com/dailyjs/functional-js-7-point-free-style-b21a1416ac6a)
 * and [Ramda.js](https://ramdajs.com/docs/#prop).
 *
 * ```
 * import { prop } from '@appsweet-co/utils';
 *
 * prop('bananas', { bananas: 7 });
 * // => 7
 *
 * const bananaCount = prop('bananas');
 *
 * bananaCount({ bananas: 7 });
 * // => 7
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * prop(key)(obj);
 * prop(key, obj);
 * ```
 */
const prop = (key: string | number, obj?: { [x in string | number]: unknown; }) =>
  (obj) ? obj[key] : curry<unknown>(prop, key);

export { prop };
