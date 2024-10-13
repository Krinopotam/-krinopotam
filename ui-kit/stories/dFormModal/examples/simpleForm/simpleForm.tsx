// noinspection DuplicatedCode

import {Button, IButtonProps} from '@src/button';
import {InputField} from '@src/dForm/fields/input/inputField';
import {PasswordField} from '@src/dForm/fields/password/passwordField';
import {DFormModal, IDFormModalProps} from '@src/dFormModal';
import {Space} from 'antd';
import React, {useCallback, useState} from 'react';

/** Simple Dynamic form example */
export const SimpleForm = (props?: IDFormModalProps): React.JSX.Element => {
    const [open, setOpen] = useState(false);
    const [colorType, setColorType] = useState<IButtonProps['color'] | undefined>(undefined);

    const formProps: IDFormModalProps = {
        fieldsProps: {
            field1: {component: InputField, label: 'login', tooltip: 'Login input'},
            field2: {component: PasswordField, label: 'password', tooltip: 'Password input'},
        },
        colorType: colorType,
    };

    const compProps = {...formProps, ...props};

    const onClick = useCallback((colorType?: IButtonProps['color']) => {
        setOpen(true);
        setColorType(colorType);
    }, []);

    return (
        <>
            <Space>
                <Button onClick={() => onClick()}>Open form</Button>
                <Button color="info" variant="solid" onClick={() => onClick('info')}>
                    Open form
                </Button>
                <Button color="success" variant="solid" onClick={() => onClick('success')}>
                    Open form
                </Button>
                <Button color="warning" variant="solid" onClick={() => onClick('warning')}>
                    Open form
                </Button>
                <Button color="danger" variant="solid" onClick={() => onClick('danger')}>
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
