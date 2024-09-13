import { describe, it, expect } from 'vitest';
import { IsArray } from '@src/helpersObjects/isArray';

describe('IsArray', () => {
    it('should return true for an array', () => {
        const result = IsArray([1, 2, 3]);
        expect(result).toBe(true);
    });

    it('should return false for a string', () => {
        const result = IsArray("string");
        expect(result).toBe(false);
    });

    it('should return false for an object', () => {
        const result = IsArray({ key: 'value' });
        expect(result).toBe(false);
    });

    it('should return false for null', () => {
        const result = IsArray(null);
        expect(result).toBe(false);
    });

    it('should return false for undefined', () => {
        const result = IsArray(undefined);
        expect(result).toBe(false);
    });

    it('should return false for a number', () => {
        const result = IsArray(123);
        expect(result).toBe(false);
    });

    it('should return false for a boolean', () => {
        const result = IsArray(true);
        expect(result).toBe(false);
    });
});