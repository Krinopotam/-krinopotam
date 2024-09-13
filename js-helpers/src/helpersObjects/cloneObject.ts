import {IsArray} from "./isArray";
import {IsObjectHasOwnProperty} from "./isObjectHasOwnProperty";

/**
 * Deep clone  objects. Allows circular references
 */
export const CloneObject = <TObject>(object: TObject, maxLevel?: number): TObject => {
    const objectsMap = new Map<Record<string, unknown>, Record<string, unknown>>()

    const objRecursion = (obj: Record<string, unknown> | null, level: number) => {
        if (!obj) return obj;

        if (objectsMap.has(obj)) return objectsMap.get(obj);
        const clonedObj: Record<string, unknown> = {};
        objectsMap.set(obj, clonedObj);

        level++;
        for (const key in obj) {
            if (!IsObjectHasOwnProperty(obj, key)) continue;
            const item = obj[key];
            if (!item || typeof item !== 'object' || (maxLevel && level > maxLevel)) clonedObj[key] = item;
            else
                clonedObj[key] = !IsArray(item)
                    ? objRecursion(item as Record<string, unknown>, level)
                    : arraysRecursion(item, level);
        }

        return clonedObj;
    };


    const arraysRecursion = (arr: unknown[], level: number) => {
        const clonedArr: unknown[] = [];
        level++;
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (!item || typeof item !== 'object' || (maxLevel && level > maxLevel)) clonedArr[i] = item;
            else
                clonedArr[i] = !IsArray(item)
                    ? objRecursion(item as Record<string, unknown>, level)
                    : arraysRecursion(item, level);
        }

        return clonedArr;
    };

    if (typeof object !== 'object' || object === null) return object;

    return !IsArray(object)
        ? (objRecursion(object as Record<string, unknown>, 0) as TObject)
        : (arraysRecursion(object, 0) as TObject);
};
