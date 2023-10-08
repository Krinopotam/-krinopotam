import hash from 'object-hash';
import isEqual from 'lodash.isequal';
import merge from 'lodash.merge';
import { diff, addedDiff, deletedDiff, updatedDiff, detailedDiff } from 'deep-object-diff';
export const HelpersObjects = {
    isArray: function (val) {
        return val instanceof Array;
    },
    isPromise: function (val) {
        return !!val && Object.prototype.toString.call(val) === '[object Promise]';
    },
    objectKeys: function (val) {
        if (!val || typeof val !== 'object')
            return undefined;
        return Object.keys(val);
    },
    objectKeysLength: function (val) {
        const keys = this.objectKeys(val);
        return keys ? keys.length : 0;
    },
    findIndexInObjectsArray: function (objArray, objProperty, searchVal) {
        if (!this.isArray(objArray))
            return -1;
        for (let i = 0; i < objArray.length; i++) {
            if (objArray[i][objProperty] === searchVal)
                return i;
        }
        return -1;
    },
    findObjectInArray: function (objArray, objProperty, searchVal) {
        if (!this.isArray(objArray))
            return undefined;
        for (const item of objArray) {
            if (item[objProperty] === searchVal)
                return item;
        }
        return undefined;
    },
    isObjectsEqual: function (obj1, obj2) {
        return isEqual(obj1, obj2);
    },
    mergeObjects: function (object, source) {
        return merge(object, source);
    },
    cloneObject: function (object, maxLevel) {
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
                    clonedObj[key] = !this.isArray(item)
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
                    clonedArr[i] = !this.isArray(item)
                        ? objRecursion(item, level, cloneMaxLevel)
                        : arraysRecursion(item, level, cloneMaxLevel);
            }
            return clonedArr;
        };
        return !this.isArray(object)
            ? objRecursion(object, 0, maxLevel !== null && maxLevel !== void 0 ? maxLevel : 0)
            : arraysRecursion(object, 0, maxLevel !== null && maxLevel !== void 0 ? maxLevel : 0);
    },
    hashObjectContent: function (object, options) {
        return hash(object, options);
    },
    isObjectHasOwnProperty: function (obj, propName) {
        return Object.prototype.hasOwnProperty.call(obj, propName);
    },
    splitObject: function (obj, propNames) {
        const obj1 = {};
        const obj2 = {};
        for (const key in obj) {
            if (propNames[key])
                obj1[key] = obj[key];
            else
                obj2[key] = obj[key];
        }
        return [obj1, obj2];
    },
    objectDiffs: function (obj1, obj2, mode) {
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
    },
    isReactClassComponent: (obj) => {
        return (typeof obj === 'function' && !!obj.prototype.isReactComponent);
    },
    isReactComponent: (obj) => {
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
    }
};
