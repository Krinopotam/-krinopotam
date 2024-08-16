import React, {useState, useCallback, useEffect} from 'react';
import {IExtendedModalProps} from "@src/modal";

interface IInitialDragState {
    initWidth: number;
    initHeight: number;
    mouseDownX: number;
    mouseDownY: number;
    element?: Element
}

export const useResize = (
    props: IExtendedModalProps,
    modalSize: { width: React.CSSProperties['width']; height: React.CSSProperties['height'] },
    setModalSize: (size: { width: number | undefined; height: number | undefined }) => void,
): ((e: React.MouseEvent) => void) => {
    const [dragging, setDragging] = useState(false);

    const [initialDragState, setInitialDragState] = useState<IInitialDragState>({
        initWidth: 0,
        initHeight: 0,
        mouseDownX: 0,
        mouseDownY: 0,
        element: undefined,
    });

    const onMouseDown = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();

            if (!(e.target instanceof HTMLElement)) return
            const $modal = e.target.closest('.custom-antd-modal .ant-modal');
            if (!$modal) return

            const width = convertToPixels("width", modalSize.width, $modal) || $modal.getBoundingClientRect().width;
            const height = convertToPixels("height", modalSize.height, $modal) || $modal.getBoundingClientRect().height;

            setInitialDragState({initWidth: width, initHeight: height, mouseDownX: e.clientX, mouseDownY: e.clientY, element: $modal});
            setDragging(true);

        }, [modalSize.height, modalSize.width]
    );

    useEffect(() => {
        const onMouseMove = (e: MouseEvent): void => {
            if (dragging) {
                const {initWidth, mouseDownX, initHeight, mouseDownY} = initialDragState;
                const dx = e.clientX - mouseDownX;
                const dy = e.clientY - mouseDownY;

                const width = initWidth + dx * 2;
                const height = initHeight + dy * (props.centered ? 2 : 1);

                return setModalSize({width, height});
            }
        };
        window.addEventListener('mousemove', onMouseMove, {passive: true});
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, [initialDragState, dragging, setModalSize, props.centered]);

    useEffect(() => {
        const onMouseUp = (): void => {
            if (dragging) {
                /** WORKAROUND: Despite setting the window size, parent elements may not shrink due to their content. Set the window size to be no smaller than the content size */
                const $modal = initialDragState.element;
                const $contentModal = initialDragState.element?.querySelector('.custom-antd-modal .ant-modal-content');

                if (!$modal || !$contentModal) return
                let width = $modal.getBoundingClientRect().width;
                let height = $modal.getBoundingClientRect().height;
                const contentWidth = $contentModal.getBoundingClientRect().width;
                const contentHeight = $contentModal.getBoundingClientRect().height;
                if (width < contentWidth) width = contentWidth;
                if (height < contentHeight) height = contentHeight;
                setModalSize({width, height})
            }
            setDragging(false);
        };
        window.addEventListener('mouseup', onMouseUp);
        return () => window.removeEventListener('mouseup', onMouseUp);
    }, [dragging, initialDragState.element, setDragging, setModalSize]);

    return onMouseDown;
};


const convertToPixels = (name: keyof DOMRect, val: number | string | undefined, el?: Element) => {
    if (!val) return 0;
    if (typeof val === 'number') return val;


    const match = RegExp(/^(\d+(?:\.\d+)?)(px|%)$/).exec(val);
    if (!match) return 0

    const value = parseFloat(match[1]);
    const unit = match[2];
    if (unit === 'px') return value;

    if (unit === '%' && el?.parentElement) {
        const rect = el.parentElement.getBoundingClientRect();
        const parentDim = rect[name] as number;

        return (value / 100) * parentDim;
    }

    return 0
}

