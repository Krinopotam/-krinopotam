import { default as React } from 'react';
/**
 * React useEffect that not runs on the first render
 * @param effect - callback
 * @param deps - dependencies
 */
export declare const useUpdateEffect: (effect: React.EffectCallback, deps?: React.DependencyList) => void;
