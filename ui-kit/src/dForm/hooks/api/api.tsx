import React, {useState} from 'react';
import {IDFormProps} from '@src/dForm';
import {IDFormApi} from '@src/dForm/types/dFormTypes';
import {useApiGetProps} from '@src/_shared/hooks/componentApiMethods/useApiGetProps';
import {useApiSetProps} from '@src/_shared/hooks/componentApiMethods/useApiSetProps';
import {useApiUpdateProps} from '@src/_shared/hooks/componentApiMethods/useApiUpdateProps';
import {useApiGetId} from '@src/_shared/hooks/componentApiMethods/useApiGetId';
import {useApiIsMounted} from '@src/_shared/hooks/componentApiMethods/useApiIsMointed';
import {useApiGetButtonsApi} from '@src/_shared/hooks/componentApiMethods/useApiGetButtonsApi';
import {GetNanoId} from '@krinopotam/js-helpers/helpersString/getNanoId';
import {useApiT} from '@src/dForm/hooks/api/useApiT';
import {useApiValidateForm} from '@src/dForm/hooks/api/useApiValidateForm';
import {useApiSubmitForm} from '@src/dForm/hooks/api/useApiSubmitForm';

export const useInitApi = ({props, setProps}: {props: IDFormProps; setProps: React.Dispatch<React.SetStateAction<IDFormProps>>}) => {
    const [api] = useState((props.apiRef || {}) as IDFormApi);

    /************ Component Api methods ***********************/
    const apiGetId = useApiGetId(props.formId ?? 'dForm-' + GetNanoId());
    if (!props._overriddenApi?.getId) api.getId = apiGetId;

    const apiGetProps = useApiGetProps(props);
    if (!props._overriddenApi?.getProps) api.getProps = apiGetProps;

    const apiSetProps = useApiSetProps(setProps);
    if (!props._overriddenApi?.setProps) api.setProps = apiSetProps;

    const apiUpdateProps = useApiUpdateProps(props, setProps);
    if (!props._overriddenApi?.updateProps) api.updateProps = apiUpdateProps;

    const apiGetIsMounted = useApiIsMounted();
    if (!props._overriddenApi?.getIsMounted) api.getIsMounted = apiGetIsMounted;

    /************* Component owned Api methods ***************/
    const apiT = useApiT(props);
    if (!props._overriddenApi?.t) api.t = apiT;

    const getButtonsApi = useApiGetButtonsApi();
    if (!props._overriddenApi?.getButtonsApi) api.getButtonsApi = getButtonsApi;

    const apiValidateForm = useApiValidateForm(api);
    if (!props._overriddenApi?.validateForm) api.validateForm = apiValidateForm;

    const apiSubmitForm = useApiSubmitForm(api);
    if (!props._overriddenApi?.submitForm) api.submitForm = apiSubmitForm;

    return api;
};
