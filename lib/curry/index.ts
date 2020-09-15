/**
 * Transforms a method of any arity into a curried function.
 *
 * Inspired by [William Vincent](https://wsvincent.com/javascript-currying/).
 */
const curry = (fn: Function, ...args: any) =>
  (args.length >= fn.length) ? fn(...args) : (...more: any) => curry(fn, ...args, ...more)

export { curry }
