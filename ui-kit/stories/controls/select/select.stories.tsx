// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import type {CustomTagProps} from 'rc-select/lib/BaseSelect';
import {Tag} from 'antd';
import {SelectDataSet} from '../../datasets/select';
import {Select} from '@src/select';

export default {
    title: 'Controls/Select',
    component: Select,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

const commonArgs: Story['args'] = {
    dataSet: SelectDataSet,
    style: {width: 400},
    placeholder: 'Select value',
};
export const Default: Story = {
    args: {
        ...commonArgs,
    },
};

export const AllowClear: Story = {
    args: {
        ...commonArgs,
        allowClear: true,
    },
};

export const Preselect: Story = {
    args: {
        ...commonArgs,
        value: '02',
    },
};

export const Multiple: Story = {
    args: {
        ...commonArgs,
        allowClear: true,
        mode: 'multiple',
    },
};

export const MultiplePreselect: Story = {
    args: {
        ...commonArgs,
        allowClear: true,
        mode: 'multiple',
        value: [{id: '01'}, {id: '03'}],
    },
};

export const Tags: Story = {
    args: {
        ...commonArgs,
        allowClear: true,
        mode: 'tags',
    },
};

const tagRender = (props: CustomTagProps) => {
    const {label, value, closable, onClose} = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Tag color="red" onMouseDown={onPreventMouseDown} closable={closable} onClose={onClose} style={{marginRight: 3}}>
            <b>{`${value}. ${label}`}</b>
        </Tag>
    );
};
export const CustomTagRender: Story = {
    args: {
        ...commonArgs,
        allowClear: true,
        mode: 'tags',
        tagRender: tagRender,
    },
};

export const NoBorder: Story = {
    args: {
        ...commonArgs,
        bordered: false,
    },
};

export const Disabled: Story = {
    args: {
        ...commonArgs,
        disabled: true,
    },
};

export const ReadOnly: Story = {
    args: {
        ...commonArgs,
        readOnly: true,
    },
};
