// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import CheckboxField from "./checkboxField";
import {componentsCallbacks} from "../_common/componentsCallbacks";

export default {
    title: 'DForm/Controls/Checkbox',
    component: CheckboxField,
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
                    import {DForm} from @krinopotam/ui-kit/dynamic-form";
                    import {IDFormFieldCheckBoxProps, CheckboxComponent} from @krinopotam/ui-kit/dynamic-form/components/checkboxComponent";
                    type IComponent = Omit<IDFormFieldCheckBoxProps, 'component'>
                    /** DynamicForm Checkbox component */
                    export const CheckboxField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: CheckboxComponent}}
                        }/>
                    export default CheckboxField
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof CheckboxField>

type Story = StoryObj<typeof CheckboxField>;

export const Playground: Story = {
    args: {
        label: 'Checkbox field',
    },
}

export const Callbacks: Story = {
    args: {
        label: 'Checkbox field',
        callbacks: componentsCallbacks
    },
};
