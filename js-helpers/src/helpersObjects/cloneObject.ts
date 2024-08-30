import {IsArray} from "./isArray";

/** Deep clone  objects */
export const CloneObject = <TObject>(object: TObject, maxLevel?: number): TObject => {
    if (typeof object !== 'object') return object;

    const objRecursion = (obj: Record<string, unknown> | null, level: number, cloneMaxLevel: number) => {
        if (!obj) return obj;
        const clonedObj: Record<string, unknown> = {};
        level++;
        for (const key in obj) {
            if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
            const item = obj[key];
            if (typeof item !== 'object' || level >= cloneMaxLevel) clonedObj[key] = item;
            else
                clonedObj[key] = !IsArray(item)
                    ? objRecursion(item as Record<string, unknown>, level, cloneMaxLevel)
                    : arraysRecursion(item as unknown[], level, cloneMaxLevel);
        }

        return clonedObj;
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const arraysRecursion = (arr: any, level: number, cloneMaxLevel: number) => {
        if (!arr) return arr;
        const clonedArr: unknown[] = [];
        level++;
        for (let i = 0; i < (arr as unknown[]).length; i++) {
            const item = arr[i];
            if (typeof item !== 'object' || level >= cloneMaxLevel) clonedArr[i] = item;
            else
                clonedArr[i] = !IsArray(item)
                    ? objRecursion(item as Record<string, unknown>, level, cloneMaxLevel)
                    : arraysRecursion(item as unknown[], level, cloneMaxLevel);
        }

        return clonedArr;
    };

    return !IsArray(object)
        ? (objRecursion(object as Record<string, unknown>, 0, maxLevel ?? 0) as TObject)
        : (arraysRecursion(object, 0, maxLevel ?? 0) as TObject);

    //return cloneDeep( object);
};