import React from "react";
import {IDFormApi, IDFormBaseCallbacks, IDFormCallbacks, IDFormDataSet, IDFormProps} from "@src/dForm";
import {IExtendedModalProps} from "@src/modal";
import {translations} from "@src/dFormModal/translations/translations";

export interface IExtendedModalOwnProps extends Omit<IExtendedModalProps, 'modalId' | 'style' | 'styles' | 'footer' | 'onCancel' | 'maskClosable' | 'maskStyle' | 'visible' | 'keyboard' | 'destroyOnClose'> {}

export interface IDFormModalCallbacks extends IDFormBaseCallbacks<IDFormModalApi> {
    /** Fires when the form is opening.
     * Don't use formApi.getFormProps() because by the time the form is opened, they have not yet had time to update.
    */
    onOpen?: (
        formApi: IDFormModalApi,
        dataSet: IDFormDataSet | undefined,
    ) => boolean | void;
    /** Fires when the form is opened */
    onOpened?: (formApi: IDFormModalApi, dataSet: IDFormDataSet | undefined) => void;
    /** Fires when the form is closing */
    onClosing?: (formApi: IDFormModalApi) => boolean | void;
    /** Fires when the form is closed */
    onClosed?: (formApi: IDFormModalApi) => void;
    /** Fires when the form is canceled */
    onCancel?: (formApi: IDFormModalApi) => void;
}

export type IDFormModalOwnProps = IDFormModalCallbacks & {
    /** Modal form style */
    modalStyle?: React.CSSProperties;

    /** modal form components style */
    modalStyles?: IExtendedModalProps['styles']

    /** Confirm message before the form closing, if form is dirty */
    closeFormConfirmMessage?: React.ReactNode;

    /** Language */
    language?: keyof typeof translations;

    /** Custom translation */
    translation?: Partial<typeof translations.en>
}

export type IDFormModalWithoutModalProps = IDFormModalOwnProps & Exclude<IDFormProps, keyof IDFormCallbacks>

export type IDFormModalProps = IExtendedModalOwnProps & IDFormModalWithoutModalProps

export interface IDFormModalApi extends IDFormApi {
    /** Get the current modal form props */
    getFormProps: () => IDFormModalProps;

    /** Update the current modal form props (will cause rerender of the modal form). Can't update field props, because it is used in form model */
    setFormProps: (formProps: Partial<IDFormModalProps>) => void;

    /** Open controls */
    open: (formMode: IDFormProps['formMode'], extraProps?: Partial<Omit<IDFormModalProps, 'formMode' | 'open'>>) => void;

    /** Close controls with confirmation*/
    close: () => void;

    /** Close controls without confirmation*/
    forceClose: () => void;

    /** Get modal title */
    getTitle: () => IDFormModalProps['title']

    /** Set modal title */
    setTitle: (title: IDFormModalProps['title']) => void
}