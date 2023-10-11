// noinspection DuplicatedCode

/**
 * @DynamicFormModel
 * @version 0.0.38.17
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IDFormDataSet, IDFormDataSourcePromise, IDFormMode, IDFormProps} from './dForm';
import {HelpersObjects} from '@krinopotam/js-helpers';

import {BaseValidator} from './validators/baseValidator';
import React from 'react';
import {IBaseFieldAny} from '@src/dForm/fields/base/baseField';
import {IDFormFieldsProps} from '@src/dForm/index';
import {TPromise} from '@krinopotam/service-types';

export interface IDFormBaseCallbacks<T> {
    // Tabs callbacks
    /** fires when the hidden state of a tab changed */
    onTabHiddenStateChanged?: (tabName: string, state: boolean, api: T) => void;

    /** fires when read only state of a tab changed */
    onTabReadOnlyStateChanged?: (tabName: string, state: boolean, api: T) => void;

    /** fires when the disable state of a tab changes  */
    onTabDisabledStateChanged?: (tabName: string, state: boolean, api: T) => void;

    // The form callbacks
    /** fires when the dirty state of the form changed */
    onFormDirtyStateChanged?: (state: boolean, api: T) => void;

    /** fires when the read only state of the form changed */
    onFormReadOnlyStateChanged?: (state: boolean, api: T) => void;

    /** fires when the disabled state of the form changed */
    onFormDisabledStateChanged?: (state: boolean, api: T) => void;

    /** fires when the form began initialization (renders for the first time) */
    onFormInit?: (model: T) => void;

    /** fires when the form ready status changed (form ready means form is rendered, initialized and all fields data are loaded) */
    onFormReadyStateChanged?: (state: boolean, api: T) => boolean | void;

    /** fires when the form validated */
    onFormValidated?: (values: Record<string, unknown>, errors: Record<string, string>, isSubmit: boolean, api: T) => void;

    /** fires when the form has errors */
    onFormHasErrors?: (values: Record<string, unknown>, errors: Record<string, unknown>, api: T) => void;

    /** fires when the form has no errors */
    onFormHasNoErrors?: (values: Record<string, unknown>, api: T) => boolean | void;

    /** fires when the form trying to fetch data */
    onDataFetch?: (api: T) => IDFormDataSourcePromise | undefined;

    /** fires when the form fetch success */
    onDataFetchSuccess?: (result: {data: Record<string, unknown>}, api: T) => boolean | void;

    /** fires when the form fetch failed */
    onDataFetchError?: (message: string, code: number, api: T) => boolean | void;

    /** fires after the completion of fetching the data, regardless of the result */
    onDataFetchComplete?: (api: T) => void;

    /** Fires on submitting the form. Can returns Promise, Object, Boolean or Void */
    onSubmit?: (values: Record<string, unknown>, api: T) => IDFormSubmitResultPromise | IDFormSubmitResultObject | boolean | void;

    /** fires on submit validation */
    onSubmitValidation?: (values: Record<string, unknown>, errors: Record<string, string | undefined>, api: T) => void;

    /** fires on submit failed */
    onSubmitSuccess?: (values: Record<string, unknown>, resultValues: Record<string, unknown> | undefined, api: T) => boolean | void;

    /** fires on submit error */
    onSubmitError?: (values: Record<string, unknown>, message: string, code: number, api: T) => boolean | void;

    /** fires, when the submitting finishes, whether in failure or success. */
    onSubmitComplete?: (values: Record<string, unknown>, errors: Record<string, string | undefined>, api: T) => boolean | void;

    /** fires, when the dataSet change */
    onDataSetChange?: (dataSet: IDFormDataSet | undefined, api: T) => IDFormDataSet | undefined;
}

export type IDFormModelCallbacks = IDFormBaseCallbacks<DModel>;

