/**
 * Returns an array of numbers between `min` and `max` values.
 * 
 * Values are inclusive.
 * 
 * Returns all values between `min` and `max` by default. Pass in a `step` to
 * change the granularity. 
 * 
 * @example
 * 
 * ```ts
 * range({ min: 0, max: 6 });
 * // => [0, 1, 2, 3, 4, 5, 6]
 * 
 * range({ min: 0, max: 6, step: 2 });
 * // => [0, 2, 4, 6] 
 * ```
 */
export const range = ({ min, max, step = 1 }: { min: number, max: number, step?: number }): readonly number[] => {
  return (min > max) ? [] : [min, ...range({ min: min + 1, max, step })].filter(x => x % step === 0)
}