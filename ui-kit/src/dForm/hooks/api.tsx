import React, {useCallback} from 'react';
import {Space, Typography} from 'antd';
import {IButtonsRowApi} from '@src/buttonsRow';
import {MessageBox} from '@src/messageBox';
import {IDFormProps} from "@src/dForm";
import {IDFormApi} from "@src/dForm/types/dFormTypes";
import {useTranslate} from "@src/dForm/hooks/translate";

export const useInitFormApi = (
    formApi: IDFormApi,
    formProps: IDFormProps,
    buttonsApi: IButtonsRowApi,
    updateFormProps: (props: IDFormProps) => void
) => {
    const apiGetFormProps = useApiGetFormProps(formProps);
    const apiSetFormProps = useApiSetFormProps(formProps, updateFormProps);
    const apiValidateForm = useApiValidateForm(formApi, formProps);
    const apiSubmitForm = useApiSubmitForm(formApi, formProps);
    if (!formApi.buttonsApi) formApi.buttonsApi = buttonsApi; //The parent can already have this API.Do not reload
    if (!formApi.getFormProps) formApi.getFormProps = apiGetFormProps;
    if (!formApi.setFormProps) formApi.setFormProps = apiSetFormProps;
    if (!formApi.validateForm) formApi.validateForm = apiValidateForm;
    if (!formApi.submitForm) formApi.submitForm = apiSubmitForm;
};

/** Get the current form props */
const useApiGetFormProps = (formProps: IDFormProps) => {
    return useCallback(() => {
        return formProps;
    }, [formProps]);
};

/** Update the current form props (will cause rerender of the form) */
const useApiSetFormProps = (formProps: IDFormProps, setFormProps: (props: IDFormProps) => void) => {
    return useCallback(
        (props: Partial<IDFormProps>) => {
            setFormProps({...formProps, ...props});
        },
        [formProps, setFormProps]
    );
};

const useApiValidateForm = (formApi: IDFormApi, formProps: IDFormProps) => {
    const t = useTranslate(formProps)
    return useCallback(
        (showAlert?: boolean) => {
            const errors = formApi.model.validateForm();
            formApi.buttonsApi.disabled('ok', Object.keys(errors).length > 0);

            if (Object.keys(errors).length === 0 || !showAlert) return errors;

            const messageContent = (
                <Space style={{marginLeft: 5}} direction="vertical" size={0}>
                    {Object.keys(errors).map((key) => {
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

            MessageBox.alert({language: formProps.language, title: t('fixError'), content: messageContent, colorType: 'danger'});

            return errors;
        },
        [formApi.buttonsApi, formApi.model, formProps.language, t]
    );
};

const useApiSubmitForm = (formApi: IDFormApi, formProps: IDFormProps) => {
    const t = useTranslate(formProps)
    return useCallback(() => {
        formApi.model.incrementSubmitCount();

        const errors = formApi.validateForm(true);
        if (Object.keys(errors).length > 0) return;

        const formProps = formApi.model.getFormProps();

        if (!formProps.confirmChanges) {
            formApi.buttonsApi.loading('ok', true);
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
