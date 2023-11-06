// noinspection JSUnusedGlobalSymbols

/**
 * @ObjectHelpers
 * @version 1.0.32
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import hash from 'object-hash';
import isEqual from 'lodash.isequal';
import merge from 'lodash.merge';
import {addedDiff, deletedDiff, detailedDiff, diff, updatedDiff} from 'deep-object-diff';

/** Check if parameter is an array */
export const IsArray = (val: unknown): boolean => {
    return val instanceof Array;
};

/** Check if parameter is promise */
export const IsPromise = (val: unknown): boolean => {
    return !!val && Object.prototype.toString.call(val) === '[object Promise]';
};

/** Returns object's keys list as string array */
export const ObjectKeys = (val: unknown): string[] | undefined => {
    if (!val || typeof val !== 'object') return undefined;
    return Object.keys(val);
};

/**  Returns object's keys count */
export const ObjectKeysLength = (val: unknown): number => {
    const keys = ObjectKeys(val);
    return keys ? keys.length : 0;
};

/** Search index in objects array with specified object property */
export const FindIndexInObjectsArray = (objArray: Record<string, unknown>[], objProperty: string, searchVal: unknown): number => {
    if (!IsArray(objArray)) return -1;

    for (let i = 0; i < objArray.length; i++) {
        if (objArray[i][objProperty] === searchVal) return i;
    }

    return -1;
};

/** Search value in objects array by object property */
export const FindObjectInArray = (objArray: Record<string, unknown>[], objProperty: string, searchVal: unknown): Record<string, unknown> | undefined => {
    if (!IsArray(objArray)) return undefined;

    for (const item of objArray) {
        if (item[objProperty] === searchVal) return item;
    }

    return undefined;
};

/** Deep compare objects */
export const IsObjectsEqual = <TObject, TSource>(obj1: TObject, obj2: TSource): boolean => {
    return isEqual(obj1, obj2);
};

/** Deep merge objects */
export const MergeObjects = <TObject, TSource>(object: TObject, source: TSource): TObject & TSource => {
    return merge(object, source);
};

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

/** Get object content hash */
export const HashObjectContent = (object: hash.NotUndefined, options?: hash.NormalOption): string => {
    // noinspection TypeScriptValidateTypes
    return hash(object, options);
};

/** Is object has own property */
export const IsObjectHasOwnProperty = (obj: Record<string, unknown>, propName: string) => {
    return Object.prototype.hasOwnProperty.call(obj, propName);
};

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
    return [obj1 as R1, obj2 as R2];
};

/**
 * Deep compares two JavaScript Objects, including nested structures of arrays and object
 */
export const ObjectDiffs = (obj1: object, obj2: object, mode?: 'added' | 'deleted' | 'updated' | 'detailed') => {
    if (mode === 'added') return addedDiff(obj1, obj2);
    else if (mode === 'deleted') return deletedDiff(obj1, obj2);
    else if (mode === 'updated') return updatedDiff(obj1, obj2);
    else if (mode === 'detailed') return detailedDiff(obj1, obj2);
    else return diff(obj1, obj2);
};

/** Check if an object is React Class Component */
export const IsReactClassComponent = <T>(obj: T) => {
    return typeof obj === 'function' && !!obj.prototype.isReactComponent;
};

/** Check if an object is React Component */
export const isReactComponent = <T>(obj: T) => {
    if (typeof obj === 'object') {
        const _obj = obj as { $$typeof?: symbol };
        if (_obj['$$typeof'] && _obj['$$typeof'].toString() === 'Symbol(react.element)') return true;
    } else if (typeof obj === 'function') {
        if (String(obj).includes('return React.createElement') || !!obj.prototype?.isReactComponent) return true;
    }

    return false;
};

export const ParseJwt = <T extends Record<string, unknown> = Record<string, unknown>>(token: string | undefined): T | undefined => {
    if (!token) return undefined
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            window
                .atob(base64)
                .split('')
                .map((c) => {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join('')
        );

        return JSON.parse(jsonPayload);
    } catch (error) {
        return undefined
    }
};
