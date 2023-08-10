import { IDFormComponentProps, IDFormFieldProps } from './baseComponent';
import { ITreeSelectProps, ITreeSelectValue } from '@krinopotam/ui-treeselect';
import React from 'react';
export type { ITreeSelectValue, ITreeSelectCallbacks, ITreeSelectNode, ITreeSelectPlainValue, ITreeSelectDeletePromise, ITreeSelectSourcePromise } from '@krinopotam/ui-treeselect';
type IDFormFieldTreeSelectProps_ = ITreeSelectProps & IDFormFieldProps;
export interface IDFormFieldTreeSelectProps extends IDFormFieldTreeSelectProps_ {
    default?: ITreeSelectValue | string;
    onCustomChange?: (value: unknown) => void;
}
interface IDFormTreeSelectComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldTreeSelectProps;
}
export declare const TreeSelectComponent: ({ formApi, fieldName, fieldProps }: IDFormTreeSelectComponentProps) => React.JSX.Element;
