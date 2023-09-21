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
                    import {DFormConfig} from @krinopotam/ui-kit/dynamicForm/configBuilder/dFormConfig';
                    import {InputComponentConfig} from @krinopotam/ui-kit/dynamicForm/configBuilder/inputComponentConfig';
                    import {PasswordComponentConfig} from @krinopotam/ui-kit/dynamicForm/configBuilder/passwordComponentConfig';
                    interface IFields {
                        login: string;
                        password: string;
                    }
                    const formProps = new DFormConfig<IFields>('Test form')
                        .confirmChanges(true)
                        .addFields(
                            new InputComponentConfig<IFields>('login').label('Логин'),
                            new PasswordComponentConfig<IFields>('password').label('Пароль')
                        )
                        .buttons({ok: {position: 'right'}})
                        .getConfig();
                    /** Simple Dynamic form example */
                    export const SimpleForm = (props?: IDFormProps): React.JSX.Element => {
                        const compProps = {...formProps, ...props}
                        return (
                            <>
                                <div style={{maxWidth: 500}}>
                                    <DForm {...compProps} />
                                </div>
                            </>
                        );
                    };
                    export default SimpleForm
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

