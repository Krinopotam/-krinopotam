// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import AutoUpdateCustomField from "./autoUpdateCustomField";


export default {
    title: 'DForm/Advanced Examples/Auto update custom field',
    component: AutoUpdateCustomField,
    tags: ['autodocs'],
    //excludeStories:/.*/,
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
                    import {CustomComponent, IDFormFieldCustomProps} from @krinopotam/ui-kit/dynamic-form/components/customComponent";
                    import {InputComponent} from @krinopotam/ui-kit/dynamic-form/components/inputComponent";
                    import {IDFormFieldCheckBoxProps} from @krinopotam/ui-kit/dynamic-form/components/checkboxComponent";
                    type IComponent = Omit<IDFormFieldCheckBoxProps, 'component' | 'callbacks'>
                    /** DynamicForm Custom component */
                    export const AutoUpdateCustomField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {
                                field1: {label: "Enter value", component: InputComponent},
                                field2: {...props, component: CustomComponent, callbacks: {onRender: MyComponent}} as IDFormFieldCustomProps,
                            }
                        }
                        callbacks={{
                            onFieldValueChanged: (_fieldName, _value, _prevValue, formApi) => {
                                const inputValue = formApi.model.getFieldValue("field1") as string
                                formApi.model.setFieldValue("field2", inputValue, true)
                            }
                        }}
                    />
                    export default AutoUpdateCustomField
                    const MyComponent = (value: string): React.ReactNode => {
                        return <h3>Entered value: &ldquo;<span style={{color: 'red'}}>{value}</span>&rdquo;</h3>
                    }
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof AutoUpdateCustomField>

type Story = StoryObj<typeof AutoUpdateCustomField>;
export const Playground: Story = {
    args: {
    },
}
