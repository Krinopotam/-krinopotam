/** Check if an object is React Class Component */
export const IsReactClassComponent = <T>(obj: T) => {
    return typeof obj === 'function' && !!obj.prototype.isReactComponent;
};