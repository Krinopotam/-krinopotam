// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import NumberComponent from "./numberComponent";

export default {
    title: 'DForm/Fields/Number',
    component: NumberComponent,
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
} satisfies Meta<typeof NumberComponent>

type Story = StoryObj<typeof NumberComponent>;

export const Playground: Story = {
    args: {
        label: 'Number field',
    },
}
