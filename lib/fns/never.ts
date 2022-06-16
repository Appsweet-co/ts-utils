/**
 * A function that takes an argument of type `never`. Use this function for 
 * [Exhaustiveness Checking](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking).
 * 
 * Throws a `TypeError` when executed.
 *
 * @example
 *
 * ```ts
 * function select(x: 3 | 6 | 9) {
 *   switch(x) {
 *     case 3: return 'three';
 *     case 6: return 'six';
 *     case 9: return 'nine';
 *     default: return never(x);
 *   }
 * }
 * ```
 */
const never = (x: never) => {
   throw new TypeError(`The never() function expects a never type, instead got ${typeof x}`);
}
