import './css/modal.css';
import { ModalProps as AntModalProps } from 'antd';
import React from 'react';
export type IFormType = 'primary' | 'confirm' | 'info' | 'success' | 'error' | 'warning';
export type IModalProps = AntModalProps & {
    dispatcherFormId: string;
    bodyHeight?: number;
    bodyMinHeight?: number;
    bodyMaxHeight?: number;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    notScrollable?: boolean;
    resizable?: boolean;
};
export declare const Modal: ({ resizable, ...props }: IModalProps) => React.JSX.Element;
