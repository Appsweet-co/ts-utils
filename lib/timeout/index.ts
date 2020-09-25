import { curry } from '../curry';

/**
 * Sets a timer that executes a function once the timer expires.
 * Same as `setTimeout(fn, delay)`.
 *
 * ```
 * import { timeout } from '@appsweet-co/utils';
 *
 * timeout(3000, () => { console.log('click')});
 * // => 'click'
 *
 * const click = timeout(3000);
 *
 * click(() => { console.log('click')});
 * // => 'click'
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * click(delay)(fn);
 * click(delay, fn);
 * ```
 */
const timeout = (delay: number, fn: TimerHandler) => (fn) ? setTimeout(fn, delay) : curry(timeout, delay);

export { timeout };
