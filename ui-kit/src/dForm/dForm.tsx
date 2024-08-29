/**
 * @DynamicForm
 * @version 0.0.37.76
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IDFormApi, IDFormProps} from "@src/dForm/types/dFormTypes";
import {DModel} from './dModel';
import {IDFormModelCallbacks} from "@src/dForm/types/dModelTypes";
import {IButtonsRowApi} from 'src/buttonsRow';
import {useInitFormApi} from './hooks/api';
import React, {useEffect, useRef, useState} from 'react';
import {FormRender} from './renders/formRender';
import {GetUuid} from '@krinopotam/js-helpers';
import {useModelCallbacks} from './hooks/callbacks';
import {useGetButtons} from './hooks/buttons';
import {useUpdateMessageBoxTheme} from '@src/messageBox';
import {useGetActualProps} from '@krinopotam/common-hooks';

import './css/dForm.scss';
import './css/antdAnimation.css';


export const DForm = (props: IDFormProps): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const [formProps, updateFormProps] = useGetActualProps(props); //props can be set both by parent component and via api
//
    //region Common component states
    const [formId] = useState(formProps.formId ?? 'dForm-' + GetUuid());
    const [formApi] = useState((formProps.apiRef || {}) as IDFormApi);
    const [buttonsApi] = useState({} as IButtonsRowApi);
    const formButtons = useGetButtons(formProps, formApi); //init buttons
    //endregion

    const modelCallbacks = useModelCallbacks(formProps, formApi);
    useInitFormModel(formId, formApi, formProps, modelCallbacks);
    useInitFormApi(formApi, formProps, buttonsApi, updateFormProps);

    useInitialFetchData(formApi);

    useFormMounted(formApi);

    return <FormRender formProps={formProps} formApi={formApi} formButtons={formButtons}/>;
};

const useInitFormModel = (formId: string, formApi:IDFormApi, formProps: IDFormProps, callbacks: IDFormModelCallbacks) => {
    const modelRef = useRef<DModel>();
    if (!modelRef.current) modelRef.current = new DModel(formId, formApi);
    formApi.model = modelRef.current;
    modelRef.current.initModel(formProps, callbacks);

    return modelRef.current;
};

const useFormMounted = (formApi: IDFormApi) => {
    useEffect(() => {
        formApi.model.setFormMounted(true);
        return () => {
            formApi.model.setFormMounted(false);
        };
    });
};

const useInitialFetchData = (formApi: IDFormApi) => {
    useEffect(() => {
        const formMode = formApi.model.getFormMode();
        if (formMode !== 'update' && formMode !== 'clone' && formMode !== 'view') return;
        formApi.model.fetchData();
    }, [formApi]);
};
