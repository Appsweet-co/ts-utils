import { curry } from '../curry';
const max = (a, ...more) => (more) ? Math.max(a, ...more) : curry(max, a);
export { max };
