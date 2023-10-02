// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import InputField from "./InputField";

export default {
    title: 'DForm/Controls/Input',
    component: InputField,
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
                    import {IDFormFieldInputProps, InputComponent} from @krinopotam/ui-kit/dynamicForm/components/inputComponent";
                    type IComponent = Omit<IDFormFieldInputProps, 'component'>
                    /** DynamicForm Input component */
                    export const InputField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: InputComponent} satisfies IDFormFieldInputProps}
                        }
                    />
                    export default InputField
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof InputField>

type Story = StoryObj<typeof InputField>;
export const Playground: Story = {
    args: {
        label: 'Input field',
    },
}
