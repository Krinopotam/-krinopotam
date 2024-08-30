export declare const SplitObject: <R1 extends object, R2 extends object>(obj: object, propNames: Required<{ [K in keyof R1]: boolean; }>) => [R1, R2];
