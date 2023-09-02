import type {Meta, StoryObj} from '@storybook/react';
import TextareaField from "./textareaField";
import {componentsCallbacks} from "../_common/componentsCallbacks";

export default {
    component: TextareaField,
    title: 'DForm/Components/TextAreaComponent',
    parameters: {
        docs: {source: {code: null,},},
    },
} as Meta<typeof TextareaField>;

type Story = StoryObj<typeof TextareaField>;

//👇 Throws a type error it the args don't match the component props
export const Playground: Story = {
    args: {
        label: 'Text area field',
    },
};

export const Callbacks: Story = {
    args: {
        label: 'Text area field',
        callbacks: componentsCallbacks
    },
};

