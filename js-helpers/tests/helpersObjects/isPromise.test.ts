import { describe, it, expect } from 'vitest';
import { IsPromise } from '@src/helpersObjects/isPromise';

describe('IsPromise', () => {
    it('should return true for a native Promise', () => {
        const promise = new Promise<void>((resolve) => resolve());
        const result = IsPromise(promise);
        expect(result).toBe(true);
    });

    it('should return true for an object with a then method', () => {
        const thenable = { then: () => {} };
        const result = IsPromise(thenable);
        expect(result).toBe(true);
    });

    it('should return false for a non-promise object', () => {
        const obj = { key: 'value' };
        const result = IsPromise(obj);
        expect(result).toBe(false);
    });

    it('should return false for a string', () => {
        const result = IsPromise("string");
        expect(result).toBe(false);
    });

    it('should return false for null', () => {
        const result = IsPromise(null);
        expect(result).toBe(false);
    });

    it('should return false for undefined', () => {
        const result = IsPromise(undefined);
        expect(result).toBe(false);
    });

    it('should return false for a number', () => {
        const result = IsPromise(123);
        expect(result).toBe(false);
    });

    it('should return false for a boolean', () => {
        const result = IsPromise(true);
        expect(result).toBe(false);
    });
});