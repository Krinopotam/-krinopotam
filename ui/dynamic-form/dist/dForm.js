import './css/antdAnimation.css';
import { DModel } from './dModel';
import { useInitFormApi } from './hooks/api';
import React, { useEffect, useRef, useState } from 'react';
import { FormRender } from './renders/formRender';
import { HelpersStrings } from '@krinopotam/js-helpers';
import { useCallbacks } from './hooks/callbacks';
import { useGetButtons } from './hooks/buttons';
import { useUpdateMessageBoxTheme } from '@krinopotam/ui-message-box';
import { useGetActualProps } from '@krinopotam/common-hooks';
export const DForm = (props) => {
    useUpdateMessageBoxTheme();
    const [formProps, updateFormProps] = useGetActualProps(props);
    const [formId] = useState(formProps.formId || 'dForm-' + HelpersStrings.getUuid());
    const [formApi] = useState((formProps.apiRef || {}));
    const [buttonsApi] = useState({});
    const formButtons = useGetButtons(formProps, formApi);
    const callbacks = useCallbacks(formProps, formApi);
    const formModel = useFormModel(formId, formProps, callbacks);
    useInitFormApi(formId, formApi, formModel, formProps, buttonsApi, updateFormProps);
    useInitialFetchData(formApi);
    useFormMounted(formApi);
    return React.createElement(FormRender, { formApi: formApi, formButtons: formButtons });
};
const useFormModel = (formId, formProps, callbacks) => {
    const modelRef = useRef();
    if (!modelRef.current)
        modelRef.current = new DModel(formId);
    modelRef.current.reinitModel(formProps, callbacks);
    return modelRef.current;
};
const useFormMounted = (formApi) => {
    useEffect(() => {
        formApi.model.setFormMounted(true);
        return () => {
            formApi.model.setFormMounted(false);
        };
    });
};
const useInitialFetchData = (formApi) => {
    useEffect(() => {
        const formMode = formApi.model.getFormMode();
        if (formMode !== 'update' && formMode !== 'clone' && formMode !== 'view')
            return;
        formApi.model.fetchData();
    }, [formApi]);
};
