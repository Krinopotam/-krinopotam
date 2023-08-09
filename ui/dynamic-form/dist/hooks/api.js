import React, { useCallback } from 'react';
import { Space, Typography } from 'antd';
import { MessageBox } from '@krinopotam/ui-message-box';
export const useInitFormApi = (formId, formApi, model, formProps, buttonsApi, updateFormProps) => {
    formApi.model = model;
    const apiGetFormId = useApiGetFormId(formId);
    const apiGetFormProps = useApiGetFormProps(formProps);
    const apiSetFormProps = useApiSetFormProps(formProps, updateFormProps);
    const apiValidateForm = useApiValidateForm(formApi);
    const apiSubmitForm = useApiSubmitForm(formApi);
    if (!formApi.buttonsApi)
        formApi.buttonsApi = buttonsApi;
    if (!formApi.getFormId)
        formApi.getFormId = apiGetFormId;
    if (!formApi.getFormProps)
        formApi.getFormProps = apiGetFormProps;
    if (!formApi.setFormProps)
        formApi.setFormProps = apiSetFormProps;
    if (!formApi.validateForm)
        formApi.validateForm = apiValidateForm;
    if (!formApi.submitForm)
        formApi.submitForm = apiSubmitForm;
};
export const useApiGetFormId = (formId) => {
    return useCallback(() => {
        return formId;
    }, [formId]);
};
export const useApiGetFormProps = (formProps) => {
    return useCallback(() => {
        return formProps;
    }, [formProps]);
};
export const useApiSetFormProps = (formProps, setFormProps) => {
    return useCallback((props) => {
        setFormProps(Object.assign(Object.assign({}, formProps), props));
    }, [formProps, setFormProps]);
};
export const useApiValidateForm = (formApi) => {
    return useCallback((showAlert) => {
        const errors = formApi.model.validateForm();
        formApi.buttonsApi.disabled('ok', Object.keys(errors).length > 0);
        if (Object.keys(errors).length === 0 || !showAlert)
            return errors;
        let messageContent = 'Необходимо исправить ошибки';
        messageContent = (React.createElement("span", null,
            messageContent,
            ":",
            React.createElement(Space, { direction: "vertical", size: 0 }, Object.keys(errors).map((key) => {
                const fieldLabel = formApi.model.getFieldLabel(key) || key;
                return (React.createElement(Typography.Text, { key: key, style: { fontSize: 12 }, type: "secondary" },
                    fieldLabel,
                    ": ",
                    errors[key]));
            }))));
        MessageBox.alert({ content: messageContent, type: 'error' });
        return errors;
    }, [formApi]);
};
const useApiSubmitForm = (formApi) => {
    return useCallback(() => {
        formApi.model.incrementSubmitCount();
        const errors = formApi.validateForm(true);
        if (Object.keys(errors).length > 0)
            return;
        const formProps = formApi.getFormProps();
        if (!formProps.confirmChanges) {
            formApi.buttonsApi.loading('ok', true);
            formApi.model.submit();
            return;
        }
        const waiter = MessageBox.confirmWaiter({
            content: formProps.submitConfirmMessage || 'Сохранить сделанные изменения?',
            okText: 'Да',
            cancelText: 'Отмена',
            onOk: () => {
                formApi.model.submit(undefined, undefined, onComplete);
            },
        });
        const onComplete = () => {
            waiter.destroy();
        };
    }, [formApi]);
};
