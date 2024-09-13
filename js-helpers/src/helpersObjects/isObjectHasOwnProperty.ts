/** Is object has own property */
export const IsObjectHasOwnProperty = <T extends object | undefined | null>(obj: T, propName: string ) => {
    return !obj ? false : Object.prototype.hasOwnProperty.call(obj, propName);
};
