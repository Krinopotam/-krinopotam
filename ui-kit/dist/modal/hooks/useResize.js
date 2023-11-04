import { useState, useCallback, useEffect } from 'react';
export const useResize = (width, bodyHeight, onResize, minWidth, maxWidth, bodyMinHeight, bodyMaxHeight) => {
    const [dragging, setDragging] = useState(false);
    const [initialDragState, setInitialDragState] = useState({
        initWidth: 0,
        initBodyHeight: 0,
        mouseDownX: 0,
        mouseDownY: 0,
    });
    const onMouseDown = useCallback((e) => {
        var _a;
        e.preventDefault();
        if (!bodyHeight) {
            if (e.target instanceof HTMLElement) {
                const $modalBody = (_a = e.target.closest('.custom-antd-modal')) === null || _a === void 0 ? void 0 : _a.querySelector('.ant-modal-body');
                if ($modalBody)
                    bodyHeight = $modalBody.clientHeight;
            }
        }
        if (!width) {
            if (e.target instanceof HTMLElement) {
                const $modal = e.target.closest('.custom-antd-modal');
                if ($modal)
                    width = $modal.clientWidth;
            }
        }
        setInitialDragState({ initWidth: width, initBodyHeight: bodyHeight, mouseDownX: e.clientX, mouseDownY: e.clientY });
        setDragging(true);
    }, [width, bodyHeight, setDragging, setInitialDragState]);
    useEffect(() => {
        const onMouseMove = (e) => {
            if (dragging) {
                const { initWidth, mouseDownX, initBodyHeight, mouseDownY } = initialDragState;
                const dx = e.clientX - mouseDownX;
                const dy = e.clientY - mouseDownY;
                let resultWidth = initWidth + dx * 2;
                if (maxWidth && resultWidth > maxWidth)
                    resultWidth = maxWidth;
                if (minWidth && resultWidth < minWidth)
                    resultWidth = minWidth;
                let resultBodyHeight = initBodyHeight + dy * 2;
                if (bodyMaxHeight && resultBodyHeight > bodyMaxHeight)
                    resultBodyHeight = bodyMaxHeight;
                if (bodyMinHeight && resultBodyHeight < bodyMinHeight)
                    resultBodyHeight = bodyMinHeight;
                return onResize({ width: resultWidth, bodyHeight: resultBodyHeight });
            }
        };
        window.addEventListener('mousemove', onMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, [initialDragState, dragging, onResize, minWidth, maxWidth, bodyMinHeight, bodyMaxHeight]);
    useEffect(() => {
        const onMouseUp = () => {
            setDragging(false);
        };
        window.addEventListener('mouseup', onMouseUp);
        return () => window.removeEventListener('mouseup', onMouseUp);
    }, [setDragging]);
    return onMouseDown;
};
//# sourceMappingURL=useResize.js.map