import {AnyType} from '@krinopotam/service-types';
import {CallbackControl} from '@src/_shared/classes/callbackControl';
import {IDFormApi, IDFormCallbacks, IDFormDataSet, IDFormProps, IDFormPropsNoCB} from '@src/dForm';
import {translations} from '@src/dFormModal/translations/translations';
import {IExtendedModalProps} from '@src/modal';
import React from 'react';

export interface IDFormModalOwnCallbacks {
    /** Fires when the form is opening.
     * Don't use formApi.getFormProps() because by the time the form is opened, they have not yet had time to update.
     */
    onOpen?: (formApi: IDFormModalApi, dataSet: IDFormDataSet | undefined, formProps: IDFormModalProps, cbControl: CallbackControl) => boolean | void;
    /** Fires when the form is opened */
    onOpened?: (formApi: IDFormModalApi, dataSet: IDFormDataSet | undefined, cbControl: CallbackControl) => void;
    /** Fires when the form is closing */
    onClosing?: (formApi: IDFormModalApi, cbControl: CallbackControl) => boolean | void;
    /** Fires when the form is closed */
    onClosed?: (formApi: IDFormModalApi, cbControl: CallbackControl) => void;
    /** Fires when the form is canceled */
    onCancel?: (formApi: IDFormModalApi, cbControl: CallbackControl) => void;
}

export type IDFormModalCallbacks = IDFormModalOwnCallbacks & IDFormCallbacks<IDFormModalApi, IDFormModalProps>;

export type IDFormModalOwnPropsNoCB = {
    /** Form open state */
    open?: boolean;
    /** Modal title */
    title?: React.ReactNode;
    /** Modal height */
    height?: number | string;
    /** Modal max height */
    maxHeight?: number | string;
    /** Modal min height */
    minHeight?: number | string;
    /** Modal width */
    width?: number | string;
    /** Modal max width */
    maxWidth?: number | string;
    /** Modal min width */
    minWidth?: number | string;
    /** Confirm message before the form closing, if form is dirty */
    closeFormConfirmMessage?: React.ReactNode;
    /** Language */
    language?: keyof typeof translations;
    /** Custom translation */
    translation?: Partial<typeof translations.en_GB>;
    /** Modal component properties */
    modalProps?: IExtendedModalProps;
};

export type IDFormModalOwnProps = IDFormModalOwnPropsNoCB & IDFormModalOwnCallbacks;

export type IDFormModalProps<TFieldsProps extends Record<string, AnyType> = Record<string, AnyType>> = IDFormModalOwnPropsNoCB &
    IDFormModalCallbacks &
    IDFormPropsNoCB<TFieldsProps>;

export interface IDFormModalApi extends IDFormApi<IDFormModalProps> {
    /** Get translation */
    t: (str: keyof (typeof translations)['en_GB']) => string;

    /** Open controls */
    open: (formMode: IDFormProps['formMode'], extraProps?: Partial<Omit<IDFormModalProps, 'formMode' | 'open'>>) => void;

    /** Close controls with confirmation*/
    close: () => void;

    /** Close controls without confirmation*/
    forceClose: () => void;

    /** Get modal title */
    getTitle: () => IDFormModalProps['title'];

    /** Set modal title */
    setTitle: (title: IDFormModalProps['title']) => void;
}
