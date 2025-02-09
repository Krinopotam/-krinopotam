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
            Text input
        </Space>
    );
    public override readonly CLASS = InputField;

    override getPropsInfo() {
        return {
            id: 'string',
            label: 'string',
            maxLength: 'number',
            width: 'string',
            placeholder: 'string',
            readOnly: 'boolean',
            disabled: 'boolean',
            hidden: 'boolean',
            tooltip: 'string',
        } satisfies IComponentPropsInfo<IInputFieldProps>;
    }
}
