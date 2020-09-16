declare const ratio: (min: number, max: number, val: number) => number;
declare const ratioC: (min: number) => (max: number) => (val: number) => number;
export { ratio, ratioC };
