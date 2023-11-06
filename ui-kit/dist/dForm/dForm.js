import './css/antdAnimation.css';
import { DModel } from './dModel';
import { useInitFormApi } from './hooks/api';
import React, { useEffect, useRef, useState } from 'react';
import { FormRender } from './renders/formRender';
import { GetUuid } from '@krinopotam/js-helpers';
import { useModelCallbacks } from './hooks/callbacks';
import { useGetButtons } from './hooks/buttons';
import { useUpdateMessageBoxTheme } from '../messageBox';
import { useGetActualProps } from '@krinopotam/common-hooks';
import './css/dForm.scss';
export const DForm = (props) => {
    var _a;
    useUpdateMessageBoxTheme();
    const [formProps, updateFormProps] = useGetActualProps(props);
    const [formId] = useState((_a = formProps.formId) !== null && _a !== void 0 ? _a : 'dForm-' + GetUuid());
    const [formApi] = useState((formProps.apiRef || {}));
    const [buttonsApi] = useState({});
    const formButtons = useGetButtons(formProps, formApi);
    const modelCallbacks = useModelCallbacks(formProps, formApi);
    const model = useFormModel(formId, formProps, modelCallbacks);
    useInitFormApi(formApi, model, formProps, buttonsApi, updateFormProps);
    useInitialFetchData(formApi);
    useFormMounted(formApi);
    return React.createElement(FormRender, { formProps: formProps, formApi: formApi, formButtons: formButtons });
};
const useFormModel = (formId, formProps, callbacks) => {
    const modelRef = useRef();
    if (!modelRef.current)
        modelRef.current = new DModel(formId);
    modelRef.current.initModel(formProps, callbacks);
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
//# sourceMappingURL=dForm.js.map