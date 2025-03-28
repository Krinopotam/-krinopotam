import {isInstanceOfClass} from '@src/helpersObjects/isInstanceOfClass';
import {IsArray} from './isArray';
import {IsObjectHasOwnProperty} from './isObjectHasOwnProperty';

/**
 * Deep clone  objects. Allows circular references
 */
export const CloneObject = <TObject>(obj: TObject, maxLevel?: number): TObject => {
    const objectsMap = new Map<Record<string, unknown>, Record<string, unknown>>();

    const objRecursion = (obj: Record<string, unknown> | null, level: number) => {
        if (!obj) return obj;

        if (objectsMap.has(obj)) return objectsMap.get(obj);
        const clonedObj: Record<string, unknown> = {};
        objectsMap.set(obj, clonedObj);

        level++;
        for (const key in obj) {
            if (!IsObjectHasOwnProperty(obj, key)) continue;
            const item = obj[key];
            if (!item || typeof item !== 'object' || (!IsArray(item) && isInstanceOfClass(item)) || (maxLevel && level > maxLevel)) clonedObj[key] = item;
            else clonedObj[key] = !IsArray(item) ? objRecursion(item as Record<string, unknown>, level) : arraysRecursion(item, level);
        }

        return clonedObj;
    };

    const arraysRecursion = (arr: unknown[], level: number) => {
        const clonedArr: unknown[] = [];
        level++;
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (!item || typeof item !== 'object' || (!IsArray(item) && isInstanceOfClass(item)) || (maxLevel && level > maxLevel)) clonedArr[i] = item;
            else clonedArr[i] = !IsArray(item) ? objRecursion(item as Record<string, unknown>, level) : arraysRecursion(item, level);
        }

        return clonedArr;
    };

    if (typeof obj !== 'object' || obj === null) return obj;

    if (!IsArray(obj) && isInstanceOfClass(obj)) return obj; //if obj is class instance - do not clone

    return !IsArray(obj) ? (objRecursion(obj as Record<string, unknown>, 0) as TObject) : (arraysRecursion(obj, 0) as TObject);
};
