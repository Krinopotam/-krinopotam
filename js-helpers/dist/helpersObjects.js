import hash from 'object-hash';
import isEqual from 'lodash.isequal';
import merge from 'lodash.merge';
import { addedDiff, deletedDiff, detailedDiff, diff, updatedDiff } from 'deep-object-diff';
export const IsArray = (val) => {
    return val instanceof Array;
};
export const IsPromise = (val) => {
    return !!val && Object.prototype.toString.call(val) === '[object Promise]';
};
export const ObjectKeys = (val) => {
    if (!val || typeof val !== 'object')
        return undefined;
    return Object.keys(val);
};
export const ObjectKeysLength = (val) => {
    const keys = ObjectKeys(val);
    return keys ? keys.length : 0;
};
export const FindIndexInObjectsArray = (objArray, objProperty, searchVal) => {
    if (!IsArray(objArray))
        return -1;
    for (let i = 0; i < objArray.length; i++) {
        if (objArray[i][objProperty] === searchVal)
            return i;
    }
    return -1;
};
export const FindObjectInArray = (objArray, objProperty, searchVal) => {
    if (!IsArray(objArray))
        return undefined;
    for (const item of objArray) {
        if (item[objProperty] === searchVal)
            return item;
    }
    return undefined;
};
export const IsObjectsEqual = (obj1, obj2) => {
    return isEqual(obj1, obj2);
};
export const MergeObjects = (object, source) => {
    return merge(object, source);
};
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
export const HashObjectContent = (object, options) => {
    return hash(object, options);
};
export const IsObjectHasOwnProperty = (obj, propName) => {
    return Object.prototype.hasOwnProperty.call(obj, propName);
};
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
export const ObjectDiffs = (obj1, obj2, mode) => {
    if (mode === 'added')
        return addedDiff(obj1, obj2);
    else if (mode === 'deleted')
        return deletedDiff(obj1, obj2);
    else if (mode === 'updated')
        return updatedDiff(obj1, obj2);
    else if (mode === 'detailed')
        return detailedDiff(obj1, obj2);
    else
        return diff(obj1, obj2);
};
export const IsReactClassComponent = (obj) => {
    return typeof obj === 'function' && !!obj.prototype.isReactComponent;
};
export const IsReactComponent = (obj) => {
    var _a;
    if (typeof obj === 'object') {
        const _obj = obj;
        if (_obj['$$typeof'] && _obj['$$typeof'].toString() === 'Symbol(react.element)')
            return true;
    }
    else if (typeof obj === 'function') {
        if (String(obj).includes('return React.createElement') || !!((_a = obj.prototype) === null || _a === void 0 ? void 0 : _a.isReactComponent))
            return true;
    }
    return false;
};
export const ParseJwt = (token) => {
    if (!token)
        return undefined;
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window
            .atob(base64)
            .split('')
            .map((c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(''));
        return JSON.parse(jsonPayload);
    }
    catch (error) {
        return undefined;
    }
};
