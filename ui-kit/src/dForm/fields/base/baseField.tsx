// noinspection DuplicatedCode,JSUnusedGlobalSymbols

/**
 * @BaseComponent
 * @version 0.0.33.19
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React from 'react';

import {AnyType} from '@krinopotam/service-types'
import {LabelTooltipType} from "antd/es/form/FormItemLabel";
import {IDFormComponentProps} from "@src/dynamicForm/components/baseComponent";
import {BaseFieldRender} from "./baseFieldRender";
import {DModel, IDFormProps} from "@src/dForm";
import {IRuleType} from "@src/dForm/validators/baseValidator";

export interface IDFormFieldPropsOnly extends Record<string, unknown> {
    /** Field React component */
    component: React.FC<IDFormComponentProps>;

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
    requiredMark?: boolean

    /** Config tooltip info */
    tooltip?: LabelTooltipType;

    /** Field CSS style */
    style?: React.CSSProperties

    /** Row field container CSS style */
    rowStyle?: React.CSSProperties

    /** Field validation rules */
    rules?: IRuleType[]
}

export interface IDFormFieldCallbacks<TField> extends Record<string, unknown> {
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

export type IDFormBaseFieldCallbacks = IDFormFieldCallbacks<BaseField<IDFormFieldPropsOnly>>

export type  IDFormFieldProps = IDFormFieldPropsOnly & IDFormBaseFieldCallbacks


/** Fields properties collection */
export type IDFormFieldsProps = Record<string, IDFormFieldProps>;


export class BaseField<TFieldProps extends IDFormFieldPropsOnly> {
    /** form properties */
    protected readonly formProps: IDFormProps
    /** form model */
    protected readonly model: DModel
    /** field name properties */
    protected readonly fieldName: string
    /** field initial properties */
    protected readonly fieldProps: TFieldProps & IDFormFieldCallbacks<typeof this>
    /** field validation rules */
    protected readonly rules: IRuleType[]

    //region Field states
    /** field label */
    private _label?: React.ReactNode
    /** field value */
    private _value?: unknown;
    /** field touched status */
    private _touched?: boolean;
    /** field dirty status */
    private _dirty?: boolean;
    /** field read only status */
    private _readOnly?: boolean;
    /** field disabled status */
    private _disabled?: boolean;
    /** field hidden status */
    private _hidden?: boolean;
    /** field ready status */
    private _ready?: boolean
    /** field error status */
    private _error?: string

    //endregion

    constructor(formProps: IDFormProps, model: DModel, fieldProps: TFieldProps & IDFormFieldCallbacks<typeof this>, fieldName: string) {
        this.formProps = formProps;
        this.fieldName = fieldName;
        this.fieldProps = fieldProps;
        this.rules = fieldProps.rules ?? [];
        this.model = model;
    }

    protected renderField() {
        this.renderFieldWrapper(null);
    }

    protected renderFieldWrapper(field: React.ReactNode) {
        return <BaseFieldRender field={this}>
            {field}
        </BaseFieldRender>
    }

    emitFieldRender() {
        //TODO: implement field rerender
    }

    //region Fields methods
    /** @returns field initial properties  */
    public getProps() {
        return this.fieldProps;
    }

    /** @returns field name  */
    public getName() {
        return this.fieldName;
    }

    /** @returns form model  */
    public getFormModel() {
        return this.model;
    }

    /** @returns field label */
    public getLabel() {
        return this._label;
    }

    /**
     * Sets the field label
     * @param value - new label value
     * @param noEvents - do not emit onLabelChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setLabel(value: React.ReactNode | undefined, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.getLabel();
        if (prevValue === value) return;

        this._label = value;
        if (!noEvents) this.fieldProps.onLabelChanged?.(value, prevValue, this);
        if (!noRerender) this.emitFieldRender();
    }


    /** @returns field value */
    public getValue(): unknown {
        return this._value;
    }

    /**
     * Sets a new field value, cause the field to rerender
     * *this function doesn't change the field touch and dirty statuses. You should handle it in the field component!
     * @param value - new value
     * @param noEvents - do not emit onValueChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setValue(value: unknown, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.getValue();
        if (prevValue === value) return;

        this._value = value;

        if (!noEvents) {
            this.fieldProps?.onValueChanged?.(value, prevValue, this);
            this.validate(noEvents, noRerender);
        }

        if (!noRerender) {
            this.emitFieldRender();
            if (!this.formProps.noAutoHideDependedFields) this.model.hideDependedFields(this);
        }
    }


    /** @returns the field touched status (a user has set focus to the field) */
    public isTouched(): boolean {
        return !!this._touched;
    }

