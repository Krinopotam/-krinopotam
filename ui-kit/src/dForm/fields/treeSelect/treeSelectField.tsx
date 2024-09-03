import {BaseField, IBaseFieldProps,} from "@src/dForm/fields/base/baseField";
import React from "react";
import {TreeSelectFieldRender} from "@src/dForm/fields/treeSelect/treeSelectFieldRender";
import {ITreeSelectProps, ITreeSelectValues} from "@src/treeSelect";

export interface ITreeSelectFieldOnlyProps extends IBaseFieldProps<TreeSelectField> {
    /** Default value */
    value?: ITreeSelectValues | string;

    onReady?: (field: TreeSelectField) => void;
}

export type ITreeSelectFieldProps = ITreeSelectFieldOnlyProps & Omit<ITreeSelectProps, 'placeholder' | 'value' | 'onReady'>


export class TreeSelectField extends BaseField<ITreeSelectFieldProps> {
    protected render() {
        return <TreeSelectFieldRender field={this} />
    }
}
