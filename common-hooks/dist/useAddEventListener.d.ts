import { default as React } from 'react';
/**
 * Add event listener and remove it on unmount
 * @param name - event name
 * @param handler - event handler (don't care about function stability, handler will be wrapped by useEvent)
 * @param target - event target (document by default)
 * @param options - additional options
 * @param skip - skip adding event listener
 */
export declare const useAddEventListener: <K extends keyof DocumentEventMap, Target extends EventTarget, TReturn>(name: K, handler: (ev: DocumentEventMap[K]) => TReturn, target?: Target | (() => Target) | React.RefObject<Target> | null, options?: boolean | AddEventListenerOptions, skip?: boolean) => void;
