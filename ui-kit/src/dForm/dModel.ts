// noinspection DuplicatedCode

/**
 * @DynamicFormModel
 * @version 0.0.38.17
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IsPromise} from '@krinopotam/js-helpers/helpersObjects/isPromise';

import {BaseValidator} from './validators/baseValidator';
import React from 'react';
import {IAnyFieldProps, IBaseField} from '@src/dForm/fields/base/baseField';
import {IDFormApi, IDFormDataSet, IDFormFieldsProps, IDFormProps} from '@src/dForm/index';
import {IError} from '@krinopotam/service-types';
import {InlineGroupField} from '@src/dForm/fields/inlineGroup/inlineGroupField';
import {IDFormMode} from '@src/dForm/types/dFormTypes';
import {CallbackControl} from '@src/_shared/classes/callbackControl';

export class DModel {
    //region Private properties
    /** Form API instance */
    private readonly _formApi: IDFormApi;

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

    /** validator instance */
    private readonly _validator: BaseValidator;

    /** form rerender listeners */
    private _formRenderListeners: (() => void)[] = [];

    /** form rerender key snapshot */
    private _formRenderSnapshot: Record<never, never> = {};
    //endregion

    //region Init class
    constructor(formApi: IDFormApi) {
        this._validator = new BaseValidator();
        this._formApi = formApi;
    }

    initModel(formProps: IDFormProps) {
        if (this._formProps === formProps) return;

        this._formProps = formProps;
        this._formMode = formProps.formMode ?? 'create';
        this._formReadOnly = !!formProps.readOnly;

        const prevFieldsMap = this._fieldsMap;
        [this._fieldsMap, this._rootFields] = this.prepareFieldCollection(formProps.fieldsProps);

        const oldDataSet = this._dataSet;
        [this._labels, this._values, this._hidden, this._readOnly, this._disabled] = this.initFieldsParameters({
            fieldsMap: this._fieldsMap,
            prevFieldsMap: prevFieldsMap,
            curValues: this._values,
            curDisabled: this._disabled,
            curReadOnly: this._readOnly,
            curHidden: this._hidden,
            dataSet: oldDataSet !== formProps.dataSet ? formProps.dataSet : undefined,
            mode: formProps.formMode ?? 'create',
        });

        this._dataSet = formProps.dataSet;

        if (!formProps.disableDepended) this._hidden = this.calculateLockedFields();
        else this._disabled = this.calculateLockedFields();

        this._formProps.onFormModelInitialized?.(this._formApi, new CallbackControl());
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
    private initFieldsParameters({
        fieldsMap,
        prevFieldsMap,
        curValues,
        curDisabled,
        curReadOnly,
        curHidden,
        dataSet,
        mode,
    }: {
        fieldsMap: DModel['_fieldsMap'];
        prevFieldsMap: DModel['_fieldsMap'];
        curValues: DModel['_values'];
        curDisabled: DModel['_disabled'];
        curReadOnly: DModel['_readOnly'];
        curHidden: DModel['_hidden'];
        dataSet: IDFormDataSet | undefined;
        mode: IDFormMode;
    }): [
        Record<string, React.ReactNode | undefined>,
        Record<string, unknown>,
        Record<string, boolean | undefined>,
        Record<string, boolean | undefined>,
        Record<string, boolean | undefined>,
    ] {
        const values: Record<string, unknown> = {};
        const hidden: Record<string, boolean | undefined> = {};
        const readOnly: Record<string, boolean | undefined> = {};
        const disabled: Record<string, boolean | undefined> = {};
        const labels: Record<string, React.ReactNode> = {};

        for (const fieldName in fieldsMap) {
            const field = fieldsMap[fieldName];
            const oldField = prevFieldsMap[fieldName];

            const fieldProps = field.getProps();

            labels[fieldName] = fieldProps.label;

            if (oldField && field.constructor.name === oldField.constructor.name) {
                //if the field type has not changed, then keep values
                values[fieldName] = curValues[fieldName];
                hidden[fieldName] = typeof curHidden[fieldName] === 'boolean' ? curHidden[fieldName] : fieldProps.hidden;
                disabled[fieldName] = typeof curDisabled[fieldName] === 'boolean' ? curDisabled[fieldName] : fieldProps.disabled;

                if (mode === 'view' || (fieldProps.nonEditable && mode === 'update')) readOnly[fieldName] = true;
                else readOnly[fieldName] = typeof curReadOnly[fieldName] === 'boolean' ? curReadOnly[fieldName] : fieldProps.readOnly;

                continue;
            }

            hidden[fieldName] = !!fieldProps.hidden;
            disabled[fieldName] = !!fieldProps.disabled;

            if (mode === 'view' || (fieldProps.nonEditable && mode === 'update')) readOnly[fieldName] = true;
            else readOnly[fieldName] = !!fieldProps.readOnly;

            if (!field.canHaveValue()) continue;

            let fieldValue: unknown = undefined;
            if (mode === 'create') fieldValue = fieldProps.value ?? this._formProps.defaultValues?.[fieldName];
            else fieldValue = dataSet?.[fieldName];
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
        if (!fieldProps.dependsOn?.length) return field.isHidden(); //return unchanged if there are no dependent fields

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
    getField<T extends IBaseField = IBaseField>(fieldName: string): T {
        return this._fieldsMap[fieldName] as T;
    }

    //endregion

    //region Form methods
    /** Get form ID */
    getFormId() {
        return this._formApi.getId();
    }

    /** @return form properties collection */
    getFormProps() {
        return this._formProps;
    }

    /** @return form labels collection */
    getFormLabels() {
        return this._labels;
    }

    /** Get form data set
     * Not to be confused with form values/
     * @return the dataset that was passed to the form merged with current form values
     */
    getFormDataSet() {
        const values = this.getFormValues();
        return {...this._dataSet, ...values};
    }

    /** orm values collection only
     * Not to be confused with dataSet:
     * @returns collection of field values present on the form only. DataSet values will be skipped
     */
    getFormValues() {
        return this._values;
    }

    /** Update form values
     * @param dataSet - new data set
     * @param noEvents - do not emit onValueChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setFormValues(dataSet: IDFormDataSet | undefined, noEvents?: boolean, noRerender?: boolean) {
        const newDataSet = noEvents ? dataSet : (this._formProps.onDataSetChange?.(dataSet, this._formApi, new CallbackControl()) ?? dataSet);

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

    /** @return model validator instance */
    getValidator() {
        return this._validator;
    }

    /** @return form API instance */
    getFormApi() {
        return this._formApi;
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

        if (!noEvents && prevValue !== value) this._formProps?.onFormDirtyStateChanged?.(value, this._formApi, new CallbackControl());
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

        if (!noEvents) this._formProps?.onFormDisabledStateChanged?.(value, this._formApi, new CallbackControl());
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

        if (!noEvents) this._formProps?.onFormReadOnlyStateChanged?.(value, this._formApi, new CallbackControl());
        if (!noRerender) this.emitFormRender();
    }

    // Initialization

    /**
     * The form began initialization (renders for the first time)
     */
    setFormInit() {
        this.setFormReady(false); //At the time of initialization, the form is not yet ready
        this._formProps?.onFormInit?.(this._formApi, new CallbackControl());
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
                if (prevValue !== value && !noEvents) this._formProps?.onFormReadyStateChanged?.(value, this._formApi, new CallbackControl());
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

            if (prevValue !== value && !noEvents) this._formProps?.onFormReadyStateChanged?.(value, this._formApi, new CallbackControl());
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

        this._formProps.onFormValidated?.(
            this.getFormValues(),
            this.getFormDataSet(),
            this.getFormErrors(),
            this.isFormSubmitting(),
            this._formApi,
            new CallbackControl()
        );
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
        const dataSource = this._formProps.onDataFetch?.(this._formApi, new CallbackControl());
        if (!dataSource) return;

        dataSource.then(
            (result: {data: Record<string, unknown>}) => {
                if (!this.isFormMounted()) return;
                this.setFormFetching(false);
                this.setFormFetchingFailed(false);
                this._formProps.onDataFetchSuccess?.(result, this._formApi, new CallbackControl());
                this._formProps.onDataFetchComplete?.(this._formApi, new CallbackControl());

                const values = result.data as IDFormDataSet;
                this.setFormValues(values);

                this.setFormReady(true);
            },
            (error: IError) => {
                if (!this.isFormMounted()) return;
                this.setFormFetching(false);
                this.setFormFetchingFailed(true);
                this._formProps.onDataFetchError?.(error, this._formApi, new CallbackControl());
                this._formProps.onDataFetchComplete?.(this._formApi, new CallbackControl());
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
    submit({
        onSubmitSuccess,
        onSubmitError,
        onSubmitComplete,
    }: {
        onSubmitSuccess?: (values: Record<string, unknown>, dataSet: IDFormDataSet, result: Record<string, unknown> | undefined, model: DModel) => void;
        onSubmitError?: (values: Record<string, unknown>, dataSet: IDFormDataSet, error: IError, model: DModel) => void;
        onSubmitComplete?: (values: Record<string, unknown>, dataSet: IDFormDataSet, errors: Record<string, string | undefined>, model: DModel) => void;
    } = {}) {
        if (this.isFormSubmitting()) return;

        this.incrementSubmitCount();

        this.setFormSubmitting(true);

        const formValues = this.getFormValues();
        const dataSet = this.getFormDataSet();

        if (this._formMode === 'clone' && this._formProps.assignExtraValues?.clone) dataSet[this._formProps.assignExtraValues.clone] = dataSet.id;

        if (this._formMode === 'update' && this._formProps.assignExtraValues?.update) dataSet[this._formProps.assignExtraValues.update] = true;

        if (this._formMode === 'create' || this._formMode === 'clone') {
            if (this._formProps.assignExtraValues?.create) dataSet[this._formProps.assignExtraValues.create] = true;
            delete dataSet.id;
        }

        const validationErrors = this.validateForm();

        this._formProps?.onSubmitValidation?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());

        if (this.isFormHasError()) {
            this.setFormSubmitting(false);
            onSubmitComplete?.(formValues, dataSet, validationErrors, this);
            this._formProps?.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
            return;
        }

        if (!this._formProps?.onSubmit) {
            this.setFormSubmitting(false);
            onSubmitError?.(
                formValues,
                dataSet,
                {
                    message: 'The onSubmit callback not specified',
                    error: 'ERR_SUBMIT_NOT_SPECIFIED',
                    code: 405,
                    stack: Error().stack,
                },
                this
            );
            onSubmitComplete?.(formValues, dataSet, validationErrors, this);
            this._formProps?.onSubmitError?.(
                formValues,
                dataSet,
                {
                    message: 'The onSubmit callback not specified',
                    error: 'ERR_SUBMIT_NOT_SPECIFIED',
                    code: 405,
                    stack: Error().stack,
                },
                this._formApi,
                new CallbackControl()
            );
            this._formProps?.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
            return;
        }

        const result = this._formProps?.onSubmit(formValues, dataSet, this._formApi, new CallbackControl());

        if (IsPromise(result)) {
            result
                .then(result => {
                    if (!this.isFormMounted()) return;
                    this.setFormSubmitting(false);
                    onSubmitSuccess?.(formValues, dataSet, result?.data || dataSet, this);
                    onSubmitComplete?.(formValues, dataSet, validationErrors, this);
                    this._formProps?.onSubmitSuccess?.(formValues, dataSet, result?.data || dataSet, this._formApi, new CallbackControl());
                    this._formProps?.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
                })
                .catch((error: IError) => {
                    if (!this.isFormMounted()) return;
                    this.setFormSubmitting(false);
                    onSubmitError?.(formValues, dataSet, error, this);
                    onSubmitComplete?.(formValues, dataSet, validationErrors, this);
                    this._formProps?.onSubmitError?.(formValues, dataSet, error, this._formApi, new CallbackControl());
                    this._formProps?.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
                });

            return;
        }

        if (typeof result === 'object') {
            this.setFormSubmitting(false);
            if (result.error?.message) {
                onSubmitError?.(
                    formValues,
                    dataSet,
                    {
                        message: result.error.message || '',
                        error: result.error.error,
                        code: result.error.code || 400,
                    },
                    this
                );
                this._formProps?.onSubmitError?.(
                    formValues,
                    dataSet,
                    {
                        message: result.error.message || '',
                        error: result.error.error,
                        code: result.error.code || 400,
                    },
                    this._formApi,
                    new CallbackControl()
                );
            } else {
                onSubmitSuccess?.(formValues, dataSet, result.data ?? dataSet, this);
                this._formProps?.onSubmitSuccess?.(formValues, dataSet, result.data ?? dataSet, this._formApi, new CallbackControl());
            }

            onSubmitComplete?.(formValues, dataSet, validationErrors, this);
            this._formProps?.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());

            return;
        }

        this.setFormSubmitting(false);
        if (typeof result === 'boolean') {
            if (result) {
                onSubmitSuccess?.(formValues, dataSet, dataSet, this);
                this._formProps?.onSubmitSuccess?.(formValues, dataSet, dataSet, this._formApi, new CallbackControl());
            } else {
                onSubmitError?.(
                    formValues,
                    dataSet,
                    {
                        message: 'Unknown error',
                        error: 'ERR_UNKNOWN',
                        code: 520,
                        stack: Error().stack,
                    },
                    this
                );
                this._formProps?.onSubmitError?.(
                    formValues,
                    dataSet,
                    {
                        message: 'Unknown error',
                        error: 'ERR_UNKNOWN',
                        code: 520,
                        stack: Error().stack,
                    },
                    this._formApi,
                    new CallbackControl()
                );
            }

            onSubmitComplete?.(formValues, dataSet, validationErrors, this);
            this._formProps?.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
            return;
        }

        if (typeof result === 'undefined') {
            onSubmitSuccess?.(formValues, dataSet, dataSet, this);
            onSubmitComplete?.(formValues, dataSet, validationErrors, this);
            this._formProps?.onSubmitSuccess?.(formValues, dataSet, dataSet, this._formApi, new CallbackControl());
            this._formProps?.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
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
