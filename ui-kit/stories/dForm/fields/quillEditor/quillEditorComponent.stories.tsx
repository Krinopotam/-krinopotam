// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import QuillEditorComponent from "./quillEditorComponent";

export default {
    title: 'DForm/Fields/QuillEditor',
    component: QuillEditorComponent,
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
                    import {DForm} from @krinopotam/ui-kit/dForm";
                    import {IDFormFieldProps} from @krinopotam/ui-kit/dForm";
                    import {QuillEditorField} from @krinopotam/ui-kit/dForm/fields/quillEditor/quillEditorField";
                    type IComponent = IDFormFieldProps;
                    /** DForm QuillEditor component */
                    export const QuillEditorComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: QuillEditorField}}
                        }
                    />
                    export  default QuillEditorComponent
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof QuillEditorComponent>;

type Story = StoryObj<typeof QuillEditorComponent>;

export const Playground: Story = {
    args: {
        label: 'Text editor field',
    },
};
