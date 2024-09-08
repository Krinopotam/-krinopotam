import React, {useCallback, useState} from 'react';
import {Space, Typography} from 'antd';
import {MessageBox} from '@src/messageBox';
import {IDFormProps} from '@src/dForm';
import {IDFormApi} from '@src/dForm/types/dFormTypes';
import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {translations} from '@src/dForm/translations/translations';
import {useApiGetProps} from '@src/_shared/hooks/componentApiMethods/useApiGetProps';
import {useApiSetProps} from '@src/_shared/hooks/componentApiMethods/useApiSetProps';
import {useApiUpdateProps} from '@src/_shared/hooks/componentApiMethods/useApiUpdateProps';
import {useApiGetId} from '@src/_shared/hooks/componentApiMethods/useApiGetId';
import {useApiIsMounted} from '@src/_shared/hooks/componentApiMethods/useApiIsMointed';
import {useApiGetButtonsApi} from "@src/_shared/hooks/componentApiMethods/useApiGetButtonsApi";
import {GetNanoId} from "@krinopotam/js-helpers";

export const useInitFormApi = ({
    props,
    setProps,
}: {
    props: IDFormProps;
    setProps: React.Dispatch<React.SetStateAction<IDFormProps>>;
}) => {
    const [api] = useState((props.apiRef || {}) as IDFormApi);

    /** Component Api methods*/
    const apiGetId = useApiGetId(props.formId ?? 'dForm-' + GetNanoId());
    const apiGetProps = useApiGetProps(props);
    const apiSetProps = useApiSetProps(setProps);
    const apiUpdateProps = useApiUpdateProps(props, setProps);
    const apiGetIsMounted = useApiIsMounted();

    /** Component owned Api methods*/
    const getButtonsApi = useApiGetButtonsApi();
    const apiValidateForm = useApiValidateForm(api, props);
    const apiSubmitForm = useApiSubmitForm(api, props);

    if (!props._overriddenApi?.getId) api.getId = apiGetId;
    if (!props._overriddenApi?.getButtonsApi) api.getButtonsApi = getButtonsApi
    if (!props._overriddenApi?.getProps) api.getProps = apiGetProps;
    if (!props._overriddenApi?.setProps) api.setProps = apiSetProps;
    if (!props._overriddenApi?.updateProps) api.updateProps = apiUpdateProps;
    if (!props._overriddenApi?.validateForm) api.validateForm = apiValidateForm;
    if (!props._overriddenApi?.submitForm) api.submitForm = apiSubmitForm;
    if (!props._overriddenApi?.getIsMounted) api.getIsMounted = apiGetIsMounted;

    return api;
};

const useApiValidateForm = (formApi: IDFormApi, formProps: IDFormProps) => {
    const t = useTranslate(formProps.language, translations, formProps.translation);

    return useCallback(
        (showAlert?: boolean) => {
            const errors = formApi.model.validateForm();
            formApi.getButtonsApi().disabled('ok', Object.keys(errors).length > 0);

            if (Object.keys(errors).length === 0 || !showAlert) return errors;

            const messageContent = (
                <Space style={{marginLeft: 5}} direction="vertical" size={0}>
                    {Object.keys(errors).map(key => {
                        const field = formApi.model.getField(key);
                        const fieldLabel = field?.getLabel() || key;
                        return (
                            <Typography.Text key={key} style={{fontSize: 12}} type="secondary">
                                {fieldLabel}: {errors[key]}
                            </Typography.Text>
                        );
                    })}
                </Space>
            );

            MessageBox.alert({
                language: formProps.language,
                title: t('fixError'),
                content: messageContent,
                colorType: 'danger',
            });

            return errors;
        },
        [formApi, formProps.language, t]
    );
};

const useApiSubmitForm = (formApi: IDFormApi, formProps: IDFormProps) => {
    const t = useTranslate(formProps.language, translations, formProps.translation);

    return useCallback(() => {
        formApi.model.incrementSubmitCount();

        const errors = formApi.validateForm(true);
        if (Object.keys(errors).length > 0) return;

        const formProps = formApi.model.getFormProps();

        if (!formProps.confirmChanges) {
            formApi.getButtonsApi().loading('ok', true);
            formApi.model.submit();
            return;
        }

        const waiter = MessageBox.confirmWaiter({
            language: formProps.language,
            content: formProps.submitConfirmMessage ?? t('confirmChangesQs'),
            okText: t('yes'),
            cancelText: t('cancel'),
            onOk: () => {
                formApi.model.submit(undefined, undefined, onComplete);
            },
        });

        const onComplete = () => {
            waiter.destroy();
        };
    }, [formApi, t]);
};
