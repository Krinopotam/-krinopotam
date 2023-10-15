// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import TextAreaComponent from "./textAreaComponent";

export default {
    title: 'DForm/Fields/TextArea',
    component: TextAreaComponent,
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
                    import {TextAreaField} from @krinopotam/ui-kit/dForm/fields/textArea/textAreaField";
                    import {IDFormFieldProps} from @krinopotam/ui-kit/dForm";
                    type IComponent = IDFormFieldProps
                    /** DForm Textarea component */
                    export const TextAreaComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: TextAreaField}}
                        }
                    />
                    export default TextAreaComponent
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof TextAreaComponent>;

type Story = StoryObj<typeof TextAreaComponent>;

export const Playground: Story = {
    args: {
        label: 'TextArea field',
    },
};

