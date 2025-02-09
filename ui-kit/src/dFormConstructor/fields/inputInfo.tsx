import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {IInputFieldProps, InputField} from '@src/dForm/fields/input';
import {FieldStringOutlined} from '@ant-design/icons';
import React from 'react';
import {Space} from 'antd';

export class InputInfo extends BaseComponentInfo {
    public override readonly CODE = 'input';
    public override readonly TITLE = (
        <Space>
            <FieldStringOutlined />
            Input
        </Space>
    );
    public override readonly CLASS = InputField;

    override getPropsInfo() {
        const baseProps = super.getPropsInfo()
        return {
            ...baseProps,
            showCount: 'boolean',
            maxLength: 'number',
        } satisfies IComponentPropsInfo<IInputFieldProps>;
    }
}
