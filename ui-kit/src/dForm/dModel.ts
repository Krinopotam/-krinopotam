// noinspection DuplicatedCode

/**
 * @DynamicFormModel
 * @version 0.0.38.17
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IDFormDataSet, IDFormDataSourcePromise, IDFormFieldValidationRules, IDFormMode, IDFormProps} from './dForm';
import {HelpersObjects} from '@krinopotam/js-helpers';

import {BaseValidator} from './validators/baseValidator';
import React from 'react';
import {IBaseFieldAny, IDFormFieldProps} from '@src/dForm/fields/base/baseField';
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

    /** validation rules */
    private _validationRules: IDFormFieldValidationRules = {};

    /** the form data set instance */
    private _dataSet: IDFormDataSet | undefined = undefined;

    /** field labels */
    private _labels: Record<string, React.ReactNode | undefined> = {};

    /** field values */
    private _values: Record<string, unknown> = {};

    /** touched field statuses */
    private _touched: Record<string, boolean | undefined> = {};

    /** dirty field statuses */
    private _dirty: Record<string, boolean | undefined> = {};

    /** error field statuses */
    private _errors: Record<string, string> = {};

    /** hidden field statuses */
    private _hidden: Record<string, boolean | undefined> = {};

    /** hidden tabs statuses */
    private _hiddenTabs: Record<string, boolean | undefined> = {};

    /** read only field statuses */
    private _readOnly: Record<string, boolean | undefined> = {};

    /** read only tabs statuses */
    private _readOnlyTabs: Record<string, boolean | undefined> = {};

    /** disabled field statuses */
    private _disabled: Record<string, boolean | undefined> = {};

    /** disabled tabs statuses */
    private _disabledTabs: Record<string, boolean | undefined> = {};

    /** readiness field statuses (the field is completely initialized, its data is loaded) */
    private _ready: Record<string, boolean | undefined> = {};

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
    private _validator: BaseValidator;

    /** field rerender listeners */
    private _fieldRenderListeners: Record<string, (() => unknown)[]> | Record<string, never> = {};

    /** field rerender keys snapshots */
    private _fieldRenderSnapshots: Record<string, () => number> | Record<string, never> = {};

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

    public reinitModel(formProps: IDFormProps, callbacks: IDFormModelCallbacks) {
        this._callbacks = callbacks;

        if (this._formProps === formProps) return;

        //the form props have changed
        this._formProps = formProps;
        this._formMode = formProps.formMode ?? 'create';
        this._formReadOnly = !!formProps.readOnly;
        this._validationRules = formProps.validationRules ?? ({} as IDFormFieldValidationRules);

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

        if (!formProps.noAutoHideDependedFields) this._hidden = this.calculateHiddenFields(this.getFieldsProps(), this.getFormValues(), this._hidden);
    }

    public prepareFieldCollection(
        fieldsProps: IDFormFieldsProps | undefined,
        parent?: IBaseFieldAny
    ): [DModel['_fieldsMap'], DModel['_groupsMap'], DModel['_rootFields'], DModel['_fieldsTree']] {
        const fieldsMap: DModel['_fieldsMap'] = {};
        const groupsMap: DModel['_groupsMap'] = {};

        const rootFields: DModel['_rootFields'] = {};
        const treeFields: DModel['_fieldsTree'] = {};
        let i = 0;
        for (const fieldName in fieldsProps) {
            const fieldProps = fieldsProps[fieldName];
            if (fieldsMap[fieldName]) console.warn(`The form contains duplicate field names  "${fieldName}"!`);
            const field = new fieldProps.component(fieldName, fieldProps, this, parent) as IBaseFieldAny;

            const groupName = field.getProps().inlineGroup ?? '[__group__]' + i++;

            fieldsMap[fieldName] = field;
            rootFields[fieldName] = field;
            treeFields[fieldName] = field;
            if (!groupsMap[groupName]) groupsMap[groupName] = {};
            groupsMap[groupName][fieldName] = field;

            const [plainChildren, , , treeChildren] = field.initChildrenFields();
            if (Object.keys(treeChildren).length > 0) treeFields[fieldName] = treeChildren;

            for (const childName in plainChildren) {
                if (fieldsMap[childName]) console.warn(`The form contains duplicate field names  "${childName}"!`);
                fieldsMap[childName] = plainChildren[childName];
            }
        }
        return [fieldsMap, groupsMap, rootFields, treeFields];
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
     * @param fieldsProps
     * @param values
     * @param hiddenFields
     * @param values
     * @param hiddenFields
     * @returns Returns an array with new hidden field statuses
     */
    private calculateHiddenFields(fieldsProps: IDFormFieldsProps, values: Record<string, unknown>, hiddenFields: Record<string, boolean | undefined>) {
        const result: Record<string, boolean> = {};
        for (const fieldName in fieldsProps) result[fieldName] = this.isFieldMustBeHidden(fieldName, fieldsProps, values, hiddenFields);
        return result;
    }

    //endregion

    /**
     * @return fields collection, grouped by row groups (if now field rowGroup, group will contain only one field with synthetic key)
     */


    //region Fields collection getters
    /** return@ field collection (plain list of all fields in all component tabs, including child fields) */
    public getFieldsMap() {
        return this._fieldsMap;
    }

    /** @return root fields collection, grouped by inline row groups (if no field rowGroup, group will contain only one field with synthetic key) */
    public getGroupsMap() {
        return this._groupsMap;
    }

    /** @return root fields collection (only root fields, without children) */
    public getRootFields() {
        return this._rootFields;
    }

    /** @return field collection tree (all fields in all component tabs, including child fields of other containers grouped by containers) */
    public getFieldsTree() {
        return this._fieldsTree;
    }
    //endregion

    /**
     * @returns tabs properties (fields properties grouped by tabs)
     */
    public getTabsProps() {
        return this._tabsProps;
    }

    /**
     * @param tabName
     * @returns fields properties grouped by tabs and inline groups
     */
    public getGroupsProps(tabName: string) {
        return this._tabsProps[tabName];
    }

    //region Fields methods
    /**
     * @param fieldName - field name
     * @returns field label
     */
    public getFieldLabel(fieldName: string) {
        return this._labels[fieldName];
    }

    /**
     * Sets the field label
     * @param fieldName - field name
     * @param value - new label value
     * @param noEvents - do not emit onLabelChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setFieldLabel(fieldName: string, value: React.ReactNode | undefined, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.getFieldLabel(fieldName);
        if (prevValue === value) return;
        this._labels[fieldName] = value;

        if (!noEvents) this.getFieldProps(fieldName)?.onLabelChanged?.(value, prevValue, this._fieldsMap[fieldName]!);
        if (!noRerender) this.emitFieldRender(fieldName);
    }

    /**
     * @param fieldName - field name
     * @returns field value
     */
    public getFieldValue(fieldName: string): unknown {
        return this._values[fieldName];
    }

    /**
     * Sets a new field value, cause the field to rerender
     * *this function doesn't change the field touch and dirty statuses. You should handle it in the field component!
     * @param fieldName - field name
     * @param value - new value
     * @param noEvents - do not emit onValueChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setFieldValue(fieldName: string, value: unknown, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.getFieldValue(fieldName);
        if (prevValue === value) return;

        this._values[fieldName] = value;

        if (!noEvents) {
            this.getFieldProps(fieldName)?.onValueChanged?.(value, prevValue, this._fieldsMap[fieldName]!);
            this.validateField(fieldName);
        }

        if (!noRerender) {
            this.emitFieldRender(fieldName);
            if (!this.getFormProps().noAutoHideDependedFields) this.hideDependedFields(fieldName);
        }
    }

    /**
     * @param fieldName - field name
     * @returns the field touched status (a user has set focus to the field)
     */
    public isFieldTouched(fieldName: string): boolean {
        return !!this._touched[fieldName];
    }

    /**
     * Sets a touched status to the field (a user has set focus to the field)
     * @param fieldName - field name
     * @param value - touched status
     * @param noEvents - do not emit onTouchedStateChanged callback
     */
    public setFieldTouched(fieldName: string, value: boolean, noEvents?: boolean) {
        const prevValue = this.isFieldTouched(fieldName);
        if (prevValue === value) return;

        this._touched[fieldName] = value;

        if (!noEvents) this.getFieldProps(fieldName)?.onTouchedStateChanged?.(value, this._fieldsMap[fieldName]!);
    }

    /**
     * @param fieldName - field name
     * @returns field dirty status (a user has changed field value)
     */
    public isFieldDirty(fieldName: string): boolean {
        return !!this._dirty[fieldName];
    }

    /**
     * Sets a dirty status to the field (a user has changed field value)
     * @param fieldName - field name
     * @param value - dirty status
     * @param noEvents - do not emit onDirtyStateChanged and onFormDirtyStateChanged callbacks
     */
    public setFieldDirty(fieldName: string, value: boolean, noEvents?: boolean) {
        const prevValue = this.isFieldDirty(fieldName);
        if (prevValue !== value) return;

        this._dirty[fieldName] = value;

        if (!noEvents) this.getFieldProps(fieldName)?.onDirtyStateChanged?.(value, this._fieldsMap[fieldName]!);

        let formDirty = value;
        if (!value) {
            for (const key in this._dirty) {
                if (this.isFieldDirty(key)) {
                    formDirty = true;
                    break;
                }
            }
        }

        this.setFormDirty(formDirty, noEvents);
    }

    /**
     * @param fieldName - field name
     * @returns field disable status
     */
    public isFieldDisabled(fieldName: string): boolean {
        return !!this._disabled[fieldName];
    }

    /**
     * Sets a disabled status to the field
     * @param fieldName - field name
     * @param value - disabled status
     * @param noEvents - do not emit onDisabledStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setFieldDisabled(fieldName: string, value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isFieldDisabled(fieldName);
        if (prevValue === value) return;
        this._disabled[fieldName] = value;

        if (!noEvents) this.getFieldProps(fieldName)?.onDisabledStateChanged?.(value, this._fieldsMap[fieldName]!);
        if (!noRerender) this.emitFieldRender(fieldName);
    }

    /**
     * @param fieldName - field name
     * @returns field read only status
     */
    public isFieldReadOnly(fieldName: string): boolean {
        return !!this._readOnly[fieldName] || this._formMode === 'view';
    }

    /**
     * Sets a read only status to the field
     * @param fieldName - field name
     * @param value - read only status
     * @param noEvents - do not emit onReadOnlyStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setFieldReadOnly(fieldName: string, value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isFieldReadOnly(fieldName);

        if (prevValue === value) return;

        this._readOnly[fieldName] = value;

        if (!noEvents) this.getFieldProps(fieldName)?.onReadOnlyStateChanged?.(value, this._fieldsMap[fieldName]!);
        if (!noRerender) this.emitFieldRender(fieldName);
    }

    /**
     * @param fieldName - field name
     * @returns field hidden status
     */
    public isFieldHidden(fieldName: string): boolean {
        return !!this._hidden[fieldName];
    }

    /**
     * Sets a hidden status to the field
     * @param fieldName - field name
     * @param value - hidden status
     * @param noEvents - do not emit onHiddenStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setFieldHidden(fieldName: string, value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isFieldHidden(fieldName);
        if (prevValue === value) return;

        this._hidden[fieldName] = value;
        if (!this.getFormProps().noAutoHideDependedFields) this.hideDependedFields(fieldName, noEvents, noRerender);

        if (value) this.setFieldReady(fieldName, false, true); //the hidden fields are not ready because they are not rendered, but form ready status not changed

        let prevGroupValue = false;
        const fieldProps = this.getFieldProps(fieldName);
        if (fieldProps?.tab && fieldProps.inlineGroup) prevGroupValue = this.isGroupHidden(fieldProps.tab, fieldProps.inlineGroup);

        if (!noEvents) fieldProps?.onHiddenStateChanged?.(value, this._fieldsMap[fieldName]!);

        if (noRerender) return;

        this.emitFieldRender(fieldName);

        if (!fieldProps?.tab || !fieldProps.inlineGroup) return;
        const curGroupValue = this.isGroupHidden(fieldProps.tab, fieldProps.inlineGroup);
        if (prevGroupValue !== curGroupValue) this.emitGroupRender(fieldProps.tab, fieldProps.inlineGroup);
    }

    /**
     * @param fieldName - field name
     * @returns field ready status (the field is completely initialized, its data is loaded)
     */
    public isFieldReady(fieldName: string): boolean {
        return !!this._ready[fieldName];
    }

    /**
     * Sets a ready status to the field (the field is completely initialized, its data is loaded)
     * @param fieldName - field name
     * @param value - ready status
     * @param noEvents - do not emit onReady callback
     */
    public setFieldReady(fieldName: string, value: boolean, noEvents?: boolean) {
        const prevValue = this.isFieldReady(fieldName);
        if (prevValue === value) return;

        this._ready[fieldName] = value;

        if (!noEvents) this.getFieldProps(fieldName)?.onReadyStateChanged?.(value, this._fieldsMap[fieldName]!);
        this.setFormReady(value, noEvents);
    }

    /**
     * @param fieldName - field name
     * @returns the error text of the field
     */
    public getFieldError(fieldName: string): string {
        const errors = this.getFormErrors();
        return errors[fieldName] ?? '';
    }

    /**
     * Sets an error to the field
     * @param fieldName - field name
     * @param value - error text
     * @param noEvents - do not emit onErrorChanged & onFormHasErrors callbacks
     * @param noRerender - do not emit re-rendering
     */
    public setFieldError(fieldName: string, value: string, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.getFieldError(fieldName);
        if (prevValue === value) return;

        const errors = this.getFormErrors();

        if (!value) delete errors[fieldName];
        else errors[fieldName] = value;

        if (!noEvents) {
            this.getFieldProps(fieldName)?.onErrorChanged?.(value, this._fieldsMap[fieldName]!);

            if (value) this._callbacks?.onFormHasErrors?.(this.getFormValues(), errors, this);
            else {
                if (this.isFormHasError()) this._callbacks?.onFormHasErrors?.(this.getFormValues(), errors, this);
                else this._callbacks?.onFormHasNoErrors?.(this.getFormValues(), this);
            }
        }

        if (!noRerender) this.emitFieldRender(fieldName);
    }

    /**
     * Validate field
     * @param fieldName
     * @param noEvents - do not emit onValidated callback
     * @param noRerender - do not emit re-rendering
     * @returns error text
     */
    public validateField(fieldName: string, noEvents?: boolean, noRerender?: boolean): string {
        //hidden fields shouldn't be validated
        const rules = this.getFieldProps(fieldName).rules ?? [];
        const formRules = this._validationRules[fieldName] ?? [];
        const error = !this.isFieldHidden(fieldName) ? this._validator.validateValue(this.getFieldValue(fieldName), this, rules.concat(formRules)) : '';

        this.setFieldError(fieldName, error, noEvents);

        if (!noEvents && !this.isFieldHidden(fieldName))
            this.getFieldProps(fieldName)?.onValidated?.(this.getFieldValue(fieldName), error, this.isFormSubmitting(), this._fieldsMap[fieldName]!);

        if (!noRerender) this.emitFieldRender(fieldName);
        return error;
    }

    /**
     * Get field props
     * @param fieldName
     */
    public getFieldProps(fieldName: string) {
        const field = this._fieldsMap[fieldName];
        return field?.getProps();
    }

    /**
     * Set field props
     * @param fieldName - field name
     * @param fieldProps - new field properties
     * @param noRerender - do not emit re-rendering
     */
    public setFieldProps(fieldName: string, fieldProps: IDFormFieldProps, noRerender?: boolean) {
        const field = this._fieldsMap[fieldName];
        field?.setProps(fieldProps, noRerender);
    }

    /**
     * partial update field props
     * @param fieldName
     * @param updatedProps
     */
    public updateFieldProps(fieldName: string, updatedProps: Record<string, unknown>) {
        const curProps = this.getFieldProps(fieldName);
        if (!curProps) return;
        this.setFieldProps(fieldName, {...curProps, ...updatedProps});
    }

    //endregion

    //region Groups
    /**
     * Gets the current hidden status of the inline group
     * @returns inline group hidden status
     */
    public isGroupHidden(tabName: string, groupName: string): boolean {
        if (!this._tabsProps?.[tabName]?.[groupName]) return true;

        for (const fieldName in this._tabsProps[tabName][groupName]) {
            if (!this.isFieldHidden(fieldName)) return false;
        }

        return true;
    }

    /**
     * Sets a hidden status to the inline group
     * @param tabName
     * @param groupName
     * @param value - hidden status
     */
    public setGroupHidden(tabName: string, groupName: string, value: boolean) {
        if (!this._tabsProps?.[tabName]?.[groupName]) return;

        let prevValue = this.isGroupHidden(tabName, groupName);
        for (const fieldName in this._tabsProps[tabName][groupName]) {
            if (!this.isFieldHidden(fieldName)) prevValue = false;
            this.setFieldHidden(fieldName, value);
        }

        if (prevValue === value) return;
        this.emitGroupRender(tabName, groupName);
    }

    //endregion

    //region Tabs

    // hidden
    /**
     * Gets the current hidden status of the tab
     * @returns Tab hidden status
     */
    public isTabHidden(tabName: string): boolean {
        return !!this._hiddenTabs[tabName];
    }

    /**
     * Sets a hidden status to the tab
     * @param tabName
     * @param value - hidden status
     */
    public setTabHidden(tabName: string, value: boolean) {
        const tab = this._tabsProps[tabName];
        if (!tab) return;

        const prevValue = this.isTabHidden(tabName);
        this._hiddenTabs[tabName] = value;

        for (const groupName in tab) {
            const group = tab[groupName];
            for (const fieldName in group) this.setFieldHidden(fieldName, value, true);
        }

        if (prevValue !== value) this._callbacks?.onTabHiddenStateChanged?.(tabName, value, this);

        this.emitTabRender(tabName);
    }

    // readOnly
    /**
     * Gets the current read only status of the tab
     * @returns Tab read only status
     */
    public isTabReadOnly(tabName: string): boolean {
        return !!this._readOnlyTabs[tabName] || this._formMode === 'view';
    }

    /**
     * Sets a read only status to the tab and to the all tab fields
     * *this function doesn't call onFieldReadOnlyStateChanged callbacks of the fields
     * @param tabName
     * @param value - read only status
     */
    public setTabReadOnly(tabName: string, value: boolean) {
        const tab = this._tabsProps[tabName];
        if (!tab) return;

        const prevValue = this.isTabReadOnly(tabName);
        this._readOnlyTabs[tabName] = value;

        for (const groupName in tab) {
            const group = tab[groupName];
            for (const fieldName in group) this.setFieldReadOnly(fieldName, value, true);
        }

        if (prevValue !== value) this._callbacks?.onTabReadOnlyStateChanged?.(tabName, value, this);

        this.emitTabRender(tabName);
    }

    // disables
    /**
     * Gets the current disabled status of the tab
     * @returns Tab disabled status
     */
    public isTabDisabled(tabName: string): boolean {
        return !!this._disabledTabs[tabName];
    }

    /**
     * Sets a disabled status to the tab and to the all tab fields
     * *this function doesn't call onFieldDisabledStateChanged callbacks of the fields
     * @param tabName
     * @param value - disabled status
     */
    public setTabDisabled(tabName: string, value: boolean) {
        const tab = this._tabsProps[tabName];
        if (!tab) return;

        const prevValue = this.isTabDisabled(tabName);
        this._disabledTabs[tabName] = value;

        for (const groupName in tab) {
            const group = tab[groupName];
            for (const fieldName in group) this.setFieldDisabled(fieldName, value, true);
        }

        if (prevValue !== value) this._callbacks?.onTabDisabledStateChanged?.(tabName, value, this);

        this.emitTabRender(tabName);
    }

    //endregion

    //region Form methods
    /** Get form ID */
    public getFormId() {
        return this._formId;
    }

    // Values
    /** Get form values */
    public getFormValues() {
        return this._values;
    }

    /** Update form values
     * @param dataSet - new data set
     * @param noEvents- does not raise events/callbacks and the field rerender
     */
    public setFormValues(dataSet: IDFormDataSet | undefined, noEvents?: boolean) {
        const newDataSet = noEvents ? dataSet : this._callbacks.onDataSetChange?.(dataSet, this) ?? dataSet;

        this._dataSet = newDataSet;
        const fieldsProps = this.getFieldsProps();
        for (const fieldName in fieldsProps) {
            this.setFieldValue(fieldName, newDataSet?.[fieldName], noEvents);
        }
    }

    /** Get form data set (Not to be confused with form values. This is the dataset that was passed to the form) */
    public getFormDataSet() {
        return this._dataSet;
    }

    // Dirty
    /**
     * Gets the current dirty status of the form (a user has changed any field values on the form)
     * @returns Form dirty status
     */
    public isFormDirty(): boolean {
        return this._formDirty;
    }

    /**
     * Sets a dirty status to the form  (a user has changed any field values on the form)
     * @param value - dirty status
     * @param noEvents - does not raise events/callbacks
     */
    private setFormDirty(value: boolean, noEvents?: boolean) {
        const prevValue = this.isFormDirty();
        this._formDirty = value;

        if (!noEvents && prevValue !== value) this._callbacks?.onFormDirtyStateChanged?.(value, this);
    }

    // ReadOnly
    /**
     * Gets the current read only status of the form
     * @returns Form read only status
     */
    public isFormReadOnly(): boolean {
        return this.getFormMode() === 'view' || this._formReadOnly;
    }

    /**
     * Sets a read only status to the form
     * *this function doesn't call onFieldReadOnlyStateChanged callbacks of the fields
     * @param value - read only status
     */
    public setFormReadOnly(value: boolean) {
        const prevValue = this.isFormReadOnly();
        this._formReadOnly = value;

        const fieldsProps = this.getFieldsProps();
        for (const fieldName in fieldsProps) {
            this._readOnly[fieldName] = value;
        }

        if (prevValue !== value) {
            this._callbacks?.onFormReadOnlyStateChanged?.(value, this);
            this.emitFormRender();
        }
    }

    // Initialization

    /**
     * The form began initialization (renders for the first time)
     */
    public setFormInit() {
        this.setFormReady(false); //At the time of initialization, the form is not yet ready
        this._callbacks?.onFormInit?.(this);
    }

    // Ready
    /**
     * Gets the current ready status of the form (all fields are completely initialized, data are loaded)
     * @returns Form ready status
     */
    public isFormReady(): boolean | undefined {
        return this._formReady;
    }

    /**
     * Trying to set a ready status to the form  (all fields are completely initialized, data are loaded)
     * Can be set true only if the form is initialized and all visible fields has ready status
     * *this function doesn't call onFieldReady callbacks of the fields
     * @param value - ready status
     * @param noEvents - do not emit onReady callback
     */
    public setFormReady(value: boolean, noEvents?: boolean) {
        setTimeout(() => {
            const prevValue = this.isFormReady();

            if (this.isFormFetching() || this.isFormFetchingFailed()) value = false;

            if (!value) {
                this._formReady = value;
                if (prevValue !== value && !noEvents) this._callbacks?.onFormReadyStateChanged?.(value, this);
                return;
            }

            const fieldsProps = this.getFieldsProps();
            //set form ready status only if every visible field from fieldsProps has set ready status
            for (const fieldName in fieldsProps) {
                if (this.isFieldHidden(fieldName)) continue;
                if (!this.isFieldReady(fieldName)) {
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
     * @param noEvents - does not raise the field validation
     * @returns a collection of errors of only those visible fields for which there are errors (hidden fields have no errors)
     */
    public validateForm(noEvents?: boolean) {
        const fieldsProps = this.getFieldsProps();
        for (const fieldName in fieldsProps) {
            this.validateField(fieldName, noEvents);
            if (!noEvents) this.emitFieldRender(fieldName);
        }

        this.emitFormRender();
        this._callbacks.onFormValidated?.(this.getFormValues(), this.getFormErrors(), this.isFormSubmitting(), this);
        return this.getFormErrors();
    }

    /**
     * @returns the form submitting status
     */
    public isFormSubmitting() {
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
    public isFormFetching() {
        return this._isFetching;
    }

    /** Set the form fetching status */
    private setFormFetching(value: boolean) {
        const prevValue = this.isFormFetching();
        this._isFetching = value;
        if (prevValue !== value) this.emitFormRender();
    }

    /** Set form fetching failed status */
    public setFormFetchingFailed(value: boolean) {
        this._isFetchingFailed = value;
    }

    /** Returns the status that means that the form tried to load the data, but it failed */
    public isFormFetchingFailed() {
        return this._isFetchingFailed;
    }

    /**
     * @returns is the form has error
     */
    public isFormHasError() {
        const errors = this.getFormErrors();
        for (const fieldName in errors) {
            if (this.getFieldError(fieldName)) return true;
        }

        return false;
    }

    /**
     * @returns a collection of errors of only those visible fields for which there are errors (hidden fields have no errors)
     */
    public getFormErrors() {
        return this._errors;
    }

    /** Get the form component mounted status */
    public isFormMounted() {
        return this._isFormMounted;
    }

    /** Set the form component mounted status */
    public setFormMounted(value: boolean) {
        this._isFormMounted = value;
    }

    /** Get current form mode */
    public getFormMode() {
        return this._formMode;
    }

    //endregion

    //region Fetch
    public fetchData() {
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
    public getFieldsProps() {
        return this._fieldsProps;
    }

    /** Return form properties collection */
    public getFormProps() {
        return this._formProps;
    }

    //endregion

    //region Submit
    /**
     * Submit form
     */
    public submit(
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
    public getSubmitCount() {
        return this._submitCount;
    }

    /** Increment the number of submit attempts  */
    public incrementSubmitCount() {
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
    public hideDependedFields(fieldName: string, noEvents?: boolean, noRerender?: boolean) {
        const fieldsProps = this.getFieldsProps();
        const fieldProps = fieldsProps[fieldName];
        if (!fieldProps) return;

        for (const childName in fieldsProps) {
            const childProps = fieldsProps[childName];
            if (!childProps?.dependsOn || childProps.dependsOn.indexOf(fieldName) < 0) continue;
            const mustHidden = this.isFieldMustBeHidden(childName, fieldsProps, this.getFormValues(), this._hidden);
            this.setFieldHidden(childName, mustHidden, noEvents, noRerender);
        }
    }

    /**
     * Check if field must be hidden. Field must be hidden if a field on which it depends on has no value or hidden
     * @param fieldName
     * @param fieldsProps
     * @param values
     * @param hiddenFields
     * @param fieldsProps
     * @param values
     * @param hiddenFields
     * @param fieldsProps
     * @param values
     * @param hiddenFields
     * @returns true, if field must be hidden
     */
    private isFieldMustBeHidden(
        fieldName: string,
        fieldsProps: IDFormFieldsProps,
        values: Record<string, unknown> | undefined,
        hiddenFields: Record<string, boolean | undefined>
    ) {
        const field = fieldsProps[fieldName];
        if (!field) return true;

        if (field.hidden) return true;
        if (!field.dependsOn) return false;

        for (const parentName of field.dependsOn) {
            const parentField = fieldsProps[parentName];
            if (!parentField) continue;

            if (parentField.hidden) return true;

            const parentHasNoValue = !values?.[parentName];
            const parentIsHidden = hiddenFields[parentName] && !field.dependsOn; //You can take current hidden status only for the root fields. Others must be updated despite the current hidden status
            if (parentHasNoValue || parentIsHidden) return true;

            if (this.isFieldMustBeHidden(parentName, fieldsProps, values, hiddenFields)) return true;
        }

        return false;
    }

    //endregion

    //region Components rerender implementation
    // field rerender
    public subscribeRenderField(fieldName: string) {
        return (listener: () => void) => {
            if (!this._fieldRenderListeners[fieldName]) this._fieldRenderListeners[fieldName] = [];

            this._fieldRenderListeners[fieldName] = [...this._fieldRenderListeners[fieldName], listener];
            return () => {
                this._fieldRenderListeners[fieldName] = this._fieldRenderListeners[fieldName].filter(l => l !== listener);
            };
        };
    }

    public emitFieldRender(fieldName: string) {
        const field = this._fieldsMap[fieldName];
        field.emitRender();
    }

    public getFieldRenderSnapshots() {
        return this._fieldRenderSnapshots;
    }

    // inline group rerender
    public subscribeRenderGroup(tabName: string, groupName: string) {
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

    public getGroupRenderSnapshots() {
        return this._groupRenderSnapshots;
    }

    // tab rerender
    public subscribeRenderTab(tabName: string) {
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

    public getTabRenderSnapshots() {
        return this._tabRenderSnapshots;
    }

    // form rerender
    public subscribeRenderForm() {
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

    public getFormRenderSnapshot() {
        return this._formRenderSnapshot;
    }

    //endregion
}
