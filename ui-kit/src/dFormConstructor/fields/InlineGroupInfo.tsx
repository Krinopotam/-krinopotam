import {SplitCellsOutlined} from '@ant-design/icons';
import {AnyType} from '@krinopotam/service-types';
import {IDFormFieldsProps} from '@src/dForm';
import {IBaseFieldProps} from '@src/dForm/fields/base';
import {IInlineGroupFieldProps, InlineGroupField} from '@src/dForm/fields/inlineGroup';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {Space} from 'antd';
import React from 'react';

export class InlineGroupInfo extends BaseComponentInfo {
    public override readonly CODE = 'inlineGroup';
    public override readonly TITLE = (
        <Space>
            <SplitCellsOutlined />
            Inline group
        </Space>
    );
    public override readonly CLASS = InlineGroupField;

    override canHaveChildren(): boolean | string {
        return true;
    }

    override getPropsInfo() {
        return {
            id: 'string',
            label: 'string',
        } satisfies IComponentPropsInfo<IInlineGroupFieldProps>;
    }

    /** @returns field instance props */
    getProps(): IInlineGroupFieldProps | Record<string, unknown> {
        const fieldProps: IDFormFieldsProps = {};
        for (const fieldInfo of this.getChildren()) {
            const id = fieldInfo.getId();
            if (!fieldInfo.CLASS) continue;
            fieldProps[id] = {...(fieldInfo.getProps() as IBaseFieldProps<AnyType, AnyType>)};
        }
        return {component: this.CLASS, fieldsProps: fieldProps} satisfies IInlineGroupFieldProps;
    }
}
