import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useIsMountedRef } from '@src/useIsMounted';

describe('useIsMountedRef', () => {
    it('should set isMountedRef to true when component is mounted', () => {
        const { result } = renderHook(() => useIsMountedRef());
        expect(result.current.current).toBe(true);
    });

    it('should set isMountedRef to false when component is unmounted', () => {
        const { result, unmount } = renderHook(() => useIsMountedRef());
        unmount();
        expect(result.current.current).toBe(false);
    });
});