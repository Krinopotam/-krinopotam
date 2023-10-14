// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import PasswordComponent from "./passwordComponent";

export default {
    title: 'DForm/Fields/Password',
    component: PasswordComponent,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            source: {
                language: 'tsx',
                format: true,
                // language=text
                code: `
                    import React from "react";
                    import {DForm} from @krinopotam/ui-kit/dForm";
                    import {IDFormFieldProps} from @krinopotam/ui-kit/dForm";
                    import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField";
                    type IComponent = IDFormFieldProps
                    /** DForm Password component */
                    export const PasswordComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: PasswordField}}
                        }/>
                    export default PasswordComponent
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof PasswordComponent>

type Story = StoryObj<typeof PasswordComponent>;

export const Playground: Story = {
    args: {
        label: 'Password field',
    },
}
