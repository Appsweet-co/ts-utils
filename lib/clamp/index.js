import { curry } from '../curry';
const clamp = (...args) => (args.length >= 3) ? Math.max(args[0], Math.min(args[2], args[1])) : curry(clamp, ...args);
export { clamp };
