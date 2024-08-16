import React from "react";
import {IDFormApi, IDFormBaseCallbacks, IDFormCallbacks, IDFormDataSet, IDFormProps} from "@src/dForm";
import {IExtendedModalProps} from "@src/modal";

export interface IExtendedModalOwnProps extends Omit<IExtendedModalProps, 'modalId' | 'style' | 'styles' | 'footer' | 'onCancel' | 'maskClosable' | 'keyboard' | 'destroyOnClose'> {}

export interface IDFormModalCallbacks extends IDFormBaseCallbacks<IDFormModalApi> {
    onOpen?: (
        formApi: IDFormModalApi,
        dataSet: IDFormDataSet | undefined,
    ) => boolean | void;
    onOpened?: (formApi: IDFormModalApi, dataSet: IDFormDataSet | undefined) => void;
    onClosing?: (formApi: IDFormModalApi) => boolean | void;
    onClosed?: (formApi: IDFormModalApi) => void;
}

export type IDFormModalOwnProps = IDFormModalCallbacks & {
    /** Modal form style */
    modalStyle?: React.CSSProperties;

    /** modal form components style */
    modalStyles?: IExtendedModalProps['styles']

    /** Confirm message before the form closing, if form is dirty */
    closeFormConfirmMessage?: React.ReactNode;
}

export type IDFormModalWithoutModalProps = IDFormModalOwnProps & Exclude<IDFormProps, keyof IDFormCallbacks>

export type IDFormModalProps = IExtendedModalOwnProps & IDFormModalWithoutModalProps

export interface IDFormModalApi extends IDFormApi {
    /** Get the current modal form props */
    getFormProps: () => IDFormModalProps;

    /** Update the current modal form props (will cause rerender of the modal form). Can't update field props, because it is used in form model */
    setFormProps: (formProps: Partial<Omit<IDFormModalProps, 'fieldsProps'>>) => void;

    /** Open controls */
    open: (formMode: IDFormProps['formMode'], dataSet?: IDFormProps['dataSet']) => void;

    /** Close controls with confirmation*/
    close: () => void;

    /** Close controls without confirmation*/
    forceClose: () => void;
}