import {renderHook} from '@testing-library/react';
import {useAddEventListener} from '@src/useAddEventListener';
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

        const {result, rerender} = renderHook(({handler}) => useAddEventListener(eventType, handler, document), {initialProps: {handler: initialHandler}});

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
});
