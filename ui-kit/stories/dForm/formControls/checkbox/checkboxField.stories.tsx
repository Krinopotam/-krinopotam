// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import CheckboxField from "./checkboxField";
import TextareaField from "../textarea/textareaField";
import {componentsCallbacks} from "../_common/componentsCallbacks";

export default {
    title: 'DForm/Components/CheckboxComponent',
    component: CheckboxField,
    tags: ['autodocs'],
    parameters: {
        docs: {source: {code: null}}
    },
} satisfies Meta<typeof CheckboxField>

type Story = StoryObj<typeof TextareaField>;

export const Playground: Story = {
    args: {
        label: 'Checkbox field',
        requiredMark: true
    },
}

export const Callbacks: Story = {
    args: {
        label: 'Text area field',
        callbacks: componentsCallbacks
    },
};
