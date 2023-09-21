import React, { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio, Tag } from 'antd';

type RequiredMark = boolean | 'optional' | 'customize';

const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
    <>
        {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
        {label}
    </>
);

const App: React.FC = () => {
    return (
        <Form
            layout="horizontal"
        >
            <Form.Item label="Field A" required tooltip="This is a required field">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item
                label="Field B"
                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
            >
                <Input placeholder="input placeholder" />
            </Form.Item>
        </Form>
    );
};

export default App;