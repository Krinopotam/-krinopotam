import {BaseField, IBaseField, IBaseFieldProps} from '@src/dForm/fields/base';
import {AnyType} from '@krinopotam/service-types';
import {DModel} from '@src/dForm';

export type IPropsType = 'string' | 'number' | 'boolean' | string[];

export type IFieldPropsInfo<TFieldProps> = {
    id: 'string';
} & {
    [K in keyof TFieldProps]?: IPropsType;
};

export class BaseFieldInfo {
    private readonly fieldProps: IBaseFieldProps<AnyType, AnyType> = {component: BaseField};
    private fieldId: string = '';

    canHaveChildren() {
        return false;
    }

    getFieldClass(): new (fieldName: string, fieldProps: AnyType, model: DModel, parent?: IBaseField) => IBaseField {
        throw new Error('Method getFieldClass must be implemented in derived class');
    }

    getFieldPropsInfo(): IFieldPropsInfo<AnyType> {
        throw new Error('Method getFieldPropsInfo must be implemented in derived class');
    }

    getFieldId(): string {
        return this.fieldId;
    }

    setFieldId(id: string) {
        this.fieldId = id;
    }

    getFieldProps(): IBaseFieldProps<AnyType, AnyType> {
        return {...this.fieldProps, component: this.getFieldClass()};
    }

    getFieldLabel() {
        return this.getFieldProps().label ?? this.getFieldId()
    }
}
