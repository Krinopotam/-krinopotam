import { describe, it, expect } from 'vitest';
import { UpperFirstLetter } from '@src/helpersString/upperFirstLetter';

describe('UpperFirstLetter', () => {
    it('should convert the first letter to uppercase', () => {
        expect(UpperFirstLetter('hello')).toBe('Hello');
        expect(UpperFirstLetter('world')).toBe('World');
        expect(UpperFirstLetter('typescript')).toBe('Typescript');
        expect(UpperFirstLetter('typeScript')).toBe('TypeScript');
    });

    it('should handle empty strings', () => {
        expect(UpperFirstLetter('')).toBe('');
    });

    it('should not change the first character if it is already uppercase', () => {
        expect(UpperFirstLetter('Hello')).toBe('Hello');
    });

    it('should handle single character strings', () => {
        expect(UpperFirstLetter('a')).toBe('A');
        expect(UpperFirstLetter('Z')).toBe('Z');
    });
});