// noinspection DuplicatedCode,JSUnusedGlobalSymbols

/**
 * @BaseComponent
 * @version 0.0.33.19
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React from 'react';

import {AnyType} from '@krinopotam/service-types';
import {LabelTooltipType} from 'antd/es/form/FormItemLabel';
import {BaseFieldRender} from './baseFieldRender';
import {DModel} from '@src/dForm';
import {IRuleType} from '@src/dForm/validators/baseValidator';
import {IsArray} from "@krinopotam/js-helpers/helpersObjects/isArray";

export interface IBaseFieldProps<TField extends IBaseField, TValue> extends Record<string, unknown> {
    /** Field React component */
    component: new (fieldName: string, fieldProps: AnyType, model: DModel, parent?: IBaseField) => TField;

    /** Help class */
    helpClass?: string;

    /** Field label */
    label?: string | React.ReactNode;

    /** Field placeholder*/
    placeholder?: string;

    /** inline group name */
    inlineGroup?: string;

    /** Field default value */
    value?: TValue;

    /** Whether the field default state is hidden */
    hidden?: boolean;

    /** Whether the field default state is disabled */
    disabled?: boolean;

    /** Whether the field default state is readonly */
    readOnly?: boolean;

    /** Whether the field can not be edited (the field will have readOnly state if formMode is 'update') */
    nonEditable?: boolean;

    /** List of fields that must be filled in order to display this field */
    dependsOn?: string[];

    /** Field width */
    width?: string | number;

    /** Field container height auto resize  */
    autoHeightResize?: boolean;

    /** Get focus by default */
    autoFocus?: boolean;

    /** Mark Field Label as Required */
    requiredMark?: boolean;

    /** Config tooltip info */
    tooltip?: LabelTooltipType;

    /** Field CSS style */
    style?: React.CSSProperties;

    /** Row field container CSS style */
    rowStyle?: React.CSSProperties;

    /** Field validation rules */
    rules?: IRuleType[];

    /*************** Callbacks **************/
    /** fires when the value of a field changed */
    onValueChanged?: (value: TValue, prevValue: TValue, field: TField) => void;

    /** fires when the touched state of a field changed */
    onTouchedStateChanged?: (state: boolean, field: TField) => void;

    /** fires when the dirty state of a field changed */
    onDirtyStateChanged?: (state: boolean, field: TField) => void;

    /** fires when the error of a field changed */
    onErrorChanged?: (error: string, field: TField) => void;

    /** fires when the hidden state of a field changed */
    onHiddenStateChanged?: (state: boolean, field: TField) => void;

    /** fires when read only state of a field changed */
    onReadOnlyStateChanged?: (state: boolean, field: TField) => void;

    /** fires when label of a field changed */
    onLabelChanged?: (label: React.ReactNode, prevLabel: React.ReactNode, field: TField) => void;

    /** fires when the disable state of a field changes  */
    onDisabledStateChanged?: (state: boolean, field: TField) => void;

    /** fires when a field is completely initialized, its data is loaded */
    onReadyStateChanged?: (state: boolean, field: TField) => void;

    /** fires when a field validated */
    onValidated?: (value: TValue, error: string, isSubmit: boolean, field: TField) => void;
}

export type IAnyFieldProps = IBaseFieldProps<AnyType, AnyType>;

export type IBaseField = BaseField<IAnyFieldProps>;

export class BaseField<TFieldProps extends IAnyFieldProps> {
    /** form field props */
    protected fieldProps: TFieldProps;
    /** field name */
    protected readonly fieldName: string;
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

    constructor(fieldName: string, fieldProps: TFieldProps, model: DModel, parent?: IBaseField) {
        this.fieldName = fieldName;
        this.fieldProps = fieldProps;
        this.model = model;
        this.parent = parent;
    }

