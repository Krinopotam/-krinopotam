import {renderHook} from '@testing-library/react';
import {getTarget, useAddEventListener} from '@src/useAddEventListener';
import {describe, it, expect, vi} from 'vitest';

const eventType = 'click';

describe('useAddEventListener', () => {
    it('should add and remove event listener', () => {
        const handler = vi.fn();
        const eventType = 'click';

        const {unmount} = renderHook(() => useAddEventListener(eventType, handler, document));

        // Simulate event
        const event = new Event(eventType);
        document.dispatchEvent(event);
        expect(handler).toHaveBeenCalledTimes(1);

        // Unmount the hook to remove the event listener
        unmount();
        document.dispatchEvent(event);
        expect(handler).toHaveBeenCalledTimes(1); // should not increase
    });

    it('should use the latest handler', () => {
        let count = 0;
        const initialHandler = vi.fn(() => count);
        const updatedHandler = vi.fn(() => ++count);

        const { rerender} = renderHook(({handler}) => useAddEventListener(eventType, handler, document), {initialProps: {handler: initialHandler}});

        // Simulate event
        const event = new Event(eventType);
        document.dispatchEvent(event);
        expect(initialHandler).toHaveBeenCalledTimes(1);
        expect(updatedHandler).toHaveBeenCalledTimes(0);

        // Update handler
        rerender({handler: updatedHandler});
        document.dispatchEvent(event);
        expect(initialHandler).toHaveBeenCalledTimes(1);
        expect(updatedHandler).toHaveBeenCalledTimes(1);
    });

    it('should nod add event listener if skip passed', () => {
        const handler = vi.fn();
        const eventType = 'click';

        const {unmount} = renderHook(() => useAddEventListener(eventType, handler, document, undefined, true));

        // Simulate event
        const event = new Event(eventType);
        document.dispatchEvent(event);
        expect(handler).toHaveBeenCalledTimes(0);

        // Unmount the hook to remove the event listener
        unmount();
        document.dispatchEvent(event);
        expect(handler).toHaveBeenCalledTimes(0); // should not increase
    });
});

describe('getTarget', () => {
    it('returns the target if it is an EventTarget', () => {
        const target = document.createElement('div');
        expect(getTarget(target)).toBe(target);
    });

    it('returns the result of calling the target if it is a function', () => {
        const target = () => document.createElement('div');
        expect(getTarget(target)).toBeInstanceOf(HTMLDivElement);
    });

    it('returns the current value of the target if it is a React.RefObject', () => {
        const target = { current: document.createElement('div') };
        expect(getTarget(target)).toBe(target.current);
    });

    it('returns the document if the target is null or undefined', () => {
        expect(getTarget(null)).toBe(document);
        expect(getTarget(undefined)).toBe(document);
    });
});