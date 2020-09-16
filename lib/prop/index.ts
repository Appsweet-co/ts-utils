/**
 * A curried function that returns the value of the supplied property
 * from the supplied object.
 *
 * Inspired by [Krzysztof Czernek](https://medium.com/dailyjs/functional-js-7-point-free-style-b21a1416ac6a)
 * and [Ramda.js](https://ramdajs.com/docs/#prop).
 *
 * ```
 * import { prop } from '@appsweet-co/utils';
 *
 * const bananaCount = prop('bananas');
 *
 * bananaCount({ bananas: 7 });
 * // => 7
 * ```
 * ```
 */
const prop = (key: string | number) => (obj: { [x in string | number]: unknown; }) => obj[key];

export { prop };
