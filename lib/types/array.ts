/**
 * Extracts the type info for items inside an array.
 *
 * @example
 *
 * ```ts
 * type Values = ValuesInside<[1, '2', true]>;
 * // => true | 1 | "2"
 * ```
 */
export type ValuesInside<T> = T extends (unknown[] | readonly unknown[]) ? T[number] : never;
