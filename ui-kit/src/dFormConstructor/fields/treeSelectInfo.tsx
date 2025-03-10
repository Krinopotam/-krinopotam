import {UnorderedListOutlined} from '@ant-design/icons';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import React from 'react';
import {ITreeSelectFieldProps, TreeSelectField} from '@src/dForm/fields/treeSelect';

export class TreeSelectInfo extends BaseComponentInfo {
    public override readonly TITLE = 'Tree Select';
    public override readonly CODE = 'treeSelect';
    public override readonly CLASS = TreeSelectField;
    public override readonly INTERFACE_NAME = 'ITreeSelectFieldProps';
    public override readonly ICON = (<UnorderedListOutlined />);

    override getPropsInfo() {
        const {...baseProps} = super.getPropsInfo();
        return {
            ...baseProps,
            allowClear: 'boolean',
            animation: 'boolean',
            autoClearSearchValue: 'boolean',
            bordered: 'boolean',
            buttonsIconsOnly: 'boolean',
            buttonsPosition: ['center', 'left', 'right'],
            buttonsSize: ['large', 'middle', 'small'],
            confirmDelete: 'boolean',
            debounce: 'number',
            defaultExpandAll: 'boolean',
            dropdownClassName: 'string',
            dropdownMatchSelectWidth: 'boolean',
            fetchMode: ['onLoad', 'onUse', 'onUseForce'],
            filterTreeNode: 'boolean',
            groupsMode: 'boolean',
            headerLabel: 'string',
            listHeight: 'number',
            listItemHeight: 'number',
            maxCount: 'number',
            maxTagCount: 'number',
            maxTagPlaceholder: 'string',
            maxTagTextLength: 'number',
            minSearchLength: 'number',
            multiple: 'boolean',
            noCacheFetchedData: 'boolean',
            nodeDeleteMessage: 'string',
            placement: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
            selectNewNode: 'boolean',
            showAction: ['focus', 'click'],
            showArrow: 'boolean',
            showCheckedStrategy: ['all', 'parent', 'child'],
            showSearch: 'boolean',
            size: ['large', 'middle', 'small'],
            sortOnChange: 'boolean',
            treeCheckable: 'boolean',
            treeCheckStrictly: 'boolean',
            treeDefaultExpandAll: 'boolean',
            treeLine: 'boolean',
            virtual: 'boolean',
            valueType: ['key', 'labeledValue', 'node'],
        } satisfies IComponentPropsInfo<ITreeSelectFieldProps>;
    }
}
