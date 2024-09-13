import { describe, it, expect, vi } from 'vitest';
import { measureTime } from '@src/helpersEnvironment/measureTime';

describe('measureTime', () => {
    it('should measure the execution time of a function', () => {
        const mockFunction = vi.fn(() => 42);
        const consoleSpy = vi.spyOn(console, 'log');

        const result = measureTime('testFunction', mockFunction);

        expect(result).toBe(42);
        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('testFunction time: '));

        consoleSpy.mockRestore();
    });

    it('should work with asynchronous functions', async () => {
        const asyncFunction = vi.fn(async () => {
            return new Promise(resolve => setTimeout(() => resolve(42), 100));
        });
        const consoleSpy = vi.spyOn(console, 'log');

        const result = await measureTime('asyncFunction', asyncFunction);

        expect(result).toBe(42);
        expect(asyncFunction).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('asyncFunction time: '));

        consoleSpy.mockRestore();
    });
});