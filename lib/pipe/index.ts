/**
 * Compose functions left-to-right.
 *
 * Inspired by [Eric Elliott](https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983)
 * and [Ramda.js](https://ramdajs.com/docs/#pipe).
 *
 * ```
 * import { pipe } from '@appsweet-co/utils';
 *
 * const roundedLog = pipe(Math.log, Math.round);
 *
 * roundedLog(123.45)
 * // => 5
 * ```
 */
const pipe = (...fns: unknown[]) => (init: unknown) =>
  fns.reduce((acc: unknown, fn: (...args: unknown[]) => unknown) => fn(acc), init);

export { pipe };
