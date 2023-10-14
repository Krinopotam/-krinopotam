// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import CheckboxComponent from "./checkboxComponent";

export default {
    title: 'DForm/Controls/Checkbox',
    component: CheckboxComponent,
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
                    import {IDFormFieldCheckBoxProps, CheckboxComponent} from @krinopotam/ui-kit/dynamicForm/components/checkboxComponent";
                    type IComponent = Omit<IDFormFieldCheckBoxProps, 'component'>
                    /** DynamicForm Checkbox component */
                    export const CheckboxField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: CheckboxComponent} satisfies IDFormFieldCheckBoxProps}
                        }/>
                    export default CheckboxField
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof CheckboxComponent>

type Story = StoryObj<typeof CheckboxComponent>;

export const Playground: Story = {
    args: {
        label: 'Checkbox field',
    },
}
