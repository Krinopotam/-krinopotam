/** Check if parameter is an array */
export const IsArray = <T>(val: T): val is Extract<T, any[]> => {
    return Array.isArray(val);
};