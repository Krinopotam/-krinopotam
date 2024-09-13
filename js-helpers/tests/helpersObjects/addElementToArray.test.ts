import { describe, it, expect } from 'vitest';
import { AddElementToArray } from '@src/helpersObjects/addElementToArray';

describe('AddElementToArray', () => {
    it('should add element at the bottom when position is bottom', () => {
        const arr = [1, 2, 3];
        const result = AddElementToArray(arr, 4, undefined, 'bottom', true);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    it('should add element at the top when position is top', () => {
        const arr = [1, 2, 3];
        const result = AddElementToArray(arr, 0, undefined, 'top', true);
        expect(result).toEqual([0, 1, 2, 3]);
    });

    it('should add element above the target element', () => {
        const arr = [1, 2, 3];
        const result = AddElementToArray(arr, 1.5, 2, 'above', true);
        expect(result).toEqual([1, 1.5, 2, 3]);
    });

    it('should add element below the target element', () => {
        const arr = [1, 2, 3];
        const result = AddElementToArray(arr, 2.5, 2, 'below', true);
        expect(result).toEqual([1, 2, 2.5, 3]);
    });

    it('should mutate the original array if clone is false', () => {
        const arr = [1, 2, 3];
        const result = AddElementToArray(arr, 4, undefined, 'bottom', false);
        expect(result).toBe(arr); // should be the same reference
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    it('should return a cloned array if clone is true', () => {
        const arr = [1, 2, 3];
        const result = AddElementToArray(arr, 4, undefined, 'bottom', true);
        expect(result).not.toBe(arr); // should not be the same reference
        expect(result).toEqual([1, 2, 3, 4]);
    });
});