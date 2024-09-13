import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { useResponsive } from '@src/useResponsive';
import { IBreakpoints } from '@src/useResponsive';

describe('useResponsive', () => {
    const originalMatchMedia = window.matchMedia;

    beforeAll(() => {
        window.matchMedia = vi.fn().mockImplementation(query => ({
            matches: query.includes('max-width: 767.98px'),
            media: query,
            onchange: null,
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            addListener: vi.fn(),  // Deprecated
            removeListener: vi.fn(),  // Deprecated
            dispatchEvent: vi.fn(),
        }));
    });

    afterAll(() => {
        window.matchMedia = originalMatchMedia;
    });

    it('should call onBreakpoint with true when the media query matches', () => {
        const onBreakpoint = vi.fn();
        const breakpoint: IBreakpoints = 'md';

        renderHook(() => useResponsive(breakpoint, onBreakpoint));

        expect(onBreakpoint).toHaveBeenCalledWith(true);
    });

    it('should call onBreakpoint with false when the media query does not match', () => {
        window.matchMedia = vi.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            addListener: vi.fn(),  // Deprecated
            removeListener: vi.fn(),  // Deprecated
            dispatchEvent: vi.fn(),
        }));

        const onBreakpoint = vi.fn();
        const breakpoint: IBreakpoints = 'md';

        renderHook(() => useResponsive(breakpoint, onBreakpoint));

        expect(onBreakpoint).toHaveBeenCalledWith(false);
    });

    it('should remove event listeners on unmount', () => {
        const removeEventListener = vi.fn();
        window.matchMedia = vi.fn().mockImplementation(query => ({
            matches: query.includes('max-width: 767.98px'),
            media: query,
            onchange: null,
            addEventListener: vi.fn(),
            removeEventListener,
            addListener: vi.fn(),  // Deprecated
            removeListener: vi.fn(),  // Deprecated
            dispatchEvent: vi.fn(),
        }));

        const onBreakpoint = vi.fn();
        const breakpoint: IBreakpoints = 'md';

        const { unmount } = renderHook(() => useResponsive(breakpoint, onBreakpoint));
        unmount();

        expect(removeEventListener).toHaveBeenCalled();
    });
});