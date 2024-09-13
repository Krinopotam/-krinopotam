// tests/helpersString/camelCaseSplit.test.ts
import { describe, it, expect } from 'vitest';
import { CamelCaseSplit } from '@src/helpersString/camelCaseSplit';

describe('CamelCaseSplit', () => {
    it('should separate camel case string with default space', () => {
        const result = CamelCaseSplit('CamelCaseString');
        expect(result).toBe('Camel Case String');
    });

    it('should separate camel case string with provided splitter', () => {
        const result = CamelCaseSplit('CamelCaseString', '-');
        expect(result).toBe('Camel-Case-String');
    });

    it('should return the same string if there are no capital letters', () => {
        const result = CamelCaseSplit('camelcasestring');
        expect(result).toBe('camelcasestring');
    });

    it('should handle strings with numbers correctly', () => {
        const result = CamelCaseSplit('camelCase1String');
        expect(result).toBe('camel Case1 String');
    });
});