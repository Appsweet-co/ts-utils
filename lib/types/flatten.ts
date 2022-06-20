/**
 * Extracts the type info for items inside an array.
 *
 * @example
 *
 * ```ts
 * const list = [3, 6, 9, true];
 *
 * type Item = FlattenArray<typeof list>
 * // => number | boolean;
 * ```
 */
export type FlattenArray<T extends (unknown[] | ReadonlyArray<unknown>)> = T[number];

/**
 * Extracts the type info for properties inside an object.
 *
 * @example
 *
 * ```ts
 * const config = {
 *   logLevel: 'WARN',
 *   silent: false,
 *   verbose: 3,
 * }
 *
 * type Value = FlattenObject<typeof config>;
 * // => string | number | boolean
 * ```
 */
export type FlattenObject<T extends Record<string | number | symbol, unknown>> = T[keyof T];
