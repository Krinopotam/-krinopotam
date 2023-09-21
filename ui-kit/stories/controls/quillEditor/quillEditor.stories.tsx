// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import {QuillEditor} from "@src/quillEditor";


export default {
    title: 'Controls/QuillEditor',
    component: QuillEditor,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof QuillEditor>

type Story = StoryObj<typeof QuillEditor>;

export const Default: Story = {
    args: {
        placeholder:'Input text',
    },
}

export const ToolbarConfig: Story = {
    args: {
        toolbar:[['bold', 'italic', 'underline'], ['link']]
    },
}