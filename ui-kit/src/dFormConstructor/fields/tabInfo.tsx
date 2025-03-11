import {FolderOutlined} from '@ant-design/icons';
import {AnyType} from '@krinopotam/service-types';
import {IDFormFieldsProps} from '@src/dForm';
import {IBaseFieldProps} from '@src/dForm/fields/base';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import React from 'react';
import {setChildrenProps} from '@src/dFormConstructor/renders/fieldsTree/tools/setChildrenProps';

export class TabInfo extends BaseComponentInfo {
    public override readonly TITLE = 'Tab';
    public override readonly CODE = 'tab';
    public override readonly CLASS = null;
    public override readonly INTERFACE_NAME = '';
    public override readonly ICON = (<FolderOutlined />);

    /** @returns true if field can be moved to the specified parent */
    override canHaveParent(parent?: BaseComponentInfo) {
        return parent?.CODE === 'tabs';
    }

    /** @returns true if field can be a parent of the specified child. If child is not specified, returns true if field potentially can have children */
    override canHaveChild(child?: BaseComponentInfo) {
        return child?.CODE !== 'tab';
    }

    override getPropsInfo() {
        return {label: 'string'} satisfies IComponentPropsInfo<Record<string, unknown>>;
    }

    override getTitleForTree(): React.JSX.Element {
        return (
            <>
                {this.ICON} <b>{this.getId()}</b>;
            </>
        );
    }

    override getLabel(): string {
        return this.getId();
    }

    override setLabel(label: string) {
        this.label = label;
        this.id = label;
    }

    /** @returns field instance props */
    override getProps(selectedField?: BaseComponentInfo): IDFormFieldsProps | Record<string, unknown> {
        const fieldProps: IDFormFieldsProps = {};

        for (const fieldInfo of this.getChildren()) {
            const id = fieldInfo.getId();
            if (!fieldInfo.CLASS) continue;
            fieldProps[id] = {...(fieldInfo.getProps(selectedField) as IBaseFieldProps<AnyType, AnyType>)};
        }
        return fieldProps;
    }

    override setProps(fieldsProps: IDFormFieldsProps) {
        setChildrenProps(this, fieldsProps);
    }

    override validateProps(name: string, val: unknown): string {
        if (name === 'label') {
            const error = this.validateLabel(val as string);
            if (error) return error;
        }
        return '';
    }

    private validateLabel(label: string) {
        const parent = this.getParent();
        if (!parent) return '';
        for (const field of parent.getChildren()) {
            if (field === this) continue;
            if (field.getLabel() === label) return 'Tab label is not unique';
        }
    }
}
