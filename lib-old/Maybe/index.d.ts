import { MaybeType } from './interface';
declare const Maybe: <T = any>(val?: T) => {
    value: () => T;
    else: (fallback: T) => any;
    chain: (fn: (arg: T) => MaybeType<unknown>) => any;
    map: (...fns: any[]) => {
        value: () => any;
        else: (fallback: any) => any;
        chain: (fn: (arg: any) => MaybeType<unknown>) => any;
        map: (...fns: any[]) => any;
        pipe: (...fns: any[]) => any;
        filter: (...fns: any[]) => any;
    };
    pipe: (...fns: any[]) => any;
    filter: (...fns: any[]) => any;
};
export { Maybe };
