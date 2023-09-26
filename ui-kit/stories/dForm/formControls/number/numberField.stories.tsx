// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import NumberField from "./numberField";

export default {
    title: 'DForm/Controls/Number',
    component: NumberField,
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
                    import {IDFormFieldNumberProps, NumberComponent} from @krinopotam/ui-kit/dynamicForm/components/numberComponent";
                    type IComponent = Omit<IDFormFieldNumberProps, 'component'>
                    /** DynamicForm Number component */
                    export const NumberField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: NumberComponent} satisfies IDFormFieldNumberProps }
                        }/>
                    export default NumberField
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof NumberField>

type Story = StoryObj<typeof NumberField>;

export const Playground: Story = {
    args: {
        label: 'Number field',
    },
}
