import { Spin } from 'antd';
import React from 'react';
export const DropdownStatus = ({ fetching, error, minSymbols }) => {
    if (minSymbols)
        return React.createElement(MinSymbols, { minSymbols: minSymbols });
    if (fetching)
        return React.createElement(Fetching, null);
    if (error)
        return React.createElement(Error, { error: error });
    return React.createElement(React.Fragment, null);
};
export const MinSymbols = ({ minSymbols }) => {
    return React.createElement("div", { style: { paddingLeft: '30px', fontSize: '12px' } },
        "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u0430\u043A \u043C\u0438\u043D\u0438\u043C\u0443\u043C ",
        minSymbols,
        " \u0441\u0438\u043C\u0432.");
};
const Fetching = () => {
    return (React.createElement("div", { style: { paddingLeft: '30px', fontSize: '12px' } },
        React.createElement(Spin, { size: "small" }),
        " \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."));
};
const Error = ({ error }) => {
    return (React.createElement("div", { role: "alert", style: { paddingLeft: '30px', fontSize: '12px', color: '#ff4d4f' } }, error));
};
