// tests/helpersString/getNanoId.test.ts
import { describe, it, expect } from 'vitest';
import { GetNanoId } from '@src/helpersString/getNanoId';

describe('GetNanoId', () => {
    it('should generate a nano id of default size', () => {
        const nanoId = GetNanoId();
        expect(nanoId).toHaveLength(21);
    });

    it('should generate a nano id of specified size', () => {
        const size = 10;
        const nanoId = GetNanoId(size);
        expect(nanoId).toHaveLength(size);
    });

    it('should generate unique ids', () => {
        const nanoId1 = GetNanoId();
        const nanoId2 = GetNanoId();
        expect(nanoId1).not.toBe(nanoId2);
    });
});