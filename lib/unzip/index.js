import { curry } from '../curry';
import { filter } from '../filter';
const unzip = (fn, list) => (list) ? [filter(fn, list), filter(v => !fn(v), list)] : curry(unzip, fn);
export { unzip };
