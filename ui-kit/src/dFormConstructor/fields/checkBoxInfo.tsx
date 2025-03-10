import {CheckSquareOutlined} from '@ant-design/icons';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import React from 'react';
import {CheckboxField, ICheckboxFieldProps} from '@src/dForm/fields/checkbox';

export class CheckBoxInfo extends BaseComponentInfo {
    public override readonly TITLE = 'CheckBox';
    public override readonly CODE = 'checkbox';
    public override readonly CLASS = CheckboxField;
    public override readonly INTERFACE_NAME = 'ICheckboxFieldProps';
    public override readonly ICON = (<CheckSquareOutlined />);

    override getPropsInfo() {
        const {placeholder, ...baseProps} = super.getPropsInfo();
        return {
            ...baseProps,
            indeterminate: 'boolean',
        } satisfies IComponentPropsInfo<ICheckboxFieldProps>;
    }
}
