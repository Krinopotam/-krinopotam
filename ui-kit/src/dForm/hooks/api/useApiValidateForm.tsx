import {IDFormApi} from '@src/dForm';
import React from 'react';
import {Space, Typography} from 'antd';
import {MessageBox} from '@src/messageBox';

export const useApiValidateForm = (api: IDFormApi) => {
    return (showAlert?: boolean) => {
        const props = api.getProps();
        const errors = api.model.validateForm();
        api.getButtonsApi().disabled('ok', Object.keys(errors).length > 0);

        if (Object.keys(errors).length === 0 || !showAlert) return errors;

        const messageContent = (
            <Space style={{marginLeft: 5}} direction="vertical" size={0}>
                {Object.keys(errors).map(key => {
                    const field = api.model.getField(key);
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
            language: props.language,
            title: api.t('fixError'),
            content: messageContent,
            colorType: 'danger',
        });

        return errors;
    };
};
