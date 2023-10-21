import './css/modal.css';
import { ModalProps as AntModalProps } from 'antd';
import React, { CSSProperties } from 'react';
import { IColorType } from '../button/button';
export interface IModalProps extends Omit<AntModalProps, 'afterOpenChange' | 'okButtonProps' | 'okType' | 'okText' | 'onOk' | 'cancelText' | 'cancelButtonProps'> {
    modalId?: string;
    bodyHeight?: number;
    bodyMinHeight?: number;
    bodyMaxHeight?: number;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    notScrollable?: boolean;
    resizable?: boolean;
    colorType?: IColorType;
    headerStyle?: CSSProperties;
    headerIcon?: React.ReactNode;
    footer?: React.ReactNode;
    footerStyle?: CSSProperties;
    onAfterOpenChange?: (open: boolean) => void;
}
export declare const Modal: ({ resizable, headerStyle, footerStyle, ...props }: IModalProps) => React.JSX.Element;
