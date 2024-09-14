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
import {useResize} from './hooks/useResize';
import {IButtonRowWrapperRemoteCallbacks} from '@src/buttonsRow/components/buttonsRowWrapper';
import {GetNanoId} from '@krinopotam/js-helpers/helpersString/getNanoId';
import {IExtendedModalProps} from "@src/modal/types/types";

export const Modal = (props: IExtendedModalProps): React.JSX.Element => {
    const {
        resizable = true,
        isDraggable = true,
        colorType,
        headerIcon,
        maxHeight,
        minHeight,
        minWidth,
        maxWidth,
        ...modalProps
    } = props

    const wrapperRemoteCallbacksRef = useRef<IButtonRowWrapperRemoteCallbacks>({});

    const prevFocusedRef = useRef<Element | null>();

    useEffect(() => {
        if (modalProps.open) prevFocusedRef.current = document.activeElement;
    }, [modalProps.open]);

    const onAfterOpenChange = useCallback(
        (open: boolean) => {
            if (open) wrapperRemoteCallbacksRef.current?.onParentComponentRendered?.();
            else (prevFocusedRef.current as HTMLElement)?.focus();
            modalProps.onAfterOpenChange?.(open);
        },
        [modalProps]
    );

    const [modalSize, setModalSize] = useState({width: modalProps.width ?? undefined, height: modalProps.height ?? undefined});
    const onMouseResize = useResize(modalProps, modalSize, setModalSize);

    const paddingHorizontal = 24;
    const baseMinWidth = 250; //If you make the minimums lower, then there may be problems with the dimensions when resizing
    const baseMinHeight = 130;
    const modalStyle = useModalStyle({props: modalProps, height: modalSize.height, minWidth, maxWidth, minHeight, maxHeight, baseMinWidth, baseMinHeight})
    const headerStyle = useHeaderStyle(modalProps, paddingHorizontal)
    const bodyStyle = useBodyStyle(modalProps, paddingHorizontal)
    const contentStyle = useContentStyle(modalProps)
    const footerStyle = useFooterStyle(modalProps, paddingHorizontal)

    const [draggableId] = useState('draggable-' + GetNanoId());

    return (
        <AntModal
            {...modalProps}
            // no override section
            width={modalSize.width}
            height={modalSize.height}
            style={modalStyle}
            styles={{body: bodyStyle, footer: {margin: 0}, content: contentStyle}}
            rootClassName={classNames('custom-antd-modal', modalProps.rootClassName)}
            modalRender={node => ModalRender(node, draggableId, wrapperRemoteCallbacksRef, isDraggable)}
            //transitionName="fade"
            title={<HeaderRender draggableId={draggableId} icon={headerIcon} title={modalProps.title} colorType={colorType} style={headerStyle}/>}
            footer={
                <FooterRender onMouseResize={onMouseResize} resizable={resizable} style={footerStyle} colorType={colorType}>
                    {modalProps.footer}
                </FooterRender>
            }
            afterOpenChange={onAfterOpenChange}
        />
    );
};

const useModalStyle = (params: {
    props: IExtendedModalProps,
    height: React.CSSProperties['height'],
    minWidth: React.CSSProperties['minWidth'],
    maxWidth: React.CSSProperties['maxWidth'],
    minHeight: React.CSSProperties['minHeight'],
    maxHeight: React.CSSProperties['maxHeight'],
    baseMinWidth: React.CSSProperties['minWidth'],
    baseMinHeight: React.CSSProperties['minHeight']
}) => {
    const style: React.CSSProperties = {
        height: params.height,
        minWidth: params.minWidth ?? params.baseMinWidth,
        maxWidth: params.maxWidth,
        minHeight: params.minHeight ?? params.baseMinHeight,
        maxHeight: params.maxHeight,
        ...params.props.style,
    };
    return style
};

const useBodyStyle = (props: IExtendedModalProps, paddingHorizontal: number) => {
    const style: React.CSSProperties = {
        padding: `0 ${paddingHorizontal}px 0 ${paddingHorizontal}px`,
        ...props.styles?.body,
        overflowY: props.notScrollable ? 'hidden' : 'auto',
    };

    return style
};

const useContentStyle = (props: IExtendedModalProps) => {
    const style: React.CSSProperties = {
        ...props.styles?.content,
    };

    return style
};

const useFooterStyle = (props: IExtendedModalProps, paddingHorizontal: number) => {
    return {
        padding: `20px ${paddingHorizontal}px 20px ${paddingHorizontal}px`,
        ...props.styles?.footer,
    } satisfies React.CSSProperties;
};

const useHeaderStyle = (props: IExtendedModalProps, paddingHorizontal: number) => {
    const crossPadding = (props.closable === false || props.closeIcon === null) ? 0 : 14;
    return {
        padding: `3px ${paddingHorizontal + crossPadding}px 3px ${paddingHorizontal}px`,
        ...props.styles?.header,
    } satisfies React.CSSProperties;
}
