import {IBaseField, IBaseFieldProps} from '@src/dForm/fields/base';
import {AnyType} from '@krinopotam/service-types';
import {DModel} from '@src/dForm';
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

    protected readonly componentProps:{[key: string]: unknown} = {};
    private componentId: string = '';
    private children: BaseComponentInfo[] = [];

    constructor(props: {componentId: string}) {
        this.componentId = props.componentId;
        this.setComponentLabel(props.componentId);
    }

    /** @returns true if field can have any children fields or fieldInfo code if field can have children only with same code */
    canHaveChildren(): boolean | string {
        return false;
    }

    /** @returns field props info */
    getComponentPropsInfo(): IComponentPropsInfo<AnyType> {
        throw new Error('Method getFieldPropsInfo must be implemented in derived class');
    }

    /** @returns field instance id */
    getComponentId(): string {
        return this.componentId;
    }

    /** @param id field instance id */
    setComponentId(id: string) {
        this.componentId = id;
    }

    /** @returns field instance label */
    getComponentLabel(): string | React.ReactNode | undefined {
        return (this.getComponentProps().label ?? this.getComponentId()) as string;
    }

    setComponentLabel(label: string){
        this.componentProps['label'] = label;
    }

    /** @returns field instance props */
    getComponentProps(): IBaseFieldProps<AnyType, AnyType> | Record<string, unknown> {
        return {...this.componentProps, component: this.CLASS};
    }

    getChildren() {
        return this.children;
    }

    setChildren(children: BaseComponentInfo[]) {
        this.children = children;
    }

    addChild(fieldInfo: BaseComponentInfo) {
        this.children.push(fieldInfo);
    }

    removeChild(fieldInfo: BaseComponentInfo) {
        this.children = this.children.filter(child => child !== fieldInfo);
    }

    moveChild(fieldInfo: BaseComponentInfo, index: number) {
        this.children.splice(index, 0, fieldInfo);
    }

    getChildById(id: string, recursive: boolean = true): BaseComponentInfo | undefined {
        const recursiveSearch = (fields: BaseComponentInfo[], searchId: string) => {
            for (const fieldInfo of fields) {
                if (fieldInfo.getComponentId() === searchId) return fieldInfo;
                if (recursive && fieldInfo.getChildren().length > 0) return recursiveSearch(fieldInfo.getChildren(), searchId);
            }
            return undefined;
        };

        return recursiveSearch(this.getChildren(), id);
    }
}
