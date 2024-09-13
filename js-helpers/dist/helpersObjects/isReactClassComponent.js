/** Check if an object is React Class Component */
export const IsReactClassComponent = (obj) => {
    return typeof obj === 'function' && !!obj.prototype.isReactComponent;
};
