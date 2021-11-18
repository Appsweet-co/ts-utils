/**
 * Creates a [nominal type](https://www.typescriptlang.org/play?q=441#example/nominal-typing).
 *
 * @example
 *
 * type Foo = Nominal<'Foo', number>;
 * type Bar = Nominal<'Bar', number>;
 *
 * Foo === Bar
 * // => false
 */
export type Nominal<K, T> = T & {
  __brand: K;
};
