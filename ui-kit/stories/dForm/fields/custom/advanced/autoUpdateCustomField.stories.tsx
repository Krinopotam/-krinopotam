// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import AutoUpdateCustomField from './autoUpdateCustomField';

export default {
    title: 'DForm/Fields/Custom/Auto update custom field',
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
                    import React from 'react';
                    import {DForm} from @krinopotam/ui-kit/dForm';
                    import {IDFormFieldProps} from @krinopotam/ui-kit/dForm';
                    import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
                    import {CustomField} from @krinopotam/ui-kit/dForm/fields/custom/customField';
                    type IComponent = IDFormFieldProps;
                    /** DForm Custom field auto-updating */
                    export const AutoUpdateCustomField = (props: IComponent): React.JSX.Element => (
                        <DForm
                            buttons={null}
                            fieldsProps={{
                                field1: {
                                    label: 'Enter value',
                                    component: InputField,
                                    onValueChanged: (value, prevValue, field) => {
                                        const field2 = field.getModel().getField('field2')
                                        field2.setValue(value);
                                    },
                                } satisfies  IInputFieldProps,
                                field2: {...props, component: CustomField, onRender: MyComponent},
                            }}
                        />
                    );
                    export default AutoUpdateCustomField;
                    const MyComponent = (value: React.ReactNode): React.ReactNode => {
                        return (
                            <h3>
                                Entered value: &ldquo;<span style={{color: 'red'}}>{value}</span>&rdquo;
                            </h3>
                        );
                    };
                `,
            },
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof AutoUpdateCustomField>;

type Story = StoryObj<typeof AutoUpdateCustomField>;
export const Playground: Story = {
    args: {},
};
