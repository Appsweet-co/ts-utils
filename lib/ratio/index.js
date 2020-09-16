import { curry } from '../curry';
import { divide } from '../divide';
import { subtract } from '../subtract';
const ratio = (min, max, val) => divide(subtract(val, min), subtract(max, min));
const ratioC = curry(ratio);
export { ratio, ratioC };
