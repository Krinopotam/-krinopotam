/** Check if an object is React Component */
export const IsReactComponent = (obj) => {
    var _a;
    if (typeof obj === 'object') {
        const _obj = obj;
        if (_obj['$$typeof'] && _obj['$$typeof'].toString() === 'Symbol(react.element)')
            return true;
    }
    else if (typeof obj === 'function') {
        if (String(obj).includes('return React.createElement') || !!((_a = obj.prototype) === null || _a === void 0 ? void 0 : _a.isReactComponent))
            return true;
    }
    return false;
};
