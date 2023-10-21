import { IDFormBaseCallbacks, IDFormCallbacks, IDFormDataSet, IDFormProps } from '../dForm';
import { IDFormModalApi } from './hooks/api';
import React, { CSSProperties } from 'react';
export interface IDModalProps {
    title?: string;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    bodyHeight?: number;
    bodyMinHeight?: number;
    bodyMaxHeight?: number;
    bodyStyle?: React.CSSProperties;
    notScrollable?: boolean;
    resizable?: boolean;
    isOpened?: boolean;
    headerStyle?: CSSProperties;
    headerIcon?: React.ReactNode;
    footerStyle?: CSSProperties;
    closeFormConfirmMessage?: React.ReactNode;
}
export interface IDFormModalCallbacks extends IDFormBaseCallbacks<IDFormModalApi> {
    onOpen?: (formApi: IDFormModalApi, dataSet: IDFormDataSet | undefined) => boolean | void;
    onOpened?: (formApi: IDFormModalApi, dataSet: IDFormDataSet | undefined) => void;
    onClosing?: (formApi: IDFormModalApi) => boolean | void;
    onClosed?: (formApi: IDFormModalApi) => void;
}
export type IDFormModalProps = IDModalProps & IDFormModalCallbacks & Exclude<IDFormProps, keyof IDFormCallbacks>;
export declare const DFormModal: (props: IDFormModalProps) => React.JSX.Element;
