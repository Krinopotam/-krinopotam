import { useEffect } from 'react';
import { useEvent } from "./useEvent";
/**
 * Add event listener and remove it on unmount
 * @param name - event name
 * @param handler - event handler (stable function is not required, handler will be wrapped by useEvent)
 * @param target - event target (document by default)
 * @param options - additional options
 */
export const useAddEventListener = (name, handler, target, options) => {
    const callback = useEvent(handler);
    useEffect(() => {
        const targetElement = target !== null && target !== void 0 ? target : document;
        targetElement.addEventListener(name, callback, options);
        return () => {
            targetElement.removeEventListener(name, callback, options);
        };
    }, [callback, name, options, target]);
};
