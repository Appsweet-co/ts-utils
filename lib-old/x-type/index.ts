import { curry } from '../x-curry';

/**
 * Compares a value against a given type. Same as `typeof val === kind`.
 *
 * Inspried by [Ramda.js](https://ramdajs.com/docs/#type).
 *
 * ```
 * import { type } from '@appsweet-co/utils';
 *
 * type('string', 'foobar');
 * // => true
 *
 * const isNumber = type('number');
 *
 * isNumber('foobar');
 * // => false
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * type(kind)(val);
 * type(kind, val);
 * ```
 */
const type = (kind: string, val?: unknown) => (val) ? typeof val === kind : curry<boolean>(type, kind);

export { type };
