import { BaseField, IBaseFieldProps } from "../../../dForm/fields/base/baseField";
import React from "react";
import { ITreeSelectProps, ITreeSelectValue } from "../../../treeSelect";
export interface ITreeSelectFieldOnlyProps extends IBaseFieldProps<TreeSelectField> {
    value?: ITreeSelectValue | string;
    onReady?: (field: TreeSelectField) => void;
}
export type ITreeSelectFieldProps = ITreeSelectFieldOnlyProps & Omit<ITreeSelectProps, 'placeholder' | 'value' | 'onReady'>;
export declare class TreeSelectField extends BaseField<ITreeSelectFieldProps> {
    protected render(): React.JSX.Element;
}
