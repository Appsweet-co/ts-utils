export interface EitherConfig {
  test: (val: any) => boolean;
  left: (val: any) => any;
  right: (val: any) => any;
}