export type IDFormSubmitResultPromise = TPromise<{data: Record<string, unknown>}, {message: string; code: number}>;
export type IDFormSubmitResultObject = {data?: Record<string, unknown>; error?: {message: string; code: number}};

export class DModel {
    //region Private properties
    /** Form ID */
    private readonly _formId: string;

    /** form properties (immutable clone) */
    private _formProps: IDFormProps = {};

    /** fields properties */
    private _fieldsProps: IDFormFieldsProps = {};

    //region Fields collections
    /** field collection (plain list of all fields in all component tabs, including child fields) */
    private _fieldsMap: Record<string, IBaseFieldAny> = {};

    /** Root fields collection, grouped by inline row groups (if no field rowGroup, group will contain only one field with synthetic key) */
    private _groupsMap: Record<string, Record<string, IBaseFieldAny>> = {};

    /** root fields collection (only root fields, without children) */
    private _rootFields: Record<string, IBaseFieldAny> = {};

    /** Field collection tree (all fields in all component tabs, including child fields of other containers grouped by containers) */
    private _fieldsTree: Record<string, IBaseFieldAny | Record<string, IBaseFieldAny>> = {};
    //endregion

    /** tabs and inline groups properties (fields properties grouped by tabs and inline groups) */
    private _tabsProps: Record<string, Record<string, IDFormFieldsProps>> = {};

    /** the form data set instance */
    private _dataSet: IDFormDataSet | undefined = undefined;

    //region Fields properties
    /** FOR INTERNAL USE ONLY - field labels */
    public _labels: Record<string, React.ReactNode | undefined> = {};

    /** Field values */
    private _values: Record<string, unknown> = {};

    /** FOR INTERNAL USE ONLY - touched field statuses */
    public _touched: Record<string, boolean | undefined> = {};

    /** FOR INTERNAL USE ONLY - dirty field statuses */
    public _dirty: Record<string, boolean | undefined> = {};

    /** FOR INTERNAL USE ONLY - error field statuses */
    public _errors: Record<string, string> = {};

    /** FOR INTERNAL USE ONLY - hidden field statuses */
    public _hidden: Record<string, boolean | undefined> = {};

    /** FOR INTERNAL USE ONLY - read only field statuses */
    public _readOnly: Record<string, boolean | undefined> = {};

    /** FOR INTERNAL USE ONLY - disabled field statuses */
    public _disabled: Record<string, boolean | undefined> = {};

    /** disabled tabs statuses */
    private _disabledTabs: Record<string, boolean | undefined> = {};

    /** FOR INTERNAL USE ONLY - readiness field statuses (the field is completely initialized, its data is loaded) */
    public _ready: Record<string, boolean | undefined> = {};
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

    /** inline group rerender listeners */
    private _groupRenderListeners: Record<string, Record<string, (() => unknown)[]>> | Record<string, never> = {};

    /** inline group rerender keys snapshots */
    private _groupRenderSnapshots: Record<string, Record<string, () => number>> | Record<string, never> = {};

    /** tab rerender listeners */
    private _tabRenderListeners: Record<string, (() => unknown)[]> | Record<string, never> = {};

    /** tab rerender keys snapshots */
    private _tabRenderSnapshots: Record<string, () => number> | Record<string, never> = {};

    /** form rerender listeners */
    private _formRenderListeners: (() => unknown)[] = [];

    /** form rerender key snapshot */
    private _formRenderSnapshot: () => number = () => 0;
    //endregion

    //region Init class
    constructor(formId: string) {
        this._formId = formId;
        this._validator = new BaseValidator();
    }

