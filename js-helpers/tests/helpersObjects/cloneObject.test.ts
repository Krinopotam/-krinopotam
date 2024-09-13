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

    it('should handle circular references', () => {
        const obj: any = { a: 1 };
        obj.self = obj;

        const clonedObj = CloneObject(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj);
        expect(clonedObj.self).toBe(clonedObj);
    });

    it('should handle complex circular references', () => {
        const r1:any = {r1: 1};
        const r2:any = {r2: 2};
        const r1c1:any = {r1c1: 1, root: r1, parent: r1};
        const r1c2:any = {r1c2: 2, root: r1, parent: r1};
        const r2c1:any = {r2c1: 1, root: r2, parent: r2};
        const r2c2:any = {r2c2: 2, root: r2, parent: r2};
        const r1c1g1:any = {r1c1g1: 1, root: r1, parent: r1c1};
        const r1c2g1:any = {r1c2g1: 2, root: r1, parent: r1c2};
        r1.children = [r1c1, r1c2]
        r2.children = [r2c1, r2c2]
        r1c1.children = [r1c1g1];
        r1c2.children = [r1c2g1];

        const obj: any = [r1,  r2];

        const clonedObj = CloneObject(obj);

        expect(clonedObj).toEqual(obj); // Ensure it's a now the same object but has the same structure
        expect(clonedObj).not.toBe(obj);
        expect(clonedObj[0].children[0].parent).toBe(clonedObj[0]); //Ensure it's the same object
        expect(clonedObj[0].children[0].parent).not.toBe(obj[0]);

        expect(clonedObj[0].children[1].parent).toBe(clonedObj[0]);
        expect(clonedObj[0].children[1].parent).not.toBe(obj[0]);

        expect(clonedObj[0].children[0].root).toBe(clonedObj[0]);
        expect(clonedObj[0].children[0].root).not.toBe(obj[0]);

        expect(clonedObj[0].children[1].root).toBe(clonedObj[0]);
        expect(clonedObj[0].children[1].root).not.toBe(obj[0]);

        expect(clonedObj[0].children[0].children[0].root).toBe(clonedObj[0]);
        expect(clonedObj[0].children[0].children[0].root).not.toBe(obj[0]);

        expect(clonedObj[0].children[0].children[0].parent).toBe(clonedObj[0].children[0]);
        expect(clonedObj[0].children[0].children[0].parent).not.toBe(obj[0].children[0]);

        expect(clonedObj[0].children[0].children[0].parent).toEqual(obj[0].children[0]);
    });
});