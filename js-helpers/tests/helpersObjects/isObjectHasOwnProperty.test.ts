import { describe, it, expect } from 'vitest';
import { IsObjectHasOwnProperty } from '@src/helpersObjects/isObjectHasOwnProperty';

describe('IsObjectHasOwnProperty', () => {
    it('should return true if the object has the specified property', () => {
        const obj = { name: 'Alice', age: 30 };
        const result = IsObjectHasOwnProperty(obj, 'name');
        expect(result).toBe(true);
    });

    it('should return false if the object does not have the specified property', () => {
        const obj = { name: 'Alice', age: 30 };
        const result = IsObjectHasOwnProperty(obj, 'address');
        expect(result).toBe(false);
    });

    it('should return false for properties from the prototype chain', () => {
        const obj = Object.create({ inheritedProp: 'inherited' });
        obj.ownProp = 'own';

        const result = IsObjectHasOwnProperty(obj, 'inheritedProp');
        expect(result).toBe(false);
    });

    it('should return false for a null object', () => {
        const result = IsObjectHasOwnProperty(null as any, 'prop');
        expect(result).toBe(false);
    });

    it('should return false for an undefined object', () => {
        const result = IsObjectHasOwnProperty(undefined as any, 'prop');
        expect(result).toBe(false);
    });

    it('should return false for an empty string as property name', () => {
        const obj = { '': 'empty' };
        const result = IsObjectHasOwnProperty(obj, '');
        expect(result).toBe(true);
    });
});