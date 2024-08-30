import { IsArray } from "./isArray";
export const CloneObject = (object, maxLevel) => {
    if (typeof object !== 'object')
        return object;
    const objRecursion = (obj, level, cloneMaxLevel) => {
        if (!obj)
            return obj;
        const clonedObj = {};
        level++;
        for (const key in obj) {
            if (!Object.prototype.hasOwnProperty.call(obj, key))
                continue;
            const item = obj[key];
            if (typeof item !== 'object' || level >= cloneMaxLevel)
                clonedObj[key] = item;
            else
                clonedObj[key] = !IsArray(item)
                    ? objRecursion(item, level, cloneMaxLevel)
                    : arraysRecursion(item, level, cloneMaxLevel);
        }
        return clonedObj;
    };
    const arraysRecursion = (arr, level, cloneMaxLevel) => {
        if (!arr)
            return arr;
        const clonedArr = [];
        level++;
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (typeof item !== 'object' || level >= cloneMaxLevel)
                clonedArr[i] = item;
            else
                clonedArr[i] = !IsArray(item)
                    ? objRecursion(item, level, cloneMaxLevel)
                    : arraysRecursion(item, level, cloneMaxLevel);
        }
        return clonedArr;
    };
    return !IsArray(object)
        ? objRecursion(object, 0, maxLevel !== null && maxLevel !== void 0 ? maxLevel : 0)
        : arraysRecursion(object, 0, maxLevel !== null && maxLevel !== void 0 ? maxLevel : 0);
};
