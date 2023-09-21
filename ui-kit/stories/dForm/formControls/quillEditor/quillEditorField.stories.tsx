// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import QuillEditorField from "./quillEditorField";
import {componentsCallbacks} from "../_common/componentsCallbacks";

export default {
    title: 'DForm/Controls/QuillEditor',
    component: QuillEditorField,
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
                    import {IDFormFieldQuillEditorProps, QuillEditorComponent} from @krinopotam/ui-kit/dynamicForm/components/quillEditorComponent";
                    type IComponent = Omit<IDFormFieldQuillEditorProps, 'component'>
                    /** DynamicForm QuillEditor component */
                    export const QuillEditorField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: QuillEditorComponent} satisfies IDFormFieldQuillEditorProps}
                        }
                    />
                    export  default QuillEditorField
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof QuillEditorField>;

type Story = StoryObj<typeof QuillEditorField>;

export const Playground: Story = {
    args: {
        label: 'Text editor field',
    },
};

export const Callbacks: Story = {
    args: {
        label: 'Text editor field',
        ...componentsCallbacks
    },
};

