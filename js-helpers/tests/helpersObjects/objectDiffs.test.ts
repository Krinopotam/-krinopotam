import { describe, it, expect } from 'vitest';
import { ObjectDiffs } from '@src/helpersObjects/objectDiffs';

describe('ObjectDiffs', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 3, d: 4 };

    it('should detect added properties', () => {
        const result = ObjectDiffs(obj1, obj2, 'added');
        expect(result).toEqual({ d: 4 });
    });

    it('should detect deleted properties', () => {
        const result = ObjectDiffs(obj1, obj2, 'deleted');
        expect(result).toEqual({ c: undefined });
    });

    it('should detect updated properties', () => {
        const result = ObjectDiffs(obj1, obj2, 'updated');
        expect(result).toEqual({ b: 3 });
    });

    it('should provide detailed differences', () => {
        const result = ObjectDiffs(obj1, obj2, 'detailed');
        expect(result).toEqual({
            added: { d: 4 },
            deleted: { c: undefined },
            updated: { b: 3 }
        });
    });

    it('should provide basic differences by default', () => {
        const result = ObjectDiffs(obj1, obj2);
        expect(result).toEqual({
            b: 3, // updated
            c: undefined, // deleted
            d: 4  // added
        });
    });
});