import { EitherConfig } from './interface';

/**
 * A [Monad-like](https://en.wikipedia.org/wiki/Monad_(functional_programming))
 * function that tests a value against a predicate.
 *
 * Calls `right` if the test passes or `left` if the test fails.
 *
 * ```
 * import { Either } from '@appsweet-co/utils';
 *
 * const moreThan6 = Either({
 *   test: x => x > 6,
 *   left: x => onFail(x),
 *   right: x => onSuccess(x)
 * });
 *
 * moreThan6(8);
 * // => onSuccess(8)
 *
 * moreThan6(4);
 * // => onFail(4)
 * ```
 */
const Either = ({ test, left, right }: EitherConfig) => (val: any) => test(val) ? right(val) : left(val);

export { Either };

