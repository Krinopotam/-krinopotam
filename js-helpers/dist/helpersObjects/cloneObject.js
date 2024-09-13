import { IsArray } from "./isArray";
import { IsObjectHasOwnProperty } from "./isObjectHasOwnProperty";
/** Deep clone  objects */
export const CloneObject = (object, maxLevel) => {
    const objRecursion = (obj, level) => {
        if (!obj)
            return obj;
        const clonedObj = {};
        level++;
        for (const key in obj) {
            if (!IsObjectHasOwnProperty(obj, key))
                continue;
            const item = obj[key];
            if (!item || typeof item !== 'object' || (maxLevel && level > maxLevel))
                clonedObj[key] = item;
            else
                clonedObj[key] = !IsArray(item)
                    ? objRecursion(item, level)
                    : arraysRecursion(item, level);
        }
        return clonedObj;
    };
    const arraysRecursion = (arr, level) => {
        const clonedArr = [];
        level++;
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (!item || typeof item !== 'object' || (maxLevel && level > maxLevel))
                clonedArr[i] = item;
            else
                clonedArr[i] = !IsArray(item)
                    ? objRecursion(item, level)
                    : arraysRecursion(item, level);
        }
        return clonedArr;
    };
    if (typeof object !== 'object' || object === null)
        return object;
    return !IsArray(object)
        ? objRecursion(object, 0)
        : arraysRecursion(object, 0);
};
