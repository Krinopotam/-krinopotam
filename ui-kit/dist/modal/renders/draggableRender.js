import React, { useCallback, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { IsDescendant } from '@krinopotam/js-helpers';
export const DraggableRender = ({ node, targetId, onStartCallback }) => {
    const draggableFieldRef = React.createRef();
    const [dragDisabled, setDragDisabled] = useState(false);
    const [draggableStyle, setDraggableStyle] = useState({ cursor: 'default' });
    const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
    const getTargetElement = useGetTargetElement(targetId);
    const onStart = (uiData) => {
        var _a;
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = (_a = draggableFieldRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (!targetRect)
            return;
        onStartCallback === null || onStartCallback === void 0 ? void 0 : onStartCallback();
        setBounds({
            left: -targetRect.left + uiData.x - (targetRect.width - 50),
            right: clientWidth - (targetRect.right - uiData.x) + (targetRect.width - 50),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y) + (targetRect.height - 50),
        });
    };
    return (React.createElement(Draggable, { disabled: dragDisabled, bounds: bounds, onStart: (_event, uiData) => onStart(uiData) },
        React.createElement("div", { ref: draggableFieldRef, style: draggableStyle, onMouseOver: e => {
                e.stopPropagation();
                if (!targetId) {
                    setDragDisabled(false);
                    setDraggableStyle({ cursor: 'move' });
                    return;
                }
                const targetElement = getTargetElement();
                if (IsDescendant(targetElement, e.target, true)) {
                    setDragDisabled(false);
                    setDraggableStyle({ cursor: 'move' });
                    return;
                }
                setDragDisabled(true);
                setDraggableStyle({ cursor: 'default' });
            }, onMouseOut: e => {
                e.stopPropagation();
                setDragDisabled(true);
                setDraggableStyle({ cursor: 'default' });
            } }, node)));
};
const useGetTargetElement = (elementId) => {
    const targetElement = useRef({ element: null, id: elementId });
    return useCallback(() => {
        if (!elementId)
            return null;
        if (targetElement.current.id !== elementId || !targetElement.current.element)
            targetElement.current.element = document.getElementById(elementId);
        return targetElement.current.element;
    }, [elementId]);
};
//# sourceMappingURL=draggableRender.js.map