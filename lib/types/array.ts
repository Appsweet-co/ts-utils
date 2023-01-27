/**
 * Extracts the type info for items inside an array.
 *
 * @example
 *
 * ```ts
 * type Values = ValuesInside<[true, 1, '2']>;
 * // => true | 1 | "2"
 * ```
 */
export type ValuesInside<T extends readonly unknown[]> = T extends ReadonlyArray<infer U> ? U : never;

/**
 * Extracts the type info for the first item inside an array.
 *
 * @example
 *
 * ```ts
 * type Value = Head<[true, 1, '2']>;
 * // => true
 * ```
 */
export type Head<T extends readonly unknown[]> = T[0];

/**
 * Extracts the type info for all but the first item inside an array.
 *
 * @example
 *
 * ```ts
 * type Value = Tail<[true, 1, '2']>;
 * // => [1 | "2"]
 * ```
 */
export type Tail<T extends readonly unknown[]> = ((...xs: T) => unknown) extends ((head: infer _, ...rest: infer U) => unknown) ? U : never;
