declare const type: (type: string, val: any) => boolean;
declare const typeC: (type: string) => (val: any) => boolean;
export { type, typeC };
