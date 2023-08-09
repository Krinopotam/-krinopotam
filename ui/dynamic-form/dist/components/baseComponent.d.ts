import React from 'react';
import { IDFormApi } from '../hooks/api';
import { IDFormFieldCheckBoxProps } from './checkboxComponent';
import { IDFormFieldDateTimeProps } from './dateTimeComponent';
import { IDFormFieldDragAndDropProps } from './dragAndDropComponent';
import { IDFormFieldInputProps } from './inputComponent';
import { IDFormFieldLinkProps } from './linkComponent';
import { IDFormFieldNumberProps } from './numberComponent';
import { IDFormFieldPasswordProps } from './passwordComponent';
import { IDFormFieldSelectProps } from './selectComponent';
import { IDFormFieldSwitchProps } from './switchComponent';
import { IDFormFieldTextAreaProps } from './textAreaComponent';
import { DModel } from "../dModel";
export interface IDFormFieldProps {
    component: React.FC<IDFormComponentProps>;
    helpClass?: string;
    label?: string | React.ReactNode;
    placeholder?: string;
    tab?: string;
    inlineGroup?: string;
    default?: unknown;
    hidden?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    dependsOn?: string[];
    width?: string | number;
    autoFocus?: boolean;
    callbacks?: IDFormFieldCallbacks;
}
export interface IDFormFieldCallbacks {
    onValueChanged?: (value: unknown, prevValue: unknown, model: DModel) => void;
    onTouchedStateChanged?: (state: boolean, model: DModel) => void;
    onDirtyStateChanged?: (state: boolean, model: DModel) => void;
    onErrorChanged?: (error: string, model: DModel) => void;
    onHiddenStateChanged?: (state: boolean, model: DModel) => void;
    onReadOnlyStateChanged?: (state: boolean, model: DModel) => void;
    onLabelChanged?: (label: React.ReactNode, prevLabel: React.ReactNode, model: DModel) => void;
    onDisabledStateChanged?: (state: boolean, model: DModel) => void;
    onReady?: (model: DModel) => void;
    onValidated?: (value: unknown, error: string, isSubmit: boolean, model: DModel) => void;
}
export type IDFormFieldsProps = Record<string, IDFormFieldProps>;
export type IDFormAnyFieldProps = IDFormFieldProps | IDFormFieldCheckBoxProps | IDFormFieldDateTimeProps | IDFormFieldDragAndDropProps | IDFormFieldInputProps | IDFormFieldLinkProps | IDFormFieldNumberProps | IDFormFieldPasswordProps | IDFormFieldSelectProps | IDFormFieldSwitchProps | IDFormFieldTextAreaProps;
export interface IDFormComponentProps {
    fieldName: string;
    fieldProps: IDFormFieldProps;
    formApi: IDFormApi;
}
export declare const BaseComponent: ({ fieldName, fieldProps, formApi, noLabel }: IDFormComponentProps & {
    noLabel?: boolean | undefined;
}) => React.JSX.Element;
