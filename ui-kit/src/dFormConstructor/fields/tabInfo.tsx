import {FolderOutlined} from '@ant-design/icons';
import {AnyType} from '@krinopotam/service-types';
import {IDFormFieldsProps} from '@src/dForm';
import {IBaseFieldProps} from '@src/dForm/fields/base';
import {IInlineGroupFieldProps} from '@src/dForm/fields/inlineGroup';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {Space} from 'antd';
import React from 'react';

export class TabInfo extends BaseComponentInfo {
    public override readonly CODE = 'tab';
    public override readonly TITLE = (
        <Space>
            <FolderOutlined />
            <b>Tab</b>
        </Space>
    );
    public override readonly CLASS = null;

    override canHaveChildren(): boolean | string {
        return true;
    }

    override mustHaveParent(): boolean | string {
        return 'tabsContainer';
    }

    override getComponentPropsInfo() {
        return {
            id: 'string',
        } satisfies IComponentPropsInfo<IInlineGroupFieldProps>;
    }

    /** @returns field instance props */
    getComponentProps(): IDFormFieldsProps | Record<string, unknown> {
        const fieldProps: IDFormFieldsProps = {};

        for (const fieldInfo of this.getChildren()) {
            const id = fieldInfo.getId();
            if (!fieldInfo.CLASS) continue;
            fieldProps[id] = {...(fieldInfo.getComponentProps() as IBaseFieldProps<AnyType, AnyType>)};
        }
        return fieldProps;
    }
}
