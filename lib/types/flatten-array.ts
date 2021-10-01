/**
 * Extracts the type info for items inside an array.
 *
 * @example
 *
 * ```ts
 * type List = ReadonlyArray<number | boolean>;
 *
 * type Item = FlattenArray<List>
 * // => number | boolean;
 * ```
 */
export type FlattenArray<T extends (any[] | ReadonlyArray<any>)> = T[number];
