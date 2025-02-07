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

    override getComponentPropsInfo() {
        return {
            id: 'string',
        } satisfies IComponentPropsInfo<IDFormProps>;
    }

    /** @returns field instance props */
    override getComponentProps(): Record<string, unknown> & IDFormProps {
        return {...this.componentProps};
    }

    override getComponentLabel() {
        return 'My form';
    }

    toFormProps(): IDFormProps {
        const result = this.getComponentProps();

        const fieldProps: IDFormProps['fieldsProps'] = {};

        for (const fieldInfo of this.getChildren()) {
            const id = fieldInfo.getComponentId();
            if (!fieldInfo.CLASS) continue;
            fieldProps[id] = {...fieldInfo.getComponentProps() as  IBaseFieldProps<AnyType, AnyType>};
        }

        result.fieldsProps = fieldProps;
        return result;
    }

    toTreeDataSet(): IExtTreeNode[] {
        const recursive = (fields: BaseComponentInfo[]) => {
            const result: IExtTreeNode[] = [];
            for (const fieldInfo of fields) {
                const id = fieldInfo.getComponentId();
                const title = (
                    <>
                        {fieldInfo.TITLE}: [{fieldInfo.getComponentLabel()}]
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
