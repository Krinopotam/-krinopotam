/** Infer type of array element */
export type ArrayElement<A extends any[]> = A extends readonly (infer T)[] ? T : never;
