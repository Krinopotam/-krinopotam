import { useEffect } from 'react';
import { useEvent } from "./useEvent";
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
