// tests/helpersString/getRandomColor.test.ts
import { describe, it, expect } from 'vitest';
import { GetRandomColor } from '@src/helpersString/getRandomColor';

describe('GetRandomColor', () => {
    it('should generate a valid hex color code', () => {
        const color = GetRandomColor();
        const hexColorPattern = /^#[0-9A-F]{6}$/i;
        expect(color).toMatch(hexColorPattern);
    });

    it('should generate unique colors', () => {
        const color1 = GetRandomColor();
        const color2 = GetRandomColor();
        expect(color1).not.toBe(color2);
    });

    it('should always generate a string of length 7', () => {
        const color = GetRandomColor();
        expect(color).toHaveLength(7);
    });
});