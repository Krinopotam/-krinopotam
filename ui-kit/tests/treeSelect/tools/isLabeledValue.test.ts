import { describe, it, expect } from 'vitest';
import { isLabeledValue } from '@src/treeSelect/tools/isLabeledValue';
import { ILabeledValue } from '@src/treeSelect/types/types';

describe('isLabeledValue', () => {
    it('should return true for valid ILabeledValue', () => {
        const validValue: ILabeledValue = { value: 'key', label: 'label' };
        expect(isLabeledValue(validValue)).toBe(true);
    });

    it('should return true for ILabeledValue with key field only', () => {
        const validValue: ILabeledValue = { value: 'key' };
        expect(isLabeledValue(validValue)).toBe(true);
    });

    it('should return false for invalid ILabeledValue', () => {
        const invalidValue = { label: 'label' }; // Missing 'value'
        expect(isLabeledValue(invalidValue)).toBe(false);
    });

    it('should return false for non-object values', () => {
        expect(isLabeledValue(null)).toBe(false);
        expect(isLabeledValue(undefined)).toBe(false);
        expect(isLabeledValue(123)).toBe(false);
        expect(isLabeledValue('string')).toBe(false);
    });
});