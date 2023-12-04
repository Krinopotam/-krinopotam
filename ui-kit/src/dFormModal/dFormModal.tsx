/**
 * @DynamicModalForm
 * @version 0.0.33.59
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IDFormCallbacks, IDFormProps} from '@src/dForm';
import {IDFormModalApi, useInitModalFormApi} from './hooks/api';
import React, {useEffect, useMemo, useState} from 'react';

import {DFormModalRender} from './renders/dFormModalRender';
import {IButtonsRowApi} from '@src/buttonsRow/buttonsRow';
import {GetUuid, SplitObject} from "@krinopotam/js-helpers";
import {useFormCallbacks} from './hooks/callbacks';
import {useInitButtons} from './hooks/buttons';
import {useUpdateMessageBoxTheme} from '@src/messageBox';
import {useGetActualProps} from '@krinopotam/common-hooks';
import {IDFormModalProps, IDModalProps} from "@src/dFormModal/types/dFormModalTypes";

export const DFormModal = (props: IDFormModalProps): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const [formId] = useState(props.formId ?? 'dFormModal-' + GetUuid());
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
        const [modalProps, formProps] = SplitObject<IDModalProps, IDFormProps>(formModalProps, {
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

