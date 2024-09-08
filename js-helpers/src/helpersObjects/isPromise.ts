/** Check if parameter is promise */
export const IsPromise = <T>(val: unknown): val is Promise<T> => {
    return !!val && (
        val instanceof Promise
        || val.constructor === Promise
        || Object.prototype.toString.call(val) === '[object Promise]'
        || typeof (val as { then: unknown }).then === 'function'
    );
};