import {AddElementToArray} from '@krinopotam/js-helpers/helpersObjects/addElementToArray';
import type {AnyType} from '@krinopotam/service-types';
import type {DModel} from '@src/dForm';
import type {IBaseField, IBaseFieldProps} from '@src/dForm/fields/base';
import React from 'react';
import {GetNanoId} from '@krinopotam/js-helpers/helpersString/getNanoId';
import {Space} from 'antd';

export type IPropsType = 'string' | 'number' | 'boolean' | 'fieldIds' | string[];

export type IComponentPropsInfo<TFieldProps> = {id?: 'string'} & {
    [K in keyof TFieldProps]?: IPropsType;
};

export class BaseComponentInfo {
    public readonly CODE: string = 'base';
    public readonly ICON: React.ReactNode = undefined;
    public readonly TITLE: string | React.ReactNode = 'base';
    public readonly CLASS: (new (fieldName: string, fieldProps: AnyType, model: DModel, parent?: IBaseField) => IBaseField) | null = null;
    public readonly INTERFACE_NAME: string = 'IBaseFieldProps';
    /** Tree node ID of the field*/
    public readonly NODE_ID: string = '';

    protected props: {[key: string]: unknown} = {};
    protected id: string = '';
    protected label: React.ReactNode | string = '';
    protected children: BaseComponentInfo[] = [];
    private parent: BaseComponentInfo | undefined;
    private root: BaseComponentInfo | undefined;

    constructor(params?: {id: string; label?: React.ReactNode | string}) {
        this.NODE_ID = GetNanoId();
        if (params) {
            this.id = params.id;
            this.label = params.label ?? '';
        }
    }

    /** @returns true if field can be child of the specified parent */
    canHaveParent(parent?: BaseComponentInfo) {
        return parent?.CODE === 'form' || parent?.CODE === 'tab' || parent?.CODE === 'inlineGroup';
    }

    /** @returns true if field can be a parent of the specified child. If child is not specified, returns true if field potentially can have children */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    canHaveChild(_child?: BaseComponentInfo) {
        return false;
    }

    /** @returns field props info */
    getPropsInfo(): IComponentPropsInfo<AnyType> {
        return {
            id: 'string',
            label: 'string',
            placeholder: 'string',
            tooltip: 'string',
            width: 'string',
            defaultValue: 'string',
            readOnly: 'boolean',
            disabled: 'boolean',
            hidden: 'boolean',
            nonEditable: 'boolean',
            dependsOn: 'fieldIds',
            itemClassName: 'string',
            className: 'string',
            autoHeightResize: 'boolean',
            autoFocus: 'boolean',
            requiredMark: 'boolean',
        } satisfies IComponentPropsInfo<IBaseFieldProps<AnyType, AnyType>>;
    }

    getTitleForList() {
        return (
            <Space>
                {this.ICON}
                {this.TITLE}
            </Space>
        );
    }

    getTitleForTree() {
        let label = this.getLabel() || ' - ';
        if (typeof label === 'string' && label.length > 20) label = `${label.slice(0, 20)}...`;
        return (
            <>
                {this.ICON} {this.getId()}: <b>{label}</b>
            </>
        );
    }

    /** @returns field instance id */
    getId(): string {
        return this.id;
    }

    /** @param id field instance id */
    setId(id: string) {
        this.id = id;
    }

    /** @returns field instance label */
    getLabel(): React.ReactNode | string | undefined {
        return this.label;
    }

    setLabel(label: string) {
        this.label = label;
        this.props['label'] = label;
    }

    /** @returns field instance props */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getProps(_selectedField?: BaseComponentInfo): IBaseFieldProps<AnyType, AnyType> | Record<string, unknown> {
        return {component: this.CLASS, label: this.getLabel(), ...this.props};
    }

    /** Set component props */
    setProps(props: IBaseFieldProps<AnyType, AnyType> | Record<string, unknown>) {
        const {component, ...fieldProps} = props;
        this.label = fieldProps.label as string;
        this.props = fieldProps;
    }

    /* get component single prop */
    getProp(name: string) {
        if (name === 'id') return this.getId();
        if (name === 'label') return this.getLabel();
        return this.getProps()[name];
    }

    /** Set component single prop */
    setProp(name: string, val: unknown) {
        if (name === 'id') this.setId(val as string);
        else {
            if (name === 'label') this.setLabel(val as string);
            this.props[name] = val;
        }
    }

    clearChildren() {
        this.children = [];
    }

    getParent() {
        return this.parent;
    }

    setParent(parent: BaseComponentInfo | undefined) {
        this.parent = parent;
    }

    getRoot() {
        return this.parent ? this.root : this;
    }

    setRoot(root: BaseComponentInfo | undefined) {
        this.root = root;
    }

    getChildren() {
        return this.children;
    }

    addChild(fieldInfo: BaseComponentInfo, target?: BaseComponentInfo, pos: 'bottom' | 'top' | 'below' | 'above' = 'bottom') {
        if (!this.canHaveChild(fieldInfo) || !fieldInfo.canHaveParent(this)) {
            console.warn("Field can't have this type of children", this, fieldInfo);
            return;
        }

        fieldInfo.setParent(this);
        fieldInfo.setRoot(this.getRoot());
        this.children = AddElementToArray(this.children, fieldInfo, target, pos);
    }

    removeChild(fieldInfo: BaseComponentInfo, recursive?: boolean) {
        const recursiveRemove = (fields: BaseComponentInfo[]) => {
            this.children = this.children.filter(child => child.getId() !== fieldInfo.getId());

            if (!recursive) return;
            for (const field of fields) field.removeChild(fieldInfo, recursive);
        };

        recursiveRemove(this.getChildren());
        fieldInfo.setParent(undefined);
        fieldInfo.setRoot(undefined);
    }

    removeFromTree() {
        if (this.parent) {
            this.parent?.removeChild(this);
        } else {
            this.setParent(undefined);
            this.setRoot(undefined);
        }
    }

    validateProps(name: string, val: unknown) {
        if (name === 'id') {
            const error = this.validateId(val as string);
            if (error) return error;
        }

        return '';
    }

    protected validateId(id: string):string | undefined {
        const recursiveSearch = (fields: BaseComponentInfo[], searchId: string) => {
            for (const field of fields) {
                if (field === this) continue;
                if (field.getId() === searchId) return true;
                if (recursiveSearch(field.getChildren(), searchId)) return true;
            }

            return false;
        };

        if (recursiveSearch(this.root?.children ?? [], id)) return 'ID is not unique';
    }

    moveChild(fieldInfo: BaseComponentInfo, index: number) {
        this.children.splice(index, 0, fieldInfo);
    }

    getChildById(id: string, recursive: boolean = true): BaseComponentInfo | undefined {
        const recursiveSearch = (fields: BaseComponentInfo[], searchId: string) => {
            for (const fieldInfo of fields) {
                if (fieldInfo.getId() === searchId) return fieldInfo;
                if (recursive && fieldInfo.getChildren().length > 0) return recursiveSearch(fieldInfo.getChildren(), searchId);
            }
            return undefined;
        };

        return recursiveSearch(this.getChildren(), id);
    }
}
