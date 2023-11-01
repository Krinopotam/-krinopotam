import {BaseField, IBaseFieldProps} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {IDFormFieldsProps} from '@src/dForm';
import {InlineGroupRender} from '@src/dForm/fields/inlineGroup/inlineGroupRender';

export interface IInlineGroupFieldProps extends IBaseFieldProps<InlineGroupField> {
    /** Inline fields properties */
    fieldsProps: IDFormFieldsProps;
}

export class InlineGroupField extends BaseField<IInlineGroupFieldProps> {
    initChildrenFields(): [InlineGroupField['fieldsMap'], InlineGroupField['rootFields']] {
        const groupProps = this.getProps();
        const fieldsProps = groupProps.fieldsProps;
        if (!groupProps.fieldsProps) return [{}, {}];

        [this.fieldsMap, this.rootFields] = this.getModel().prepareFieldCollection(fieldsProps, this);
        return [this.fieldsMap, this.rootFields];
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
        return this.fieldsMap;
    }

    /** @return root fields collection (only root fields, without children) */
    getRootFields() {
        return this.rootFields;
    }

    //endregion

    //region Field methods
    /**
     * Handling an erroneous InlineGroup value get
     */
    getValue() {
        return undefined;
    }

    /**
     * Handling an erroneous InlineGroup value setting
     */
    setValue() {
        /* field can't have value */
    }

    /** Is field can has value */
    canHaveValue() {
        return false;
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
    setReadOnly(value: boolean, noEvents?: boolean, noRerender?: boolean) {
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
