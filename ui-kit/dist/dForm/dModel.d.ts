import { IDFormDataSet, IDFormDataSourcePromise, IDFormMode, IDFormProps } from './dForm';
import { BaseValidator } from './validators/baseValidator';
import React from 'react';
import { IBaseField } from '../dForm/fields/base/baseField';
import { IDFormFieldsProps } from '../dForm/index';
import { IError, TPromise } from '@krinopotam/service-types';
export interface IDFormBaseCallbacks<T> {
    onTabHiddenStateChanged?: (tabName: string, state: boolean, api: T) => void;
    onTabReadOnlyStateChanged?: (tabName: string, state: boolean, api: T) => void;
    onTabDisabledStateChanged?: (tabName: string, state: boolean, api: T) => void;
    onFormDirtyStateChanged?: (state: boolean, api: T) => void;
    onFormReadOnlyStateChanged?: (state: boolean, api: T) => void;
    onFormDisabledStateChanged?: (state: boolean, api: T) => void;
    onFormInit?: (api: T) => void;
    onFormReadyStateChanged?: (state: boolean, api: T) => boolean | void;
    onFormValidated?: (values: Record<string, unknown>, errors: Record<string, string>, isSubmit: boolean, api: T) => void;
    onFormHasErrors?: (values: Record<string, unknown>, errors: Record<string, unknown>, api: T) => void;
    onFormHasNoErrors?: (values: Record<string, unknown>, api: T) => boolean | void;
    onDataFetch?: (api: T) => IDFormDataSourcePromise | undefined;
    onDataFetchSuccess?: (result: {
        data: Record<string, unknown>;
    }, api: T) => boolean | void;
    onDataFetchError?: (error: IError, api: T) => boolean | void;
    onDataFetchComplete?: (api: T) => void;
    onSubmit?: (values: Record<string, unknown>, api: T) => IDFormSubmitResultPromise | IDFormSubmitResultObject | boolean | void;
    onSubmitValidation?: (values: Record<string, unknown>, errors: Record<string, string | undefined>, api: T) => void;
    onSubmitSuccess?: (values: Record<string, unknown>, resultValues: Record<string, unknown> | undefined, api: T) => boolean | void;
    onSubmitError?: (values: Record<string, unknown>, error: IError, api: T) => boolean | void;
    onSubmitComplete?: (values: Record<string, unknown>, errors: Record<string, string | undefined>, api: T) => boolean | void;
    onDataSetChange?: (dataSet: IDFormDataSet | undefined, api: T) => IDFormDataSet | undefined;
}
export type IDFormModelCallbacks = IDFormBaseCallbacks<DModel>;
export type IDFormSubmitResultPromise = TPromise<{
    data: Record<string, unknown>;
}, IError>;
export type IDFormSubmitResultObject = {
    data?: Record<string, unknown>;
    error?: IError;
};
export declare class DModel {
    private readonly _formId;
    private _formProps;
    private _fieldsMap;
    private _rootFields;
    private _dataSet;
    private _labels;
    private _values;
    private _touched;
    private _dirty;
    private _errors;
    private _hidden;
    private _readOnly;
    private _disabled;
    private _ready;
    private _formDisabled;
    private _formReadOnly;
    private _formDirty;
    private _formReady;
    private _isFormMounted;
    private _formMode;
    private _submitCount;
    private _isSubmitting;
    private _isFetching;
    private _isFetchingFailed;
    private _callbacks;
    private readonly _validator;
    private _formRenderListeners;
    private _formRenderSnapshot;
    constructor(formId: string);
    initModel(formProps: IDFormProps, callbacks: IDFormModelCallbacks): void;
    prepareFieldCollection(fieldsProps: IDFormFieldsProps | undefined, parent?: IBaseField): [DModel['_fieldsMap'], DModel['_rootFields']];
    modifyFieldsProps(fieldsProps: IDFormFieldsProps): IDFormFieldsProps;
    private initFieldsParameters;
    private calculateLockedFields;
    lockDependedFields(field: IBaseField, noEvents?: boolean, noRerender?: boolean): void;
    private isFieldMustBeLocked;
    getFieldsMap(): Record<string, IBaseField>;
    getRootFields(): Record<string, IBaseField>;
    getField(fieldName: string): IBaseField;
    getFormId(): string;
    getFormProps(): IDFormProps;
    getFormLabels(): Record<string, React.ReactNode>;
    getFormValues(): Record<string, unknown>;
    setFormValues(dataSet: IDFormDataSet | undefined, noEvents?: boolean, noRerender?: boolean): void;
    getFormTouchedFields(): Record<string, boolean | undefined>;
    getFormDirtyFields(): Record<string, boolean | undefined>;
    getFormDisabledFields(): Record<string, boolean | undefined>;
    getFormReadOnlyFields(): Record<string, boolean | undefined>;
    getFormHiddenFields(): Record<string, boolean | undefined>;
    getFormReadyFields(): Record<string, boolean | undefined>;
    getFormErrors(): Record<string, string>;
    getFormDataSet(): IDFormDataSet | undefined;
    getValidator(): BaseValidator;
    getModelCallbacks(): IDFormModelCallbacks;
    isFormDirty(): boolean;
    setFormDirty(value: boolean, noEvents?: boolean): void;
    isFormDisabled(): boolean;
    setFormDisabled(value: boolean, noEvents?: boolean, noRerender?: boolean): void;
    isFormReadOnly(): boolean;
    setFormReadOnly(value: boolean, noEvents?: boolean, noRerender?: boolean): void;
    setFormInit(): void;
    isFormReady(): boolean | undefined;
    setFormReady(value: boolean, noEvents?: boolean): void;
    validateForm(noEvents?: boolean, noRerender?: boolean): Record<string, string>;
    isFormSubmitting(): boolean;
    private setFormSubmitting;
    isFormFetching(): boolean;
    private setFormFetching;
    setFormFetchingFailed(value: boolean): void;
    isFormFetchingFailed(): boolean;
    isFormHasError(): boolean;
    isFormMounted(): boolean;
    setFormMounted(value: boolean): void;
    getFormMode(): IDFormMode;
    fetchData(): void;
    submit(onSubmitSuccess?: (values: Record<string, unknown>, result: Record<string, unknown> | undefined, model: DModel) => void, onSubmitError?: (values: Record<string, unknown>, error: IError, model: DModel) => void, onSubmitComplete?: (values: Record<string, unknown>, errors: Record<string, string | undefined>, model: DModel) => void): void;
    getSubmitCount(): number;
    incrementSubmitCount(): void;
    subscribeRenderForm(listener: () => void): () => void;
    emitFormRender(): void;
    getFormRenderSnapshot(): Record<never, never>;
}
