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
            dataSet: [
                {
                    id: 'string',
                    title: 'string',
                    disabled: 'boolean',
                    isLeaf: 'boolean',
                    selectable: 'boolean',
                    isGroup: 'boolean',
                },
            ],
            debounce: 'number',
            defaultExpandAll: 'boolean',
            dropdownClassName: 'string',
            dropdownMatchSelectWidth: 'boolean',
            editFormProps: 'formModal',
            editGroupFormProps: 'formModal',
            fetchMode: ['onLoad', 'onUse', 'onUseForce'],
            fieldNames: {
                key: 'string',
                title: 'string',
                children: 'string',
                parent: 'string',
                isLeaf: 'string',
                isGroup: 'string',
                disabled: 'string',
                selectable: 'string',
            },
            filterTreeNode: 'boolean',
            groupsMode: 'boolean',
            headerLabel: 'string',
            loading: 'boolean',
            listHeight: 'number',
            listItemHeight: 'number',
            listItemScrollOffset: 'number',
            maxCount: 'number',
            maxTagCount: 'number',
            maxTagPlaceholder: 'string',
            maxTagTextLength: 'number',
            minSearchLength: 'number',
            multiple: 'boolean',
            noCacheFetchedData: 'boolean',
            nodeDeleteMessage: 'string',
            placement: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
            popupMatchSelectWidth: 'string',
            popupClassName: 'string',
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
            treeExpandAction: ['click', 'doubleClick'],
            treeLine: 'boolean',
            treeNodeFilterProp: 'string',
            treeNodeLabelProp: 'string',
            variant: ['outlined', 'borderless', 'filled', 'underlined'],
            virtual: 'boolean',
            valueType: ['key', 'labeledValue', 'node'],
        } satisfies IComponentPropsInfo<ITreeSelectFieldProps>;
    }
}
