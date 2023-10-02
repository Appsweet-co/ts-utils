
/**
 * Takes an array of any length and returns all items as nested pairs.
 * 
 * @example
 * 
 * ```ts
 * pair([1, 2, 3, 4, 5])
 * // => [1, [2, [3, [4, 5]]]]
 * ```
 */
const pair = (list) => list.length <= 1 ? list : list.reverse().reduce((acc, next) => [next, acc])

/**
 * Returns the first item in a pair, or an empty array if no item exists.
 * 
 * @example
 * 
 * ```ts
 * fst([1, [2, 3]])
 * // => 1
 * ```
 */
const fst = (pair) => pair.at(0) ?? [];


/**
 * Returns the second item in a pair, or an empty array if no item exists.
 * 
 * @example
 * 
 * ```ts
 * fst([1, [2, 3]])
 * // => [2, 3]
 * ```
 */
const snd = (pair) => pair.at(1) ?? [];
