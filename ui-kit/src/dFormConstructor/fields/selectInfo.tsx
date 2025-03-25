import {UnorderedListOutlined} from '@ant-design/icons';
import {ISelectFieldProps, SelectField} from '@src/dForm/fields/select';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import React from 'react';

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
            allowClear: 'boolean',
            animation: 'boolean',
            autoClearSearchValue: 'boolean',
            bordered: 'boolean',
            dataSet: [
                {
                    id: 'string',
                    label: 'string',
                    disabled: 'boolean',
                    className: 'string',
                },
            ],
            defaultActiveFirstOption: 'boolean',
            direction: ['ltr', 'rtl'],
            dropdownClassName: 'string',
            dropdownMatchSelectWidth: 'string',
            filterOption: 'boolean',
            labelInValue: 'boolean',
            listHeight: 'number',
            listItemHeight: 'number',
            loading: 'boolean',
            maxCount: 'number',
            maxLength: 'number',
            maxTagCount: 'number',
            maxTagPlaceholder: 'string',
            maxTagTextLength: 'number',
            mode: ['combobox', 'multiple', 'tags'],
            open: 'boolean',
            optionFilterProp: 'string',
            optionLabelProp: 'string',
            placement: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
            popupMatchSelectWidth: 'string',
            searchValue: 'string',
            showAction: ['focus', 'click'],
            showArrow: 'boolean',
            showSearch: 'boolean',
            size: ['large', 'middle', 'small'],
            variant: ['outlined', 'borderless', 'filled', 'underlined'],
            virtual: 'boolean',
        } satisfies IComponentPropsInfo<ISelectFieldProps>;
    }
}
