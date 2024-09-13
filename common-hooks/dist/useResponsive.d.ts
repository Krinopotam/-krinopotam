export type IBreakpoints = keyof IDimensionMaxMap;
export interface IDimensionMaxMap {
    xl?: string;
    md?: string;
    sm?: string;
    xs?: string;
    lg?: string;
    xxl?: string;
}
/**
 *
 * @param breakpoint
 * @param onBreakpoint
 * @param dimensionMaxMap
 */
export declare const useResponsive: (breakpoint: IBreakpoints | undefined, onBreakpoint: (broken: boolean) => void, dimensionMaxMap?: IDimensionMaxMap) => void;
