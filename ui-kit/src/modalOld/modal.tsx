/**
 * @Modal
 * @version 0.0.0.30
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import './css/modal.css';

import {Modal as AntModal, ModalProps as AntModalProps} from 'antd';
import React, {CSSProperties, useCallback, useEffect, useRef, useState} from 'react';

import {FooterRender} from './renders/footerRender';
import {HeaderRender} from './renders/headerRender';
import {ModalRender} from './renders/modalRender';
import classNames from 'classnames';
import {useInitFormDispatcher} from './hooks/useInitFormDispatcher';
import {useResize} from './hooks/useResize';
import {IButtonRowWrapperRemoteCallbacks} from '@src/buttonsRow/components/buttonsRowWrapper';
import {IColorType} from '@src/button/button';
import {GetUuid} from '@krinopotam/js-helpers';

export interface IModalProps
    extends Omit<AntModalProps, 'afterOpenChange' | 'okButtonProps' | 'okType' | 'okText' | 'onOk' | 'cancelText' | 'cancelButtonProps' | 'bodyStyle'> {
    /** The modal ID for form dispatcher */
    modalId?: string;

    /** The form body style. WORKAROUND: renamed from bodyStyle to bodyCss because of antd deprecation warnings */
    bodyCss?: CSSProperties

    /** The form body initial height */
    bodyHeight?: number;

    /** The form body min height */
    bodyMinHeight?: number;

    /** The form body max height */
    bodyMaxHeight?: number;

    /** The form initial width */
    width?: number;

    /** The form min width */
    minWidth?: number;

    /** The form max width */
    maxWidth?: number;

    /** Is the form body not scrollable */
    notScrollable?: boolean;

    /** Is the for can be resized (show the resize handler). Default: true */
    resizable?: boolean;

    /** Form color type */
    colorType?: IColorType;

    /** Form header style */
    headerStyle?: CSSProperties;

    /**Form header icon */
    headerIcon?: React.ReactNode;

    /** Footer content */
    footer?: React.ReactNode;

    /** Form footer style */
    footerStyle?: CSSProperties;

    /** Is the form draggable */
    isDraggable?: boolean;
    /********** Callbacks *********/

    /** Callback when the animation ends when Modal is turned on and off */
    onAfterOpenChange?: (open: boolean) => void;
}


export const Modal = ({resizable = true, isDraggable = true,   ...props}: IModalProps): React.JSX.Element => {
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

    const [formSize, setFormSize] = useState({width: props.width ?? 0, bodyHeight: props.bodyHeight ?? 0});
    const onMouseResize = useResize(
        formSize.width,
        formSize.bodyHeight,
        setFormSize,
        props.minWidth ?? 200,
        props.maxWidth ?? 5000,
        props.bodyMinHeight ?? 50,
        props.bodyMaxHeight ?? 5000
    );

    const paddingHorizontal = 24;
    const headerStyle = useHeaderStyle(props, paddingHorizontal)
    const bodyStyle = useBodyStyle(props, formSize.bodyHeight, paddingHorizontal)
    const footerStyle = useFooterStyle(props, paddingHorizontal)

    const [draggableId] = useState('draggable-' + GetUuid());

    return (
        <AntModal
            {...props}
            width={formSize.width || undefined}
            // no override section
            style={{maxWidth: props.maxWidth, minWidth: props.minWidth}}
            styles={{body: bodyStyle, footer: {margin: 0}}}
            className={classNames('custom-antd-modal', props.className)}
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

const useBodyStyle = (props: IModalProps, curBodyHeight:string|number, paddingHorizontal: number) => {
    const style: React.CSSProperties =  {
        padding: `0 ${paddingHorizontal}px 0 ${paddingHorizontal}px`,
        ...props.styles?.body,
        overflowY: props.notScrollable ? 'hidden' : 'auto',
    } ;

    if (curBodyHeight) style.height = curBodyHeight
    return style
};

const useFooterStyle = (props: IModalProps, paddingHorizontal: number) => {
    return {
        padding: `20px ${paddingHorizontal}px 20px ${paddingHorizontal}px`,
        ...props.styles?.footer,
    } satisfies React.CSSProperties;
};

const useHeaderStyle = (props: IModalProps, paddingHorizontal: number) => {
    return {
        padding: `5px ${paddingHorizontal}px 5px ${paddingHorizontal}px`,
        ...props.styles?.header,
    } satisfies React.CSSProperties;
}
