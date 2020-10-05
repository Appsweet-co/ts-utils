const Either = ({ test, left, right }) => (val) => test(val) ? right(val) : left(val);
export { Either };
