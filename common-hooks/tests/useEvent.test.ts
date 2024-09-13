import { renderHook } from '@testing-library/react';
import { useEvent } from '@src/useEvent';
import { describe, it, expect, vi } from 'vitest';

describe('useEvent', () => {
    it('should always return the same stable function', () => {
        const callback = vi.fn();
        const { result, rerender } = renderHook(() => useEvent(callback));

        // Store the initial returned function
        const stableFunction = result.current;

        // Ensure the stable function doesn't change on rerender
        rerender();
        expect(result.current).toBe(stableFunction);
    });

    it('should call the latest callback', () => {
        let count = 0;
        const initialCallback = () => count;
        const { result, rerender } = renderHook(({ cb }) => useEvent(cb), {
            initialProps: { cb: initialCallback },
        });

        expect(result.current()).toBe(0);

        // Update the callback
        const updatedCallback = () => ++count;
        rerender({ cb: updatedCallback });

        // Ensure the latest callback is called
        expect(result.current()).toBe(1);
    });
});