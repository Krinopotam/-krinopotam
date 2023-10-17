import React from 'react';
export const FooterRender = ({ onMouseResize, resizable, children, style }) => {
    return (React.createElement("div", null,
        React.createElement("div", { style: style }, children),
        resizable ? React.createElement(ResizeHandle, { onMouseDown: onMouseResize }) : null));
};
const ResizeHandle = (props) => (React.createElement("div", Object.assign({ className: "resize-handle" }, props),
    React.createElement("div", { className: "resize-handle-inner" })));
