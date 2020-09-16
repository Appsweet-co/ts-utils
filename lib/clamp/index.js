import { curry } from '../curry';
const clamp = (min, max, val) => Math.max(min, Math.min(val, max));
const clampC = curry(clamp);
export { clamp, clampC };
