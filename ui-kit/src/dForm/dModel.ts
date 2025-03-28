// noinspection DuplicatedCode

/**
 * @DynamicFormModel
 * @version 0.0.38.17
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IsPromise} from '@krinopotam/js-helpers/helpersObjects/isPromise';
import {IBaseField} from '@src/dForm/fields/base';

import {BaseValidator} from './validators/baseValidator';
import React from 'react';
import {IDFormApi, IDFormDataSet, IDFormFieldsProps, IDFormProps, IDFormSubmitResultObject, IDFormSubmitResultPromise} from '@src/dForm/index';
import {AnyType, IError} from '@krinopotam/service-types';
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
    private _values: Record<string, AnyType> = {};

    /** Touched field statuses */
    private readonly _touched: Record<string, boolean | undefined> = {};

    /** Dirty field statuses */
    private readonly _dirty: Record<string, boolean | undefined> = {};

    /** Error field statuses */
    private readonly _errors: Record<string, string> = {};

    /** Hidden field statuses */
    private _hidden: Record<string, boolean | undefined> = {};

    /** Read only field statuses */
    private _readOnly: Record<string, boolean | undefined> = {};

    /** Disabled field statuses */
    private _disabled: Record<string, boolean | undefined> = {};

    /** Readiness field statuses (the field is completely initialized, its data is loaded) */
    private readonly _ready: Record<string, boolean | undefined> = {};

    /** Field fetching states (0 - no fetching, 1 - fetching in progress, -1 - fetching failed) */
    private readonly _fetching: Record<string, 0 | 1 | -1 | undefined> = {};
    //endregion

    //region Form properties
    /** the form disabled status */
    private _formDisabled = false;

    /** the form read only status */
    private _formReadOnly = false;

    /** the form dirty status */
    private _formDirty = false;

    /** the previous form ready status */
    private _formReadyState: boolean | undefined = undefined;

    /** the form component mounted status */
    private _isFormMounted = false;

    /** the current form mode  */
    private _formMode: IDFormMode = 'create';

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

    /** CONSTRUCTOR MODE: Selected field id */
    private _highlightedId?: string = undefined;
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
        this._formDisabled = !!formProps.disabled;

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

        this._highlightedId = formProps.highlightedField;

        this._formProps.onFormModelInitialized?.(this._formApi, new CallbackControl());
    }

    /** Instantiate fields classes and prepare fields collections */
    prepareFieldCollection(fieldsProps: IDFormFieldsProps | undefined, parent?: IBaseField): [DModel['_fieldsMap'], DModel['_rootFields']] {
        const fieldsMap: DModel['_fieldsMap'] = {};
        const rootFields: DModel['_rootFields'] = {};
        if (!fieldsProps) return [fieldsMap, rootFields];

        for (const fieldId in fieldsProps) {
            const fieldProps = fieldsProps[fieldId];
            if (fieldsMap[fieldId]) console.error(`The form contains duplicate field names  "${fieldId}"!`);
            if (!fieldProps.component) continue;
            const field = new fieldProps.component(fieldId, fieldProps, this, parent) as IBaseField;

            fieldsMap[fieldId] = field;
            rootFields[fieldId] = field;

            const [plainChildren] = field.prepareChildrenFieldsCollection();

            for (const childName in plainChildren) {
                if (fieldsMap[childName]) console.error(`The form contains duplicate field names  "${childName}"!`);
                fieldsMap[childName] = plainChildren[childName];
            }
        }
        return [fieldsMap, rootFields];
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
        Record<string, AnyType>,
        Record<string, boolean | undefined>,
        Record<string, boolean | undefined>,
        Record<string, boolean | undefined>,
    ] {
        const values: Record<string, AnyType> = {};
        const hidden: Record<string, boolean | undefined> = {};
        const readOnly: Record<string, boolean | undefined> = {};
        const disabled: Record<string, boolean | undefined> = {};
        const labels: Record<string, React.ReactNode> = {};

        const formProps = this.getFormProps();

        for (const fieldId in fieldsMap) {
            const field = fieldsMap[fieldId];
            const oldField = prevFieldsMap[fieldId];

            const fieldProps = field.getProps();

            field.initFieldParameters(fieldProps, formProps);

            labels[fieldId] = fieldProps.label;

            if (oldField && field.constructor.name === oldField.constructor.name) {
                //if the field type has not changed, then keep values
                values[fieldId] = curValues[fieldId];
                hidden[fieldId] = formProps.keepHiddenState && typeof curHidden[fieldId] === 'boolean' ? curHidden[fieldId] : fieldProps.hidden;
                disabled[fieldId] = formProps.keepDisabledState && typeof curDisabled[fieldId] === 'boolean' ? curDisabled[fieldId] : fieldProps.disabled;
                readOnly[fieldId] = formProps.keepReadOnlyState && typeof curReadOnly[fieldId] === 'boolean' ? curReadOnly[fieldId] : fieldProps.readOnly;

                continue;
            }

            hidden[fieldId] = !!fieldProps.hidden;
            disabled[fieldId] = !!fieldProps.disabled;
            readOnly[fieldId] = !!fieldProps.readOnly;

            if (!field.canHaveValue()) continue;

            let fieldValue: unknown = undefined;
            if (mode === 'create') fieldValue = fieldProps.defaultValue ?? this._formProps.defaultValues?.[fieldId];
            else fieldValue = dataSet?.[fieldId];
            values[fieldId] = fieldValue;
        }

        return [labels, values, hidden, readOnly, disabled];
    }

    /**
     * Calculates the statuses of the fields visibility on the basis of their dependence on each other
     * @returns Returns an array with new hidden field statuses
     */
    private calculateLockedFields() {
        const result: Record<string, boolean> = {};
        for (const fieldId in this._fieldsMap) result[fieldId] = this.isFieldMustBeLocked(this._fieldsMap[fieldId]);
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
        const fieldId = field.getId();
        for (const childName in this._fieldsMap) {
            const childField = this._fieldsMap[childName];
            const childProps = childField.getProps();
            if (!childProps?.dependsOn || childProps.dependsOn.indexOf(fieldId) < 0) continue;
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
    getField<T extends IBaseField = IBaseField>(fieldId: string): T {
        return this._fieldsMap[fieldId] as T;
    }

    /** @returns highlighted field ID in CONSTRUCTOR MODE: */
    getHighlightedId() {
        return this._highlightedId;
    }

    /** set selected field ID in CONSTRUCTOR MODE: */
    setHighlightedId(id: string | undefined) {
        this._highlightedId = id;
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
    getLabels() {
        return this._labels;
    }

    /** Get form data set
     * Not to be confused with form values/
     * @return the dataset that was passed to the form merged with current form values
     */
    getFormDataSet() {
        const values = this.getValues();
        return {...this._dataSet, ...values};
    }

    /** orm values collection only
     * Not to be confused with dataSet:
     * @returns collection of field values present on the form only. DataSet values will be skipped
     */
    getValues() {
        return this._values;
    }

    /** Update form values
     * @param dataSet - new data set
     * @param noEvents - do not emit onValueChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setValues(dataSet: IDFormDataSet | undefined, noEvents?: boolean, noRerender?: boolean) {
        const newDataSet = noEvents ? dataSet : (this._formProps.onDataSetChange?.(dataSet, this._formApi, new CallbackControl()) ?? dataSet);

        this._dataSet = newDataSet;

        for (const fieldId in this._fieldsMap) {
            const field = this._fieldsMap[fieldId];
            if (!newDataSet || !(fieldId in newDataSet)) continue;
            field.setValue(newDataSet[fieldId], noEvents, noRerender);
        }
    }

    /** @return form touched fields collection */
    getTouchedFields() {
        return this._touched;
    }

    /** @return form dirty fields collection */
    getDirtyFields() {
        return this._dirty;
    }

    /** @return form disabled fields collection */
    getDisabledFields() {
        return this._disabled;
    }

    /** @return form read only fields collection */
    getReadOnlyFields() {
        return this._readOnly;
    }

    /** @return form hidden fields collection */
    getHiddenFields() {
        return this._hidden;
    }

    /** @return form ready fields collection (the field is completely initialized, its data is loaded) */
    getReadyFields() {
        return this._ready;
    }

    /** @returns a collection of errors of only those visible fields for which there are errors (hidden fields have no errors) */
    getErrors() {
        return this._errors;
    }

    /** @return model validator instance */
    getValidator() {
        return this._validator;
    }

    /** @return form fields fetching states */
    getFetchingFields() {
        return this._fetching;
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

        if (!noEvents) this._formProps?.onFormReadOnlyStateChanged?.(value, this._formApi, new CallbackControl());
        if (!noRerender) this.emitFormRender();
    }

    // Initialization

    /**
     * The form began initialization (renders for the first time)
     */
    onFormInit() {
        this._formProps?.onFormInit?.(this._formApi, new CallbackControl());
    }

    // Ready
    /**
     * Gets the current ready status of the form (all fields are completely initialized, data are loaded)
     * @returns Form ready status
     */
    isFormReady(): boolean {
        return !!this._formReadyState;
    }

    /** Timeout ID for form ready state */
    private _readyTimeout: number | undefined;

    /**
     * Check form ready state (all fields are completely initialized, data are loaded). If state has changed call onFormReadyChanged
     * We use a timeout of 100 ms because some complex grid-type fields can start their initialization cycle during this time
     */
    checkFormReadyState() {
        if (typeof this._readyTimeout !== 'undefined') clearTimeout(this._readyTimeout);
        this._readyTimeout = setTimeout(() => {
            this._readyTimeout = undefined;
            let isFormReady = true;
            if (this.isFormFetching() || this.isFormFetchingFailed()) isFormReady = false;
            else {
                for (const fieldId in this._fieldsMap) {
                    const field = this._fieldsMap[fieldId];
                    if (field.isHidden()) continue;
                    if (!field.isReady()) isFormReady = false;
                }
            }

            if (isFormReady === this._formReadyState) return;

            this._formReadyState = isFormReady;
            this._formProps?.onFormReadyChanged?.(isFormReady, this._formApi, new CallbackControl());
        }, 100) as unknown as number;
    }

    // Validation
    /**
     * Validate form
     * @param noEvents - do not emit onValidated callback
     * @param noRerender - do not emit re-rendering
     * @returns a collection of errors of only those visible fields for which there are errors (hidden fields have no errors)
     */
    validateForm(noEvents?: boolean, noRerender?: boolean) {
        for (const fieldId in this._fieldsMap) {
            const field = this._fieldsMap[fieldId];
            field.validate(noEvents, noRerender);
        }

        this.emitFormRender();

        this._formProps.onFormValidated?.(
            this.getValues(),
            this.getFormDataSet(),
            this.getErrors(),
            this.isFormSubmitting(),
            this._formApi,
            new CallbackControl()
        );
        return this.getErrors();
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
        const errors = this.getErrors();
        for (const fieldId in errors) {
            if (errors[fieldId]) return true;
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
    /** Will called on form initialization data fetch */
    onInitialFetch() {
        const props = this._formProps;
        const formMode = this._formMode;

        if (!props.fetchOnCreate && formMode !== 'update' && formMode !== 'clone' && formMode !== 'view') return;
        this.fetchData();

        for (const fieldId in this._fieldsMap) {
            const field = this._fieldsMap[fieldId];
            field.onInitialFetch();
        }
    }

    fetchData() {
        const dataSource = this._formProps.onDataFetch?.(this._formApi, new CallbackControl());
        if (!dataSource) return;
        this.setFormFetching(true);
        this.setFormFetchingFailed(false);
        this.checkFormReadyState();

        dataSource.then(
            (result: {data: Record<string, AnyType>}) => {
                if (!this.isFormMounted()) return;
                this.setFormFetching(false);
                this.setFormFetchingFailed(false);
                this._formProps.onDataFetchSuccess?.(result, this._formApi, new CallbackControl());
                this._formProps.onDataFetchComplete?.(this._formApi, new CallbackControl());

                const values = result.data as IDFormDataSet;
                this.setValues(values);

                this.checkFormReadyState();
            },
            (error: IError) => {
                if (!this.isFormMounted()) return;
                this.setFormFetching(false);
                this.setFormFetchingFailed(true);
                this._formProps.onDataFetchError?.(error, this._formApi, new CallbackControl());
                this._formProps.onDataFetchComplete?.(this._formApi, new CallbackControl());

                this.checkFormReadyState();
            }
        );
    }

    //endregion

    //region Submit
    /** Submit form */
    submit(
        callbacks: {
            onValidationFailed?: (validationErrors: Record<string, string>) => void;
            onSubmitSuccess?: IDFormProps['onSubmitSuccess'];
            onSubmitError?: IDFormProps['onSubmitError'];
            onSubmitComplete?: IDFormProps['onSubmitComplete'];
        } = {}
    ) {
        if (this.isFormSubmitting()) return;

        this.incrementSubmitCount();

        this.setFormSubmitting(true);

        const formValues = this.getValues();
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
            callbacks.onValidationFailed?.(validationErrors);
            callbacks.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
            this._formProps?.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
            return;
        }

        if (!this._formProps?.onSubmit) return this.submitUnhandled(validationErrors, callbacks);

        const result = this._formProps?.onSubmit(formValues, dataSet, this._formApi, new CallbackControl());

        if (IsPromise(result)) this.submitPromise(result, validationErrors, callbacks);
        else if (typeof result === 'object') this.submitObject(result, validationErrors, callbacks);
        else if (typeof result === 'boolean') this.submitBoolean(result, validationErrors, callbacks);
        else if (typeof result === 'undefined') this.submitUndefined(validationErrors, callbacks);
    }

    /** Submit form if submit handler not specified */
    private submitUnhandled(
        validationErrors: Record<string, string>,
        callbacks: {
            onSubmitSuccess?: IDFormProps['onSubmitSuccess'];
            onSubmitError?: IDFormProps['onSubmitError'];
            onSubmitComplete?: IDFormProps['onSubmitComplete'];
        } = {}
    ) {
        const formValues = this.getValues();
        const dataSet = this.getFormDataSet();
        this.setFormSubmitting(false);
        callbacks.onSubmitError?.(
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
        callbacks.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
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
    }

    /** Submit form if submit handler callback returns promise */
    private submitPromise(
        result: IDFormSubmitResultPromise,
        validationErrors: Record<string, string>,
        callbacks: {
            onSubmitSuccess?: IDFormProps['onSubmitSuccess'];
            onSubmitError?: IDFormProps['onSubmitError'];
            onSubmitComplete?: IDFormProps['onSubmitComplete'];
        } = {}
    ) {
        const formValues = this.getValues();
        const dataSet = this.getFormDataSet();

        result
            .then(result => {
                if (!this.isFormMounted()) return;
                this.setFormSubmitting(false);
                callbacks.onSubmitSuccess?.(formValues, dataSet, result?.data || dataSet, this._formApi, new CallbackControl());
                callbacks.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
                this._formProps?.onSubmitSuccess?.(formValues, dataSet, result?.data || dataSet, this._formApi, new CallbackControl());
                this._formProps?.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
            })
            .catch((error: IError) => {
                if (!this.isFormMounted()) return;
                this.setFormSubmitting(false);
                callbacks.onSubmitError?.(formValues, dataSet, error, this._formApi, new CallbackControl());
                callbacks.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
                this._formProps?.onSubmitError?.(formValues, dataSet, error, this._formApi, new CallbackControl());
                this._formProps?.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
            });
    }

    /** Submit form if submit handler callback returns object */
    private submitObject(
        result: IDFormSubmitResultObject,
        validationErrors: Record<string, string>,
        callbacks: {
            onSubmitSuccess?: IDFormProps['onSubmitSuccess'];
            onSubmitError?: IDFormProps['onSubmitError'];
            onSubmitComplete?: IDFormProps['onSubmitComplete'];
        } = {}
    ) {
        const formValues = this.getValues();
        const dataSet = this.getFormDataSet();

        this.setFormSubmitting(false);

        if (result.error?.message) {
            callbacks.onSubmitError?.(
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
            callbacks.onSubmitSuccess?.(formValues, dataSet, result.data ?? dataSet, this._formApi, new CallbackControl());
            this._formProps?.onSubmitSuccess?.(formValues, dataSet, result.data ?? dataSet, this._formApi, new CallbackControl());
        }

        callbacks.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
        this._formProps?.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
    }

    /** Submit form if submit handler callback returns boolean */
    private submitBoolean(
        result: boolean,
        validationErrors: Record<string, string>,
        callbacks: {
            onSubmitSuccess?: IDFormProps['onSubmitSuccess'];
            onSubmitError?: IDFormProps['onSubmitError'];
            onSubmitComplete?: IDFormProps['onSubmitComplete'];
        } = {}
    ) {
        const formValues = this.getValues();
        const dataSet = this.getFormDataSet();

        this.setFormSubmitting(false);

        if (result) {
            callbacks.onSubmitSuccess?.(formValues, dataSet, dataSet, this._formApi, new CallbackControl());
            this._formProps?.onSubmitSuccess?.(formValues, dataSet, dataSet, this._formApi, new CallbackControl());
        } else {
            callbacks.onSubmitError?.(
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

        callbacks.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
        this._formProps?.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
    }

    /** Submit form if submit handler callback returns undefined */
    private submitUndefined(
        validationErrors: Record<string, string>,
        callbacks: {
            onSubmitSuccess?: IDFormProps['onSubmitSuccess'];
            onSubmitError?: IDFormProps['onSubmitError'];
            onSubmitComplete?: IDFormProps['onSubmitComplete'];
        } = {}
    ) {
        this.setFormSubmitting(false);

        const formValues = this.getValues();
        const dataSet = this.getFormDataSet();
        callbacks.onSubmitSuccess?.(formValues, dataSet, dataSet, this._formApi, new CallbackControl());
        this._formProps?.onSubmitSuccess?.(formValues, dataSet, dataSet, this._formApi, new CallbackControl());
        callbacks.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
        this._formProps?.onSubmitComplete?.(formValues, dataSet, validationErrors, this._formApi, new CallbackControl());
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
