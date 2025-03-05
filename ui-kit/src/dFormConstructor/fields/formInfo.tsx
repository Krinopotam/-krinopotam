import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {IDFormProps} from '@src/dForm';
import {Space} from 'antd';
import {FormOutlined} from '@ant-design/icons';
import React from 'react';
import {IExtTreeNode} from '@src/tree';
import {IBaseFieldProps} from '@src/dForm/fields/base';
import {AnyType, IKey} from '@krinopotam/service-types';
import {setChildrenProps} from '@src/dFormConstructor/renders/fieldsTree/tools/setChildrenProps';

export class FormInfo extends BaseComponentInfo {
    public override readonly CODE = 'form';
    public override readonly CLASS = null;
    public override readonly INTERFACE_NAME = 'IDFormProps';
    public override readonly TITLE = (
        <Space>
            <FormOutlined />
            Form
        </Space>
    );

    /** @returns true if field can be child of the specified parent */
    canHaveParent() {
        return false;
    }

    /** @returns true if field can be a parent of the specified child. If child is not specified, returns true if field potentially can have children */
    canHaveChild(child?: BaseComponentInfo) {
        return child?.CODE !== 'tab';
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

    /** @returns form props */
    override getProps(): Record<string, unknown> & IDFormProps {
        const result: Record<string, unknown> & IDFormProps = {...this.props, formId: this.getId()};

        const fieldProps: IDFormProps['fieldsProps'] = {};

        for (const fieldInfo of this.getChildren()) {
            const id = fieldInfo.getId();
            if (!fieldInfo.CLASS) continue;
            fieldProps[id] = {...(fieldInfo.getProps() as IBaseFieldProps<AnyType, AnyType>)};
        }

        result.fieldsProps = fieldProps;
        return result;
    }

    override setProps(formProps: IDFormProps) {
        const {fieldsProps, ...props} = formProps;
        this.props = props;
        setChildrenProps(this, fieldsProps);
    }

    override getLabel() {
        return 'My form';
    }

    toTreeDataSet(): IExtTreeNode<{fieldInfo: BaseComponentInfo}>[] {
        const recursive = (fields: BaseComponentInfo[]) => {
            const result: IExtTreeNode<{fieldInfo: BaseComponentInfo}>[] = [];
            for (const fieldInfo of fields) {
                const id = fieldInfo.NODE_ID;
                const title = (
                    <>
                        {fieldInfo.TITLE}: <b>{fieldInfo.getLabel()}</b>
                    </>
                );
                const isLeaf = !fieldInfo.canHaveChild() || undefined;

                const node: IExtTreeNode<{fieldInfo: BaseComponentInfo}> = {id, title, fieldInfo, isLeaf};

                if (fieldInfo.getChildren().length > 0) {
                    node['children'] = recursive(fieldInfo.getChildren());
                }

                result.push(node);
            }

            return result;
        };

        return recursive([this]);
    }

    getFieldInfoByNodeId(nodeId: IKey) {
        const recursive = (fields: BaseComponentInfo[]): BaseComponentInfo | undefined => {
            for (const field of fields) {
                if (field.NODE_ID === nodeId) return field;
                const result = recursive(field.getChildren());
                if (result) return result;
            }

            return undefined;
        };

        if (this.NODE_ID === nodeId) return this;
        return recursive(this.getChildren());
    }
}
