// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import {componentsCallbacks} from "../_common/componentsCallbacks";
import DateTimeField from "./dateTimeField";


export default {
    title: 'DForm/Controls/DateTime',
    component: DateTimeField,
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
                    import {IDFormFieldDateTimeProps, DateTimeComponent} from @krinopotam/ui-kit/dynamic-form/components/dateTimeComponent";
                    type IComponent = Omit<IDFormFieldDateTimeProps, 'component'>
                    /** DynamicForm DateTime component */
                    export const DateTimeField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: DateTimeComponent}}
                        }
                    />
                    export default DateTimeField
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof DateTimeField>

type Story = StoryObj<typeof DateTimeField>;
export const Date_: Story = {
    args: {
        label: 'Date field',
        width: 200
    },
}

export const Time: Story = {
    args: {
        label: 'Time field',
        mode: 'time',
        width: 200
    },
}

export const DateTime: Story = {
    args: {
        label: 'DateTime field',
        mode:'dateTime',
        width: 200
    },
}

export const Month: Story = {
    args: {
        label: 'Month field',
        mode: 'month',
        width: 200
    },
}

export const Quarter: Story = {
    args: {
        label: 'Decade field',
        mode: 'quarter',
        width: 200
    },
}

export const Year: Story = {
    args: {
        label: 'Year field',
        mode: 'year',
        width: 200
    },
}


export const Callbacks: Story = {
    args: {
        label: 'DateTime field',
        mode:'dateTime',
        callbacks: componentsCallbacks
    },
};
