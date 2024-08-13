import { useCallback, useEffect, useRef } from "react";
const defaultDimensionMaxMap = {
    xs: '479.98px',
    sm: '575.98px',
    md: '767.98px',
    lg: '991.98px',
    xl: '1199.98px',
    xxl: '1599.98px',
};
export const useResponsive = (breakpoint, onBreakpoint, dimensionMaxMap) => {
    const handlerFn = (mql) => {
        onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);
    };
    const responsiveHandlerRef = useRef(handlerFn);
    responsiveHandlerRef.current = handlerFn;
    const responsiveHandler = useCallback((mql) => responsiveHandlerRef.current(mql), []);
    useEffect(() => {
        const dimMap = Object.assign(Object.assign({}, defaultDimensionMaxMap), dimensionMaxMap);
        let mql;
        if (breakpoint && typeof window !== 'undefined') {
            const { matchMedia } = window;
            if (matchMedia && breakpoint in dimMap) {
                mql = matchMedia(`screen and (max-width: ${dimMap[breakpoint]})`);
                try {
                    mql.addEventListener('change', responsiveHandler);
                }
                catch (_a) {
                    mql.addListener(responsiveHandler);
                }
                responsiveHandler(mql);
            }
        }
        return () => {
            try {
                mql === null || mql === void 0 ? void 0 : mql.removeEventListener('change', responsiveHandler);
            }
            catch (_a) {
                mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
            }
        };
    }, [breakpoint, dimensionMaxMap, responsiveHandler]);
};
