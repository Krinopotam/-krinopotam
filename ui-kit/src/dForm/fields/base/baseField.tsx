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

export interface IDFormBaseFieldProps<TField extends IBaseField> extends Record<string, unknown> {
    /** Field React component */
    component: new (fieldName: string, fieldProps: AnyType, model: DModel, parent?: IBaseField) => TField;

    /** Help class */
    helpClass?: string;

    /** Field label */
    label?: string | React.ReactNode;

    /** Field placeholder*/
    placeholder?: string;

    /** tab name */
    tab?: string;

    /** inline group name */
    inlineGroup?: string;

    /** Field default value */
    value?: AnyType;

    /** If field default state is hidden */
    hidden?: boolean;

    /** If field default state is disabled */
    disabled?: boolean;

    /** If field default state is readonly */
    readOnly?: boolean;

    /** List of fields that must be filled in order to display this field */
    dependsOn?: string[];

    /** Field width */
    width?: string | number;

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
    onValueChanged?: (value: unknown, prevValue: unknown, field: TField) => void;

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
    onValidated?: (value: unknown, error: string, isSubmit: boolean, field: TField) => void;
}

export type IDFormAnyFieldProps = IDFormBaseFieldProps<AnyType>;

export type IBaseField = BaseField<IDFormAnyFieldProps>;

export class BaseField<TFieldProps extends IDFormBaseFieldProps<AnyType>> {
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

    /** Children fields (if this field is container) */
    //protected childrenFields?: Record<string, IBaseField>;

    constructor(fieldName: string, fieldProps: TFieldProps, model: DModel, parent?: IBaseField) {
        this.fieldName = fieldName;
        this.fieldProps = fieldProps;
        this.model = model;
        this.parent = parent;
    }

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

    //endregion

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
    updateProps(updatedProps: TFieldProps, noRerender?: boolean) {
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
    getFormModel() {
        return this.model;
    }

    /** @returns field label */
    getLabel() {
        return this.model._labels[this.fieldName];
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
        this.model._labels[this.fieldName] = value;

        if (!noEvents) this.getProps()?.onLabelChanged?.(value, prevValue, this);
        if (!noRerender) this.emitRender();
    }

    /** @returns field value */
    getValue(): unknown {
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
    setValue(value: unknown, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.getValue();
        if (prevValue === value) return;

        const formValues = this.model.getFormValues();
        formValues[this.fieldName] = value;

        if (!noEvents) {
            this.getProps()?.onValueChanged?.(value, prevValue, this);
            this.validate();
        }

        if (!noRerender) {
            this.emitRender();

            for (const field of this.getDependents()) {
                field.setHidden(!value);
            }
            //if (!this.getFormProps().noAutoHideDependedFields) this.model.hideDependedFields(this.fieldName);
        }
    }

    /** @returns the field touched status (a user has set focus to the field) */
    isTouched(): boolean {
        return this.model._touched[this.fieldName] ?? false;
    }

    /**
     * Sets a touched status to the field (a user has set focus to the field)
     * @param value - touched status
     * @param noEvents - do not emit onTouchedStateChanged callback
     */
    setTouched(value: boolean, noEvents?: boolean) {
        const prevValue = this.isTouched();
        if (prevValue === value) return;

        this.model._touched[this.fieldName] = value;

        if (!noEvents) this.getProps()?.onTouchedStateChanged?.(value, this);
    }

    /** @returns field dirty status */
    isDirty(): boolean {
        return this.model._dirty[this.fieldName] ?? false;
    }

    /**
     * Sets a dirty status to the field (a user has changed field value)
     * @param value - dirty status
     * @param noEvents - do not emit onDirtyStateChanged and onFormDirtyStateChanged callbacks
     */
    setDirty(value: boolean, noEvents?: boolean) {
        const prevValue = this.isDirty();
        if (prevValue !== value) return;

        this.model._dirty[this.fieldName] = value;

        if (!noEvents) this.getProps()?.onDirtyStateChanged?.(value, this);

        let formDirty = value;
        if (!value) {
            for (const key in this.model._dirty) {
                const dirty = this.model._dirty[key];
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
        return this.model._disabled[this.fieldName] ?? false;
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
        this.model._disabled[this.fieldName] = value;

        if (!noEvents) this.getProps()?.onDisabledStateChanged?.(value, this);
        if (!noRerender) this.emitRender();
    }

    /** @returns field read only status  */
    isReadOnly(): boolean {
        return this.model._readOnly[this.fieldName] ?? false;
    }

    /**
     * Sets a read only status to the field
     * @param value - read only status
     * @param noEvents - do not emit onReadOnlyStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setReadOnly(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isReadOnly();

        if (prevValue === value) return;

        this.model._readOnly[this.fieldName] = value;

        if (!noEvents) this.getProps()?.onReadOnlyStateChanged?.(value, this);
        if (!noRerender) this.emitRender();
    }

    /** @returns field hidden status  */
    isHidden(): boolean {
        return this.model._hidden[this.fieldName] ?? false;
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

        this.model._hidden[this.fieldName] = value;
        if (!this.getFormProps().noAutoHideDependedFields) this.model.hideDependedFields(this, noEvents, noRerender);

        if (value) this.setReady(false, true); //the hidden fields are not ready because they are not rendered, but form ready status not changed

        //let prevGroupValue = false;
        //const fieldProps = this.getProps();
        //if (fieldProps?.tab && fieldProps.inlineGroup) prevGroupValue = this.isGroupHidden(fieldProps.tab, fieldProps.inlineGroup);

        if (!noEvents) this.getProps()?.onHiddenStateChanged?.(value, this);
        if (!noRerender) this.emitRender();

        //if (!fieldProps?.tab || !fieldProps.inlineGroup) return;
        //const curGroupValue = this.isGroupHidden(fieldProps.tab, fieldProps.inlineGroup);
        //if (prevGroupValue !== curGroupValue) this.emitGroupRender(fieldProps.tab, fieldProps.inlineGroup);
    }

    /** @returns field ready status  */
    isReady(): boolean {
        return this.model._ready[this.fieldName] ?? false;
    }

    /**
     * Sets a ready status to the field (the field is completely initialized, its data is loaded)
     * @param value - ready status
     * @param noEvents - do not emit onReady callback
     */
    setReady(value: boolean, noEvents?: boolean) {
        const prevValue = this.isReady();
        if (prevValue === value) return;

        this.model._ready[this.fieldName] = value;

        if (!noEvents) this.getProps()?.onReadyStateChanged?.(value, this);
        this.model.setFormReady(value, noEvents);
    }

    /** @returns the error text of the field  */
    getError(): string {
        return this.model._errors[this.fieldName] ?? '';
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
            this.getProps()?.onErrorChanged?.(value, this);
            const modelCallbacks = this.model.getModelCallbacks();
            if (value) modelCallbacks.onFormHasErrors?.(this.model.getFormValues(), errors, this.model);
            else {
                if (this.model.isFormHasError()) modelCallbacks.onFormHasErrors?.(this.model.getFormValues(), errors, this.model);
                else modelCallbacks.onFormHasNoErrors?.(this.model.getFormValues(), this.model);
            }
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

    /** @return dependent fields list */
    getDependents(): IBaseField[] {
        const map = this.model.getDependenceMap();
        return map[this.fieldName] ?? [];
    }

    /** @return true if the passed field depends on the given field */
    isDepended(field: IBaseField) {
        const dependentsList = this.getDependents();
        return dependentsList.indexOf(field) > -1;
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

    initChildrenFields(): [Record<string, IBaseField>, Record<string, IBaseField>] {
        return [{}, {}];
    }
}
