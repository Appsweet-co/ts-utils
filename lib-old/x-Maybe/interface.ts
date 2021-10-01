export interface MaybeType<T = any> {
  chain: (fn: (arg: T) => MaybeType<unknown>) => MaybeType<unknown>;
  else: (fallback: T) => MaybeType<T>;
  filter: (...fns: any[]) => MaybeType<T>;
  map: (...fns: any[]) => MaybeType<unknown>;
  pipe: (...fns: any[]) => MaybeType<T>;
  value: () => T;
}
