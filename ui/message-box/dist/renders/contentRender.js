import React from 'react';
export const ContentRender = ({ paddingLeft, paddingRight, children, }) => {
    const style = {
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
    };
    return (React.createElement("div", { className: "antd-modal-confirm-body", style: style }, children));
};
