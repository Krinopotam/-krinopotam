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

    override canHaveChildren(): boolean | string {
        return true;
    }

    override shouldHaveParent(): boolean | string {
        return 'tabs';
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
}
