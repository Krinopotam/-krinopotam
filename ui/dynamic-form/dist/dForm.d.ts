import './css/antdAnimation.css';
import { IDFormSubmitResultObject, IDFormSubmitResultPromise } from './dModel';
import { IFormButtons } from '@krinopotam/ui-buttons-row';
import { IDFormApi } from './hooks/api';
import React from 'react';
import { TPromise } from '@krinopotam/service-types';
import { IDFormFieldsProps } from './components/baseComponent';
import { IRuleType } from './validators/baseValidator';
export interface IDFormProps {
    apiRef?: unknown;
    formId?: string;
    buttons?: IFormButtons | null;
    callbacks?: IDFormCallbacks;
    className?: string;
    containerClassName?: string;
    contentIndent?: number;
    dataSet?: IDFormDataSet;
    parentDataSet?: IDFormDataSet;
    fieldsProps?: IDFormFieldsProps;
    formType?: IFormType;
    labelCol?: Record<string, unknown>;
    layout?: 'horizontal' | 'vertical';
    formMode?: IDFormMode;
    readOnly?: boolean;
    noAutoHideDependedFields?: boolean;
    tabsProps?: IDFormTabsProps;
    unfilledForm?: boolean;
    validationRules?: IDFormFieldValidationRules;
    wrapperCol?: Record<string, unknown>;
    confirmChanges?: boolean;
    submitConfirmMessage?: React.ReactNode;
}
export type IFormType = 'primary' | 'confirm' | 'info' | 'success' | 'error' | 'warning';
export interface IDFormTabsProps {
    height?: number;
}
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
export type IDFormFieldValidationRules = Record<string, IRuleType[]>;
export interface IDFormCallbacks {
    onFieldValueChanged?: (fieldName: string, value: unknown, prevValue: unknown, formApi: IDFormApi) => boolean | void;
    onFieldTouchedStateChanged?: (fieldName: string, state: boolean, formApi: IDFormApi) => boolean | void;
    onFieldDirtyStateChanged?: (fieldName: string, state: boolean, formApi: IDFormApi) => boolean | void;
    onFieldErrorChanged?: (fieldName: string, error: string, formApi: IDFormApi) => boolean | void;
    onFieldHiddenStateChanged?: (fieldName: string, state: boolean, formApi: IDFormApi) => boolean | void;
    onTabHiddenStateChanged?: (tabName: string, state: boolean, formApi: IDFormApi) => boolean | void;
    onFieldReadOnlyStateChanged?: (fieldName: string, state: boolean, formApi: IDFormApi) => boolean | void;
    onTabReadOnlyStateChanged?: (tabName: string, state: boolean, formApi: IDFormApi) => boolean | void;
    onFieldDisabledStateChanged?: (fieldName: string, state: boolean, formApi: IDFormApi) => boolean | void;
    onTabDisabledStateChanged?: (tabName: string, state: boolean, formApi: IDFormApi) => boolean | void;
    onFieldReady?: (fieldName: string, formApi: IDFormApi) => boolean | void;
    onFormDirtyStateChanged?: (state: boolean, formApi: IDFormApi) => boolean | void;
    onFormReadOnlyStateChanged?: (state: boolean, formApi: IDFormApi) => boolean | void;
    onFormInit?: (formApi: IDFormApi) => boolean | void;
    onFormReadyStateChanged?: (state: boolean, formApi: IDFormApi) => boolean | void;
    onFieldValidated?: (fieldName: string, value: unknown, error: string, isSubmit: boolean, formApi: IDFormApi) => boolean | void;
    onFormValidated?: (values: Record<string, unknown>, errors: Record<string, string>, isSubmit: boolean, formApi: IDFormApi) => boolean | void;
    onFormHasErrors?: (values: Record<string, unknown>, errors: Record<string, unknown>, formApi: IDFormApi) => boolean | void;
    onFormHasNoErrors?: (values: Record<string, unknown>, formApi: IDFormApi) => boolean | void;
    onDataFetch?: (formApi: IDFormApi) => IDFormDataSourcePromise | undefined;
    onDataFetchSuccess?: (result: {
        data: Record<string, unknown>;
    }, formApi: IDFormApi) => boolean | void;
    onDataFetchError?: (message: string, code: number, formApi: IDFormApi) => boolean | void;
    onDataFetchComplete?: (formApi: IDFormApi) => boolean | void;
    onSubmitValidation?: (values: Record<string, unknown>, errors: Record<string, string | undefined>, formApi: IDFormApi) => void | boolean;
    onSubmit?: (values: Record<string, unknown>, formApi: IDFormApi) => IDFormSubmitResultPromise | IDFormSubmitResultObject | boolean | void;
    onSubmitSuccess?: (values: Record<string, unknown>, resultValues: Record<string, unknown> | undefined, formApi: IDFormApi) => boolean | void;
    onSubmitError?: (values: Record<string, unknown>, message: string, code: number, formApi: IDFormApi) => boolean | void;
    onSubmitComplete?: (values: Record<string, unknown>, errors: Record<string, string | undefined>, formApi: IDFormApi) => boolean | void;
    onDataSetChange?: (dataSet: IDFormDataSet | undefined, FormApi: IDFormApi) => IDFormDataSet | undefined;
}
export declare const DForm: (props: IDFormProps) => React.JSX.Element;