    initChildrenFields(): [Record<string, IBaseField>, Record<string, IBaseField>] {
        return [{}, {}];
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

    /**
     * Set current field properties
     * @param updatedProps - partial field properties to update
     * @param noRerender - do not emit re-rendering
     */
    updateProps(updatedProps: Partial<TFieldProps>, noRerender?: boolean) {
        const curProps = this.getProps() ?? {};
        this.setProps({...curProps, ...updatedProps}, noRerender);
    }

    /** @returns field name  */
    getName() {
        return this.fieldName;
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
        return this.model.getFormLabels()[this.fieldName];
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
        this.model.getFormLabels()[this.fieldName] = value;

        if (!noEvents) this.getProps()?.onLabelChanged?.(value, prevValue, this);
        if (!noRerender) this.emitRender();
    }

    /** @return field value */
    getValue(): TFieldProps['value'] | undefined {
        const formValues = this.model.getFormValues();
        return formValues[this.fieldName];
    }

    /**
     * Sets a new field value, cause the field to rerender
     * *this function doesn't change the field touch and dirty statuses. You should handle it in the field component!
     * @param value - new value
     * @param noEvents - do not emit onValueChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setValue(value: TFieldProps['value'] | undefined, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.getValue();
        if (prevValue === value) return;

        const formValues = this.model.getFormValues();
        formValues[this.fieldName] = value;

        if (!noEvents) {
            this.getProps()?.onValueChanged?.(value, prevValue, this);
            this.model.getFormProps().onFormValuesChanged?.(this.fieldName, formValues, this.model.getFormApi());
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
        if (typeof val === 'object' && Object.keys(val as Record<string, unknown>).length === 0) return true;
        return val !== 0 && !val;
    }

    /** @returns the field touched status (a user has set focus to the field) */
    isTouched(): boolean {
        return this.model.getFormTouchedFields()[this.fieldName] ?? false;
    }

    /**
     * Sets a touched status to the field (a user has set focus to the field)
     * @param value - touched status
     * @param noEvents - do not emit onTouchedStateChanged callback
     */
    setTouched(value: boolean, noEvents?: boolean) {
        const prevValue = this.isTouched();
        if (prevValue === value) return;

        this.model.getFormTouchedFields()[this.fieldName] = value;

        if (!noEvents) this.getProps()?.onTouchedStateChanged?.(value, this);
    }

    /** @returns field dirty status */
    isDirty(): boolean {
        return this.model.getFormDirtyFields()[this.fieldName] ?? false;
    }

    /**
     * Sets a dirty status to the field (a user has changed field value)
     * @param value - dirty status
     * @param noEvents - do not emit onDirtyStateChanged and onFormDirtyStateChanged callbacks
     */
    setDirty(value: boolean, noEvents?: boolean) {
        const prevValue = this.isDirty();
        if (prevValue === value) return;

        this.model.getFormDirtyFields()[this.fieldName] = value;

        if (!noEvents) this.getProps()?.onDirtyStateChanged?.(value, this);

        let formDirty = value;
        if (!value) {
            for (const key in this.model.getFormDirtyFields()) {
                const dirty = this.model.getFormDirtyFields()[key];
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
        return this.model.getFormDisabledFields()[this.fieldName] ?? false;
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
        this.model.getFormDisabledFields()[this.fieldName] = value;

        if (!noEvents) this.getProps()?.onDisabledStateChanged?.(value, this);
        if (!noRerender) this.model.emitFormRender(); //it is necessary to re-render the entire form, since disabled fields may change the behavior of containers
    }

    /** @returns field read only status  */
    isReadOnly(): boolean {
        return this.model.getFormReadOnlyFields()[this.fieldName] ?? false;
    }

    /**
     * Sets a read only status to the field
     * @param value - read only status
     * @param noEvents - do not emit onReadOnlyStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setReadOnly(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isReadOnly();
        if (this.getProps().nonEditable && this.model.getFormMode() === 'update') value = true;

        if (prevValue === value) return;

        this.model.getFormReadOnlyFields()[this.fieldName] = value;

        if (!noEvents) this.getProps()?.onReadOnlyStateChanged?.(value, this);
        if (!noRerender) this.emitRender();
    }

    /** @returns field hidden status  */
    isHidden(): boolean {
        return this.model.getFormHiddenFields()[this.fieldName] ?? false;
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

        this.model.getFormHiddenFields()[this.fieldName] = value;
        this.model.lockDependedFields(this, noEvents, noRerender);

        if (value) {
            this.setError('', noEvents, noRerender); //hidden fields can't have error
            this.setReady(false, true); //the hidden fields are not ready because they are not rendered, but form ready status not changed
        }

        if (!noEvents) this.getProps()?.onHiddenStateChanged?.(value, this);
        if (!noRerender) this.model.emitFormRender(); //it is necessary to re-render the entire form, since hidden fields may change the behavior of containers
    }

    /** @returns field ready status  */
    isReady(): boolean {
        return this.model.getFormReadyFields()[this.fieldName] ?? false;
    }

    /**
     * Sets a ready status to the field (the field is completely initialized, its data is loaded)
     * @param value - ready status
     * @param noEvents - do not emit onReady callback
     */
    setReady(value: boolean, noEvents?: boolean) {
        const prevValue = this.isReady();
        if (prevValue === value) return;

        this.model.getFormReadyFields()[this.fieldName] = value;

        if (!noEvents) this.getProps()?.onReadyStateChanged?.(value, this);
        this.model.setFormReady(value, noEvents);
    }

    /** @returns the error text of the field  */
    getError(): string {
        return this.model.getFormErrors()[this.fieldName] ?? '';
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

        const errors = this.model.getFormErrors();

        if (!value) delete errors[this.fieldName];
        else errors[this.fieldName] = value;

        if (!noEvents) {
            const fieldProps = this.getProps()
            fieldProps?.onErrorChanged?.(value, this);
            const formProps = this.model.getFormProps()
            const values = this.model.getFormValues();
            const dataSet = this.model.getFormDataSet();
            if (this.model.isFormHasError()) formProps.onFormHasErrors?.(values, dataSet, errors, this.model.getFormApi());
            else formProps.onFormHasNoErrors?.(values, dataSet, this.model.getFormApi());
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
        const formRules = this.getFormProps().validationRules?.[this.fieldName] ?? [];
        const error = !this.isHidden() ? this.model.getValidator().validateValue(this.getValue(), this.model, rules.concat(formRules)) : '';

        this.setError(error, noEvents);

        if (!noEvents && !this.isHidden()) this.getProps()?.onValidated?.(this.getValue(), error, this.model.isFormSubmitting(), this);

        if (!noRerender) this.emitRender();
        return error;
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
        return null;
    }

    renderField(altLabel?: React.ReactNode): React.ReactNode {
        return this.renderFieldWrapper(this.render(), altLabel);
    }

    protected renderFieldWrapper(field: React.ReactNode, altLabel?: React.ReactNode) {
        return (
            <BaseFieldRender key={this.getName()} field={this} altLabel={altLabel}>
                {field}
            </BaseFieldRender>
        );
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
