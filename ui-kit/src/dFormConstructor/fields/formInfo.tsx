import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {DateTimeField} from '@src/dForm/fields/dateTime';
import {IDFormProps} from '@src/dForm';
import {Space} from 'antd';
import {FormOutlined} from '@ant-design/icons';
import React from 'react';
import {IExtTreeNode} from '@src/tree';
import {IBaseFieldProps} from "@src/dForm/fields/base";
import {AnyType} from "@krinopotam/service-types";

export class FormInfo extends BaseComponentInfo {
    public override readonly CODE = 'form';
    public override readonly TITLE = (
        <Space>
            <FormOutlined />
            Form
        </Space>
    );

    public override readonly CLASS = DateTimeField;

    override canHaveChildren(): boolean | string {
        return true;
    }

    override mustHaveParent(): boolean | string {
        return false;
    }

    override getPropsInfo() {
        return {
            id: 'string',
            disabled: 'boolean',
            readOnly: 'boolean',
            unfilledForm: 'boolean',
            confirmChanges: 'boolean',
            formMode: ['view', 'create', 'clone', 'update'],
            colorType: ['', 'info', 'success', 'warning'],
            className: 'string',
            layout: ['horizontal', 'vertical'],
            labelAlign: ['left', 'right'],
            disableDepended: 'boolean',
            tabsHeight: 'number',
            submitConfirmMessage: 'string',
        } satisfies IComponentPropsInfo<IDFormProps>;
    }

    /** @returns field instance props */
    override getProps(): Record<string, unknown> & IDFormProps {
        return {...this.props, formId:this.getId()};
    }

    override getLabel() {
        return 'My form';
    }

    toFormProps(): IDFormProps {
        const result = this.getProps();

        const fieldProps: IDFormProps['fieldsProps'] = {};

        for (const fieldInfo of this.getChildren()) {
            const id = fieldInfo.getId();
            if (!fieldInfo.CLASS) continue;
            fieldProps[id] = {...fieldInfo.getProps() as  IBaseFieldProps<AnyType, AnyType>};
        }

        result.fieldsProps = fieldProps;
        return result;
    }

    toTreeDataSet(): IExtTreeNode[] {
        const recursive = (fields: BaseComponentInfo[]) => {
            const result: IExtTreeNode[] = [];
            for (const fieldInfo of fields) {
                const id = fieldInfo.getId();
                const title = (
                    <>
                        {fieldInfo.TITLE}: <b>{fieldInfo.getLabel()}</b>
                    </>
                );
                const isLeaf = !fieldInfo.canHaveChildren() || undefined;

                const node: IExtTreeNode = {id, title, fieldInfo, isLeaf};

                if (fieldInfo.getChildren().length > 0) {
                    node['children'] = recursive(fieldInfo.getChildren());
                }

                result.push(node);
            }

            return result;
        };

        return recursive([this]);
    }
}
