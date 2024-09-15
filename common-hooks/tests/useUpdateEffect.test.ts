import {act, renderHook} from '@testing-library/react';
import {vi, expect, describe, it} from 'vitest';
import {useUpdateEffect} from '@src/useUpdateEffect';
import {useState} from 'react';

describe('useUpdateEffect', () => {
    it('should run effect after the first render', () => {
        const effect = vi.fn();
        const {result, rerender} = renderHook(() => {
            const [counter, setCounter] = useState(0);
            useUpdateEffect(effect, [counter]);
            return {setCounter};
        });

        // Initially, effect should not be called
        expect(effect).not.toHaveBeenCalled();

        // Update state to trigger re-render
        act(() => {
            result.current.setCounter(1);
        });

        // Re-render
        rerender();

        // Now, effect should have been called
        expect(effect).toHaveBeenCalled();
    });
});
