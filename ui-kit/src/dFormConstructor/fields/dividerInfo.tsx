import {LineOutlined} from '@ant-design/icons';
import {DividerField, IDividerFieldProps} from '@src/dForm/fields/divider';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import React from 'react';

export class DividerInfo extends BaseComponentInfo {
    public override readonly CODE = 'divider';
    public override readonly CLASS = DividerField;
    public override readonly INTERFACE_NAME = 'IDividerFieldProps';
    public override readonly ICON = (<LineOutlined />);
    public override readonly TITLE = 'Divider';

    override getPropsInfo() {
        return {
            id: 'string',
            label: 'string',
            plain: 'boolean',
            dashed: 'boolean',
            type: ['vertical', 'horizontal'],
            orientation: ['center', 'left', 'right'],
            orientationMargin: 'string',
            width: 'string',
            hidden: 'boolean',
            dependsOn: 'fieldIds',
            className: 'string',
            containerClassName: 'string',
        } satisfies IComponentPropsInfo<IDividerFieldProps>;
    }
}
