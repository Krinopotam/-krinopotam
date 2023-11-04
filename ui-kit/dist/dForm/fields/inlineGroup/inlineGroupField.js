import { BaseField } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { InlineGroupRender } from '../../../dForm/fields/inlineGroup/inlineGroupRender';
export class InlineGroupField extends BaseField {
    initChildrenFields() {
        const groupProps = this.getProps();
        const fieldsProps = groupProps.fieldsProps;
        if (!groupProps.fieldsProps)
            return [{}, {}];
        [this.fieldsMap, this.rootFields] = this.getModel().prepareFieldCollection(fieldsProps, this);
        return [this.fieldsMap, this.rootFields];
    }
    render() {
        return React.createElement(InlineGroupRender, { field: this });
    }
    renderField() {
        return this.render();
    }
    getFieldsMap() {
        return this.fieldsMap;
    }
    getRootFields() {
        return this.rootFields;
    }
    getValue() {
        return undefined;
    }
    setValue() {
    }
    canHaveValue() {
        return false;
    }
    setDisabled(value, noEvents, noRerender) {
        const prevValue = this.isDisabled();
        if (prevValue === value)
            return;
        for (const fieldName in this.rootFields) {
            const field = this.rootFields[fieldName];
            field.setDisabled(value, noEvents, true);
        }
        super.setDisabled(value, noEvents, noRerender);
    }
    setReadOnly(value, noEvents, noRerender) {
        const prevValue = this.isReadOnly();
        if (prevValue === value)
            return;
        for (const fieldName in this.rootFields) {
            const field = this.rootFields[fieldName];
            field.setReadOnly(value, noEvents, true);
        }
        super.setReadOnly(value, noEvents, noRerender);
    }
}
//# sourceMappingURL=inlineGroupField.js.map