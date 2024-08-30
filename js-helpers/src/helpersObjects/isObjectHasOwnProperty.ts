/** Is object has own property */
export const IsObjectHasOwnProperty = (obj: object, propName: string ) => {
    return Object.prototype.hasOwnProperty.call(obj, propName);
};
