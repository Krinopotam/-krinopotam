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
        <Space direction={"vertical"}>
            <Space>
                <Button {...args} color="default" variant="solid">Button</Button>
                <Button {...args} color="default" variant="outlined">Button</Button>
                <Button {...args} color="default" variant="dashed">Button</Button>
                <Button {...args} color="default" variant="filled">Button</Button>
                <Button {...args} color="default" variant="text">Button</Button>
                <Button {...args} color="default" variant="link">Button</Button>
            </Space>
            <Space>
                <Button {...args} color="primary" variant="solid">Button</Button>
                <Button {...args} color="primary" variant="outlined">Button</Button>
                <Button {...args} color="primary" variant="dashed">Button</Button>
                <Button {...args} color="primary" variant="filled">Button</Button>
                <Button {...args} color="primary" variant="text">Button</Button>
                <Button {...args} color="primary" variant="link">Button</Button>
            </Space>
            <Space>
                <Button {...args} color="danger" variant="solid">Button</Button>
                <Button {...args} color="danger" variant="outlined">Button</Button>
                <Button {...args} color="danger" variant="dashed">Button</Button>
                <Button {...args} color="danger" variant="filled">Button</Button>
                <Button {...args} color="danger" variant="text">Button</Button>
                <Button {...args} color="danger" variant="link">Button</Button>
            </Space>
            <Space>
                <Button {...args} color="warning" variant="solid">Button</Button>
                <Button {...args} color="warning" variant="outlined">Button</Button>
                <Button {...args} color="warning" variant="dashed">Button</Button>
                <Button {...args} color="warning" variant="filled">Button</Button>
                <Button {...args} color="warning" variant="text">Button</Button>
                <Button {...args} color="warning" variant="link">Button</Button>
            </Space>
            <Space>
                <Button {...args} color="success" variant="solid">Button</Button>
                <Button {...args} color="success" variant="outlined">Button</Button>
                <Button {...args} color="success" variant="dashed">Button</Button>
                <Button {...args} color="success" variant="filled">Button</Button>
                <Button {...args} color="success" variant="text">Button</Button>
                <Button {...args} color="success" variant="link">Button</Button>
            </Space>
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
