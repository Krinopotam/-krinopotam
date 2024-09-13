import { describe, it, expect } from 'vitest';
import { CloneObject } from '@src/helpersObjects/cloneObject';

describe('CloneObject', () => {
    it('should deep clone a simple object', () => {
        const obj = { a: 1, b: 2 };
        const clonedObj = CloneObject(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj); // Ensure it's a different reference
    });

    it('should deep clone a nested object', () => {
        const obj = { a: 1, b: { c: 2, d: 3 } };
        const clonedObj = CloneObject(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj.b).toEqual(obj.b);
        expect(clonedObj.b).not.toBe(obj.b); // Ensure nested object is a different reference
    });

    it('should respect the maxLevel parameter', () => {
        const obj = { a: { b: { c: { d: 4 } } } };
        const clonedObj = CloneObject(obj, 2);

        expect(clonedObj).toEqual({ a: { b: { c: obj.a.b.c } } });
        expect(clonedObj.a.b.c).toBe(obj.a.b.c); // Ensure nested object at maxLevel is the same reference
    });

    it('should handle arrays correctly', () => {
        const obj = { a: [1, 2, { b: 3 }] };
        const clonedObj = CloneObject(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj.a).toEqual(obj.a);
        expect(clonedObj.a).not.toBe(obj.a); // Ensure array is a different reference
        expect(clonedObj.a[2]).not.toBe(obj.a[2]); // Ensure nested object in array is a different reference
    });

    it('should return null or undefined as is', () => {
        expect(CloneObject(null)).toBeNull();
        expect(CloneObject(undefined)).toBeUndefined();
    });

    it('should handle primitive types', () => {
        expect(CloneObject(42)).toBe(42);
        expect(CloneObject('string')).toBe('string');
        expect(CloneObject(true)).toBe(true);
    });
});