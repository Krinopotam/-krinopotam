// noinspection DuplicatedCode
import type {Meta, StoryObj} from '@storybook/react';
import {Button, IButtonProps} from '@src/button';
import React from 'react';
import {Divider, Space} from 'antd';

export default {
    title: 'Controls/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

const onClickHandler: IButtonProps['onClick'] = () => alert('The button has clicked');

const commonArgs: Story['args'] = {
    onClick: onClickHandler,
};
export const ButtonColors: Story = {
    args: {...commonArgs},

    render: args => (
        <Space>
            <Button {...args}>Button</Button>
            <Divider type="vertical"></Divider>
            <Button {...args} type="primary" colorType="info">
                Button
            </Button>
            <Button {...args} type="primary" colorType="success">
                Button
            </Button>
            <Button {...args} type="primary" colorType="warning">
                Button
            </Button>
            <Button {...args} type="primary" colorType="danger">
                Button
            </Button>
        </Space>
    ),
};

export const ButtonTypes: Story = {
    args: {...commonArgs},

    render: args => (
        <Space>
            <Button {...args} type="default">
                Button
            </Button>
            <Button {...args} type="primary">
                Button
            </Button>
            <Button {...args} type="link">
                Button
            </Button>
            <Button {...args} type="dashed">
                Button
            </Button>
            <Button {...args} type="text">
                Button
            </Button>
        </Space>
    ),
};

export const ButtonStates: Story = {
    args: {...commonArgs},

    render: args => (
        <Space>
            <Button {...args}>Button</Button>
            <Button {...args} disabled>
                Button
            </Button>
            <Button {...args} loading>
                Button
            </Button>
            <Button {...args} ghost>
                Button
            </Button>
        </Space>
    ),
};

export const ButtonSizes: Story = {
    args: {...commonArgs},

    render: args => (
        <Space>
            <Button {...args} size="small">
                {' '}
                Button{' '}
            </Button>
            <Button {...args} size="middle">
                {' '}
                Button{' '}
            </Button>
            <Button {...args} size="large">
                {' '}
                Button{' '}
            </Button>
        </Space>
    ),
};

export const ButtonShapes: Story = {
    args: {...commonArgs},

    render: args => (
        <Space>
            <Button {...args} shape="default">
                Button
            </Button>
            <Button {...args} shape="round">
                Button
            </Button>
            <Button {...args} shape="circle">
                Button
            </Button>
        </Space>
    ),
};
