import type {Meta, StoryObj} from '@storybook/react';
import SimpleForm from './simpleForm';

export default {
    title: 'DFormModal/Examples/SimpleForm',
    component: SimpleForm,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            source: {
                language: 'tsx',
                format: true,
                // language=text
                code: `
                    import {Button, IButtonProps} from @krinopotam/ui-kit/button';
                    import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
                    import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';
                    import {DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
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
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} as Meta<typeof SimpleForm>;

type Story = StoryObj<typeof SimpleForm>;

export const Playground: Story = {
    args: {
        layout: 'horizontal',
    },
};
