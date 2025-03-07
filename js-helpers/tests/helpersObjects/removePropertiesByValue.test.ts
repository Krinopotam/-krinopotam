import { describe, it, expect } from 'vitest';
import { RemovePropertiesByValue } from '@src/helpersObjects/removePropertiesByValue';

describe('removePropertiesByType', () => {
    it('removes properties with the target value', () => {
        const obj = { a: 1, b: 2, c: 3, d: 2 };
        const result = RemovePropertiesByValue(obj, 2);
        expect(result).toEqual({ a: 1, c: 3 });
    });

    it('removes nested properties with the target value', () => {
        const obj = { a: 1, b: { c: 2, d: 3 }, e: 2 };
        const result = RemovePropertiesByValue(obj, 2);
        expect(result).toEqual({ a: 1, b: { d: 3 } });
    });

    it('does not remove properties with a different value', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = RemovePropertiesByValue(obj, 4);
        expect(result).toEqual(obj);
    });

    it('handles null and undefined values', () => {
        const obj = { a: null, b: undefined, c: 3 };
        const result = RemovePropertiesByValue(obj, null);
        expect(result).toEqual({ b: undefined, c: 3 });
    });

    it('handles non-object values', () => {
        const obj = 'hello';
        const result = RemovePropertiesByValue(obj, 'world');
        expect(result).toBe(obj);
    });
});