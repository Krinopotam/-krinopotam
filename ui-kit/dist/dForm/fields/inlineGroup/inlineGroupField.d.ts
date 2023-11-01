import { BaseField, IBaseFieldProps } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { IDFormFieldsProps } from '../../../dForm';
export interface IInlineGroupFieldProps extends IBaseFieldProps<InlineGroupField> {
    fieldsProps: IDFormFieldsProps;
}
export declare class InlineGroupField extends BaseField<IInlineGroupFieldProps> {
    initChildrenFields(): [InlineGroupField['fieldsMap'], InlineGroupField['rootFields']];
    protected render(): React.JSX.Element;
    renderField(): React.ReactNode;
    getFieldsMap(): Record<string, import("../../../dForm").IBaseField>;
    getRootFields(): Record<string, import("../../../dForm").IBaseField>;
    getValue(): undefined;
    setValue(): void;
    canHaveValue(): boolean;
    setDisabled(value: boolean, noEvents?: boolean, noRerender?: boolean): void;
    setReadOnly(value: boolean, noEvents?: boolean, noRerender?: boolean): void;
}
