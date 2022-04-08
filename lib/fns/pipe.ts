/**
 * Compose functions left-to-right.
 *
 * Inspired by [Eric Elliott](https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983)
 * and [Ramda.js](https://ramdajs.com/docs/#pipe).
 *
 * @example
 *
 * ```ts
 * pipe<number>(123.45, [Math.log, Math.round]);
 * // => 5
 * ```
 */
export const pipeFoo = <T>(init: any, fns: any[]): T =>
  fns.reduce((acc: any, fn: (...args: any[]) => any) => fn(acc), init);
