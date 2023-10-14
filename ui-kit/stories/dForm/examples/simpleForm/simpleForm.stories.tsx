import type {Meta, StoryObj} from '@storybook/react';
import SimpleForm from "./simpleForm";


export default {
    title: 'DForm/Examples/SimpleForm',
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
                    import React from 'react';
                    import {DForm, IDFormProps} from @krinopotam/ui-kit/dynamicForm';
                    import {IDFormFieldInputProps, InputComponent} from @krinopotam/ui-kit/dynamicForm/components/inputComponent';
                    import {IDFormFieldPasswordProps, PasswordComponent} from @krinopotam/ui-kit/dynamicForm/components/passwordComponent';
                    const formProps: IDFormProps = {
                        formId: 'Test form',
                        confirmChanges: true,
                        fieldsProps: {
                            login: {component: InputComponent, label: 'Логин', tooltip: 'Ввод логина'} as IDFormFieldInputProps,
                            password: {component: PasswordComponent, label: 'Пароль', tooltip: 'Ввод пвароль'} as IDFormFieldPasswordProps,
                        },
                        buttons: {ok: {position: 'right'}},
                    };
                    /** Simple Dynamic form example */
                    export const SimpleForm = (props?: IDFormProps): React.JSX.Element => {
                        const compProps = {...formProps, ...props};
                        return (
                            <>
                                <div style={{maxWidth: 500}}>
                                    <DForm {...compProps} />
                                </div>
                            </>
                        );
                    };
                    export default SimpleForm;
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        }
    },

} as Meta<typeof SimpleForm>;

type Story = StoryObj<typeof SimpleForm>;

export const Playground: Story = {
    args:{
        layout: "horizontal"
    }
};

