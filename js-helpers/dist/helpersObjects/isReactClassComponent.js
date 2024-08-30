export const IsReactClassComponent = (obj) => {
    return typeof obj === 'function' && !!obj.prototype.isReactComponent;
};
