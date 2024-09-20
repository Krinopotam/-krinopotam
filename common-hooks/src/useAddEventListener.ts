import React, {useEffect} from 'react';
import {useEvent} from './useEvent';

/**
 * Add event listener and remove it on unmount
 * @param name - event name
 * @param handler - event handler (don't care about function stability, handler will be wrapped by useEvent)
 * @param target - event target (document by default)
 * @param options - additional options
 * @param skip - skip adding event listener
 */
export const useAddEventListener = <K extends keyof DocumentEventMap, Target extends EventTarget, TReturn>(
    name: K,
    handler: (ev: DocumentEventMap[K]) => TReturn,
    target?: Target | (() => Target) | React.RefObject<Target> | null,
    options?: boolean | AddEventListenerOptions,
    skip?: boolean
) => {
    const callback = useEvent(handler) as unknown as EventListener;

    useEffect(() => {
        if (skip) return;
        const targetElement = getTarget(target);
        targetElement.addEventListener(name, callback, options);
        return () => {
            targetElement.removeEventListener(name, callback, options);
        };
    }, [callback, name, options, target]);
};

export const getTarget = <Target extends EventTarget>(target?: Target | (() => Target) | React.RefObject<Target> | null) => {
    if (target instanceof EventTarget) return target;
    if (typeof target === 'function') return target();
    if (target?.current instanceof EventTarget) return target.current;
    return document;
};