    reinitModel(formProps: IDFormProps, callbacks: IDFormModelCallbacks) {
        this._callbacks = callbacks;

        if (this._formProps === formProps) return;

        //the form props have changed
        this._formProps = formProps;
        this._formMode = formProps.formMode ?? 'create';
        this._formReadOnly = !!formProps.readOnly;

        [this._fieldsMap, this._groupsMap, this._rootFields, this._fieldsTree] = this.prepareFieldCollection(formProps.fieldsProps);

        const oldFieldsProps = this.getFieldsProps();
        if (oldFieldsProps !== formProps.fieldsProps) {
            // the fields props have changed
            this._fieldsProps = formProps.fieldsProps ?? {};
            this._tabsProps = this.preparePropsCollection(this._fieldsProps);

            [this._labels, this._values, this._hidden, this._readOnly, this._disabled] = this.initFieldsParameters(
                oldFieldsProps,
                formProps.fieldsProps,
                formProps.formMode ?? 'create'
            );
        }

        const oldDataSet = this.getFormDataSet();
        if (oldDataSet !== formProps.dataSet) this.setFormValues(formProps.dataSet, true);

        if (!formProps.noAutoHideDependedFields) this._hidden = this.calculateHiddenFields();
    }

    prepareFieldCollection(
        fieldsProps: IDFormFieldsProps | undefined,
        parent?: IBaseFieldAny
    ): [DModel['_fieldsMap'], DModel['_groupsMap'], DModel['_rootFields'], DModel['_fieldsTree']] {
        const fieldsMap: DModel['_fieldsMap'] = {};
        const groupsMap: DModel['_groupsMap'] = {};

        const rootFields: DModel['_rootFields'] = {};
        const fieldsTree: DModel['_fieldsTree'] = {};
        let i = 0;
        for (const fieldName in fieldsProps) {
            const fieldProps = fieldsProps[fieldName];
            if (fieldsMap[fieldName]) console.error(`The form contains duplicate field names  "${fieldName}"!`);
            const field = new fieldProps.component(fieldName, fieldProps, this, parent) as IBaseFieldAny;

            const groupName = field.getProps().inlineGroup ?? '[__group__]' + i++;

            fieldsMap[fieldName] = field;
            rootFields[fieldName] = field;
            fieldsTree[fieldName] = field;
            if (!groupsMap[groupName]) groupsMap[groupName] = {};
            groupsMap[groupName][fieldName] = field;

            const [plainChildren, , , childrenTree] = field.initChildrenFields();
            if (Object.keys(childrenTree).length > 0) fieldsTree[fieldName] = childrenTree[fieldName];

            for (const childName in plainChildren) {
                if (fieldsMap[childName]) console.error(`The form contains duplicate field names  "${childName}"!`);
                fieldsMap[childName] = plainChildren[childName];
            }
        }
        return [fieldsMap, groupsMap, rootFields, fieldsTree];
    }

    /**
     * Grouping parameters of fields in tabs and inline groups
     * @param fieldsProps
     */
    private preparePropsCollection(fieldsProps: IDFormFieldsProps) {
        const tabsProps: Record<string, Record<string, IDFormFieldsProps>> = {};
        if (!fieldsProps) return tabsProps;
        let i = 1;
        for (const fieldName in fieldsProps) {
            const field = fieldsProps[fieldName];

            const tabName = field.tab ?? '[__default__]';
            const groupName = field.inlineGroup ?? '[__group__]' + i++;

            if (!tabsProps[tabName]) tabsProps[tabName] = {};
            if (!tabsProps[tabName][groupName]) tabsProps[tabName][groupName] = {};
            tabsProps[tabName][groupName][fieldName] = field;
        }

        return tabsProps;
    }

