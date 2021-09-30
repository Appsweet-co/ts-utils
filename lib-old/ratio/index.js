import { curry } from '../curry';
import { divide } from '../divide';
import { subtract } from '../subtract';
const ratio = (...args) => (args.length >= 3) ? divide(subtract(args[0], args[2]), subtract(args[0], args[1])) : curry(ratio, ...args);
export { ratio };
