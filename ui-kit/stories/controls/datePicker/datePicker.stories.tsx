// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import {DatePicker} from "@src/datePicker";


export default {
    title: 'Controls/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof DatePicker>

type Story = StoryObj<typeof DatePicker>;
export const Date_: Story = {
    args: {
        //value:"11.04.2023"
    },
}

export const Time: Story = {
    args: {
        mode:'time'
    },
}

export const TimeWithFormat: Story = {
    args: {
        mode:'time',
        format:'HH ч. mm мин.'
    },
}

export const DateWithTime: Story = {
    args: {
        mode:'dateTime'
    },
}

export const DateWithMinutes: Story = {
    args: {
        mode:'dateTime',
        timeMode:'minutes'
    },
}

export const Week: Story = {
    args: {
        mode:'week',
    },
}

export const Month: Story = {
    args: {
        mode:'month',
    },
}

export const MonthWithFormat: Story = {
    args: {
        mode:'month',
        format:'YYYY-MM'
    },
}

export const Quarter: Story = {
    args: {
        mode:'quarter',
    },
}

export const QuarterWithFormat: Story = {
    args: {
        mode:'quarter',
        format:'Q квартал'
    },
}

export const Year: Story = {
    args: {
        mode:'year',
    },
}


