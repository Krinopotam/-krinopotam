import React from 'react';
export const FooterRender = ({ onMouseResize, resizable, children, containerStyle }) => {
    return (React.createElement("div", null,
        React.createElement("div", { style: containerStyle }, children),
        resizable ? React.createElement(ResizeHandle, { onMouseDown: onMouseResize }) : null));
};
const ResizeHandle = (props) => (React.createElement("div", Object.assign({ className: "resize-handle" }, props),
    React.createElement("div", { className: "resize-handle-inner" })));
