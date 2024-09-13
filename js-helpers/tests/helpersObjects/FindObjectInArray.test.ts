import { describe, it, expect } from 'vitest';
import { FindObjectInArray } from '@src/helpersObjects/findObjectInArray';

describe('FindObjectInArray', () => {
    it('should return the correct object when the object property matches the search value', () => {
        const objArray = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' }
        ];

        const result = FindObjectInArray(objArray, 'name', 'Bob');
        expect(result).toEqual({ id: 2, name: 'Bob' });
    });

    it('should return undefined when the array is not an array', () => {
        const result = FindObjectInArray(null as any, 'name', 'Bob');
        expect(result).toBeUndefined();
    });

    it('should return undefined when the object property does not match the search value', () => {
        const objArray = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' }
        ];

        const result = FindObjectInArray(objArray, 'name', 'David');
        expect(result).toBeUndefined();
    });

    it('should return undefined when the object array is empty', () => {
        const objArray: { id: number, name: string }[] = [];

        const result = FindObjectInArray(objArray, 'name', 'Bob');
        expect(result).toBeUndefined();
    });
});