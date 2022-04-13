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

/**
 * Extracts the type info for properties inside an object.
 *
 * @example
 *
 * ```ts
 * interface Config {
 *   logLevel: 'INFO' | 'WARN' | 'ERROR';
 *   silent: boolean;
 *   verbose: number;
 * }
 *
 * type Values = FlattenObject<Config>;
 * // => number | boolean | "INFO" | "WARN" | "ERROR"
 * ```
 */
export type FlattenObject<T extends (Record<any, any> | Readonly<Record<any, any>>)> = T[keyof T];
