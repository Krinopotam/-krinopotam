import {SwitcherOutlined} from '@ant-design/icons';
import {SwitchField} from '@src/dForm/fields/switch';
import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {Space} from 'antd';
import React from 'react';

export class SwitchInfo extends BaseComponentInfo {
    public override readonly CODE = 'switch';
    public override readonly CLASS = SwitchField;
    public override readonly INTERFACE_NAME = 'ISwitchFieldProps';
    public override readonly TITLE = (
        <Space>
            <SwitcherOutlined />
            Switch
        </Space>
    );

    override getPropsInfo() {
        return super.getPropsInfo();
    }
}
