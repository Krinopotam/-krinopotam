/** Check if an object is React Component */
export const IsReactComponent = <T>(obj: T) => {
    if (typeof obj === 'object') {
        const _obj = obj as { $$typeof?: symbol };
        if (_obj['$$typeof'] && _obj['$$typeof'].toString() === 'Symbol(react.element)') return true;
    } else if (typeof obj === 'function') {
        if (String(obj).includes('return React.createElement') || !!obj.prototype?.isReactComponent) return true;
    }

    return false;
};