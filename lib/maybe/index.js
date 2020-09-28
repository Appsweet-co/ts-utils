import { curry } from '../curry';
import { type } from '../type';
const maybe = (fallback, val) => (val) ?
    type(typeof fallback, val) ? val : fallback :
    curry(maybe, fallback);
export { maybe };
