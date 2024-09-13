import { describe, it, expect } from 'vitest';
import { ObjectKeysLength } from '@src/helpersObjects/objectKeysLength';

describe('ObjectKeysLength', () => {
    it('should return the correct number of keys for a valid object', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const length = ObjectKeysLength(obj);
        expect(length).toBe(3);
    });

    it('should return 0 for an empty object', () => {
        const obj = {};
        const length = ObjectKeysLength(obj);
        expect(length).toBe(0);
    });

    it('should return 0 for non-object input', () => {
        const result = ObjectKeysLength(null);
        expect(result).toBe(0);

        const result2 = ObjectKeysLength(undefined);
        expect(result2).toBe(0);

        const result3 = ObjectKeysLength(123 as any);
        expect(result3).toBe(0);

        const result4 = ObjectKeysLength('string' as any);
        expect(result4).toBe(0);
    });
});