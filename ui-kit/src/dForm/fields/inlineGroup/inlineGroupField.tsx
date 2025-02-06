import {AnyType} from "@krinopotam/service-types";
import {IBaseFieldProps} from "@src/dForm/fields/base";
import {BaseField} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {InlineGroupRender} from '@src/dForm/fields/inlineGroup/inlineGroupRender';
import {IDFormFieldsProps} from "@src/dForm";

export interface IInlineGroupFieldProps<TFieldsProps extends Record<string, AnyType> = Record<string, AnyType>> extends IBaseFieldProps<InlineGroupField, undefined> {
    /** Inline fields properties */
    fieldsProps: IDFormFieldsProps<TFieldsProps>;
}

export class InlineGroupField extends BaseField<IInlineGroupFieldProps> {
    override initChildrenFields(): [InlineGroupField['fieldsMap'], InlineGroupField['rootFields']] {
        const groupProps = this.getProps();
        const fieldsProps = groupProps.fieldsProps;
        if (!groupProps.fieldsProps) return [{}, {}];

        [this.fieldsMap, this.rootFields] = this.getModel().prepareFieldCollection(fieldsProps, this);
        return [this.fieldsMap, this.rootFields];
    }

    protected override render() {
        return <InlineGroupRender field={this} />;
    }

    /** In the base class, almost all components are wrapped in the BaseField wrapper. This component is displayed without wrapping */
    override renderField(): React.ReactNode {
        return this.render();
    }

    //region Fields collection getters
    /** return@ field collection (plain list of all fields in all component tabs, including child fields) */
    override getFieldsMap() {
        return this.fieldsMap;
    }

    /** @return root fields collection (only root fields, without children) */
    override getRootFields() {
        return this.rootFields;
    }

    //endregion

    //region Field methods
    /**
     * Handling an erroneous InlineGroup value get
     */
    override getValue() {
        return undefined;
    }

    /**
     * Handling an erroneous InlineGroup value setting
     */
    override setValue() {
        /* field can't have value */
    }

    /** Is field can has value */
    override canHaveValue() {
        return false;
    }

    /** Child fields can't have own width settings (must be 100% width) */
    override managesChildWidth() {
        return true
    }

    /**
     * Sets a disabled status to the field
     * @param value - disabled status
     * @param noEvents - do not emit onDisabledStateChanged and onTabDisabledStateChanged callbacks
     * @param noRerender - do not emit re-rendering
     */
    override setDisabled(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isDisabled();
        if (prevValue === value) return;

        for (const fieldName in this.rootFields) {
            const field = this.rootFields[fieldName];
            field.setDisabled(value, noEvents, true); //current container will rerender, no field rerender need
        }

        super.setDisabled(value, noEvents, noRerender);
    }

    /**
     * Sets a read only status to the field
     * @param value - read only status
     * @param noEvents - do not emit onReadOnlyStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    override setReadOnly(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isReadOnly();
        if (prevValue === value) return;

        for (const fieldName in this.rootFields) {
            const field = this.rootFields[fieldName];
            field.setReadOnly(value, noEvents, true); //current container will rerender, no field rerender need
        }

        super.setReadOnly(value, noEvents, noRerender);
    }

    //endregion
}
