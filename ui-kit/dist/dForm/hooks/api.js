import React, { useCallback } from 'react';
import { Space, Typography } from 'antd';
import { MessageBox } from '../../messageBox';
export const useInitFormApi = (formApi, model, formProps, buttonsApi, updateFormProps) => {
    formApi.model = model;
    const apiGetFormProps = useApiGetFormProps(formProps);
    const apiSetFormProps = useApiSetFormProps(formProps, updateFormProps);
    const apiValidateForm = useApiValidateForm(formApi);
    const apiSubmitForm = useApiSubmitForm(formApi);
    if (!formApi.buttonsApi)
        formApi.buttonsApi = buttonsApi;
    if (!formApi.getFormProps)
        formApi.getFormProps = apiGetFormProps;
    if (!formApi.setFormProps)
        formApi.setFormProps = apiSetFormProps;
    if (!formApi.validateForm)
        formApi.validateForm = apiValidateForm;
    if (!formApi.submitForm)
        formApi.submitForm = apiSubmitForm;
};
const useApiGetFormProps = (formProps) => {
    return useCallback(() => {
        return formProps;
    }, [formProps]);
};
const useApiSetFormProps = (formProps, setFormProps) => {
    return useCallback((props) => {
        setFormProps(Object.assign(Object.assign({}, formProps), props));
    }, [formProps, setFormProps]);
};
const useApiValidateForm = (formApi) => {
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
                const field = formApi.model.getField(key);
                const fieldLabel = (field === null || field === void 0 ? void 0 : field.getLabel()) || key;
                return (React.createElement(Typography.Text, { key: key, style: { fontSize: 12 }, type: "secondary" },
                    fieldLabel,
                    ": ",
                    errors[key]));
            }))));
        MessageBox.alert({ content: messageContent, colorType: 'danger' });
        return errors;
    }, [formApi]);
};
const useApiSubmitForm = (formApi) => {
    return useCallback(() => {
        var _a;
        formApi.model.incrementSubmitCount();
        const errors = formApi.validateForm(true);
        if (Object.keys(errors).length > 0)
            return;
        const formProps = formApi.model.getFormProps();
        if (!formProps.confirmChanges) {
            formApi.buttonsApi.loading('ok', true);
            formApi.model.submit();
            return;
        }
        const waiter = MessageBox.confirmWaiter({
            content: (_a = formProps.submitConfirmMessage) !== null && _a !== void 0 ? _a : 'Сохранить сделанные изменения?',
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
