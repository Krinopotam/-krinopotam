// noinspection DuplicatedCode,JSUnusedGlobalSymbols

/**
 * @BaseComponent
 * @version 0.0.33.19
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';

import {AnyType, IError} from '@krinopotam/service-types';
import {CallbackControl} from '@src/_shared/classes/callbackControl';
import {DModel, IDFormDataSet, IDFormProps} from '@src/dForm';
import {IAnyFieldProps, IBaseField} from '@src/dForm/fields/base/types/types';
import React, {CSSProperties} from 'react';
import {BaseFieldRender} from './baseFieldRender';
import {ContainerRender} from '@src/dForm/fields/base/containerRender';

export class BaseField<TFieldProps extends IAnyFieldProps> {
    /** form field props */
    protected fieldProps: TFieldProps;
    /** field name */
    protected readonly fieldId: string;
    /** form model */
    protected readonly model: DModel;
    /** parent field */
    protected readonly parent?: IBaseField;

    /** React component sync(re-render) listener */
    protected listeners: (() => void)[] = [];
    /** react component sync(re-render) snapshot */
    protected renderSnapshot: Record<never, never> = {};

    //region Fields collections (if this the field is container)
    /** field collection (plain list of all fields in all component tabs, including child fields) */
    protected fieldsMap: Record<string, IBaseField> = {};

    /** root fields collection (only root fields, without children) */
    protected rootFields: Record<string, IBaseField> = {};

    //endregion

    constructor(fieldId: string, fieldProps: TFieldProps, model: DModel, parent?: IBaseField) {
        this.fieldId = fieldId;
        this.fieldProps = fieldProps;
        this.model = model;
        this.parent = parent;
    }

    prepareChildrenFieldsCollection(): [Record<string, IBaseField>, Record<string, IBaseField>] {
        return [{}, {}];
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    initFieldParameters(_fieldProps: TFieldProps, _formProps: IDFormProps) {
        /* can be implemented in child classes */
    }

    //region Fields methods
    /** @returns get current field properties  */
    getProps() {
        return this.fieldProps;
    }

    /**
     * Set current field properties
     * @param fieldProps - field new properties
     * @param noRerender - do not emit re-rendering
     */
    setProps(fieldProps: TFieldProps, noRerender?: boolean) {
        this.fieldProps = fieldProps;
        if (!noRerender) this.emitRender();
    }

    /** A sign that the component should not grow in width if free space is available. Relevant for narrow components such as CheckBox or Switch */
    noGrowWidth() {
        return false;
    }

    /** A sign that this component itself controls the width of its child components, and they should not have their own width parameters (for example, inlineGroupField) */
    managesChildWidth() {
        return false;
    }

    /** Get field width property */
    getWidth() {
        if (this.parent?.managesChildWidth()) return undefined;
        return this.fieldProps.width;
    }

    /**
     * Set current field properties
     * @param updatedProps - partial field properties to update
     * @param noRerender - do not emit re-rendering
     */
    updateProps(updatedProps: Partial<TFieldProps>, noRerender?: boolean) {
        const curProps = this.getProps() ?? {};
        this.setProps({...curProps, ...updatedProps}, noRerender);
    }

    /** @returns field ID  */
    getId() {
        return this.fieldId;
    }

    /** Get form properties */
    getFormProps() {
        return this.model.getFormProps();
    }

    /** @returns form model  */
    getModel() {
        return this.model;
    }

    /** Return field parent container */
    getParent() {
        return this.parent;
    }

    /** @returns field label */
    getLabel() {
        return this.model.getLabels()[this.fieldId];
    }

    /**
     * Sets the field label
     * @param value - new label value
     * @param noEvents - do not emit onLabelChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setLabel(value: React.ReactNode | undefined, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.getLabel();
        if (prevValue === value) return;
        this.model.getLabels()[this.fieldId] = value;

        if (!noEvents) this.getProps()?.onLabelChanged?.(value, prevValue, this);
        if (!noRerender) this.emitRender();
    }

    /** @return field value */
    getValue(): TFieldProps['defaultValue'] | undefined {
        const formValues = this.model.getValues();
        return formValues[this.fieldId];
    }

    /**
     * Sets a new field value, cause the field to rerender
     * *this function doesn't change the field touch and dirty statuses. You should handle it in the field component!
     * @param value - new value
     * @param noEvents - do not emit onValueChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setValue(value: TFieldProps['defaultValue'] | undefined, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.getValue();
        if (prevValue === value) return;

        const formValues = this.model.getValues();
        formValues[this.fieldId] = value;

        if (!noEvents) {
            this.getProps()?.onValueChanged?.(value, prevValue, this);
            this.model.getFormProps().onFormValuesChanged?.(this.fieldId, formValues, this.model.getFormApi(), new CallbackControl());
            this.validate(noEvents, noRerender);
        }

        if (!noRerender) this.emitRender();

        this.model.lockDependedFields(this, noEvents, noRerender);
    }

    /** @return true if field value is empty array, object, string, undefined or null (if value=0 it is not empty) */
    isEmptyValue() {
        const val = this.getValue();
        if (val === null) return true;
        if (IsArray(val) && val.length === 0) return true;
        if (typeof val === 'object' && Object.keys(val as Record<string, AnyType>).length === 0) return true;
        return val !== 0 && !val;
    }

    /** @returns the field touched status (a user has set focus to the field) */
    isTouched(): boolean {
        return this.model.getTouchedFields()[this.fieldId] ?? false;
    }

    /**
     * Sets a touched status to the field (a user has set focus to the field)
     * @param value - touched status
     * @param noEvents - do not emit onTouchedStateChanged callback
     */
    setTouched(value: boolean, noEvents?: boolean) {
        const prevValue = this.isTouched();
        if (prevValue === value) return;

        this.model.getTouchedFields()[this.fieldId] = value;

        if (!noEvents) this.getProps()?.onTouchedStateChanged?.(value, this);
    }

    /** @returns field dirty status */
    isDirty(): boolean {
        return this.model.getDirtyFields()[this.fieldId] ?? false;
    }

    /**
     * Sets a dirty status to the field (a user has changed field value)
     * @param value - dirty status
     * @param noEvents - do not emit onDirtyStateChanged and onFormDirtyStateChanged callbacks
     */
    setDirty(value: boolean, noEvents?: boolean) {
        const prevValue = this.isDirty();
        if (prevValue === value) return;

        this.model.getDirtyFields()[this.fieldId] = value;

        if (!noEvents) this.getProps()?.onDirtyStateChanged?.(value, this);

        let formDirty = value;
        if (!value) {
            for (const key in this.model.getDirtyFields()) {
                const dirty = this.model.getDirtyFields()[key];
                if (dirty) {
                    formDirty = true;
                    break;
                }
            }
        }

        this.model.setFormDirty(formDirty, noEvents);
    }

    /** @returns field disable status */
    isDisabled(): boolean {
        if (
            this.model.isFormDisabled() ||
            (this.getProps().nonEditable === 'disabled' && this.model.getFormMode() === 'update') ||
            this.getParent()?.isDisabled()
        )
            return true;
        return this.model.getDisabledFields()[this.fieldId] ?? false;
    }

    /**
     * Sets a disabled status to the field
     * @param value - disabled status
     * @param noEvents - do not emit onDisabledStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setDisabled(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isDisabled();
        if (prevValue === value) return;
        this.model.getDisabledFields()[this.fieldId] = value;

        if (!noEvents) this.getProps()?.onDisabledStateChanged?.(value, this);
        if (!noRerender) this.model.emitFormRender(); //it is necessary to re-render the entire form, since disabled fields may change the behavior of containers
    }

    /** @returns field read only status  */
    isReadOnly(): boolean {
        if (
            this.model.isFormReadOnly() ||
            ((this.getProps().nonEditable === true || this.getProps().nonEditable === 'readOnly') && this.model.getFormMode() === 'update') ||
            this.getParent()?.isReadOnly()
        )
            return true;
        return this.model.getReadOnlyFields()[this.fieldId] ?? false;
    }

    /**
     * Sets a read only status to the field
     * @param value - read only status
     * @param noEvents - do not emit onReadOnlyStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setReadOnly(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.model.getReadOnlyFields()[this.fieldId];

        if (prevValue === value) return;

        this.model.getReadOnlyFields()[this.fieldId] = value;

        if (!noEvents) this.getProps()?.onReadOnlyStateChanged?.(value, this);
        if (!noRerender) this.emitRender();
    }

    /** @returns field hidden status  */
    isHidden(): boolean {
        return this.model.getHiddenFields()[this.fieldId] ?? false;
    }

    /**
     * Sets a hidden status to the field
     * @param value - hidden status
     * @param noEvents - do not emit onHiddenStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setHidden(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isHidden();
        if (prevValue === value) return;

        this.model.getHiddenFields()[this.fieldId] = value;
        this.model.lockDependedFields(this, noEvents, noRerender);

        if (value) {
            this.setError('', noEvents, noRerender); //hidden fields can't have error
            this.setReady(false, true); //the hidden fields are not ready because they are not rendered
        }

        if (!noEvents) this.getProps()?.onHiddenStateChanged?.(value, this);
        if (!noRerender) this.model.emitFormRender(); //it is necessary to re-render the entire form, since hidden fields may change the behavior of containers
    }

    /** @returns field ready status  */
    isReady(): boolean {
        if (this.model.isFormFetching() || this.model.isFormFetchingFailed()) return false;
        const fetchingFields = this.model.getFetchingFields();
        if (fetchingFields[this.fieldId]) return false;
        return this.model.getReadyFields()[this.fieldId] ?? false;
    }

    /**
     * Sets a ready status to the field (the field is completely initialized, its data is loaded)
     * @param value - ready status
     * @param noEvents - do not emit onReady callback
     */
    setReady(value: boolean, noEvents?: boolean) {
        const prevValue = this.isReady();
        if (prevValue === value) return;

        this.model.getReadyFields()[this.fieldId] = value;

        if (!noEvents) this.getProps()?.onReadyStateChanged?.(value, this);
        this.model.checkFormReadyState();
    }

    /** @returns the error text of the field  */
    getError(): string {
        return this.model.getErrors()[this.fieldId] ?? '';
    }

    /**
     * Sets an error to the field
     * @param value - error text
     * @param noEvents - do not emit onErrorChanged & onFormHasErrors callbacks
     * @param noRerender - do not emit re-rendering
     */
    setError(value: string, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.getError();
        if (prevValue === value) return;

        const errors = this.model.getErrors();

        if (!value) delete errors[this.fieldId];
        else errors[this.fieldId] = value;

        if (!noEvents) {
            const fieldProps = this.getProps();
            fieldProps?.onErrorChanged?.(value, this);
            const formProps = this.model.getFormProps();
            const values = this.model.getValues();
            const dataSet = this.model.getFormDataSet();
            if (this.model.isFormHasError()) formProps.onFormHasErrors?.(values, dataSet, errors, this.model.getFormApi(), new CallbackControl());
            else formProps.onFormHasNoErrors?.(values, dataSet, this.model.getFormApi(), new CallbackControl());
        }

        if (!noRerender) this.emitRender();
    }

    /**
     * Validate field
     * @param noEvents - do not emit onValidated callback
     * @param noRerender - do not emit re-rendering
     * @returns error text
     */
    validate(noEvents?: boolean, noRerender?: boolean): string {
        //hidden fields shouldn't be validated
        const rules = this.getProps().rules ?? [];
        const formRules = this.getFormProps().validationRules?.[this.fieldId] ?? [];
        const error = !this.isHidden() ? this.model.getValidator().validateValue(this.getValue(), this.model, rules.concat(formRules)) : '';

        this.setError(error, noEvents);

        if (!noEvents && !this.isHidden()) this.getProps()?.onValidated?.(this.getValue(), error, this.model.isFormSubmitting(), this);

        if (!noRerender) this.emitRender();
        return error;
    }

    /** Will called on form initialization data fetch */
    onInitialFetch() {
        this.fetchData();
    }

    /** @returns field fetching status  */
    isFetching() {
        const fetchingFields = this.model.getFetchingFields();
        return fetchingFields[this.fieldId] === 1;
    }

    /** @returns field fetching failed status  */
    isFetchingFailed() {
        const fetchingFields = this.model.getFetchingFields();
        return fetchingFields[this.fieldId] === -1;
    }

    fetchData() {
        const dataSource = this.fieldProps.onFieldDataFetch?.(this);
        if (!dataSource) return;
        const fetchingFields = this.model.getFetchingFields();
        fetchingFields[this.fieldId] = 1;
        this.model.checkFormReadyState();
        this.emitRender();

        dataSource.then(
            (result: {data: Record<string, AnyType>}) => {
                if (!this.model.isFormMounted()) return;
                fetchingFields[this.fieldId] = 0;
                this.fieldProps.onFieldDataFetchSuccess?.(result, this);

                const values = result.data as IDFormDataSet;
                this.model.setValues(values);

                this.model.checkFormReadyState();
                this.emitRender();
            },
            (error: IError) => {
                if (!this.model.isFormMounted()) return;
                fetchingFields[this.fieldId] = -1;
                this.fieldProps.onFieldDataFetchError?.(error, this);

                this.model.checkFormReadyState();
                this.emitRender();
            }
        );
    }

    /** @returns field highlighted status for CONSTRUCTOR MODE  */
    isHighlighted(): boolean {
        return this.model.getHighlightedId() === this.fieldId;
    }

    /** Sets field highlighted status for CONSTRUCTOR MODE  */
    setHighlighted(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevId = this.model.getHighlightedId();
        const newId = value ? this.getId() : '';
        if (prevId === newId) return;

        this.model.setHighlightedId(newId);
        const prevField = prevId ? this.model.getField(prevId) : undefined;
        if (!noEvents) this.getFormProps()?.onHighlightedFieldChanged?.(value ? this : undefined, prevField, undefined, this.model.getFormApi());
        if (noRerender) return;

        this.emitRender();
        if (!prevField) return;
        prevField?.emitRender();
    }

    /** Toggles field highlighted status for CONSTRUCTOR MODE  */
    toggleHighlighted(noEvents?: boolean, noRerender?: boolean) {
        this.setHighlighted(!this.isHighlighted(), noEvents, noRerender);
    }

    //endregion

    //region Fields collection methods (if the field is container)
    /** return@ field collection (plain list of all fields in all component tabs, including child fields) */
    getFieldsMap() {
        return this.fieldsMap;
    }

    /** @return root fields collection (only root fields, without children) */
    getRootFields() {
        return this.rootFields;
    }

    /** @return true if field contains another fields */
    isContainer() {
        return Object.keys(this.rootFields).length > 0;
    }

    /** @return true if field contains visible fields */
    hasVisibleChildren() {
        for (const fieldName in this.rootFields) {
            const field = this.rootFields[fieldName];
            if ((!field.isContainer() && !field.isHidden()) || field.hasVisibleChildren()) return true;
        }

        return false;
    }

    //endregion

    //region Component render implementation
    protected render(): React.ReactNode {
        throw new Error('Render method must be implemented in a derived class of the BaseField class');
    }

    renderField({
        altLabel = undefined,
        extraContainerStyle = undefined,
    }: {altLabel?: React.ReactNode; extraContainerStyle?: CSSProperties} = {}): React.ReactNode {
        return this.renderFieldItem({children: this.render(), altLabel, extraContainerStyle: extraContainerStyle});
    }

    protected renderFieldItem({
        children,
        altLabel,
        extraContainerStyle,
        noHighlightContainer,
    }: {
        children: React.ReactNode;
        altLabel?: React.ReactNode;
        extraContainerStyle?: CSSProperties;
        noHighlightContainer?: boolean;
    }): React.JSX.Element {
        if (this.noContainer()) {
            if (this.noItemWrapper()) return <>{children}</>;
            return (
                <BaseFieldRender field={this} altLabel={altLabel}>
                    {children}
                </BaseFieldRender>
            );
        }

        if (this.noItemWrapper()) {
            return (
                <ContainerRender key={this.getId()} field={this} style={extraContainerStyle} noHighlightContainer={noHighlightContainer}>
                    {children}
                </ContainerRender>
            );
        }

        return (
            <ContainerRender key={this.getId()} field={this} style={extraContainerStyle} noHighlightContainer={noHighlightContainer}>
                <BaseFieldRender field={this} altLabel={altLabel}>
                    {children}
                </BaseFieldRender>
            </ContainerRender>
        );
    }

    protected noItemWrapper() {
        return this.getProps().noItemWrapper;
    }

    protected noContainer() {
        return this.getProps().noContainer;
    }

    /** @return field highlighted style */
    getHighlightedStyle(): CSSProperties {
        return {border: 'dashed 1px blue'};
    }

    /** Is field can have value */
    canHaveValue() {
        return true;
    }

    //endregion

    //region Field rerender implementation
    /** returns React component sync(re-render) listener */
    subscribe(listener: () => void) {
        this.listeners = [...this.listeners, listener];
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    /** return React component sync(re-render) snapshot */
    getSnapshot() {
        return this.renderSnapshot;
    }

    /** Emit field React component re-render */
    emitRender() {
        this.renderSnapshot = {};
        for (const listener of this.listeners) listener();
    }

    //endregion
}
