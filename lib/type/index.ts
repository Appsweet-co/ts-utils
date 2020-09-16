import { curry } from '../curry';

/**
 * Compares `val` against a given `type`. Same as `typeof arg === type`.
 *
 * Inspried by [Ramda.js](https://ramdajs.com/docs/#type).
 *
 * ```
 * import { type } from '@appsweet-co/utils';
 *
 * type('string', 'foobar');
 * // => true
 * ```
 */
const type = (type: string, val: any) => typeof val === type;


/**
 * Same as `type()`, but curried.
 *
 * ```
 * import { typeC } from '@appsweet-co/utils';
 *
 * const isString = typeC('string');
 *
 * isString('foobar');
 * // => true
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * typeC(type)(val)
 * typeC(type, val);
 * ```
 */
const typeC: (type: string) => (val: any) => boolean = curry(type);

export { type, typeC };
