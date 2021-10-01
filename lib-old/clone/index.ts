import { type } from '../x-type';

/**
 * Returns a deep copy of an object of any depth, if able.
 * Returns `val` unchanged if `val` is not an object.
 *
 * Inspired by [Hey, JavaScript](https://heyjavascript.com/4-creative-ways-to-clone-objects/).
 *
 * ```
 * import { clone } from '@appsweet-co/utils';
 *
 * const copy = clone(complexObj);
 * ```
 */
const clone = (val: any) =>
  type('object', val) ? JSON.parse(JSON.stringify(val)) : val;

export { clone };
