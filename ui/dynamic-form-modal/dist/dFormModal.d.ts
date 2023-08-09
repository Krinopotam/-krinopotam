import { IDFormCallbacks, IDFormDataSet, IDFormProps } from '@krinopotam/ui-dynamic-form';
import { IDFormModalApi } from './hooks/api';
import React from 'react';
export interface IDModalProps {
    callbacks?: IDFormModalCallbacks;
    closeFormConfirmMessage?: React.ReactNode;
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
}
export type IDFormModalProps = IDModalProps & IDFormProps;
export interface IDFormModalCallbacks extends IDFormCallbacks {
    onOpen?: (formApi: IDFormModalApi, dataSet: IDFormDataSet | undefined) => boolean | void;
    onOpened?: (formApi: IDFormModalApi, dataSet: IDFormDataSet | undefined) => void;
    onClosing?: (formApi: IDFormModalApi) => boolean | void;
    onClosed?: (formApi: IDFormModalApi) => void;
}
export declare const DFormModal: (props: IDFormModalProps) => React.JSX.Element;
