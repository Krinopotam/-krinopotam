import { DraggableRender } from '../../modal';
import React from 'react';
import { ButtonsRowWrapper } from "../../buttonsRow";
export const ModalRender = (node, draggableId, inverseCallbacksRef) => {
    return React.createElement(DraggableRender, { node: React.createElement(ButtonsRowWrapper, { remoteCallbacksRef: inverseCallbacksRef }, node), targetId: draggableId });
};
//# sourceMappingURL=modalRender.js.map