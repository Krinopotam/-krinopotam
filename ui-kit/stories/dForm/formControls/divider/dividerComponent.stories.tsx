// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import DividerComponent from "./dividerComponent";

export default {
    title: 'DForm/Fields/Divider',
    component: DividerComponent,
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
                    import {IDFormFieldDividerProps, DividerComponent} from @krinopotam/ui-kit/dynamicForm/components/dividerComponent";
                    import {IDFormFieldInputProps, InputComponent} from @krinopotam/ui-kit/dynamicForm/components/inputComponent";
                    type IComponent = Omit<IDFormFieldDividerProps, 'component'>
                    /** DynamicForm Divider component */
                    export const DividerField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {
                                field1: {label: 'Field 1', component: InputComponent} satisfies IDFormFieldInputProps,
                                divider: {...props, component: DividerComponent} satisfies IDFormFieldDividerProps,
                                field2: {label: 'Field 2', component: InputComponent} satisfies IDFormFieldInputProps,
                            }
                        }
                    />
                    export default DividerField
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof DividerComponent>

type Story = StoryObj<typeof DividerComponent>;
export const WithTitle: Story = {
    args: {
        value: "Divider",
        plain: true
    },
}

export const TitleLeft: Story = {
    args: {
        value: "Divider",
        orientation:'left',
        plain: true
    },
}

export const TitleRight: Story = {
    args: {
        value: "Divider",
        orientation:'right',
        plain: true
    },
}
