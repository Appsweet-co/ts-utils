import { curry } from '../curry';
import { nil } from '../nil';
import { type } from '../type';
const maybe = (...args) => {
    const [fallback, val] = args;
    const success = !nil(val) && type(typeof fallback, val);
    return (args.length >= 2) ?
        (success) ? val : fallback :
        curry(maybe, fallback);
};
export { maybe };
