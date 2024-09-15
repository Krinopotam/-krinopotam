import React, {useEffect, useRef} from 'react';

/**
 * React useEffect that not runs on the first render
 * @param effect - callback
 * @param deps - dependencies
 */
export const useUpdateEffect = (effect: React.EffectCallback, deps?: React.DependencyList) => {
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        return effect();
    }, deps);
}