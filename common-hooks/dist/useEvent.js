import { useRef, useEffect, useCallback } from 'react';
/** Always returns stable event function instance
* event function shouldn't be called in render time
*/
export const useEvent = (callback) => {
    const callbackRef = useRef(callback);
    // Keep the callback reference up-to-date
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);
    // Return stable callback that always calls the latest callbackRef.current
    return useCallback((...args) => {
        return callbackRef.current(...args);
    }, []);
};
