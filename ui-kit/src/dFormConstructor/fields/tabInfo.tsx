import {FolderOutlined} from '@ant-design/icons';
import {AnyType} from '@krinopotam/service-types';
import {IDFormFieldsProps} from '@src/dForm';
import {IBaseFieldProps} from '@src/dForm/fields/base';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {Space} from 'antd';
import React from 'react';
import {setChildrenProps} from '@src/dFormConstructor/renders/fieldsTree/tools/setChildrenProps';

export class TabInfo extends BaseComponentInfo {
    public override readonly CODE = 'tab';
    public override readonly CLASS = null;
    public override readonly INTERFACE_NAME = '';
    public override readonly TITLE = (
        <Space>
            <FolderOutlined />
            Tab
        </Space>
    );

    /** @returns true if field can be moved to the specified parent */
    override canHaveParent(parent?:BaseComponentInfo) {
        return parent?.CODE === 'tabs';
    }

    /** @returns true if field can be parent of the specified child. If child is not specified, returns true if field potentially can have children */
    canHaveChild (child?:BaseComponentInfo) {
        return child?.CODE !== 'tab';
    }

    override getPropsInfo() {
        return {label: 'string'} satisfies IComponentPropsInfo<Record<string, unknown>>;
    }

    /** @returns field instance props */
    override getProps(): IDFormFieldsProps | Record<string, unknown> {
        const fieldProps: IDFormFieldsProps = {};

        for (const fieldInfo of this.getChildren()) {
            const id = fieldInfo.getId();
            if (!fieldInfo.CLASS) continue;
            fieldProps[id] = {...(fieldInfo.getProps() as IBaseFieldProps<AnyType, AnyType>)};
        }
        return fieldProps;
    }

    override setProps(fieldsProps: IDFormFieldsProps) {
        setChildrenProps(this, fieldsProps);
    }

/*    override getId(): string {
        const fieldId = super.getId();
        const parentId = this.getParent()?.getId()
        console.log(`${parentId}_${fieldId}`)
        return parentId ? `${parentId}_${fieldId}` : fieldId;
    }*/
}
