import {AddElementToArray} from '@krinopotam/js-helpers/helpersObjects/addElementToArray';
import {AnyType} from '@krinopotam/service-types';
import {DModel} from '@src/dForm';
import {IBaseField, IBaseFieldProps} from '@src/dForm/fields/base';
import React from 'react';

export type IPropsType = 'string' | 'number' | 'boolean' | string[];

export type IComponentPropsInfo<TFieldProps> = {
    id: 'string';
} & {
    [K in keyof TFieldProps]?: IPropsType;
};

export class BaseComponentInfo {
    public readonly CODE: string = 'base';
    public readonly TITLE: string | React.ReactNode = 'base';
    public readonly CLASS: (new (fieldName: string, fieldProps: AnyType, model: DModel, parent?: IBaseField) => IBaseField) | null = null;

    protected readonly componentProps: {[key: string]: unknown} = {};
    private id: string = '';
    private children: BaseComponentInfo[] = [];
    private parent: BaseComponentInfo | undefined;

    constructor(props: {componentId: string}) {
        this.id = props.componentId;
        this.setComponentLabel(props.componentId);
    }

    /** @returns true if field can have any children fields or fieldInfo code if field can have children only with same code */
    canHaveChildren(): boolean | string {
        return false;
    }

    /** @returns true if field must have parent or the fieldInfo code that can only be a parent for this field */
    mustHaveParent(): boolean | string {
        return true;
    }

    /** @returns field props info */
    getComponentPropsInfo(): IComponentPropsInfo<AnyType> {
        throw new Error('Method getFieldPropsInfo must be implemented in derived class');
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
    getComponentLabel(): string | React.ReactNode | undefined {
        return (this.getComponentProps().label ?? this.getId()) as string;
    }

    setComponentLabel(label: string) {
        this.componentProps['label'] = label;
    }

    /** @returns field instance props */
    getComponentProps(): IBaseFieldProps<AnyType, AnyType> | Record<string, unknown> {
        return {...this.componentProps, component: this.CLASS};
    }

    getParent() {
        return this.parent;
    }

    setParent(parent: BaseComponentInfo | undefined) {
        this.parent = parent;
    }

    getChildren() {
        return this.children;
    }

    addChild(fieldInfo: BaseComponentInfo, target?: BaseComponentInfo, pos: 'bottom' | 'top' | 'below' | 'above' = 'bottom') {
        if (this.canHaveChildren() !== true && this.canHaveChildren() !== fieldInfo.CODE) {
            console.warn("Field can't have this type of children");
            return;
        }

        fieldInfo.setParent(this);
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
    }

    removeFromTree() {
        this.parent?.removeChild(this);
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
