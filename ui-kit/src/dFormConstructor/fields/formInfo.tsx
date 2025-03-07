import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {IDFormProps} from '@src/dForm';
import {FormOutlined} from '@ant-design/icons';
import React from 'react';
import {IExtTreeNode} from '@src/tree';
import {IBaseFieldProps} from '@src/dForm/fields/base';
import {AnyType, IKey} from '@krinopotam/service-types';
import {setChildrenProps} from '@src/dFormConstructor/renders/fieldsTree/tools/setChildrenProps';
import {getFieldInfoClassByClassName} from '@src/dFormConstructor/renders/fieldsTree/tools/getFieldInfoClassByClassName';

export class FormInfo extends BaseComponentInfo {
    public override readonly CODE = 'form';
    public override readonly CLASS = null;
    public override readonly INTERFACE_NAME = 'IDFormProps';
    public override readonly ICON = (<FormOutlined />);
    public override readonly TITLE = 'Form';

    private readonly fieldsTreeSubscribers = new Set<() => void>();
    private fieldsTreeRerenderSnapshot = {};

    private readonly propsEditorSubscribers = new Set<() => void>();
    private propsEditorRerenderSnapshot = {};

    private readonly formPreviewSubscribers = new Set<() => void>();
    private formPreviewRerenderSnapshot = {};

    /** @returns true if field can be child of the specified parent */
    override canHaveParent() {
        return false;
    }

    /** @returns true if field can be a parent of the specified child. If child is not specified, returns true if field potentially can have children */
    override canHaveChild(child?: BaseComponentInfo) {
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
            submitConfirmMessage: 'string',
        } satisfies IComponentPropsInfo<IDFormProps>;
    }

    /** @returns form props */
    override getProps(): Record<string, unknown> & IDFormProps {
        const result: Record<string, unknown> & IDFormProps = {...this.props, formId: this.getId()};
        const fieldProps: IDFormProps['fieldsProps'] = result.fieldsProps ?? {};

        for (const fieldInfo of this.getChildren()) {
            const id = fieldInfo.getId();
            if (!fieldInfo.CLASS) continue;
            fieldProps[id] = fieldInfo.getProps() as IBaseFieldProps<AnyType, AnyType>;
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
        return 'FORM';
    }

    /** Returns all field ids */
    getAllFieldIds(skip?: Record<string, boolean>) {
        const result: string[] = [];
        const recursive = (fields: BaseComponentInfo[]) => {
            for (const field of fields) {
                if (!skip?.[field.CODE]) result.push(field.getId());
                recursive(field.getChildren());
            }

            return false;
        };

        recursive(this.getChildren());
        return result;
    }

    toTreeDataSet(): IExtTreeNode<{fieldInfo: BaseComponentInfo}>[] {
        const recursive = (fields: BaseComponentInfo[]) => {
            const result: IExtTreeNode<{fieldInfo: BaseComponentInfo}>[] = [];
            for (const fieldInfo of fields) {
                const id = fieldInfo.NODE_ID;
                let label = fieldInfo.getLabel() ?? ' - ';
                if (typeof label === 'string' && label.length > 20) label = `${label.slice(0, 20)}...`;
                const title = fieldInfo.getTitleForTree();
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

    toSource(indent = 2, ts: boolean = true): string {
        const seen = new WeakSet();

        function serialize(value: unknown, depth: number): string {
            if (value === null) return 'null';
            if (value === undefined) return 'undefined';
            if (typeof value === 'string') return `"${value.replace(/"/g, '\\"')}"`;
            if (typeof value === 'number' || typeof value === 'boolean') return String(value);
            if (typeof value === 'bigint') return `${value}n`;
            if (typeof value === 'symbol') return `Symbol(${value.description ?? ''})`;
            if (value instanceof Date) return `new Date(${value.getTime()})`;
            if (value instanceof RegExp) return value.toString();
            if (typeof value === 'function') return value.name;

            if (typeof value !== 'object') return 'undefined';

            if (seen.has(value)) return '/* [Circular] */';
            seen.add(value);

            const pad = ' '.repeat(depth * indent);
            const nextPad = ' '.repeat((depth + 1) * indent);

            if (Array.isArray(value)) {
                const items = value.map(v => serialize(v, depth + 1)).join(', ');
                return `[\n${nextPad}${items}\n${pad}]`;
            }

            if (value instanceof Set) {
                const items = [...value].map(v => serialize(v, depth + 1)).join(', ');
                return `new Set([\n${nextPad}${items}\n${pad}])`;
            }

            if (value instanceof Map) {
                const entries = [...value.entries()].map(([k, v]) => `[${serialize(k, depth + 1)}, ${serialize(v, depth + 1)}]`).join(', ');
                return `new Map([\n${nextPad}${entries}\n${pad}])`;
            }

            let fieldTypeName: string | undefined = '';
            const entries = Object.entries(value)
                .map(([key, val]) => {
                    if (ts && key === 'component') {
                        const fieldInfoClassName = typeof val === 'function' ? val.name : undefined;
                        const fieldInfoClass = getFieldInfoClassByClassName(fieldInfoClassName);
                        if (fieldInfoClass) {
                            const fieldInfo = new fieldInfoClass();
                            fieldTypeName = fieldInfo?.INTERFACE_NAME;
                        }
                    }

                    const safeKey = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(key) ? key : `"${key}"`;
                    return `${safeKey}: ${serialize(val, depth + 1)}`;
                })
                .join(',\n' + nextPad);

            return `{\n${nextPad}${entries}\n${pad}}${fieldTypeName ? ' satisfies ' + fieldTypeName : ''}`;
        }

        return 'const formProps = ' + serialize(this.getProps(), 0);
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

    /* Method for subscription FieldsTree component */
    fieldsTreeSubscribe(callback: () => void) {
        this.fieldsTreeSubscribers.add(callback);
        return () => this.fieldsTreeSubscribers.delete(callback);
    }

    /* method to rerender FieldsTree component */
    emitFieldsTreeRerender() {
        this.fieldsTreeRerenderSnapshot = {}; //refresh snapshot
        this.fieldsTreeSubscribers.forEach(callback => callback());
    }

    /** FieldsTree rerender snapshot*/
    getFieldsTreeRerenderSnapshot() {
        return this.fieldsTreeRerenderSnapshot;
    }

    /* Method for subscription PropsEditor component */
    propsEditorSubscribe(callback: () => void) {
        this.propsEditorSubscribers.add(callback);
        return () => this.propsEditorSubscribers.delete(callback);
    }

    /* method to rerender PropsEditor component */
    emitPropsEditorRerender() {
        this.propsEditorRerenderSnapshot = {}; //refresh snapshot
        this.propsEditorSubscribers.forEach(callback => callback());
    }

    /** PropsEditor rerender snapshot*/
    getPropsEditorRerenderSnapshot() {
        return this.propsEditorRerenderSnapshot;
    }

    /* Method for subscription FormPreview component */
    formPreviewSubscribe(callback: () => void) {
        this.formPreviewSubscribers.add(callback);
        return () => this.formPreviewSubscribers.delete(callback);
    }

    /* method to rerender FormPreview component */
    emitFormPreviewRerender() {
        this.formPreviewRerenderSnapshot = {}; //refresh snapshot
        this.formPreviewSubscribers.forEach(callback => callback());
    }

    /** FormPreview rerender snapshot*/
    getFormPreviewRerenderSnapshot() {
        return this.formPreviewRerenderSnapshot;
    }
}
