import { curry } from '../curry';
const reduce = (fn, list) => (list) ? list.reduce(fn) : curry(reduce, fn);
export { reduce };
