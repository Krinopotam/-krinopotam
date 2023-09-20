// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import NumberField from "./numberField";
import {componentsCallbacks} from "../_common/componentsCallbacks";

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
                    import {DForm} from @krinopotam/ui-kit/dynamic-form";
                    import {IDFormFieldNumberProps, NumberComponent} from @krinopotam/ui-kit/dynamic-form/components/numberComponent";
                    type IComponent = Omit<IDFormFieldNumberProps, 'component'>
                    /** DynamicForm Number component */
                    export const NumberField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: NumberComponent}}
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

export const Callbacks: Story = {
    args: {
        label: 'Number field',
        callbacks: componentsCallbacks
    },
};
