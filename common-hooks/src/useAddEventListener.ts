import {useEffect} from 'react';
import {useEvent} from "./useEvent";


export const useAddEventListener = <K extends keyof DocumentEventMap, TReturn>(
    name: K,
    handler:  (this: Document, ev:DocumentEventMap[K]) => TReturn,
    options?: boolean | AddEventListenerOptions
) => {
    const callback = useEvent(handler);

    useEffect(() => {
        document.addEventListener(name, callback, options);
        return () => {
            document.removeEventListener(name, callback, options);
        };
    }, [name, handler, callback, options]);
};
