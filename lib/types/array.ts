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
