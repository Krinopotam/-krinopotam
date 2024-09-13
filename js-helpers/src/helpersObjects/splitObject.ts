/**
 * Splits the object and return two objects.
 * The first object contains only the properties that are in the propNames list
 *  The second object contains only the properties that are not in the propNames list
 * @param obj
 * @param propNames
 * @returns
 */
export const SplitObject = <R1 extends object, R2 extends object>(obj: object, propNames: Required<{ [K in keyof R1]: boolean }>): [R1, R2] => {
    const obj1 = {} as R1;
    const obj2 = {} as R2;

    for (const key in obj) {
        if ((propNames as Record<string, unknown>)[key]) (obj1 as Record<string, unknown>)[key] = (obj as Record<string, unknown>)[key];
        else (obj2 as Record<string, unknown>)[key] = (obj as Record<string, unknown>)[key];
    }
    return [obj1, obj2];
};