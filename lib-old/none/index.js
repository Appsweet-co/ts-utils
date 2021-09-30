import { curry } from '../curry';
const none = (fn, list) => (list) ? !list.every(fn) : curry(none, fn);
export { none };
