import './css/antdAnimation.css';
import { IDFormBaseCallbacks } from './dModel';
import { IFormButtons } from 'src/buttonsRow';
import { IDFormApi } from './hooks/api';
import React, { CSSProperties } from 'react';
import { TPromise } from '@krinopotam/service-types';
import { IRuleType } from './validators/baseValidator';
import { ColProps } from "antd";
import { FormLabelAlign } from "antd/es/form/interface";
import { RequiredMark } from "antd/es/form/Form";
import { IColorType } from "../button/button";
import { IDFormFieldsProps } from "../dForm/index";
export interface IDFormProps extends IDFormCallbacks {
    apiRef?: unknown;
    formId?: string;
    buttons?: IFormButtons | null;
    className?: string;
    formStyle?: CSSProperties;
    containerClassName?: string;
    containerStyle?: CSSProperties;
    contentIndent?: number;
    dataSet?: IDFormDataSet;
    parentDataSet?: IDFormDataSet;
    fieldsProps?: IDFormFieldsProps;
    colorType?: IColorType;
    labelCol?: ColProps;
    wrapperCol?: ColProps;
    labelAlign?: FormLabelAlign;
    layout?: 'horizontal' | 'vertical';
    formMode?: IDFormMode;
    readOnly?: boolean;
    disableDepended?: boolean;
    tabsHeight?: number;
    unfilledForm?: boolean;
    validationRules?: IDFormValidationRules;
    confirmChanges?: boolean;
    submitConfirmMessage?: React.ReactNode;
    requiredMark?: RequiredMark;
    arrowsButtonsSelection?: boolean;
}
export type IDFormCallbacks = IDFormBaseCallbacks<IDFormApi>;
export type IDFormMode = 'view' | 'create' | 'update' | 'clone' | 'delete';
export interface IDFormDataSet extends Record<string, unknown> {
    id?: string | number;
}
export type IDFormDataSourcePromise = TPromise<{
    data: Record<string, unknown>;
}, {
    message: string;
    code: number;
}>;
export type IDFormValidationRules = Record<string, IRuleType[]>;
export declare const DForm: (props: IDFormProps) => React.JSX.Element;