    private initFieldsParameters(
        oldFieldsProps: IDFormFieldsProps | undefined,
        fieldsProps: IDFormFieldsProps | undefined,
        mode: IDFormMode
    ): [Record<string, React.ReactNode | undefined>, Record<string, unknown>, Record<string, boolean>, Record<string, boolean>, Record<string, boolean>] {
        const values: Record<string, unknown> = {};
        const hidden: Record<string, boolean> = {};
        const readOnly: Record<string, boolean> = {};
        const disabled: Record<string, boolean> = {};
        const labels: Record<string, React.ReactNode> = {};

        if (!fieldsProps) return [labels, values, hidden, readOnly, disabled];
        for (const fieldName in fieldsProps) {
            const oldField = oldFieldsProps?.[fieldName];
            const field = fieldsProps[fieldName];

            let fieldValue: unknown = undefined;
            if (oldField === field) fieldValue = this._values[fieldName]; // keep the user entered value if the field props have not changed
            if (mode === 'create' && field.value && !fieldValue) fieldValue = field.value;

            labels[fieldName] = field.label;
            values[fieldName] = fieldValue;
            hidden[fieldName] = !!field.hidden;
            readOnly[fieldName] = !!field.readOnly || mode === 'view';
            disabled[fieldName] = !!field.disabled;
        }

        return [labels, values, hidden, readOnly, disabled];
    }

    /**
     * Calculates the statuses of the visibility of fields on the basis of their dependence on each other
     * @returns Returns an array with new hidden field statuses
     */
    private calculateHiddenFields() {
        const fieldsProps = this.getFieldsProps();
        const result: Record<string, boolean> = {};
        for (const fieldName in fieldsProps) result[fieldName] = this.isFieldMustBeHidden(fieldName);
        return result;
    }

    //endregion

    //region Fields collection getters
    /** return@ field collection (plain list of all fields in all component tabs, including child fields) */
    getFieldsMap() {
        return this._fieldsMap;
    }

    /** @return root fields collection, grouped by inline row groups (if no field rowGroup, group will contain only one field with synthetic key) */
    getGroupsMap() {
        return this._groupsMap;
    }

    /** @return root fields collection (only root fields, without children) */
    getRootFields() {
        return this._rootFields;
    }

