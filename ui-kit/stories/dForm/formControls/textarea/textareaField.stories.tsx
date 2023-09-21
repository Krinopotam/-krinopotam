// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import TextAreaField from "./textAreaField";
import {componentsCallbacks} from "../_common/componentsCallbacks";

export default {
    title: 'DForm/Controls/TextArea',
    component: TextAreaField,
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
                    import {IDFormFieldTextAreaProps, TextAreaComponent} from @krinopotam/ui-kit/dynamicForm/components/textAreaComponent";
                    type IComponent = Omit<IDFormFieldTextAreaProps, 'component'>
                    /** DynamicForm Textarea component */
                    export const TextAreaField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: TextAreaComponent} satisfies IDFormFieldTextAreaProps}
                        }
                    />
                    export default TextAreaField
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof TextAreaField>;

type Story = StoryObj<typeof TextAreaField>;

export const Playground: Story = {
    args: {
        label: 'TextArea field',
    },
};

export const Callbacks: Story = {
    args: {
        label: 'TextArea field',
        ...componentsCallbacks
    },
};

