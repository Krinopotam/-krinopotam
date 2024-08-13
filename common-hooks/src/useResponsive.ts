import {useCallback, useEffect, useRef} from "react";

export type IBreakpoints = keyof IDimensionMaxMap

export interface IDimensionMaxMap {
    xl?: string;
    md?: string;
    sm?: string;
    xs?: string;
    lg?: string;
    xxl?: string;
}

const defaultDimensionMaxMap: IDimensionMaxMap = {
    xs: '479.98px',
    sm: '575.98px',
    md: '767.98px',
    lg: '991.98px',
    xl: '1199.98px',
    xxl: '1599.98px',
};

/**
 *
 * @param breakpoint
 * @param onBreakpoint
 * @param dimensionMaxMap
 */
export const useResponsive = (breakpoint: IBreakpoints | undefined, onBreakpoint: (broken: boolean) => void, dimensionMaxMap?: IDimensionMaxMap) => {
    const handlerFn = (mql: MediaQueryListEvent | MediaQueryList) => {
        onBreakpoint?.(mql.matches);
    }
    const responsiveHandlerRef = useRef(handlerFn);
    responsiveHandlerRef.current = handlerFn;

    const responsiveHandler = useCallback((mql: MediaQueryListEvent | MediaQueryList) => responsiveHandlerRef.current(mql), []);

    useEffect(() => {
        const dimMap = {...defaultDimensionMaxMap, ...dimensionMaxMap};

        let mql: MediaQueryList;
        if (breakpoint && typeof window !== 'undefined') {
            const {matchMedia} = window;
            if (matchMedia && breakpoint in dimMap) {
                mql = matchMedia(`screen and (max-width: ${dimMap[breakpoint]})`);
                try {
                    mql.addEventListener('change', responsiveHandler);
                } catch {
                    // noinspection JSDeprecatedSymbols
                    mql.addListener(responsiveHandler);
                }
                responsiveHandler(mql);
            }
        }

        return () => {
            try {
                mql?.removeEventListener('change', responsiveHandler);
            } catch {
                // noinspection JSDeprecatedSymbols
                mql?.removeListener(responsiveHandler);
            }
        };
    }, [breakpoint, dimensionMaxMap, responsiveHandler]);
};
