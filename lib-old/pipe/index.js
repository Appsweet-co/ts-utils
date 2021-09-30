const pipe = (...fns) => (init) => fns.reduce((acc, fn) => fn(acc), init);
export { pipe };
