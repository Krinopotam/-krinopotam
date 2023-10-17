import { BaseField, IBaseFieldProps } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { IDFormFieldsProps } from '../../../dForm';
export interface IInlineGroupProps extends IBaseFieldProps<InlineGroupField> {
    fieldsProps: IDFormFieldsProps;
}
export declare class InlineGroupField extends BaseField<IInlineGroupProps> {
    initChildrenFields(): [InlineGroupField['fieldsMap'], InlineGroupField['rootFields']];
    protected render(): React.JSX.Element;
    renderField(): React.ReactNode;
    getFieldsMap(): Record<string, import("../../../dForm/fields/base/baseField").IBaseField>;
    getRootFields(): Record<string, import("../../../dForm/fields/base/baseField").IBaseField>;
    getValue(): undefined;
    setValue(): void;
    setDisabled(value: boolean, noEvents?: boolean, noRerender?: boolean): void;
    setReadOnly(value: boolean, noEvents?: boolean, noRerender?: boolean): void;
}
