// tests/helpersString/getUuid.test.ts
import { describe, it, expect } from 'vitest';
import { GetUuid } from '@src/helpersString/getUuid';

describe('GetUuid', () => {
    it('should generate a valid UUID', () => {
        const uuid = GetUuid();
        const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        expect(uuid).toMatch(uuidPattern);
    });

    it('should generate unique UUIDs', () => {
        const uuid1 = GetUuid();
        const uuid2 = GetUuid();
        expect(uuid1).not.toBe(uuid2);
    });
});