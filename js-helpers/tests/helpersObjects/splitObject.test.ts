import { describe, it, expect } from 'vitest';
import { SplitObject } from '@src/helpersObjects/splitObject';

describe('SplitObject', () => {
    it('should split the object based on provided propNames', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const propNames = { a: true, c: true };
        const [obj1, obj2] = SplitObject(obj, propNames);

        expect(obj1).toEqual({ a: 1, c: 3 });
        expect(obj2).toEqual({ b: 2 });
    });

    it('should return the entire object in the second object if propNames is empty', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const propNames = {};
        const [obj1, obj2] = SplitObject(obj, propNames);

        expect(obj1).toEqual({});
        expect(obj2).toEqual(obj);
    });

    it('should return the entire object in the first object if propNames contains all keys', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const propNames = { a: true, b: true, c: true };
        const [obj1, obj2] = SplitObject(obj, propNames);

        expect(obj1).toEqual(obj);
        expect(obj2).toEqual({});
    });

    it('should handle an empty object', () => {
        const obj = {};
        const propNames = { a: true };
        const [obj1, obj2] = SplitObject(obj, propNames);

        expect(obj1).toEqual({});
        expect(obj2).toEqual({});
    });
});