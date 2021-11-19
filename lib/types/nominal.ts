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
  __flavor?: K;
};
