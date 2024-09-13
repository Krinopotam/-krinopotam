import { renderHook, act } from '@testing-library/react';
import { useGetActualProps } from '@src/useGetActualProps'; // Adjust the import path as needed
import { describe, it, expect } from 'vitest';

describe('useGetActualProps', () => {
    it('should return the initial props and setProps function', () => {
        const initialProps = { key: 'value' };
        const { result } = renderHook(() => useGetActualProps(initialProps));

        const [props, setProps] = result.current;
        expect(props).toEqual({ key: 'value' });
        expect(props).toBe(initialProps);
        expect(typeof setProps).toBe('function');
    });

    it('should update props using setProps function', () => {
        const initialProps = { key: 'value' };
        const newProps = { key: 'newValue' };
        const { result } = renderHook(() => useGetActualProps(initialProps));

        act(() => {
            const [, setProps] = result.current;
            setProps(newProps);
        });

        const [props] = result.current;
        expect(props).toEqual({ key: 'newValue' });
        expect(props).toBe(newProps);
    });

    it('should update props using setProps function with a function argument', () => {
        const initialProps = { key: 'value' };
        const { result } = renderHook(() => useGetActualProps(initialProps));

        act(() => {
            const [, setProps] = result.current;
            setProps(prevProps => ({ ...prevProps, key: 'updatedValue' }));
        });

        const [props] = result.current;
        expect(props.key).toBe('updatedValue');
    });

    it('should handle new props from parent component', () => {
        let externalProps = { key: 'value' };
        const { result, rerender } = renderHook(() => useGetActualProps(externalProps));

        externalProps = { key: 'newParentValue' };
        rerender();

        const [props] = result.current;
        expect(props).toEqual({ key: 'newParentValue' });
        expect(props).toBe(externalProps);
    });
});