/**
 * Extracts the type info for items inside an array.
 *
 * @example
 *
 * ```ts
 * const list = [1, '2', true] as const;
 *
 * type Values = ValuesInside<typeof list>;
 * // => true | 1 | "2"
 * ```
 */
export type ValuesInside<T> = T extends (unknown[] | readonly unknown[]) ? T[number] : never;
