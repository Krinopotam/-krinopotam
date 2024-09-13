/** Check if parameter is promise */
export const IsPromise = (val) => {
    return !!val && (val instanceof Promise
        || val.constructor === Promise
        || Object.prototype.toString.call(val) === '[object Promise]'
        || typeof val.then === 'function');
};
