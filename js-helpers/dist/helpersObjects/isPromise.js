export const IsPromise = (val) => {
    return !!val && Object.prototype.toString.call(val) === '[object Promise]';
};
