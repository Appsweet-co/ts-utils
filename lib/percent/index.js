import { curry } from '../curry';
import { ratio } from '../ratio';
const percent = (...args) => (args.length >= 3) ? ratio(...args) * 100 : curry(percent, ...args);
export { percent };
