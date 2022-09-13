/**
 * Extracts the type info for keys inside an object.
 *
 * @example
 *
 * ```ts
 * const config = {
 *   logLevel: 'WARN',
 *   silent: false,
 *   verbose: 3,
 * } as const;
 *
 * type Value = KeysOf<typeof config>;
 * // => "logLevel" | "silent" | "verbose"
 * ```
 */
export type KeysOf<T> = T extends Record<string, unknown> ? keyof T : never;

/**
 * Extracts the type info for values inside an object.
 *
 * @example
 *
 * ```ts
 * const config = {
 *   logLevel: 'WARN',
 *   silent: false,
 *   verbose: 3,
 * } as const;
 *
 * type Value = ValuesOf<typeof config>;
 * // => false | "WARN" | 3
 * ```
 */
export type ValuesOf<T> = T extends Record<string, unknown> ? T[keyof T] : never;
