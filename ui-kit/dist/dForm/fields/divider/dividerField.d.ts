import { BaseField, IBaseFieldProps } from '../../../dForm/fields/base/baseField';
import React from 'react';
export interface IDividerFieldProps extends IBaseFieldProps<DividerField> {
    value?: string | React.ReactNode;
    plain?: boolean;
    dashed?: boolean;
    orientation?: "center" | "left" | "right";
    orientationMargin?: string | number;
}
export declare class DividerField extends BaseField<IDividerFieldProps> {
    protected render(): React.JSX.Element;
    renderField(): React.ReactNode;
}
