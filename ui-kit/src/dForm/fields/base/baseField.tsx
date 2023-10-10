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
    component: new (fieldName: string, fieldProps: AnyType, model: DModel) => TField;

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
    protected readonly fieldProps: TFieldProps;
    /** field name */
    protected readonly fieldName: string;
    /** form model */
    protected readonly model: DModel;

    /** Children fields (if this field is container) */
    //protected childrenFields?: Record<string, IBaseFieldAny>;

    constructor(fieldName: string, fieldProps: TFieldProps, model: DModel) {
        this.fieldName = fieldName;
        this.fieldProps = fieldProps;
        this.model = model;
    }

    protected render(): React.ReactNode {
        return null;
    }

    public renderField(): React.ReactNode {
        return this.renderFieldWrapper(this.render());
    }

    protected renderFieldWrapper(field: React.ReactNode) {
        return (
            <BaseFieldRender key={this.getName()} field={this}>
                {field}
            </BaseFieldRender>
        );
    }

    emitFieldRender() {
        this.model.emitFieldRender(this.fieldName);
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
        return this.model.getFieldLabel(this.fieldName);
    }

    /**
     * Sets the field label
     * @param value - new label value
     * @param noEvents - do not emit onLabelChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setLabel(value: React.ReactNode | undefined, noEvents?: boolean, noRerender?: boolean) {
        return this.model.setFieldLabel(this.fieldName, noEvents, noRerender);
    }

    /** @returns field value */
    public getValue(): unknown {
        return this.model.getFieldValue(this.fieldName);
    }

    /**
     * Sets a new field value, cause the field to rerender
     * *this function doesn't change the field touch and dirty statuses. You should handle it in the field component!
     * @param value - new value
     * @param noEvents - do not emit onValueChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setValue(value: unknown, noEvents?: boolean, noRerender?: boolean) {
        this.model.setFieldValue(this.fieldName, value, noEvents, noRerender);
    }

    /** @returns the field touched status (a user has set focus to the field) */
    public isTouched(): boolean {
        return this.model.isFieldTouched(this.fieldName);
    }

    /**
     * Sets a touched status to the field (a user has set focus to the field)
     * @param value - touched status
     * @param noEvents - do not emit onTouchedStateChanged callback
     */
    public setTouched(value: boolean, noEvents?: boolean) {
        return this.model.setFieldTouched(this.fieldName, value, noEvents);
    }

    /** @returns field dirty status */
    public isDirty(): boolean {
        return this.model.isFieldDirty(this.fieldName);
    }

    /**
     * Sets a dirty status to the field (a user has changed field value)
     * @param value - dirty status
     * @param noEvents - do not emit onDirtyStateChanged and onFormDirtyStateChanged callbacks
     */
    public setDirty(value: boolean, noEvents?: boolean) {
        this.model.setFieldDirty(this.fieldName, value, noEvents);
    }

    /** @returns field disable status */
    public isDisabled(): boolean {
        return this.model.isFieldDisabled(this.fieldName);
    }

    /**
     * Sets a disabled status to the field
     * @param value - disabled status
     * @param noEvents - do not emit onDisabledStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setDisabled(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        this.model.setFieldDisabled(this.fieldName, value, noEvents, noRerender);
    }

    /** @returns field read only status  */
    public isReadOnly(): boolean {
        return this.model.isFieldReadOnly(this.fieldName);
    }

    /**
     * Sets a read only status to the field
     * @param value - read only status
     * @param noEvents - do not emit onReadOnlyStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setReadOnly(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        this.model.setFieldReadOnly(this.fieldName, value, noEvents, noRerender);
    }

    /** @returns field hidden status  */
    public isHidden(): boolean {
        return this.model.isFieldHidden(this.fieldName);
    }

    /**
     * Sets a hidden status to the field
     * @param value - hidden status
     * @param noEvents - do not emit onHiddenStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    public setHidden(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        this.model.setFieldHidden(this.fieldName, value, noEvents, noRerender);
    }

    /** @returns field ready status  */
    public isReady(): boolean {
        return this.model.isFieldReady(this.fieldName);
    }

    /**
     * Sets a ready status to the field (the field is completely initialized, its data is loaded)
     * @param value - ready status
     * @param noEvents - do not emit onReady callback
     */
    public setReady(value: boolean, noEvents?: boolean) {
        this.model.setFieldReady(this.fieldName, value, noEvents);
    }

    /** @returns the error text of the field  */
    public getError(): string {
        return this.model.getFieldError(this.fieldName);
    }

    /**
     * Sets an error to the field
     * @param value - error text
     * @param noEvents - do not emit onErrorChanged & onFormHasErrors callbacks
     * @param noRerender - do not emit re-rendering
     */
    public setError(value: string, noEvents?: boolean, noRerender?: boolean) {
        this.model.setFieldError(this.fieldName, value, noEvents, noRerender);
    }

    /**
     * Validate field
     * @param noEvents - do not emit onValidated callback
     * @param noRerender - do not emit re-rendering
     * @returns error text
     */
    public validate(noEvents?: boolean, noRerender?: boolean): string {
        return this.model.validateField(this.fieldName, noEvents, noRerender);
    }

    //endregion

    initChildrenFields(): [DModel['_plainFields'], DModel['_rootFields'], DModel['_treeFields']] {
        return [{}, {}, {}];
    }
}
