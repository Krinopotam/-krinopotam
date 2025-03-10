import {UnorderedListOutlined} from '@ant-design/icons';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import React from 'react';
import {ISelectFieldProps, SelectField} from '@src/dForm/fields/select';

export class SelectInfo extends BaseComponentInfo {
    public override readonly TITLE = 'Select';
    public override readonly CODE = 'select';
    public override readonly CLASS = SelectField;
    public override readonly INTERFACE_NAME = 'ISelectFieldProps';
    public override readonly ICON = (<UnorderedListOutlined />);

    override getPropsInfo() {
        const {...baseProps} = super.getPropsInfo();
        return {
            ...baseProps,
            autoClearSearchValue: 'boolean',
            defaultActiveFirstOption: 'boolean',
            direction: ['ltr', 'rtl'],
            filterOption: 'boolean',
            labelInValue: 'boolean',
            listHeight: 'number',
            listItemHeight: 'number',
            maxCount: 'number',
            mode: ['combobox', 'multiple', 'tags'],
            optionFilterProp: 'string',
            optionLabelProp: 'string',
            placement: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
            virtual: 'boolean',
            //TODO: Add dataSet editor
        } satisfies IComponentPropsInfo<ISelectFieldProps>;
    }
}
