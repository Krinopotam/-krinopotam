import { describe, it, expect } from 'vitest';
import {ObjectKeys} from "@src/helpersObjects/objectKeys";

describe('ObjectKeys', () => {
    it('should return keys for a valid object', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const keys = ObjectKeys(obj);
        expect(keys).toEqual(['a', 'b', 'c']);
    });

    it('should return undefined for non-object input', () => {
        const result = ObjectKeys(null);
        expect(result).toBeUndefined();

        const result2 = ObjectKeys(123 as any);
        expect(result2).toBeUndefined();

        const result3 = ObjectKeys('string' as any);
        expect(result3).toBeUndefined();
    });

    it('should return an empty array for an empty object', () => {
        const obj = {};
        const keys = ObjectKeys(obj);
        expect(keys).toEqual([]);
    });
});