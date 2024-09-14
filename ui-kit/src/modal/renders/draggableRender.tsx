/**
 * @DraggableRender
 * @version 0.0.28.3
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useCallback, useRef, useState} from 'react';
import Draggable, {DraggableData} from 'react-draggable';
import {IsDescendant} from '@krinopotam/js-helpers/helpersDOM/isDescendant';

export const DraggableRender = ({node, targetId, onStartCallback}: { node: React.ReactNode; targetId?: string; onStartCallback?: () => void }) => {
    const draggableNodeRef = React.createRef<HTMLDivElement>();

    const [draggableStyle, setDraggableStyle] = useState({cursor: 'default'});
    const [bounds, setBounds] = useState({left: 0, top: 0, bottom: 0, right: 0});

    const onMouseOver = useOnMouseOver(targetId,  setDraggableStyle);
    const onMouseOut = useOnMouseOut(setDraggableStyle);

    const onStart = useOnStart(draggableNodeRef, setBounds, onStartCallback);

    return (
        <Draggable nodeRef={draggableNodeRef} handle={targetId ? '#' + targetId : undefined} bounds={bounds} onStart={(_event, uiData) => onStart(uiData)}>
            <div
                ref={draggableNodeRef}
                style={draggableStyle}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
            >
                {node}
            </div>
        </Draggable>
    );
};

const useOnStart = (
    draggableNodeRef: React.RefObject<HTMLDivElement>,
    setBounds: React.Dispatch<React.SetStateAction<{ left: number; top: number; bottom: number; right: number }>>,
    onStartCallback?: () => void
) => {
    return useCallback((uiData: DraggableData) => {
        const {clientWidth, clientHeight} = window.document.documentElement;
        const targetRect = draggableNodeRef.current?.getBoundingClientRect();
        if (!targetRect) return;
        onStartCallback?.();

        /* Границы, чтобы элемент всегда полностью оставался в пределах экрана
        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        })*/

        // границы, чтобы элемент всегда был в пределах экрана как минимум на 50 пикселей
        setBounds({
            left: -targetRect.left + uiData.x - (targetRect.width - 50),
            right: clientWidth - (targetRect.right - uiData.x) + (targetRect.width - 50),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y) + (targetRect.height - 50),
        })
    }, [draggableNodeRef, onStartCallback, setBounds])
};

const useGetTargetElement = () => {
    const targetElement = useRef<{ element: HTMLElement | null; id?: string }>({element: null, id: ''});

    return useCallback((elementId: string | undefined) => {
        if (!elementId) return undefined;
        if (targetElement.current.id !== elementId || !targetElement.current.element) targetElement.current.element = document.getElementById(elementId);
        return targetElement.current.element;
    }, []);
};

const useOnMouseOver = (
    targetId: string | undefined,
    setDraggableStyle: React.Dispatch<React.SetStateAction<{ cursor: string }>>
) => {
    const getTargetElement = useGetTargetElement();

    return useCallback((e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        const targetElement = getTargetElement(targetId);

        if (!targetElement || IsDescendant(targetElement, e.target as Element, true)) setDraggableStyle({cursor: 'move'});
        else setDraggableStyle({cursor: 'default'});
    }, [getTargetElement, setDraggableStyle, targetId])
}


const useOnMouseOut = (
    setDraggableStyle: React.Dispatch<React.SetStateAction<{ cursor: string }>>
) => {
    return useCallback(() => {
        setDraggableStyle({cursor: 'default'});
    }, [setDraggableStyle]);
}

