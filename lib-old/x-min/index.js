import { curry } from '../curry';
const min = (a, ...more) => (more) ? Math.min(a, ...more) : curry(min, a);
export { min };
