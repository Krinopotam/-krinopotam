import { useRef, useEffect, useCallback } from 'react';
export const useEvent = (callback) => {
    const callbackRef = useRef(callback);
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);
    return useCallback((...args) => {
        return callbackRef.current(...args);
    }, []);
};
