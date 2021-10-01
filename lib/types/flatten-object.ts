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
