// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import PasswordField from "./passwordField";
import {componentsCallbacks} from "../_common/componentsCallbacks";

export default {
    title: 'DForm/Controls/Password',
    component: PasswordField,
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
                    import {DForm} from @krinopotam/ui-kit/dynamicForm";
                    import {IDFormFieldPasswordProps, PasswordComponent} from @krinopotam/ui-kit/dynamicForm/components/passwordComponent";
                    type IComponent = Omit<IDFormFieldPasswordProps, 'component'>
                    /** DynamicForm Password component */
                    export const PasswordField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: PasswordComponent}}
                        }/>
                    export default PasswordField
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof PasswordField>

type Story = StoryObj<typeof PasswordField>;

export const Playground: Story = {
    args: {
        label: 'Password field',
    },
}

export const Callbacks: Story = {
    args: {
        label: 'Password field',
        ...componentsCallbacks
    },
};
