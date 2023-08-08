import { DraggableRender } from './draggableRender';
import React from 'react';
export const ModalRender = (node) => {
    return React.createElement(DraggableRender, { node: node, targetClass: "custom-antd-modal-header" });
};
