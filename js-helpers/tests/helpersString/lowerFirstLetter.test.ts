import { describe, it, expect } from 'vitest';
import { LowerFirstLetter } from '@src/helpersString/lowerFirstLetter';

describe('LowerFirstLetter', () => {
    it('should convert the first letter to lowercase', () => {
        expect(LowerFirstLetter('Hello')).toBe('hello');
        expect(LowerFirstLetter('WORLD')).toBe('wORLD');
        expect(LowerFirstLetter('TypeScript')).toBe('typeScript');
    });

    it('should handle empty strings', () => {
        expect(LowerFirstLetter('')).toBe('');
    });

    it('should not change the first character if it is already lowercase', () => {
        expect(LowerFirstLetter('hello')).toBe('hello');
    });

    it('should handle single character strings', () => {
        expect(LowerFirstLetter('A')).toBe('a');
        expect(LowerFirstLetter('z')).toBe('z');
    });
});