/** Symbol used to declare a {@linkcode Nominal} type. */
export const FLAVOR = Symbol('FLAVOR');

/** Symbol used to declare a {@linkcode NominalStrict} type. */
export const BRAND = Symbol('BRAND');

/**
 * Creates a flexible [nominal type](https://spin.atomicobject.com/2018/01/15/typescript-flexible-nominal-typing/).
 *
 * @example
 *
 * ```ts
 * type Foo = Nominal<'Foo', number>;
 * type Bar = Nominal<'Bar', number>;
 *
 * Foo === Bar
 * // => false
 * ```
 */
export type Nominal<K, T> = T & {
  readonly [FLAVOR]: K;
};

/**
 * Creates a strict [nominal type](https://spin.atomicobject.com/2018/01/15/typescript-flexible-nominal-typing/).
 *
 * @example
 *
 * ```ts
 * type Foo = NominalStrict<'Foo', number>;
 *
 * const foo: Foo = 1;
 * // => Error: Type 'number' is not assignable to type 'Foo'.
 * ```
 */
export type NominalStrict<K, T> = T & {
  readonly [BRAND]: K;
};
