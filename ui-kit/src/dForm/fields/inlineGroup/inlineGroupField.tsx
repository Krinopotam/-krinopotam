import {BaseField, IBaseFieldAny, IDFormBaseFieldProps} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {IDFormFieldsProps} from '@src/dForm';
import {InlineGroupRender} from "@src/dForm/fields/inlineGroup/inlineGroupRender";

export interface IDFormInlineGroupProps extends IDFormBaseFieldProps<InlineGroupField> {
    /** Inline fields properties */
    fieldsProps: IDFormFieldsProps;
}

export class InlineGroupField extends BaseField<IDFormInlineGroupProps> {
    //region Fields collections
    /** field collection (plain list of all fields in all component tabs, including child fields) */
    private _fieldsMap: Record<string, IBaseFieldAny> = {};

    /** root fields collection (only root fields, without children) */
    private _rootFields: Record<string, IBaseFieldAny> = {};
    //endregion

    initChildrenFields(): [InlineGroupField['_fieldsMap'], InlineGroupField['_rootFields']] {
        const groupProps = this.getProps();
        const fieldsProps = groupProps.fieldsProps;
        if (!groupProps.fieldsProps) return [{}, {}];

        [this._fieldsMap, this._rootFields] = this.getFormModel().prepareFieldCollection(fieldsProps, this);
        return [this._fieldsMap, this._rootFields];
    }

    protected render() {
        return <InlineGroupRender field={this} />;
    }

    renderField(): React.ReactNode {
        return this.render();
    }

    //region Fields collection getters
    /** return@ field collection (plain list of all fields in all component tabs, including child fields) */
    getFieldsMap() {
        return this._fieldsMap;
    }

    /** @return root fields collection (only root fields, without children) */
    getRootFields() {
        return this._rootFields;
    }
    //endregion

     //region Field methods
    /**
     * Handling an erroneous TabField value get
     */
    getValue() {
        console.warn("InlineGroupField can't have values");
        return undefined;
    }

    /**
     * Handling an erroneous TabField value setting
     */
    setValue() {
        console.error("InlineGroupField can't have values");
    }

    /**
     * Sets a disabled status to the field
     * @param value - disabled status
     * @param noEvents - do not emit onDisabledStateChanged and onTabDisabledStateChanged callbacks
     * @param noRerender - do not emit re-rendering
     */
    setDisabled(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isDisabled();
        if (prevValue === value) return;

        for (const fieldName in this._rootFields) {
            const field = this._rootFields[fieldName]
            field.setDisabled(value, noEvents, true) //current container will rerender, no field rerender need
        }

        super.setDisabled(value, noEvents, noRerender);
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

        for (const fieldName in this._rootFields) {
            const field = this._rootFields[fieldName]
            field.setReadOnly(value, noEvents, true) //current container will rerender, no field rerender need
        }

        super.setReadOnly(value, noEvents, noRerender);
    }

    //endregion
}
