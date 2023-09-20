// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import DividerField from "./dividerField";
import React from "react";


export default {
    title: 'DForm/Controls/Divider',
    component: DividerField,
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
                    import {IDFormFieldCustomProps, CustomComponent} from @krinopotam/ui-kit/dynamic-form/components/customComponent";
                    type IComponent = Omit<IDFormFieldCustomProps, 'component'>
                    /** DynamicForm Custom component */
                    export const CustomField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: CustomComponent}}
                        }
                    />
                    export default CustomField
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof DividerField>

type Story = StoryObj<typeof DividerField>;
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
