// noinspection DuplicatedCode

/**
 * @DynamicFormModel
 * @version 0.0.38.17
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IsPromise} from '@krinopotam/js-helpers';

import {BaseValidator} from './validators/baseValidator';
import React from 'react';
import {IAnyFieldProps, IBaseField} from '@src/dForm/fields/base/baseField';
import {IDFormDataSet, IDFormFieldsProps, IDFormProps} from '@src/dForm/index';
import {IError} from '@krinopotam/service-types';
import {InlineGroupField} from '@src/dForm/fields/inlineGroup/inlineGroupField';
import {IDFormMode} from '@src/dForm/types/dFormTypes';
import {IDFormModelCallbacks, IDFormSubmitResultObject, IDFormSubmitResultPromise} from '@src/dForm/types/dModelTypes';

export class DModel {
    //region Private properties
    /** Form ID */
    private readonly _formId: string;

    /** form properties (immutable clone) */
    private _formProps: IDFormProps = {};

    //region Fields collections
    /** field collection (plain list of all fields in all component tabs, including child fields) */
    private _fieldsMap: Record<string, IBaseField> = {};

    /** root fields collection (only root fields, without children) */
    private _rootFields: Record<string, IBaseField> = {};
    //endregion

    /** the form data set instance */
    private _dataSet: IDFormDataSet | undefined = undefined;

    //region Fields properties
    /** Field labels */
    private _labels: Record<string, React.ReactNode | undefined> = {};

    /** Field values */
    private _values: Record<string, unknown> = {};

    /** Touched field statuses */
    private _touched: Record<string, boolean | undefined> = {};

    /** Dirty field statuses */
    private _dirty: Record<string, boolean | undefined> = {};

    /** Error field statuses */
    private _errors: Record<string, string> = {};

    /** Hidden field statuses */
    private _hidden: Record<string, boolean | undefined> = {};

    /** Read only field statuses */
    private _readOnly: Record<string, boolean | undefined> = {};

    /** Disabled field statuses */
    private _disabled: Record<string, boolean | undefined> = {};

    /** Readiness field statuses (the field is completely initialized, its data is loaded) */
    private _ready: Record<string, boolean | undefined> = {};
    //endregion

    //region Form properties
    /** the form disabled status */
    private _formDisabled = false;

    /** the form read only status */
    private _formReadOnly = false;

    /** the form dirty status */
    private _formDirty = false;

    /** the form ready status */
    private _formReady: boolean | undefined = undefined;

    /** the form component mounted status */
    private _isFormMounted = false;

    /** the current form mode  */
    private _formMode: IDFormMode = 'create';
    //endregion

    /** the number of attempts to submit */
    private _submitCount = 0;

    /** The form is in submitting process now */
    private _isSubmitting = false;

    /** The form is in fetching process now */
    private _isFetching = false;

    /** Is form fetching failed */
    private _isFetchingFailed = false;

    /** callbacks collection */
    private _callbacks: IDFormModelCallbacks = {};

    /** validator instance */
    private readonly _validator: BaseValidator;

    /** form rerender listeners */
    private _formRenderListeners: (() => void)[] = [];

    /** form rerender key snapshot */
    private _formRenderSnapshot: Record<never, never> = {};
    //endregion

    //region Init class
    constructor(formId: string) {
        this._formId = formId;
        this._validator = new BaseValidator();
    }

    initModel(formProps: IDFormProps, callbacks: IDFormModelCallbacks) {
        //const startTime = new Date().getTime();

        this._callbacks = callbacks;

        if (this._formProps === formProps) return;

        this._formProps = formProps;
        this._formMode = formProps.formMode ?? 'create';
        this._formReadOnly = !!formProps.readOnly;

        const prevFieldsMap = this._fieldsMap;
        [this._fieldsMap, this._rootFields] = this.prepareFieldCollection(formProps.fieldsProps);

        const oldDataSet = this.getFormDataSet();
        [this._labels, this._values, this._hidden, this._readOnly, this._disabled] = this.initFieldsParameters(
            this._fieldsMap,
            prevFieldsMap,
            this._values,
            oldDataSet !== formProps.dataSet ? formProps.dataSet : undefined,
            formProps.formMode ?? 'create'
        );

        this._dataSet = formProps.dataSet;

        if (!formProps.disableDepended) this._hidden = this.calculateLockedFields();
        else this._disabled = this.calculateLockedFields();

        this._callbacks.onFormModelInitialized?.(this);

        //const endTime = new Date().getTime();
        //console.log(`dModel init: ${endTime - startTime}ms`);
    }

    /** Instantiate fields classes and prepare fields collections */
    prepareFieldCollection(fieldsProps: IDFormFieldsProps | undefined, parent?: IBaseField): [DModel['_fieldsMap'], DModel['_rootFields']] {
        const fieldsMap: DModel['_fieldsMap'] = {};
        const rootFields: DModel['_rootFields'] = {};
        if (!fieldsProps) return [fieldsMap, rootFields];

        const _fieldsProps = this.modifyFieldsProps(fieldsProps);

        for (const fieldName in _fieldsProps) {
            const fieldProps = _fieldsProps[fieldName];
            if (fieldsMap[fieldName]) console.error(`The form contains duplicate field names  "${fieldName}"!`);
            const field = new fieldProps.component(fieldName, fieldProps, this, parent) as IBaseField;

            fieldsMap[fieldName] = field;
            rootFields[fieldName] = field;

            const [plainChildren] = field.initChildrenFields();

            for (const childName in plainChildren) {
                if (fieldsMap[childName]) console.error(`The form contains duplicate field names  "${childName}"!`);
                fieldsMap[childName] = plainChildren[childName];
            }
        }
        return [fieldsMap, rootFields];
    }

    /** Transforming field properties.
     * If the field properties contain the short entry inlineGroup, then create additional parameters to transform to InlineGroupField  */
    private modifyFieldsProps(fieldsProps: IDFormFieldsProps) {
        const fieldsPropsGroups: Record<string, Record<string, IAnyFieldProps>> = {};
        let i = 0;
        for (const fieldName in fieldsProps) {
            i++;
            const fieldProps = {...fieldsProps[fieldName]};
            let groupName = '';
            if (fieldProps.inlineGroup) {
                groupName = fieldProps.inlineGroup;
                fieldProps.inlineGroup = undefined;
            } else groupName = '[__group__]-' + i;

            if (!fieldsPropsGroups[groupName]) fieldsPropsGroups[groupName] = {};
            fieldsPropsGroups[groupName][fieldName] = fieldProps;
        }

        const result: IDFormFieldsProps = {};
        for (const groupName in fieldsPropsGroups) {
            const group = fieldsPropsGroups[groupName];

            if (Object.keys(group).length > 1) {
                result[groupName] = {
                    component: InlineGroupField,
                    fieldsProps: group,
                };
            } else {
                const fieldName = Object.keys(group)[0];
                result[fieldName] = group[fieldName];
            }
        }

        return result;
    }

    /** Init fields parameters (keep fields values if field components still the same) */
    private initFieldsParameters(
        fieldsMap: DModel['_fieldsMap'],
        prevFieldsMap: DModel['_fieldsMap'],
        curValues: DModel['_values'],
        dataSet: IDFormDataSet | undefined,
        mode: IDFormMode
    ): [Record<string, React.ReactNode | undefined>, Record<string, unknown>, Record<string, boolean>, Record<string, boolean>, Record<string, boolean>] {
        const values: Record<string, unknown> = {};
        const hidden: Record<string, boolean> = {};
        const readOnly: Record<string, boolean> = {};
        const disabled: Record<string, boolean> = {};
        const labels: Record<string, React.ReactNode> = {};

        for (const fieldName in fieldsMap) {
            const field = fieldsMap[fieldName];
            const oldField = prevFieldsMap[fieldName];

            const fieldProps = field.getProps();

            labels[fieldName] = fieldProps.label;
            hidden[fieldName] = !!fieldProps.hidden;
            readOnly[fieldName] = !!fieldProps.readOnly || mode === 'view';
            disabled[fieldName] = !!fieldProps.disabled;

            if (oldField && field.constructor.name === oldField.constructor.name) {
                //if the field type has not changed, then keep values
                values[fieldName] = curValues[fieldName];
                continue;
            }

            if (!field.canHaveValue()) continue;

            let fieldValue: unknown = undefined;
            if (mode === 'create') fieldValue = fieldProps.value;
            else fieldValue = fieldProps.value ?? dataSet?.[fieldName];
            values[fieldName] = fieldValue;
        }

        return [labels, values, hidden, readOnly, disabled];
    }

    /**
     * Calculates the statuses of the fields visibility on the basis of their dependence on each other
     * @returns Returns an array with new hidden field statuses
     */
    private calculateLockedFields() {
        const result: Record<string, boolean> = {};
        for (const fieldName in this._fieldsMap) result[fieldName] = this.isFieldMustBeLocked(this._fieldsMap[fieldName]);
        return result;
    }

    /**
     * Hides/disable all depended on fields, if root field has no value or hidden
     * @param field
     * @param noEvents - do not emit onHiddenStateChanged/onDisableStateChanged callback
     * @param noRerender - do not emit re-rendering
     * @returns
     */
    lockDependedFields(field: IBaseField, noEvents?: boolean, noRerender?: boolean) {
        const disableDepended = this._formProps.disableDepended;
        const fieldName = field.getName();
        for (const childName in this._fieldsMap) {
            const childField = this._fieldsMap[childName];
            const childProps = childField.getProps();
            if (!childProps?.dependsOn || childProps.dependsOn.indexOf(fieldName) < 0) continue;
            const isLocked = this.isFieldMustBeLocked(childField);
            if (disableDepended) childField.setDisabled(isLocked, noEvents, noRerender);
            else childField.setHidden(isLocked, noEvents, noRerender);
        }
    }

    /**
     * Check if field must be unavailable (if a field on which it depends on has no value or hidden)
     * @returns true, if field must be unavailable
     * @param field
     */
    private isFieldMustBeLocked(field: IBaseField) {
        const fieldProps = field.getProps();
        if (!fieldProps.dependsOn?.length) return !!fieldProps.hidden;

        for (const parentName of fieldProps.dependsOn) {
            const parentField = this._fieldsMap[parentName];
            if (!parentField) continue;

            const parentProps = parentField.getProps();

            if (
                parentProps.hidden || //the field must be hidden because parent field must be hidden according field props
                parentField.isHidden() || // the field must be hidden, because parent field is hidden
                (parentField.canHaveValue() && parentField.isEmptyValue()) //the field must be hidden because parent field value is empty
            )
                return true;

            if (this.isFieldMustBeLocked(parentField)) return true;
        }

        return false;
    }

    //endregion

    //region Fields collection getters
    /** return@ field collection (plain list of all fields in all component tabs, including child fields) */
    getFieldsMap() {
        return this._fieldsMap;
    }

    /** @return root fields collection (only root fields, without children) */
    getRootFields() {
        return this._rootFields;
    }

    /** @return field by name from fields map */
    getField(fieldName: string) {
        return this._fieldsMap[fieldName];
    }

    //endregion

    //region Form methods
    /** Get form ID */
    getFormId() {
        return this._formId;
    }

    /** @return form properties collection */
    getFormProps() {
        return this._formProps;
    }

    /** @return form labels collection */
    getFormLabels() {
        return this._labels;
    }

    /** @return form values collection */
    getFormValues() {
        return this._values;
    }

    /** Update form values
     * @param dataSet - new data set
     * @param noEvents - do not emit onValueChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setFormValues(dataSet: IDFormDataSet | undefined, noEvents?: boolean, noRerender?: boolean) {
        const newDataSet = noEvents ? dataSet : this._callbacks.onDataSetChange?.(dataSet, this) ?? dataSet;

        this._dataSet = newDataSet;

        for (const fieldName in this._fieldsMap) {
            const field = this._fieldsMap[fieldName];
            field.setValue(newDataSet?.[fieldName], noEvents, noRerender);
        }
    }

    /** @return form touched fields collection */
    getFormTouchedFields() {
        return this._touched;
    }

    /** @return form dirty fields collection */
    getFormDirtyFields() {
        return this._dirty;
    }

    /** @return form disabled fields collection */
    getFormDisabledFields() {
        return this._disabled;
    }

    /** @return form read only fields collection */
    getFormReadOnlyFields() {
        return this._readOnly;
    }

    /** @return form hidden fields collection */
    getFormHiddenFields() {
        return this._hidden;
    }

    /** @return form ready fields collection (the field is completely initialized, its data is loaded) */
    getFormReadyFields() {
        return this._ready;
    }

    /** @returns a collection of errors of only those visible fields for which there are errors (hidden fields have no errors) */
    getFormErrors() {
        return this._errors;
    }

    /** Get form data set (Not to be confused with form values. This is the dataset that was passed to the form) */
    getFormDataSet() {
        return this._dataSet;
    }

    /** @return model validator instance */
    getValidator() {
        return this._validator;
    }

    /**@return model callbacks collection */
    getModelCallbacks() {
        return this._callbacks;
    }

    // Dirty
    /**
     * Gets the current dirty status of the form (a user has changed any field values on the form)
     * @returns Form dirty status
     */
    isFormDirty(): boolean {
        return this._formDirty;
    }

    /**
     * Sets a dirty status to the form  (a user has changed any field values on the form)
     * @param value - dirty status
     * @param noEvents - does not raise events/callbacks
     */
    public setFormDirty(value: boolean, noEvents?: boolean) {
        const prevValue = this.isFormDirty();
        this._formDirty = value;

        if (!noEvents && prevValue !== value) this._callbacks?.onFormDirtyStateChanged?.(value, this);
    }

    /**
     * Gets the current read only status of the form
     * @returns Form read only status
     */
    isFormDisabled(): boolean {
        return this._formDisabled;
    }

    /**
     * Sets a read only status to the form
     * @param value - read only status
     * @param noEvents - do not emit onDisabledStateChanged and onFormDisabledStateChanged callbacks
     * @param noRerender - do not emit re-rendering
     */
    setFormDisabled(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isFormDisabled();
        this._formDisabled = value;

        if (prevValue === value) return;

        const fields = this.getFieldsMap();
        for (const fieldName in fields) {
            const field = fields[fieldName];
            field.setDisabled(value, noEvents, true);
        }

        if (!noEvents) this.getModelCallbacks()?.onFormDisabledStateChanged?.(value, this);
        if (!noRerender) this.emitFormRender();
    }

    /**
     * Gets the current read only status of the form
     * @returns Form read only status
     */
    isFormReadOnly(): boolean {
        return this.getFormMode() === 'view' || this._formReadOnly;
    }

    /**
     * Sets a read only status to the form
     * @param value - read only status
     * @param noEvents - do not emit onFormReadOnlyStateChanged and onReadOnlyStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setFormReadOnly(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isFormReadOnly();
        this._formReadOnly = value;

        if (prevValue === value) return;

        const fields = this.getFieldsMap();
        for (const fieldName in fields) {
            const field = fields[fieldName];
            field.setReadOnly(value, noEvents, true);
        }

        if (!noEvents) this.getModelCallbacks()?.onFormReadOnlyStateChanged?.(value, this);
        if (!noRerender) this.emitFormRender();
    }

    // Initialization

    /**
     * The form began initialization (renders for the first time)
     */
    setFormInit() {
        this.setFormReady(false); //At the time of initialization, the form is not yet ready
        this._callbacks?.onFormInit?.(this);
    }

    // Ready
    /**
     * Gets the current ready status of the form (all fields are completely initialized, data are loaded)
     * @returns Form ready status
     */
    isFormReady(): boolean | undefined {
        return this._formReady;
    }

    /**
     * Trying to set a ready status to the form  (all fields are completely initialized, data are loaded)
     * Can be set true only if the form is initialized and all visible fields has ready status
     * *this function doesn't call onFieldReady callbacks of the fields
     * @param value - ready status
     * @param noEvents - do not emit onReady callback
     */
    setFormReady(value: boolean, noEvents?: boolean) {
        setTimeout(() => {
            const prevValue = this.isFormReady();

            if (this.isFormFetching() || this.isFormFetchingFailed()) value = false;

            if (!value) {
                this._formReady = value;
                if (prevValue !== value && !noEvents) this._callbacks?.onFormReadyStateChanged?.(value, this);
                return;
            }

            //set form ready status only if every visible field from fieldsProps has set ready status
            for (const fieldName in this._fieldsMap) {
                const field = this._fieldsMap[fieldName];
                if (field.isHidden()) continue;
                if (!field.isReady()) {
                    value = false;
                    break;
                }
            }

            this._formReady = value;

            if (prevValue !== value && !noEvents) this._callbacks?.onFormReadyStateChanged?.(value, this);
        }, 0);
    }

    // Validation
    /**
     * Validate form
     * @param noEvents - do not emit onValidated callback
     * @param noRerender - do not emit re-rendering
     * @returns a collection of errors of only those visible fields for which there are errors (hidden fields have no errors)
     */
    validateForm(noEvents?: boolean, noRerender?: boolean) {
        for (const fieldName in this._fieldsMap) {
            const field = this._fieldsMap[fieldName];
            field.validate(noEvents, noRerender);
        }

        this.emitFormRender();

        const formValues = this.getFormValues();
        const dataSet = this.getFormDataSet();
        const values = {...dataSet, ...formValues}; // merge dataSet and values
        this._callbacks.onFormValidated?.(values, this.getFormErrors(), this.isFormSubmitting(), this);
        return this.getFormErrors();
    }

    /**
     * @returns the form submitting status
     */
    isFormSubmitting() {
        return this._isSubmitting;
    }

    /** Set the form submitting status */
    private setFormSubmitting(value: boolean) {
        const prevValue = this.isFormSubmitting();
        this._isSubmitting = value;
        if (prevValue !== value) this.emitFormRender();
    }

    /**
     * @returns the form fetching status
     */
    isFormFetching() {
        return this._isFetching;
    }

    /** Set the form fetching status */
    private setFormFetching(value: boolean) {
        const prevValue = this.isFormFetching();
        this._isFetching = value;
        if (prevValue !== value) this.emitFormRender();
    }

    /** Set form fetching failed status */
    setFormFetchingFailed(value: boolean) {
        this._isFetchingFailed = value;
    }

    /** Returns the status that means that the form tried to load the data, but it failed */
    isFormFetchingFailed() {
        return this._isFetchingFailed;
    }

    /**
     * @returns is the form has error
     */
    isFormHasError() {
        const errors = this.getFormErrors();
        for (const fieldName in errors) {
            if (errors[fieldName]) return true;
        }

        return false;
    }

    /** Get the form component mounted status */
    isFormMounted() {
        return this._isFormMounted;
    }

    /** Set the form component mounted status */
    setFormMounted(value: boolean) {
        this._isFormMounted = value;
    }

    /** Get current form mode */
    getFormMode() {
        return this._formMode;
    }

    //endregion

    //region Fetch
    fetchData() {
        const dataSource = this._callbacks.onDataFetch?.(this);
        if (!dataSource) return;

        dataSource.then(
            (result: {data: Record<string, unknown>}) => {
                if (!this.isFormMounted()) return;
                this.setFormFetching(false);
                this.setFormFetchingFailed(false);
                this._callbacks.onDataFetchSuccess?.(result, this);
                this._callbacks.onDataFetchComplete?.(this);

                const values = result.data as IDFormDataSet;
                this.setFormValues(values);

                this.setFormReady(true);
            },
            (error: IError) => {
                if (!this.isFormMounted()) return;
                this.setFormFetching(false);
                this.setFormFetchingFailed(true);
                this._callbacks.onDataFetchError?.(error, this);
                this._callbacks.onDataFetchComplete?.(this);
            }
        );

        this.setFormReady(false);
        this.setFormFetching(true);
        this.setFormFetchingFailed(false);
    }

    //endregion

    //region Submit
    /**
     * Submit form
     */
    submit(
        onSubmitSuccess?: (values: Record<string, unknown>, result: Record<string, unknown> | undefined, model: DModel) => void,
        onSubmitError?: (values: Record<string, unknown>, error: IError, model: DModel) => void,
        onSubmitComplete?: (values: Record<string, unknown>, errors: Record<string, string | undefined>, model: DModel) => void
    ) {
        if (this.isFormSubmitting()) return;
        this.incrementSubmitCount();

        this.setFormSubmitting(true);

        const formValues = this.getFormValues();
        const dataSet = this.getFormDataSet();
        const values = {...dataSet, ...formValues}; // merge dataSet and values

        if (this._formMode === 'clone') values['_clonedFrom_'] = values.id;

        if (this._formMode === 'create' || this._formMode === 'clone') delete values.id;

        const validationErrors = this.validateForm();

        this._callbacks?.onSubmitValidation?.(values, validationErrors, this);

        if (this.isFormHasError()) {
            this.setFormSubmitting(false);
            onSubmitComplete?.(values, validationErrors, this);
            this._callbacks?.onSubmitComplete?.(values, validationErrors, this);
            return;
        }

        if (!this._callbacks?.onSubmit) {
            this.setFormSubmitting(false);
            onSubmitError?.(values, {message: 'The onSubmit callback not specified', code: 405, stack: Error().stack}, this);
            onSubmitComplete?.(values, validationErrors, this);
            this._callbacks?.onSubmitError?.(values, {message: 'The onSubmit callback not specified', code: 405, stack: Error().stack}, this);
            this._callbacks?.onSubmitComplete?.(values, validationErrors, this);
            return;
        }

        const result = this._callbacks?.onSubmit(values, this);

        if (IsPromise(result)) {
            const promiseResult = result as IDFormSubmitResultPromise;
            promiseResult
                .then(promiseResult => {
                    if (!this.isFormMounted()) return;
                    this.setFormSubmitting(false);
                    onSubmitSuccess?.(values, promiseResult.data || values, this);
                    onSubmitComplete?.(values, validationErrors, this);
                    this._callbacks?.onSubmitSuccess?.(values, promiseResult.data || values, this);
                    this._callbacks?.onSubmitComplete?.(values, validationErrors, this);
                })
                .catch((error: IError) => {
                    if (!this.isFormMounted()) return;
                    this.setFormSubmitting(false);
                    onSubmitError?.(values, error, this);
                    onSubmitComplete?.(values, validationErrors, this);
                    this._callbacks?.onSubmitError?.(values, error, this);
                    this._callbacks?.onSubmitComplete?.(values, validationErrors, this);
                });

            return;
        }

        if (typeof result === 'object') {
            this.setFormSubmitting(false);
            const objectResult = result as IDFormSubmitResultObject;
            if (objectResult.error?.message) {
                onSubmitError?.(values, {message: objectResult.error.message || '', code: objectResult.error.code || 400}, this);
                this._callbacks?.onSubmitError?.(values, {message: objectResult.error.message || '', code: objectResult.error.code || 400}, this);
            } else {
                onSubmitSuccess?.(values, objectResult.data ?? values, this);
                this._callbacks?.onSubmitSuccess?.(values, objectResult.data ?? values, this);
            }

            onSubmitComplete?.(values, validationErrors, this);
            this._callbacks?.onSubmitComplete?.(values, validationErrors, this);

            return;
        }

        this.setFormSubmitting(false);
        if (typeof result === 'boolean') {
            if (result) {
                onSubmitSuccess?.(values, values, this);
                this._callbacks?.onSubmitSuccess?.(values, values, this);
            } else {
                onSubmitError?.(values, {message: 'Неизвестная ошибка', code: 500, stack: Error().stack}, this);
                this._callbacks?.onSubmitError?.(values, {message: 'Неизвестная ошибка', code: 500, stack: Error().stack}, this);
            }

            onSubmitComplete?.(values, validationErrors, this);
            this._callbacks?.onSubmitComplete?.(values, validationErrors, this);
            return;
        }

        if (typeof result === 'undefined') {
            onSubmitSuccess?.(values, values, this);
            onSubmitComplete?.(values, validationErrors, this);
            this._callbacks?.onSubmitSuccess?.(values, values, this);
            this._callbacks?.onSubmitComplete?.(values, validationErrors, this);
        }
    }

    /**
     * @returns Get the number of submit attempts
     */
    getSubmitCount() {
        return this._submitCount;
    }

    /** Increment the number of submit attempts  */
    incrementSubmitCount() {
        this._submitCount++;
    }

    //endregion

    //region Form rerender implementation
    subscribeRenderForm(listener: () => void) {
        this._formRenderListeners = [...this._formRenderListeners, listener];
        return () => {
            this._formRenderListeners = this._formRenderListeners.filter(l => l !== listener);
        };
    }

    emitFormRender() {
        this._formRenderSnapshot = {};

        if (!this._formRenderListeners) return;
        for (const listener of this._formRenderListeners) listener();
    }

    getFormRenderSnapshot() {
        return this._formRenderSnapshot;
    }

    //endregion
}
