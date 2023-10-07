/**
 * @DynamicModalForm
 * @version 0.0.33.59
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IDFormCallbacks, IDFormDataSet, IDFormProps} from '@src/dynamicForm';
import {IDFormModalApi, useInitModalFormApi} from './hooks/api';
import React, {CSSProperties, useEffect, useMemo, useState} from 'react';

import {DFormModalRender} from './renders/dFormModalRender';
import {IButtonsRowApi} from '@src/buttonsRow/buttonsRow';
import {HelpersStrings, HelpersObjects} from "@krinopotam/js-helpers";
import {useCallbacks} from './hooks/callbacks';
import {useInitButtons} from './hooks/buttons';
import {useUpdateMessageBoxTheme} from '@src/messageBox';
import  {useGetActualProps} from '@krinopotam/common-hooks';

//region Types
// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDModalProps {
    /** Modal controls callbacks */
    callbacks?: IDFormModalCallbacks;

    /** Confirm message before the form closing, if form is dirty */
    closeFormConfirmMessage?: React.ReactNode;

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
}

export type IDFormModalProps  = IDModalProps & IDFormProps

export interface IDFormModalCallbacks extends IDFormCallbacks {
    onOpen?: (
        formApi: IDFormModalApi,
        dataSet: IDFormDataSet | undefined,
    ) => boolean | void;
    onOpened?: (formApi: IDFormModalApi, dataSet: IDFormDataSet | undefined) => void;
    onClosing?: (formApi: IDFormModalApi) => boolean | void;
    onClosed?: (formApi: IDFormModalApi) => void;
}

//endregion

export const DFormModal = (props: IDFormModalProps): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const [formId] = useState(props.formId ?? 'dFormModal-' + HelpersStrings.getUuid());
    const [modalFormProps, updateModalFormProps] = useGetActualProps(props); //props can be set both by parent component and via api

    const [formProps] = useSeparateProps(modalFormProps); // separates form props from modal props

    //region Init api
    const [formApi, setFormApi] = useState((modalFormProps.apiRef || {}) as IDFormModalApi);
    const [buttonsApi] = useState({} as IButtonsRowApi);
    const buttons = useInitButtons(formApi, modalFormProps);
    useInitModalFormApi(formId, formApi, modalFormProps, buttonsApi, updateModalFormProps);

    //endregion

    const formCallbacks = useCallbacks(formApi, modalFormProps);

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
            callbacks={formCallbacks}
        />
    );
};

const useSeparateProps = (props: IDFormModalProps) => {
    return useMemo((): [IDFormProps] => {
        const result = HelpersObjects.splitObject(props, [
            //--- IDFormModalProps -----
            'notScrollable',
            'title',
            'minWidth',
            'maxWidth',
            'title',
            'bodyHeight',
            'bodyMinHeight',
            'bodyMaxHeight',
            'bodyStyle',
            'resizable',
            'isOpened',
            'closeFormConfirmMessage',
            'formId',
            'colorType',
            'headerIcon',
            'headerStyle',
            'footerStyle',
            
            //---Common props ------
            'apiRef',
            'buttons',
            'callbacks',
            'arrowsButtonsSelection'
        ]);

        //const modalProps = result[0] as IDFormModalBaseProps;
        const formProps = result[1] as IDFormProps;
        formProps.buttons = null; //clear form buttons because the modal form has it own buttons

        return [formProps];
    }, [props]);
};
