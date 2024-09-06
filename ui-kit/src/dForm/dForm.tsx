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
import {useInitFormApi} from './hooks/api';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {FormRender} from './renders/formRender';
import {useModelCallbacks} from './hooks/callbacks';
import {useGetButtons} from './hooks/buttons';
import {useUpdateMessageBoxTheme} from '@src/messageBox';
import {useGetActualProps} from '@krinopotam/common-hooks';

import './css/dForm.scss';
import './css/antdAnimation.css';


export const DForm = (props: IDFormProps): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const [formProps, setFormProps] = useGetActualProps(props); //props can be set both by parent component and via api

    const [formApi] = useState((formProps.apiRef || {}) as IDFormApi);
    useInitFormApi({formApi, props: formProps, setProps: setFormProps});
    const modelCallbacks = useModelCallbacks(formProps, formApi);
    useInitFormModel(formApi, formProps, modelCallbacks);

    const formButtons = useGetButtons(formProps, formApi); //init buttons

    useInitialFetchData(formApi);

    useFormMounted(formApi);

    return <FormRender formProps={formProps} formApi={formApi} formButtons={formButtons}/>;
};

const useInitFormModel = (formApi:IDFormApi, formProps: IDFormProps, callbacks: IDFormModelCallbacks) => {
    const modelRef = useRef<DModel>();
    return useMemo(()=>{
        if (!modelRef.current) modelRef.current = new DModel(formApi);
        if (!formProps._overriddenApi?.model) formApi.model = modelRef.current;
        modelRef.current.initModel(formProps, callbacks);

        return modelRef.current;
        
    }, [callbacks, formApi, formProps])
    
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