    /** @return field collection tree (all fields in all component tabs, including child fields of other containers grouped by containers) */
    getFieldsTree() {
        return this._fieldsTree;
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

    // Values
    /** Get form values */
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

    /** Get form data set (Not to be confused with form values. This is the dataset that was passed to the form) */
    getFormDataSet() {
        return this._dataSet;
    }

    /** @return fields whole map **/
    getFields() {
        return this._fieldsMap;
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
        this._callbacks.onFormValidated?.(this.getFormValues(), this.getFormErrors(), this.isFormSubmitting(), this);
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

    /**
     * @returns a collection of errors of only those visible fields for which there are errors (hidden fields have no errors)
     */
    getFormErrors() {
        return this._errors;
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
            (error: {message: string; code: number}) => {
                if (!this.isFormMounted()) return;
                this.setFormFetching(false);
                this.setFormFetchingFailed(true);
                this._callbacks.onDataFetchError?.(error.message, error.code, this);
                this._callbacks.onDataFetchComplete?.(this);
            }
        );

        this.setFormReady(false);
        this.setFormFetching(true);
        this.setFormFetchingFailed(false);
    }

    /** Return fields properties collection */
    getFieldsProps() {
        return this._fieldsProps;
    }

    /** Return form properties collection */
    getFormProps() {
        return this._formProps;
    }

    //endregion

    //region Submit
    /**
     * Submit form
     */
    submit(
        onSubmitSuccess?: (values: Record<string, unknown>, result: Record<string, unknown> | undefined, model: DModel) => void,
        onSubmitError?: (values: Record<string, unknown>, message: string, code: number, model: DModel) => void,
        onSubmitComplete?: (values: Record<string, unknown>, errors: Record<string, string | undefined>, model: DModel) => void
    ) {
        if (this.isFormSubmitting()) return;
        this.incrementSubmitCount();

        this.setFormSubmitting(true);

        const values = this.getFormValues();

        if (this._formMode === 'create' || this._formMode === 'clone') values.id = '';

        const errors = this.validateForm();

        this._callbacks?.onSubmitValidation?.(values, errors, this);

        if (this.isFormHasError()) {
            this.setFormSubmitting(false);
            onSubmitComplete?.(values, errors, this);
            this._callbacks?.onSubmitComplete?.(values, errors, this);
            return;
        }

        if (!this._callbacks?.onSubmit) {
            this.setFormSubmitting(false);
            onSubmitError?.(values, 'The onSubmit callback not specified', 405, this);
            onSubmitComplete?.(values, errors, this);
            this._callbacks?.onSubmitError?.(values, 'The onSubmit callback not specified', 405, this);
            this._callbacks?.onSubmitComplete?.(values, errors, this);
            return;
        }

        const result = this._callbacks?.onSubmit(this.getFormValues(), this);

        if (HelpersObjects.isPromise(result)) {
            const promiseResult = result as IDFormSubmitResultPromise;
            promiseResult
                .then(promiseResult => {
                    if (!this.isFormMounted()) return;
                    this.setFormSubmitting(false);
                    onSubmitSuccess?.(values, promiseResult.data || values, this);
                    onSubmitComplete?.(values, errors, this);
                    this._callbacks?.onSubmitSuccess?.(values, promiseResult.data || values, this);
                    this._callbacks?.onSubmitComplete?.(values, errors, this);
                })
                .catch(error => {
                    if (!this.isFormMounted()) return;
                    this.setFormSubmitting(false);
                    onSubmitError?.(values, error.message, error.code, this);
                    onSubmitComplete?.(values, errors, this);
                    this._callbacks?.onSubmitError?.(values, error.message, error.code, this);
                    this._callbacks?.onSubmitComplete?.(values, errors, this);
                });

            return;
        }

        if (typeof result === 'object') {
            this.setFormSubmitting(false);
            const objectResult = result as IDFormSubmitResultObject;
            if (objectResult.error?.message) {
                onSubmitError?.(values, objectResult.error.message || '', objectResult.error.code || 400, this);
                this._callbacks?.onSubmitError?.(values, objectResult.error.message || '', objectResult.error.code || 400, this);
            } else {
                onSubmitSuccess?.(values, objectResult.data ?? values, this);
                this._callbacks?.onSubmitSuccess?.(values, objectResult.data ?? values, this);
            }

            onSubmitComplete?.(values, errors, this);
            this._callbacks?.onSubmitComplete?.(values, errors, this);

            return;
        }

        this.setFormSubmitting(false);
        if (typeof result === 'boolean') {
            if (result) {
                onSubmitSuccess?.(values, values, this);
                this._callbacks?.onSubmitSuccess?.(values, values, this);
            } else {
                onSubmitError?.(values, 'Неизвестная ошибка', 400, this);
                this._callbacks?.onSubmitError?.(values, 'Неизвестная ошибка', 400, this);
            }

            onSubmitComplete?.(values, errors, this);
            this._callbacks?.onSubmitComplete?.(values, errors, this);
            return;
        }

        if (typeof result === 'undefined') {
            onSubmitSuccess?.(values, values, this);
            onSubmitComplete?.(values, errors, this);
            this._callbacks?.onSubmitSuccess?.(values, values, this);
            this._callbacks?.onSubmitComplete?.(values, errors, this);
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

    //region Service methods
    /**
     * Hides all depended fields, if root field has no value or hidden
     * @param fieldName
     * @param noEvents - do not emit onHiddenStateChanged callback
     * @param noRerender - do not emit re-rendering
     * @returns
     */
    hideDependedFields(fieldName: string, noEvents?: boolean, noRerender?: boolean) {
        const fieldsProps = this.getFieldsProps();
        const fieldProps = fieldsProps[fieldName];
        if (!fieldProps) return;

        for (const childName in this._fieldsMap) {
            const childField = this._fieldsMap[childName];
            const childProps = childField.getProps();
            if (!childProps?.dependsOn || childProps.dependsOn.indexOf(fieldName) < 0) continue;
            const mustHidden = this.isFieldMustBeHidden(childName);
            childField.setHidden(mustHidden, noEvents, noRerender);
        }
    }

    /**
     * Check if field must be hidden. Field must be hidden if a field on which it depends on has no value or hidden
     * @param fieldName
     * @returns true, if field must be hidden
     */
    private isFieldMustBeHidden(fieldName: string) {
        const fieldsProps = this.getFieldsProps();
        const fieldProps = fieldsProps[fieldName];
        if (!fieldProps) return true;

        if (fieldProps.hidden) return true;
        if (!fieldProps.dependsOn) return false;

        for (const parentName of fieldProps.dependsOn) {
            const parentFieldProps = fieldsProps[parentName];
            if (!parentFieldProps) continue;

            if (parentFieldProps.hidden) return true;

            const parentHasNoValue = !this._values?.[parentName];
            const parentIsHidden = this._hidden[parentName] && !fieldProps.dependsOn; //You can take current hidden status only for the root fields. Others must be updated despite the current hidden status
            if (parentHasNoValue || parentIsHidden) return true;

            if (this.isFieldMustBeHidden(parentName)) return true;
        }

        return false;
    }

    //endregion

    //region Components rerender implementation
    // inline group rerender
    subscribeRenderGroup(tabName: string, groupName: string) {
        return (listener: () => void) => {
            if (!this._groupRenderListeners[tabName]) this._groupRenderListeners[tabName] = {};
            if (!this._groupRenderListeners[tabName][groupName]) this._groupRenderListeners[tabName][groupName] = [];

            this._groupRenderListeners[tabName][groupName] = [...this._groupRenderListeners[tabName][groupName], listener];
            return () => {
                this._groupRenderListeners[tabName][groupName] = this._groupRenderListeners[tabName][groupName].filter(l => l !== listener);
            };
        };
    }

    private emitGroupRender(tabName: string, groupName: string) {
        if (!this._groupRenderSnapshots[tabName]) this._groupRenderSnapshots[tabName] = {};
        const result = this._groupRenderSnapshots[tabName]?.[groupName] ? this._groupRenderSnapshots[tabName][groupName]() + 1 : 0;
        this._groupRenderSnapshots[tabName][groupName] = () => result;

        if (!this._groupRenderListeners?.[tabName]?.[groupName]) return;
        for (const listener of this._groupRenderListeners[tabName][groupName]) listener();
    }

    getGroupRenderSnapshots() {
        return this._groupRenderSnapshots;
    }

    // tab rerender
    subscribeRenderTab(tabName: string) {
        return (listener: () => void) => {
            if (!this._tabRenderListeners[tabName]) this._tabRenderListeners[tabName] = [];

            this._tabRenderListeners[tabName] = [...this._tabRenderListeners[tabName], listener];
            return () => {
                this._tabRenderListeners[tabName] = this._tabRenderListeners[tabName].filter(l => l !== listener);
            };
        };
    }

    private emitTabRender(tabName: string) {
        const result = this._tabRenderSnapshots[tabName] ? this._tabRenderSnapshots[tabName]() + 1 : 0;
        this._tabRenderSnapshots[tabName] = () => result;

        if (!this._tabRenderListeners[tabName]) return;
        for (const listener of this._tabRenderListeners[tabName]) listener();
    }

    getTabRenderSnapshots() {
        return this._tabRenderSnapshots;
    }

    // form rerender
    subscribeRenderForm() {
        return (listener: () => void) => {
            if (!this._formRenderListeners) this._formRenderListeners = [];

            this._formRenderListeners = [...this._formRenderListeners, listener];
            return () => {
                this._formRenderListeners = this._formRenderListeners.filter(l => l !== listener);
            };
        };
    }

    private emitFormRender() {
        const result = this._formRenderSnapshot ? this._formRenderSnapshot() + 1 : 0;
        this._formRenderSnapshot = () => result;

        if (!this._formRenderListeners) return;
        for (const listener of this._formRenderListeners) listener();
    }

    getFormRenderSnapshot() {
        return this._formRenderSnapshot;
    }

    //endregion
}
