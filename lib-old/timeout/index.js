import { curry } from '../curry';
const timeout = (delay, fn) => (fn) ? setTimeout(fn, delay) : curry(timeout, delay);
export { timeout };
