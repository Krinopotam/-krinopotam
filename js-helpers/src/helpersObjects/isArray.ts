/** Check if parameter is an array */
export const IsArray = <T>(val: unknown): val is T[] => {
    return val instanceof Array;
};