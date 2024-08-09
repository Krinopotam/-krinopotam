// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import DateTimeComponent from './dateTimeComponent';
import {fn} from "@storybook/test";

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
                    import {DForm} from @krinopotam/ui-kit/dForm";
                    import {DateTimeField, IDateTimeFieldProps} from @krinopotam/ui-kit/dForm/fields/dateTime/dateTimeField";
                    type IComponent = IDateTimeFieldProps;
                    /** DForm DateTime field */
                    export const DateTimeComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: DateTimeField}}
                        }
                    />
                    export default DateTimeComponent
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof DateTimeComponent>;

type Story = StoryObj<typeof DateTimeComponent>;
export const Date_: Story = {
    args: {
        label: 'Date field',
        width: 200,
        onReadyStateChanged: fn()
    },
};

export const Time: Story = {
    args: {
        label: 'Time field',
        mode: 'time',
        width: 200,
    },
};

export const DateTime: Story = {
    args: {
        label: 'DateTime field',
        mode: 'dateTime',
        width: 200,
    },
};

export const Month: Story = {
    args: {
        label: 'Month field',
        mode: 'month',
        width: 200,
    },
};

export const Quarter: Story = {
    args: {
        label: 'Decade field',
        mode: 'quarter',
        width: 200,
    },
};

export const Year: Story = {
    args: {
        label: 'Year field',
        mode: 'year',
        width: 200,
    },
};
