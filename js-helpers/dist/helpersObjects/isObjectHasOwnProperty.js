/** Is object has own property */
export const IsObjectHasOwnProperty = (obj, propName) => {
    return !obj ? false : Object.prototype.hasOwnProperty.call(obj, propName);
};
