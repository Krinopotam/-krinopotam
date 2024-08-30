/** Check if parameter is promise */
export const IsPromise = (val: unknown): boolean => {
    return !!val && Object.prototype.toString.call(val) === '[object Promise]';
};