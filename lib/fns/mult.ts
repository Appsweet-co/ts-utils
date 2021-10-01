import { isEmptyArray } from './is-empty-array';

/**
* Returns the arithmetic product of an array of numbers.
*
* Numbers are multiplied left-to-right.
*
* @example
*
* ```ts
* mult([3, 6]);
* // => 18
*
* mult([3, 6, 9]);
* // => 162
*
* mult([]);
* // => 0
* ```
*/
export const mult = (list: number[] | readonly number[]): number => isEmptyArray(list) ? 0 : list.reduce((acc, next) => acc * next);

