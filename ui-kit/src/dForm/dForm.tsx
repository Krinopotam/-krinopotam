/**
 * @DynamicForm
 * @version 0.0.37.76
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IDFormApi, IDFormProps} from '@src/dForm/types/dFormTypes';
import {DModel} from './dModel';
import {useInitApi} from './hooks/api/api';
import React, {useEffect, useMemo, useRef} from 'react';
import {FormRender} from './renders/formRender';
import {useOverrideCallbacks} from './hooks/useOverrideCallbacks';
import {useGetButtonsProps} from './hooks/useGetButtonsProps';
import {useUpdateMessageBoxTheme} from '@src/messageBox';
import {useGetActualProps} from '@krinopotam/common-hooks';

import './css/dForm.scss';
import './css/antdAnimation.css';

export const DForm = (props: IDFormProps): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox
    const _props = useOnFirstRender(props);

    const [formProps, setFormProps] = useGetActualProps(_props); //props can be set both by parent component and via api
    const formPropsUpd = useOverrideCallbacks(formProps);
    const api = useInitApi({props: formPropsUpd, setProps: setFormProps});

    useInitFormModel(api, formPropsUpd);

    const formButtons = useGetButtonsProps(formPropsUpd, api); //init buttons

    useInitialFetchData(api);

    useFormMounted(api);

    return <FormRender formProps={formPropsUpd} formApi={api} formButtons={formButtons} />;
};

const useOnFirstRender = (formProps: IDFormProps): IDFormProps => {
    const isFirstRef = useRef(true);
    if (!isFirstRef.current) {
        isFirstRef.current = false;
        return formProps;
    }

    return formProps?.onFirstRender?.(formProps) ?? formProps;
};

const useInitFormModel = (formApi: IDFormApi, formProps: IDFormProps) => {
    const modelRef = useRef<DModel>(null);
    return useMemo(() => {
        if (!modelRef.current) modelRef.current = new DModel(formApi);
        if (!formProps._overriddenApi?.model) formApi.model = modelRef.current;
        modelRef.current.initModel(formProps);

        return modelRef.current;
    }, [formApi, formProps]);
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
        formApi.model.onInitialFetch()
    }, [formApi]);
};
