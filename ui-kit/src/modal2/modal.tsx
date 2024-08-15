/**
 * @Modal
 * @version 0.0.0.30
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import './css/modal.scss';

import {Modal as AntModal} from 'antd';
import React, {useCallback, useEffect, useRef, useState} from 'react';

import {FooterRender} from './renders/footerRender';
import {HeaderRender} from './renders/headerRender';
import {ModalRender} from './renders/modalRender';
import classNames from 'classnames';
import {useInitFormDispatcher} from './hooks/useInitFormDispatcher';
import {useResize} from './hooks/useResize';
import {IButtonRowWrapperRemoteCallbacks} from '@src/buttonsRow/components/buttonsRowWrapper';
import {GetUuid} from '@krinopotam/js-helpers';
import {IModalProps} from "@src/modal2/types/types";

export const Modal = ({resizable = true, isDraggable = true, ...props}: IModalProps): React.JSX.Element => {
    const [modalId] = useState(props.modalId ?? 'modal-' + GetUuid());
    useInitFormDispatcher(modalId, !!props.open);

    const wrapperRemoteCallbacksRef = useRef<IButtonRowWrapperRemoteCallbacks>({});

    const prevFocusedRef = useRef<Element | null>();

    useEffect(() => {
        if (props.open) prevFocusedRef.current = document.activeElement;
    }, [props.open]);

    const onAfterOpenChange = useCallback(
        (open: boolean) => {
            if (open) wrapperRemoteCallbacksRef.current?.onParentComponentRendered?.();
            else (prevFocusedRef.current as HTMLElement)?.focus();
            props.onAfterOpenChange?.(open);
        },
        [props]
    );

    const [modalSize, setModalSize] = useState({width: props.width, height: props.height});
    const onMouseResize = useResize(props, setModalSize);

    const paddingHorizontal = 24;
    const baseMinWidth = 100; //If you make the minimums lower, then there may be problems with the dimensions when resizing
    const baseMinHeight = 80;
    const modalStyle = useModalStyle(props, modalSize.height, baseMinWidth, baseMinHeight)
    const headerStyle = useHeaderStyle(props, paddingHorizontal)
    const bodyStyle = useBodyStyle(props, modalSize.height, paddingHorizontal)
    const contentStyle = useContentStyle(props, baseMinHeight)
    const footerStyle = useFooterStyle(props, paddingHorizontal)

    const [draggableId] = useState('draggable-' + GetUuid());

    return (
        <AntModal
            {...props}
            // no override section
            width={modalSize.width}
            style={modalStyle}
            styles={{body: bodyStyle, footer: {margin: 0}, content: contentStyle}}
            rootClassName={classNames('custom-antd-modal', props.rootClassName)}
            modalRender={node => ModalRender(node, draggableId, wrapperRemoteCallbacksRef, isDraggable)}
            //transitionName="zoom"
            title={<HeaderRender draggableId={draggableId} icon={props.headerIcon} title={props.title} colorType={props.colorType} style={headerStyle}/>}
            footer={
                <FooterRender onMouseResize={onMouseResize} resizable={resizable} style={footerStyle} colorType={props.colorType}>
                    {props.footer}
                </FooterRender>
            }
            afterOpenChange={onAfterOpenChange}
        />
    );
};

const useModalStyle = (props: IModalProps, height: number | string | undefined, baseMinWidth: string | number | undefined, baseMinHeight: string | number | undefined) => {
    const style: React.CSSProperties = {
        height: height,
        minWidth: baseMinWidth,
        minHeight: baseMinHeight,
        ...props.styles?.content,
    };

    return style
};

const useBodyStyle = (props: IModalProps, curBodyHeight: string | number | undefined, paddingHorizontal: number) => {
    const style: React.CSSProperties = {
        padding: `0 ${paddingHorizontal}px 0 ${paddingHorizontal}px`,
        ...props.styles?.body,
        overflowY: props.notScrollable ? 'hidden' : 'auto',
    };

    return style
};

const useContentStyle = (props: IModalProps, baseMinHeight: string | number | undefined) => {
    const style: React.CSSProperties = {
        minHeight: props.style?.minHeight ?? baseMinHeight ?? 0, //WORKAROUND: content min-height must be equal to modal min-height
        maxHeight: props.style?.maxHeight,
        ...props.styles?.content,
    };

    return style
};

const useFooterStyle = (props: IModalProps, paddingHorizontal: number) => {
    return {
        padding: `20 ${paddingHorizontal}px 20 ${paddingHorizontal}px`,
        ...props.styles?.footer,
    } satisfies React.CSSProperties;
};

const useHeaderStyle = (props: IModalProps, paddingHorizontal: number) => {
    return {
        padding: `5 ${paddingHorizontal}px 5 ${paddingHorizontal}px`,
        ...props.styles?.header,
    } satisfies React.CSSProperties;
}
