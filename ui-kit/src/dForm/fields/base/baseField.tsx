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

export interface IDFormBaseFieldProps<TField extends IBaseFieldAny> extends Record<string, unknown> {
    /** Field React component */
    component: new (fieldName: string, fieldProps: AnyType, model: DModel, parent?: IBaseFieldAny) => TField;

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

export type IDFormFieldProps = IDFormBaseFieldProps<AnyType>;

export type IBaseFieldAny = BaseField<AnyType>;

export class BaseField<TFieldProps extends IDFormBaseFieldProps<AnyType>> {
    /** form field props */
    protected fieldProps: TFieldProps;
    /** field name */
    protected readonly fieldName: string;
    /** form model */
    protected readonly model: DModel;

    protected readonly parent?: IBaseFieldAny;

    /** React component sync(re-render) listener */
    protected _listeners: (() => void)[] = [];
    /** react component sync(re-render) snapshot */
    protected renderSnapshot: number = 0;

    /** Children fields (if this field is container) */
    //protected childrenFields?: Record<string, IBaseFieldAny>;

    constructor(fieldName: string, fieldProps: TFieldProps, model: DModel, parent?: IBaseFieldAny) {
        this.fieldName = fieldName;
        this.fieldProps = fieldProps;
        this.model = model;
        this.parent = parent;
    }



    //region Component render implementation
    protected render(): React.ReactNode {
        return null;
    }

    renderField(noLabel?: boolean): React.ReactNode {
        return this.renderFieldWrapper(this.render(), noLabel);
    }

    protected renderFieldWrapper(field: React.ReactNode, noLabel?: boolean) {
        return (
            <BaseFieldRender key={this.getName()} field={this} noLabel={noLabel}>
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
        if (!noRerender) this.model.emitFieldRender(this.getName());
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
        return this.model.getFieldLabel(this.fieldName);
    }

    /**
     * Sets the field label
     * @param value - new label value
     * @param noEvents - do not emit onLabelChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setLabel(value: React.ReactNode | undefined, noEvents?: boolean, noRerender?: boolean) {
        return this.model.setFieldLabel(this.fieldName, noEvents, noRerender);
    }

    /** @returns field value */
    getValue(): unknown {
        return this.model.getFieldValue(this.fieldName);
    }

    /**
     * Sets a new field value, cause the field to rerender
     * *this function doesn't change the field touch and dirty statuses. You should handle it in the field component!
     * @param value - new value
     * @param noEvents - do not emit onValueChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setValue(value: unknown, noEvents?: boolean, noRerender?: boolean) {
        this.model.setFieldValue(this.fieldName, value, noEvents, noRerender);
    }

    /** @returns the field touched status (a user has set focus to the field) */
    isTouched(): boolean {
        return this.model.isFieldTouched(this.fieldName);
    }

    /**
     * Sets a touched status to the field (a user has set focus to the field)
     * @param value - touched status
     * @param noEvents - do not emit onTouchedStateChanged callback
     */
    setTouched(value: boolean, noEvents?: boolean) {
        return this.model.setFieldTouched(this.fieldName, value, noEvents);
    }

    /** @returns field dirty status */
    isDirty(): boolean {
        return this.model.isFieldDirty(this.fieldName);
    }

    /**
     * Sets a dirty status to the field (a user has changed field value)
     * @param value - dirty status
     * @param noEvents - do not emit onDirtyStateChanged and onFormDirtyStateChanged callbacks
     */
    setDirty(value: boolean, noEvents?: boolean) {
        this.model.setFieldDirty(this.fieldName, value, noEvents);
    }

    /** @returns field disable status */
    isDisabled(): boolean {
        return this.model.isFieldDisabled(this.fieldName);
    }

    /**
     * Sets a disabled status to the field
     * @param value - disabled status
     * @param noEvents - do not emit onDisabledStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setDisabled(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        this.model.setFieldDisabled(this.fieldName, value, noEvents, noRerender);
    }

    /** @returns field read only status  */
    isReadOnly(): boolean {
        return this.model.isFieldReadOnly(this.fieldName);
    }

    /**
     * Sets a read only status to the field
     * @param value - read only status
     * @param noEvents - do not emit onReadOnlyStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setReadOnly(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        this.model.setFieldReadOnly(this.fieldName, value, noEvents, noRerender);
    }

    /** @returns field hidden status  */
    isHidden(): boolean {
        return this.model.isFieldHidden(this.fieldName);
    }

    /**
     * Sets a hidden status to the field
     * @param value - hidden status
     * @param noEvents - do not emit onHiddenStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setHidden(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        this.model.setFieldHidden(this.fieldName, value, noEvents, noRerender);
    }

    /** @returns field ready status  */
    isReady(): boolean {
        return this.model.isFieldReady(this.fieldName);
    }

    /**
     * Sets a ready status to the field (the field is completely initialized, its data is loaded)
     * @param value - ready status
     * @param noEvents - do not emit onReady callback
     */
    setReady(value: boolean, noEvents?: boolean) {
        this.model.setFieldReady(this.fieldName, value, noEvents);
    }

    /** @returns the error text of the field  */
    getError(): string {
        return this.model.getFieldError(this.fieldName);
    }

    /**
     * Sets an error to the field
     * @param value - error text
     * @param noEvents - do not emit onErrorChanged & onFormHasErrors callbacks
     * @param noRerender - do not emit re-rendering
     */
    setError(value: string, noEvents?: boolean, noRerender?: boolean) {
        this.model.setFieldError(this.fieldName, value, noEvents, noRerender);
    }

    /**
     * Validate field
     * @param noEvents - do not emit onValidated callback
     * @param noRerender - do not emit re-rendering
     * @returns error text
     */
    validate(noEvents?: boolean, noRerender?: boolean): string {
        return this.model.validateField(this.fieldName, noEvents, noRerender);
    }

    //endregion


    //region Field rerender implementation
    /** returns React component sync(re-render) listener */
    subscribe(listener: () => void) {
        this._listeners = [...this._listeners, listener];
        return () => {
            this._listeners = this._listeners.filter(l => l !== listener);
        };
    }

    /** return React component sync(re-render) snapshot */
    public getSnapshot() {
        return this.renderSnapshot;
    }

    /** Emit field React component re-render */
    emitRender() {
        this.renderSnapshot++;
        for (const listener of this._listeners) listener();
    }
    //endregion


    initChildrenFields(): [DModel['_fieldsMap'], DModel['_groupsMap'], DModel['_rootFields'], DModel['_treeFields']] {
        return [{}, {}, {}, {}];
    }
}
