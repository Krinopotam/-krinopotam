import { describe, it, expect } from 'vitest';
import { FindIndexInObjectsArray } from '@src/helpersObjects/findIndexInObjectsArray';

describe('FindIndexInObjectsArray', () => {
    it('should return the correct index when the object property matches the search value', () => {
        const objArray = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' }
        ];

        const result = FindIndexInObjectsArray(objArray, 'name', 'Bob');
        expect(result).toBe(1);
    });

    it('should return -1 when the array is not an array', () => {
        const result = FindIndexInObjectsArray(null as any, 'name', 'Bob');
        expect(result).toBe(-1);
    });

    it('should return -1 when the object property does not match the search value', () => {
        const objArray = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' }
        ];

        const result = FindIndexInObjectsArray(objArray, 'name', 'David');
        expect(result).toBe(-1);
    });

    it('should return -1 when the object array is empty', () => {
        const objArray: { id: number, name: string }[] = [];

        const result = FindIndexInObjectsArray(objArray, 'name', 'Bob');
        expect(result).toBe(-1);
    });
});