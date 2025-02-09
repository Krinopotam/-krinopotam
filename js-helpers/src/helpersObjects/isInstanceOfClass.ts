export const isInstanceOfClass = (obj: unknown) => {
    if (obj === null || typeof obj !== 'object') return false;

    const proto = Object.getPrototypeOf(obj);
    return proto && proto !== Object.prototype && proto.constructor && proto.constructor !== Object;
};
