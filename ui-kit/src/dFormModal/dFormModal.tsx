/**
 * @DynamicModalForm
 * @version 0.0.33.59
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IDFormBaseCallbacks, IDFormCallbacks, IDFormDataSet, IDFormProps} from '@src/dForm';
import {IDFormModalApi, useInitModalFormApi} from './hooks/api';
import React, {CSSProperties, useEffect, useMemo, useState} from 'react';

import {DFormModalRender} from './renders/dFormModalRender';
import {IButtonsRowApi} from '@src/buttonsRow/buttonsRow';
import {HelpersStrings, HelpersObjects} from "@krinopotam/js-helpers";
import {useFormCallbacks} from './hooks/callbacks';
import {useInitButtons} from './hooks/buttons';
import {useUpdateMessageBoxTheme} from '@src/messageBox';
import {useGetActualProps} from '@krinopotam/common-hooks';

//region Types
export interface IDModalProps {
    /** Modal controls title */
    title?: string;

    /**Modal window width */
    width?: number;

    /**Modal window min width */
    minWidth?: number;

    /**Modal window max width */
    maxWidth?: number;

    /** Content body height*/
    bodyHeight?: number;

    /** Content body min height*/
    bodyMinHeight?: number;

    /** Content body max height*/
    bodyMaxHeight?: number;

    /** Content body CSS style (will be overwritten by bodyHeight, bodyMinHeight, bodyMaxHeight if set)*/
    bodyStyle?: React.CSSProperties;

    /** Content body wil not be scrollable */
    notScrollable?: boolean;

    /** Is modal can be resizable */
    resizable?: boolean;

    /** Is controls visible (for open for without api) */
    isOpened?: boolean;

    /** Form header style */
    headerStyle?: CSSProperties;

    /**Form header icon */
    headerIcon?: React.ReactNode;

    /** Form footer style */
    footerStyle?: CSSProperties;

    /** Confirm message before the form closing, if form is dirty */
    closeFormConfirmMessage?: React.ReactNode;
}

export interface IDFormModalCallbacks extends IDFormBaseCallbacks<IDFormModalApi> {
    onOpen?: (
        formApi: IDFormModalApi,
        dataSet: IDFormDataSet | undefined,
    ) => boolean | void;
    onOpened?: (formApi: IDFormModalApi, dataSet: IDFormDataSet | undefined) => void;
    onClosing?: (formApi: IDFormModalApi) => boolean | void;
    onClosed?: (formApi: IDFormModalApi) => void;
}

export type IDFormModalProps = IDModalProps & IDFormModalCallbacks & Exclude<IDFormProps, keyof IDFormCallbacks>

//endregion

export const DFormModal = (props: IDFormModalProps): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const [formId] = useState(props.formId ?? 'dFormModal-' + HelpersStrings.getUuid());
    const [modalFormProps, updateModalFormProps] = useGetActualProps(props); //props can be set both by parent component and via api

    //region Init api
    const [formApi, setFormApi] = useState((modalFormProps.apiRef || {}) as IDFormModalApi);
    const [buttonsApi] = useState({} as IButtonsRowApi);
    const buttons = useInitButtons(formApi, modalFormProps);
    useInitModalFormApi(formId, formApi, modalFormProps, buttonsApi, updateModalFormProps);
    //endregion

    const formCallbacks = useFormCallbacks(formApi, modalFormProps);
    const [, formProps] = useSeparateProps(modalFormProps, formCallbacks); // separates form props from modal props

    //region Destructor
    useEffect(() => {
        return () => {
            setFormApi({} as IDFormModalApi); //clear api on component destroy
        };
    }, []);

    //endregion

    return (
        <DFormModalRender
            formId={formId}
            formApi={formApi}
            modalFormProps={modalFormProps}
            formProps={formProps}
            buttons={buttons}
            buttonsApi={buttonsApi}
        />
    );
};


const useSeparateProps = (formModalProps: IDFormModalProps, formCallbacks: IDFormCallbacks) => {

    return useMemo((): [IDModalProps, IDFormProps] => {
        const [modalProps, formProps] = HelpersObjects.splitObject<IDModalProps, IDFormProps>(formModalProps, {
            //--- IDFormModalProps -----
            title: true,
            width: true,
            minWidth: true,
            maxWidth: true,
            bodyHeight: true,
            bodyMinHeight: true,
            bodyMaxHeight: true,
            bodyStyle: true,
            notScrollable: true,
            resizable: true,
            isOpened: true,
            headerStyle: true,
            headerIcon: true,
            footerStyle: true,
            closeFormConfirmMessage: true,
        });

        formProps.buttons = null; //clear form buttons because the modal form has it own buttons

        return [modalProps, {...formProps, ...formCallbacks}];
    }, [formCallbacks, formModalProps]);
};

