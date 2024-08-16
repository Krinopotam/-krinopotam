// noinspection DuplicatedCode

import React, {useCallback, useState} from 'react';
import {DFormModal, IDFormModalProps} from '@src/dFormModal';
import {Button} from '@src/button';
import {Space} from 'antd';
import {IColorType} from '@src/button/button';
import {InputField} from "@src/dForm/fields/input/inputField";
import {PasswordField} from "@src/dForm/fields/password/passwordField";

/** Simple Dynamic form example */
export const SimpleForm = (props?: IDFormModalProps): React.JSX.Element => {
    const [open, setOpen] = useState(false);
    const [colorType, setColorType] = useState<IColorType | undefined>(undefined);

    const formProps: IDFormModalProps = {
        fieldsProps: {
            field1: {component: InputField, label: 'login', tooltip: 'Login input'},
            field2: {component: PasswordField, label: 'password', tooltip: 'Password input'}
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
                <Button onClick={() => onClick()}>Open form</Button>
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
                open={open}
                onClosed={() => {
                    setOpen(false);
                }}
            />
        </>
    );
};

export default SimpleForm;
