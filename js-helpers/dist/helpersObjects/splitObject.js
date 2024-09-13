/**
 * Splits the object and return two objects.
 * The first object contains only the properties that are in the propNames list
 *  The second object contains only the properties that are not in the propNames list
 * @param obj
 * @param propNames
 * @returns
 */
export const SplitObject = (obj, propNames) => {
    const obj1 = {};
    const obj2 = {};
    for (const key in obj) {
        if (propNames[key])
            obj1[key] = obj[key];
        else
            obj2[key] = obj[key];
    }
    return [obj1, obj2];
};
