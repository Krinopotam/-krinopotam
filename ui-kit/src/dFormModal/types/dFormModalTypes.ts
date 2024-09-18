import React from "react";
import {IDFormApi, IDFormCallbacks, IDFormDataSet, IDFormProps, IDFormPropsNoCB} from "@src/dForm";
import {IExtendedModalProps} from "@src/modal";
import {translations} from "@src/dFormModal/translations/translations";

export interface IDFormModalCallbacks extends IDFormCallbacks<IDFormModalApi, IDFormModalProps> {
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

export type IDFormModalPropsNoCB =  {
    /** Form open state */
    open?: boolean
    /** Modal title */
    title?:React.ReactNode
    /** Modal height */
    height?: number | string
    /** Modal max height */
    maxHeight?: number | string
    /** Modal min height */
    minHeight?: number | string
    /** Modal width */
    width?: number | string
    /** Modal max width */
    maxWidth?: number | string
    /** Modal min width */
    minWidth?: number | string
    /** Confirm message before the form closing, if form is dirty */
    closeFormConfirmMessage?: React.ReactNode;
    /** Language */
    language?: keyof typeof translations;
    /** Custom translation */
    translation?: Partial<typeof translations.en>
    /** Modal component properties */
    modalProps?: IExtendedModalProps
}


export type IDFormModalOwnProps = IDFormModalPropsNoCB & IDFormModalCallbacks

export type IDFormModalProps = IDFormModalPropsNoCB & IDFormModalCallbacks & IDFormPropsNoCB

export interface IDFormModalApi extends IDFormApi<IDFormModalProps> {
    /** Get translation */
    t: (str: keyof (typeof translations)['en']) => string;

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