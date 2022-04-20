import { some } from './array';

/** Returns true if `x` is an even number. */
export const isEven = (x: number) => x % 2 === 0;

/** Returns true if `x` is an odd number. */
export const isOdd = (x: number) => x % 2 !== 0;

/** Returns true if `x` is null or undefined. */
export const isNil = (x: unknown): boolean => x === null || x === void 0;

/** Returns true if `x` is an array or string with a length of zero; or if `x` is an object with no keys. */
export const isEmpty = (x: unknown): boolean => (typeof x === 'string') ? x.length === 0 : Object.keys(x).length === 0;

/** Returns true if `x` is `true`. */
export const isTrue = (x: boolean) => x === true;

/** Returns true if `x` is `false`. */
export const isFalse = (x: boolean) => x === false;

/** Returns true if `x` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). */
export const isTruthy = (x: unknown) => !!x;

/** Returns true if `x` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). */
export const isFalsy = (x: unknown) => !x;

/** Returns true if `x` is a [JavaScript primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive). */
export const isPrimitive = (x: unknown) => some(isTrue)([
  typeof x === 'bigint',
  typeof x === 'boolean',
  typeof x === 'number',
  typeof x === 'string',
  typeof x === 'symbol',
  isNil(x)
]);
