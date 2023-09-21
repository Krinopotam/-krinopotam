// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import CustomField from "./customField";
import React from "react";


export default {
    title: 'DForm/Controls/Custom',
    component: CustomField,
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
                    import {IDFormFieldCustomProps, CustomComponent} from @krinopotam/ui-kit/dynamicForm/components/customComponent";
                    type IComponent = Omit<IDFormFieldCustomProps, 'component'>
                    /** DynamicForm Custom component */
                    export const CustomField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: CustomComponent} satisfies IDFormFieldCustomProps}
                        }
                    />
                    export default CustomField
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof CustomField>

type Story = StoryObj<typeof CustomField>;
export const Playground: Story = {
    args: {
        label: 'Custom field',
        value: <h3>Any <span style={{color:'red'}}>react</span> component or <span style={{color:'blue'}}>string</span> </h3>
    },
}
