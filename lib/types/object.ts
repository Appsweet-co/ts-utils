/**
 * Extracts the type info for keys inside an object.
 *
 * @example
 *
 * ```ts
 * type Value = KeysOf<{ logLevel: 'WARN', silent: false, verbose: 3 }>;
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
 * type Value = ValuesOf<{ logLevel: 'WARN', silent: false, verbose: 3 }>;
 * // => false | "WARN" | 3
 * ```
 */
export type ValuesOf<T> = T extends Record<string, unknown> ? T[keyof T] : never;
