import { curry } from '../curry';
const any = (fn, list) => (list) ? list.some(fn) : curry(any, fn);
export { any };
