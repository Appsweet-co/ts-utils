declare const percent: (min: number, max: number, val: number) => number;
declare const percentC: (min: number) => (max: number) => (val: number) => number;
export { percent, percentC };
