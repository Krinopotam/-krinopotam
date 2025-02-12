import {SplitCellsOutlined} from '@ant-design/icons';
import {AnyType} from '@krinopotam/service-types';
import {IDFormFieldsProps} from '@src/dForm';
import {IBaseFieldProps} from '@src/dForm/fields/base';
import {IInlineGroupFieldProps, InlineGroupField} from '@src/dForm/fields/inlineGroup';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {Space} from 'antd';
import React from 'react';
import {getFieldInfoClassByClassName} from '@src/dFormConstructor/renders/fieldsTree/tools/getFieldInfoClassByClassName';

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
        const {fieldsProps, ...props} = fieldProps;
        this.props = props;
        this.children = [];
        if (typeof fieldsProps !== 'object') return;
        for (const key in fieldsProps) {
            const fProps = fieldsProps[key];
            if (!fProps.component) continue;
            const componentClassName = typeof fProps.component === 'function' ? fProps.component.name : String(fProps.component);
            const fieldInfoClass = getFieldInfoClassByClassName(componentClassName);
            if (!fieldInfoClass) continue;
            const fieldInfo = new fieldInfoClass({id: key, label: fProps.label});
            fieldInfo.setProps(fProps);
            this.addChild(fieldInfo);
        }
    }
}
