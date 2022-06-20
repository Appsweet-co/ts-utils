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
  readonly __flavor?: K;
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
  readonly __brand: K;
};
