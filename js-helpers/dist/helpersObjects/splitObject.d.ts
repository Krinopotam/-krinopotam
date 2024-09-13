/**
 * Splits the object and return two objects.
 * The first object contains only the properties that are in the propNames list
 *  The second object contains only the properties that are not in the propNames list
 * @param obj
 * @param propNames
 * @returns
 */
export declare const SplitObject: <R1 extends object, R2 extends object>(obj: object, propNames: Required<{ [K in keyof R1]: boolean; }>) => [R1, R2];
