import React, { useEffect } from "react";
export const BaseHOC = (props) => {
    useEffect(() => {
        var _a;
        (_a = props.onEffect) === null || _a === void 0 ? void 0 : _a.call(props);
    }, [props]);
    return (React.createElement(React.Fragment, null, props.children));
};
