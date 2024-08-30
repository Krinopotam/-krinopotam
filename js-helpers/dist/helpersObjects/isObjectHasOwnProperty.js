export const IsObjectHasOwnProperty = (obj, propName) => {
    return Object.prototype.hasOwnProperty.call(obj, propName);
};
