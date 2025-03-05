import {SplitCellsOutlined} from '@ant-design/icons';
import {AnyType} from '@krinopotam/service-types';
import {IDFormFieldsProps} from '@src/dForm';
import {IBaseFieldProps} from '@src/dForm/fields/base';
import {IInlineGroupFieldProps, InlineGroupField} from '@src/dForm/fields/inlineGroup';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {Space} from 'antd';
import React from 'react';
import {setChildrenProps} from '@src/dFormConstructor/renders/fieldsTree/tools/setChildrenProps';

export class InlineGroupInfo extends BaseComponentInfo {
    public override readonly CODE = 'inlineGroup';
    public override readonly CLASS = InlineGroupField;
    public override readonly INTERFACE_NAME = 'IInlineGroupFieldProps';
    public override readonly TITLE = (
        <Space>
            <SplitCellsOutlined />
            Inline group
        </Space>
    );

    /** @returns true if field can be parent of the specified child. If child is not specified, returns true if field potentially can have children */
    canHaveChild (child?:BaseComponentInfo) {
        return child?.CODE !== 'tab';
    }

    override getPropsInfo() {
        return {
            id: 'string',
            label: 'string',
        } satisfies IComponentPropsInfo<IInlineGroupFieldProps>;
    }

    /** @returns field instance props */
    override getProps(): IInlineGroupFieldProps | Record<string, unknown> {
        const fieldProps: IDFormFieldsProps = {};
        for (const fieldInfo of this.getChildren()) {
            const id = fieldInfo.getId();
            if (!fieldInfo.CLASS) continue;
            fieldProps[id] = {...(fieldInfo.getProps() as IBaseFieldProps<AnyType, AnyType>)};
        }
        return {component: this.CLASS, fieldsProps: fieldProps} satisfies IInlineGroupFieldProps;
    }

    override setProps(fieldProps: IInlineGroupFieldProps) {
        const {component, fieldsProps, ...props} = fieldProps;
        this.props = props;
        this.label = fieldProps.label;
        setChildrenProps(this, fieldsProps);
    }
}
