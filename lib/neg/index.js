const neg = (arg) => (Array.isArray(arg)) ? arg.map(n => -n) : -arg;
export { neg };
