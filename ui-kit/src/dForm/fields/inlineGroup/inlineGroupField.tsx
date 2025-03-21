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
    override prepareChildrenFieldsCollection(): [InlineGroupField['fieldsMap'], InlineGroupField['rootFields']] {
        const groupProps = this.getProps();
        const fieldsProps = groupProps.fieldsProps;
        if (!groupProps.fieldsProps) return [{}, {}];

        [this.fieldsMap, this.rootFields] = this.getModel().prepareFieldCollection(fieldsProps, this);
        return [this.fieldsMap, this.rootFields];
    }

    protected override render() {
        return <InlineGroupRender field={this} />;
    }

    override noItemWrapper() {
        // noinspection PointlessBooleanExpressionJS
        return this.getProps().noItemWrapper !== false;
    }

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

    override isHidden(): boolean {
        return super.isHidden() || !this.hasVisibleChildren(); //has visible field
    }

    //endregion
}
