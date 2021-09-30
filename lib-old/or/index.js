import { curry } from '../curry';
import { nil } from '../nil';
import { type } from '../type';
const or = (...args) => {
    const [fallback, val] = args;
    const success = !nil(val) && type(typeof fallback, val);
    return (args.length >= 2) ?
        (success) ? val : fallback :
        curry(or, fallback);
};
export { or };
