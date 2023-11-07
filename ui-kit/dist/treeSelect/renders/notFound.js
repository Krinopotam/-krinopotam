import React from "react";
export const NotFound = ({ fetching, error, minSymbols }) => {
    if (minSymbols || fetching || error)
        return React.createElement(React.Fragment, null);
    return React.createElement("div", { style: { paddingLeft: '30px', fontSize: '12px' } }, "\u0414\u0430\u043D\u043D\u044B\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442");
};
