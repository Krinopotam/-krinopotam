import {SplitCellsOutlined} from '@ant-design/icons';
import {AnyType} from '@krinopotam/service-types';
import {IDFormFieldsProps} from '@src/dForm';
import {IBaseFieldProps} from '@src/dForm/fields/base';
import {IInlineGroupFieldProps, InlineGroupField} from '@src/dForm/fields/inlineGroup';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import React from 'react';
import {setChildrenProps} from '@src/dFormConstructor/renders/fieldsTree/tools/setChildrenProps';

export class InlineGroupInfo extends BaseComponentInfo {
    public override readonly TITLE = 'Inline group';
    public override readonly CODE = 'inlineGroup';
    public override readonly CLASS = InlineGroupField;
    public override readonly INTERFACE_NAME = 'IInlineGroupFieldProps';
    public override readonly ICON = (<SplitCellsOutlined />);
    /** @returns true if field can be a parent of the specified child. If child is not specified, returns true if field potentially can have children */
    override canHaveChild(child?: BaseComponentInfo) {
        return child?.CODE !== 'tab';
    }

    override getPropsInfo() {
        return {
            id: 'string',
            width: 'string',
            readOnly: 'boolean',
            disabled: 'boolean',
            hidden: 'boolean',
            dependsOn: 'fieldIds',
            itemClassName: 'string',
            className: 'string',
            autoHeightResize: 'boolean',
        } satisfies IComponentPropsInfo<IInlineGroupFieldProps>;
    }

    override setLabel() {
        return void 0;
    }

    override getLabel() {
        return undefined;
    }

    override getTitleForTree(): React.JSX.Element {
        return (
            <>
                {this.ICON} {this.getId()};
            </>
        );
    }

    /** @returns field instance props */
    override getProps(_selectedField?: BaseComponentInfo): IInlineGroupFieldProps | Record<string, unknown> {
        const fieldProps: IDFormFieldsProps = {};
        for (const fieldInfo of this.getChildren()) {
            const id = fieldInfo.getId();
            if (!fieldInfo.CLASS) continue;
            fieldProps[id] = {...(fieldInfo.getProps(_selectedField) as IBaseFieldProps<AnyType, AnyType>)};
        }
        return {component: this.CLASS, fieldsProps: fieldProps, ...this.props} satisfies IInlineGroupFieldProps;
    }

    override setProps(fieldProps: IInlineGroupFieldProps) {
        const {component, fieldsProps, ...props} = fieldProps;
        this.props = props;
        this.label = fieldProps.label;
        setChildrenProps(this, fieldsProps);
    }
}
