declare const prop: (key: string | number) => (obj: {
    [x: string]: unknown;
    [x: number]: unknown;
}) => unknown;
export { prop };
