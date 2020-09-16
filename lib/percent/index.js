import { curry } from '../curry';
import { ratio } from '../ratio';
const percent = (min, max, val) => ratio(min, max, val) * 100;
const percentC = curry(percent);
export { percent, percentC };