    /**
     * Sets a touched status to the field (a user has set focus to the field)
     * @param value - touched status
     * @param noEvents - do not emit onTouchedStateChanged callback
     */
    public setTouched(value: boolean, noEvents?: boolean) {
        const prevValue = this._touched;
        if (prevValue === value) return;

        this._touched = value;
        if (!noEvents) this.fieldProps?.onTouchedStateChanged?.(value, this);
    }

    /** @returns field dirty status */
    public isDirty(): boolean {
        return !!this._dirty;
    }

    /**
     * Sets a dirty status to the field (a user has changed field value)
     * @param value - dirty status
     * @param noEvents - do not emit onDirtyStateChanged and onFormDirtyStateChanged callbacks
     */
    public setDirty(value: boolean, noEvents?: boolean) {
        const prevValue = this._dirty;
        if (prevValue === value) return;

        this._dirty = value;

        if (!noEvents) this.fieldProps.onDirtyStateChanged?.(value, this);

        this.model.setFormDirty(value, noEvents);
    }

    /** @returns field disable status */
    public isDisabled(): boolean {
        return !!this._disabled;
    }

    /**
     * Sets a disabled status to the field
     * @param value - disabled status
     * @param noEvents - do not emit onDisabledStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setDisabled(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this._disabled;
        if (prevValue === value) return;

        this._disabled = value;

        if (!noEvents) this.fieldProps.onDisabledStateChanged?.(value, this);
        if (!noRerender) this.emitFieldRender();
    }

    /** @returns field read only status  */
    public isReadOnly(): boolean {
        return !!this._readOnly || this.model.getFormMode() === 'view';
    }

    /**
     * Sets a read only status to the field
     * @param value - read only status
     * @param noEvents - do not emit onReadOnlyStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setReadOnly(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this._readOnly;
        if (prevValue === value) return;

        this._readOnly = value;

        if (!noEvents) this.fieldProps?.onReadOnlyStateChanged?.(value, this);
        if (!noRerender) this.emitFieldRender();
    }

    /** @returns field hidden status  */
    public isHidden(): boolean {
        return !!this._hidden
    }

    /**
     * Sets a hidden status to the field
     * @param value - hidden status
     * @param noEvents - do not emit onHiddenStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setHidden(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this._hidden;
        this._hidden = value;

        if (prevValue === value) return;

        if (value) this.setReady(false, true); //the hidden fields are not ready because they are not rendered, but form ready status not changed

        if (!noEvents) this.fieldProps?.onHiddenStateChanged?.(value, this);
        if (!noRerender) {
            this.emitFieldRender();
            if (!this.formProps.noAutoHideDependedFields) this.model.hideDependedFields(this);
        }

        //TODO: implements group/tab hiddden
    }

    /** @returns field ready status  */
    public isReady(): boolean {
        return !!this._ready;
    }

    /**
     * Sets a ready status to the field (the field is completely initialized, its data is loaded)
     * @param value - ready status
     * @param noEvents - do not emit onReady callback
     */
    public setReady(value: boolean, noEvents?: boolean) {
        const prevValue = this._ready;
        if (prevValue === value) return;

        this._ready = value;

        if (!noEvents) {
            this.fieldProps.onReadyStateChanged?.(value, this);
            this.model.setFormReady(this, noEvents);
        }
    }

    /** @returns the error text of the field  */
    public getError(): string {
        return this._error || '';
    }

    /**
     * Sets an error to the field
     * @param value - error text
     * @param noEvents - do not emit onErrorChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setError(value: string, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this._error;
        if (prevValue === value) return;

        this._error = value;

        if (!noEvents) this.fieldProps.onErrorChanged?.(value, this);
        if (!noRerender) this.emitFieldRender();
        //TODO: implement onFormHasError callback
    }

    /**
     * Validate field
     * @param noEvents - do not emit onValidated callback
     * @param noRerender - do not emit re-rendering
     * @returns error text
     */
    public validate(noEvents?: boolean, noRerender?: boolean): string {
        //hidden fields shouldn't be validated
        const error = !this._hidden ? this.model.validateValue(this.getValue(), this.rules) : '';

        this.setError(error, noEvents, noRerender);

        if (!noEvents && !this._hidden) this.fieldProps.onValidated?.(this.getValue(), error, this.model.isFormSubmitting(), this);

        if (!noRerender) this.emitFieldRender();

        return error;
    }

    //endregion

}
