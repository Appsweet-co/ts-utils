/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Extracts the type info for all items inside an array or tuple.
 *
 * @example
 *
 * ```ts
 * type Values = ValuesInside<[true, 1, '2']>;
 * // => true | 1 | "2"
 * ```
 */
export type ValuesInside<T extends readonly unknown[]> = T extends ReadonlyArray<infer R> ? R : never;

/**
 * Extracts the type info for the first item inside a tuple.
 *
 * @example
 *
 * ```ts
 * type Value = Head<[true, 1, '2']>;
 * // => true
 * ```
 */
export type Head<T extends readonly unknown[]> = T extends [infer R, ...infer _] ? R : never;

/**
 * Extracts the type info for all but the first item inside a tuple.
 *
 * @example
 *
 * ```ts
 * type Values = Tail<[true, 1, '2']>;
 * // => [1, "2"]
 * ```
 */
export type Tail<T extends unknown[]> = T extends [infer _, ...infer R] ? R : never;

/**
 * Extracts the type info for the last item inside a tuple.
 *
 * @example
 *
 * ```ts
 * type Value = Last<[true, 1, '2']>;
 * // => "2"
 * ```
 */
export type Last<T extends readonly unknown[]> = T extends [...infer _, infer R] ? R : never;

/**
 * Extracts the type info for all but the last item inside a tuple.
 *
 * @example
 *
 * ```ts
 * type Values = Init<[true, 1, '2']>;
 * // => [true, 1]
 * ```
 */
export type Init<T extends readonly unknown[]> = T extends [...infer R, infer _] ? R : never;
