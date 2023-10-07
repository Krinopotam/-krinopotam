/**
 * @ModalRender
 * @version 0.0.0.8
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {DraggableRender} from '@src/modal';
import React from 'react';
import {ButtonsRowWrapper} from "@src/buttonsRow";
import {IButtonRowWrapperRemoteCallbacks} from "@src/buttonsRow/components/buttonsRowWrapper";

export const ModalRender = (node: React.ReactNode, draggableId:string, inverseCallbacksRef?: React.RefObject<IButtonRowWrapperRemoteCallbacks>): React.JSX.Element => {
    return <DraggableRender node={<ButtonsRowWrapper remoteCallbacksRef={inverseCallbacksRef}>{node}</ButtonsRowWrapper>} targetId={draggableId}/>;
};
