import { curry } from '../curry';
const clamp = (...args) => {
    const [min, max, val] = args;
    return (val) ? Math.max(min, Math.min(val, max)) : curry(clamp, ...args);
};
export { clamp };
