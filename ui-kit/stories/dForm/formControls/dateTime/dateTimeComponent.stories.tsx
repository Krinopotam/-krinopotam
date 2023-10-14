// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import DateTimeComponent from "./dateTimeComponent";


export default {
    title: 'DForm/Fields/DateTime',
    component: DateTimeComponent,
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
                    import {IDFormFieldDateTimeProps, DateTimeComponent} from @krinopotam/ui-kit/dynamicForm/components/dateTimeComponent";
                    type IComponent = Omit<IDFormFieldDateTimeProps, 'component'>
                    /** DynamicForm DateTime component */
                    export const DateTimeField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: DateTimeComponent} satisfies IDFormFieldDateTimeProps}
                        }
                    />
                    export default DateTimeField
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof DateTimeComponent>

type Story = StoryObj<typeof DateTimeComponent>;
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
