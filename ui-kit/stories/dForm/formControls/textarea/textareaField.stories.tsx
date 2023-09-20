// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import TextareaField from "./textareaField";
import {componentsCallbacks} from "../_common/componentsCallbacks";

export default {
    title: 'DForm/Controls/TextArea',
    component: TextareaField,
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
                    import {IDFormFieldTextAreaProps, TextAreaComponent} from @krinopotam/ui-kit/dynamic-form/components/textAreaComponent";
                    type IComponent = Omit<IDFormFieldTextAreaProps, 'component'>
                    /** DynamicForm Textarea component */
                    export const TextareaField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: TextAreaComponent}}
                        }
                    />
                    export default TextareaField
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof TextareaField>;

type Story = StoryObj<typeof TextareaField>;

export const Playground: Story = {
    args: {
        label: 'TextArea field',
    },
};

export const Callbacks: Story = {
    args: {
        label: 'TextArea field',
        callbacks: componentsCallbacks
    },
};

