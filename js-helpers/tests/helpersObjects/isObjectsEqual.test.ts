import { describe, it, expect } from 'vitest';
import { IsObjectsEqual } from '@src/helpersObjects/isObjectsEqual';

describe('IsObjectsEqual', () => {
    it('should return true for deeply equal objects', () => {
        const obj1 = { user: 'fred', details: { age: 30 } };
        const obj2 = { user: 'fred', details: { age: 30 } };
        const result = IsObjectsEqual(obj1, obj2);
        expect(result).toBe(true);
    });

    it('should return false for objects with different values', () => {
        const obj1 = { user: 'fred', details: { age: 30 } };
        const obj2 = { user: 'fred', details: { age: 31 } };
        const result = IsObjectsEqual(obj1, obj2);
        expect(result).toBe(false);
    });

    it('should return true for deeply equal arrays', () => {
        const arr1 = [1, 2, { a: 3 }];
        const arr2 = [1, 2, { a: 3 }];
        const result = IsObjectsEqual(arr1, arr2);
        expect(result).toBe(true);
    });

    it('should return false for arrays with different values', () => {
        const arr1 = [1, 2, { a: 3 }];
        const arr2 = [1, 2, { a: 4 }];
        const result = IsObjectsEqual(arr1, arr2);
        expect(result).toBe(false);
    });

    it('should return false when comparing an object and an array', () => {
        const obj = { user: 'fred' };
        const arr = [1, 2, 3];
        const result = IsObjectsEqual(obj, arr);
        expect(result).toBe(false);
    });

    it('should return true for identical primitive values', () => {
        const val1 = 'string';
        const val2 = 'string';
        const result = IsObjectsEqual(val1, val2);
        expect(result).toBe(true);
    });

    it('should return false for different primitive values', () => {
        const val1 = 'string1';
        const val2 = 'string2';
        const result = IsObjectsEqual(val1, val2);
        expect(result).toBe(false);
    });
});