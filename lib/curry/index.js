const curry = (fn, ...args) => (args.length >= fn.length) ? fn(...args) : (...more) => curry(fn, ...args, ...more);
export { curry };
