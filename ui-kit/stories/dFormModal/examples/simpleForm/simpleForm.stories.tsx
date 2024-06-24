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
                    import React, {useCallback, useState} from 'react';
                    import {DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
                    import {Button} from @krinopotam/ui-kit/button';
                    import {Space} from 'antd';
                    import {IColorType} from @krinopotam/ui-kit/button/button';
                    import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
                    import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField";
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
                                    isOpened={open}
                                    onClosed={() => {
                                        setOpen(false);
                                    }}
                                />
                            </>
                        );
                    };
                    export default SimpleForm;
                `,
            },
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
