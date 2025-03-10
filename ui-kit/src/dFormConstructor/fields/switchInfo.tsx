import {SwitcherOutlined} from '@ant-design/icons';
import {ISwitchFieldProps, SwitchField} from '@src/dForm/fields/switch';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import React from 'react';

export class SwitchInfo extends BaseComponentInfo {
    public override readonly TITLE = 'Switch';
    public override readonly CODE = 'switch';
    public override readonly CLASS = SwitchField;
    public override readonly INTERFACE_NAME = 'ISwitchFieldProps';
    public override readonly ICON = (<SwitcherOutlined />);

    override getPropsInfo() {
        const {placeholder, id, label, ...baseProps} = super.getPropsInfo();
        return {
            id,
            label,
            checkedChildren: 'string',
            unCheckedChildren: 'string',
            loading: 'boolean',
            ...baseProps,
        } satisfies IComponentPropsInfo<ISwitchFieldProps>;
    }
}
