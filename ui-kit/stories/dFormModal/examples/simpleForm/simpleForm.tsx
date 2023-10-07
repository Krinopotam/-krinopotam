// noinspection DuplicatedCode

import React, {useCallback, useState} from 'react';
import {DFormModal, IDFormModalProps} from '@src/dynamicFormModal';
import {IDFormFieldInputProps, InputComponent} from '@src/dynamicForm/components/inputComponent';
import {IDFormFieldPasswordProps, PasswordComponent} from '@src/dynamicForm/components/passwordComponent';
import {Button} from '@src/button';
import {Space} from 'antd';
import {IColorType} from '@src/button/button';

/** Simple Dynamic form example */
export const SimpleForm = (props?: IDFormModalProps): React.JSX.Element => {
    const [open, setOpen] = useState(false);
    const [colorType, setColorType] = useState<IColorType | undefined>(undefined);

    const formProps: IDFormModalProps = {
        fieldsProps: {
            field1: {component: InputComponent, label: 'login', tooltip: 'Login input'} as IDFormFieldInputProps,
            field2: {component: PasswordComponent, label: 'password', tooltip: 'Password input'} as IDFormFieldPasswordProps,
        },
        colorType: colorType,
    };

    const compProps = {...formProps, ...props};

    const onClick = useCallback((colorType?: IColorType) => {
        setOpen(true);
        setColorType(colorType);
    }, []);

    return (
        <>
            <Space>
                <Button type="primary" onClick={() => onClick()}>
                    Open form
                </Button>
                <Button type="primary" onClick={() => onClick('info')} colorType="info">
                    Open form
                </Button>
                <Button type="primary" onClick={() => onClick('success')} colorType="success">
                    Open form
                </Button>
                <Button type="primary" onClick={() => onClick('warning')} colorType="warning">
                    Open form
                </Button>
                <Button type="primary" onClick={() => onClick('danger')} colorType="danger">
                    Open form
                </Button>
            </Space>

            <DFormModal
                {...compProps}
                isOpened={open}
                callbacks={{
                    onClosed: () => {
                        setOpen(false);
                    },
                }}
            />
        </>
    );
};

export default SimpleForm;
