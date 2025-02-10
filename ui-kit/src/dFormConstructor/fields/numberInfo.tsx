import {FieldNumberOutlined} from '@ant-design/icons';
import {INumberFieldProps, NumberField} from '@src/dForm/fields/number';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {Space} from 'antd';
import React from 'react';

export class NumberInfo extends BaseComponentInfo {
    public override readonly CODE = 'number';
    public override readonly CLASS = NumberField;
    public override readonly INTERFACE_NAME = 'INumberFieldProps';
    public override readonly TITLE = (
        <Space>
            <FieldNumberOutlined />
            Number
        </Space>
    );

    override getPropsInfo() {
        const baseProps = super.getPropsInfo();
        return {
            ...baseProps,
            controls: 'boolean',
            decimalSeparator: 'string',
            precision: 'number',
            step: 'number',
            stringMode: 'boolean',
            prefixCls: 'string',
        } satisfies IComponentPropsInfo<INumberFieldProps>;
    }
}
