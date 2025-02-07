import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {INumberFieldProps, NumberField} from '@src/dForm/fields/number';
import {Space} from "antd";
import {FieldNumberOutlined} from "@ant-design/icons";
import React from "react";

export class NumberInfo extends BaseComponentInfo {
    public override readonly CODE = 'number';
    public override readonly TITLE = (
        <Space>
            <FieldNumberOutlined />
            Number input
        </Space>
    );
    public override readonly CLASS = NumberField;

    override getComponentPropsInfo() {
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
        } satisfies IComponentPropsInfo<INumberFieldProps>;
    }
}
