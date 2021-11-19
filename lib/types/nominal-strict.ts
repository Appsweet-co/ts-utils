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
  __brand: K;
};
