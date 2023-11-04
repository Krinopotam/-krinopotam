import React from 'react';
import { BaseFieldRender } from './baseFieldRender';
export class BaseField {
    constructor(fieldName, fieldProps, model, parent) {
        this.listeners = [];
        this.renderSnapshot = {};
        this.fieldsMap = {};
        this.rootFields = {};
        this.fieldName = fieldName;
        this.fieldProps = fieldProps;
        this.model = model;
        this.parent = parent;
    }
    initChildrenFields() {
        return [{}, {}];
    }
    getProps() {
        return this.fieldProps;
    }
    setProps(fieldProps, noRerender) {
        this.fieldProps = fieldProps;
        if (!noRerender)
            this.emitRender();
    }
    updateProps(updatedProps, noRerender) {
        var _a;
        const curProps = (_a = this.getProps()) !== null && _a !== void 0 ? _a : {};
        this.setProps(Object.assign(Object.assign({}, curProps), updatedProps), noRerender);
    }
    getName() {
        return this.fieldName;
    }
    getFormProps() {
        return this.model.getFormProps();
    }
    getModel() {
        return this.model;
    }
    getParent() {
        return this.parent;
    }
    getLabel() {
        return this.model.getFormLabels()[this.fieldName];
    }
    setLabel(value, noEvents, noRerender) {
        var _a, _b;
        const prevValue = this.getLabel();
        if (prevValue === value)
            return;
        this.model.getFormLabels()[this.fieldName] = value;
        if (!noEvents)
            (_b = (_a = this.getProps()) === null || _a === void 0 ? void 0 : _a.onLabelChanged) === null || _b === void 0 ? void 0 : _b.call(_a, value, prevValue, this);
        if (!noRerender)
            this.emitRender();
    }
    getValue() {
        const formValues = this.model.getFormValues();
        return formValues[this.fieldName];
    }
    setValue(value, noEvents, noRerender) {
        var _a, _b;
        const prevValue = this.getValue();
        if (prevValue === value)
            return;
        const formValues = this.model.getFormValues();
        formValues[this.fieldName] = value;
        if (!noEvents) {
            (_b = (_a = this.getProps()) === null || _a === void 0 ? void 0 : _a.onValueChanged) === null || _b === void 0 ? void 0 : _b.call(_a, value, prevValue, this);
            this.validate();
        }
        if (!noRerender)
            this.emitRender();
        this.model.lockDependedFields(this, noEvents, noRerender);
    }
    isEmptyValue() {
        const val = this.getValue();
        if (val === null)
            return true;
        if (Array.isArray(val) && val.length === 0)
            return true;
        if (typeof val === 'object' && Object.keys(val).length === 0)
            return true;
        return val !== 0 && !val;
    }
    isTouched() {
        var _a;
        return (_a = this.model.getFormTouchedFields()[this.fieldName]) !== null && _a !== void 0 ? _a : false;
    }
    setTouched(value, noEvents) {
        var _a, _b;
        const prevValue = this.isTouched();
        if (prevValue === value)
            return;
        this.model.getFormTouchedFields()[this.fieldName] = value;
        if (!noEvents)
            (_b = (_a = this.getProps()) === null || _a === void 0 ? void 0 : _a.onTouchedStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, value, this);
    }
    isDirty() {
        var _a;
        return (_a = this.model.getFormDirtyFields()[this.fieldName]) !== null && _a !== void 0 ? _a : false;
    }
    setDirty(value, noEvents) {
        var _a, _b;
        const prevValue = this.isDirty();
        if (prevValue === value)
            return;
        this.model.getFormDirtyFields()[this.fieldName] = value;
        if (!noEvents)
            (_b = (_a = this.getProps()) === null || _a === void 0 ? void 0 : _a.onDirtyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, value, this);
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
    isDisabled() {
        var _a;
        return (_a = this.model.getFormDisabledFields()[this.fieldName]) !== null && _a !== void 0 ? _a : false;
    }
    setDisabled(value, noEvents, noRerender) {
        var _a, _b;
        const prevValue = this.isDisabled();
        if (prevValue === value)
            return;
        this.model.getFormDisabledFields()[this.fieldName] = value;
        if (!noEvents)
            (_b = (_a = this.getProps()) === null || _a === void 0 ? void 0 : _a.onDisabledStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, value, this);
        if (!noRerender)
            this.model.emitFormRender();
    }
    isReadOnly() {
        var _a;
        return (_a = this.model.getFormReadOnlyFields()[this.fieldName]) !== null && _a !== void 0 ? _a : false;
    }
    setReadOnly(value, noEvents, noRerender) {
        var _a, _b;
        const prevValue = this.isReadOnly();
        if (prevValue === value)
            return;
        this.model.getFormReadOnlyFields()[this.fieldName] = value;
        if (!noEvents)
            (_b = (_a = this.getProps()) === null || _a === void 0 ? void 0 : _a.onReadOnlyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, value, this);
        if (!noRerender)
            this.emitRender();
    }
    isHidden() {
        var _a;
        return (_a = this.model.getFormHiddenFields()[this.fieldName]) !== null && _a !== void 0 ? _a : false;
    }
    setHidden(value, noEvents, noRerender) {
        var _a, _b;
        const prevValue = this.isHidden();
        if (prevValue === value)
            return;
        this.model.getFormHiddenFields()[this.fieldName] = value;
        this.model.lockDependedFields(this, noEvents, noRerender);
        if (value)
            this.setReady(false, true);
        if (!noEvents)
            (_b = (_a = this.getProps()) === null || _a === void 0 ? void 0 : _a.onHiddenStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, value, this);
        if (!noRerender)
            this.model.emitFormRender();
    }
    isReady() {
        var _a;
        return (_a = this.model.getFormReadyFields()[this.fieldName]) !== null && _a !== void 0 ? _a : false;
    }
    setReady(value, noEvents) {
        var _a, _b;
        const prevValue = this.isReady();
        if (prevValue === value)
            return;
        this.model.getFormReadyFields()[this.fieldName] = value;
        if (!noEvents)
            (_b = (_a = this.getProps()) === null || _a === void 0 ? void 0 : _a.onReadyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, value, this);
        this.model.setFormReady(value, noEvents);
    }
    getError() {
        var _a;
        return (_a = this.model.getFormErrors()[this.fieldName]) !== null && _a !== void 0 ? _a : '';
    }
    setError(value, noEvents, noRerender) {
        var _a, _b, _c, _d, _e;
        const prevValue = this.getError();
        if (prevValue === value)
            return;
        const errors = this.model.getFormErrors();
        if (!value)
            delete errors[this.fieldName];
        else
            errors[this.fieldName] = value;
        if (!noEvents) {
            (_b = (_a = this.getProps()) === null || _a === void 0 ? void 0 : _a.onErrorChanged) === null || _b === void 0 ? void 0 : _b.call(_a, value, this);
            const modelCallbacks = this.model.getModelCallbacks();
            if (value)
                (_c = modelCallbacks.onFormHasErrors) === null || _c === void 0 ? void 0 : _c.call(modelCallbacks, this.model.getFormValues(), errors, this.model);
            else {
                if (this.model.isFormHasError())
                    (_d = modelCallbacks.onFormHasErrors) === null || _d === void 0 ? void 0 : _d.call(modelCallbacks, this.model.getFormValues(), errors, this.model);
                else
                    (_e = modelCallbacks.onFormHasNoErrors) === null || _e === void 0 ? void 0 : _e.call(modelCallbacks, this.model.getFormValues(), this.model);
            }
        }
        if (!noRerender)
            this.emitRender();
    }
    validate(noEvents, noRerender) {
        var _a, _b, _c, _d, _e;
        const rules = (_a = this.getProps().rules) !== null && _a !== void 0 ? _a : [];
        const formRules = (_c = (_b = this.getFormProps().validationRules) === null || _b === void 0 ? void 0 : _b[this.fieldName]) !== null && _c !== void 0 ? _c : [];
        const error = !this.isHidden() ? this.model.getValidator().validateValue(this.getValue(), this.model, rules.concat(formRules)) : '';
        this.setError(error, noEvents);
        if (!noEvents && !this.isHidden())
            (_e = (_d = this.getProps()) === null || _d === void 0 ? void 0 : _d.onValidated) === null || _e === void 0 ? void 0 : _e.call(_d, this.getValue(), error, this.model.isFormSubmitting(), this);
        if (!noRerender)
            this.emitRender();
        return error;
    }
    getFieldsMap() {
        return this.fieldsMap;
    }
    getRootFields() {
        return this.rootFields;
    }
    isContainer() {
        return Object.keys(this.rootFields).length > 0;
    }
    hasVisibleChildren() {
        for (const fieldName in this.rootFields) {
            const field = this.rootFields[fieldName];
            if ((!field.isContainer() && !field.isHidden()) || field.hasVisibleChildren())
                return true;
        }
        return false;
    }
    render() {
        return null;
    }
    renderField(altLabel) {
        return this.renderFieldWrapper(this.render(), altLabel);
    }
    renderFieldWrapper(field, altLabel) {
        return (React.createElement(BaseFieldRender, { key: this.getName(), field: this, altLabel: altLabel }, field));
    }
    canHaveValue() {
        return true;
    }
    subscribe(listener) {
        this.listeners = [...this.listeners, listener];
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }
    getSnapshot() {
        return this.renderSnapshot;
    }
    emitRender() {
        this.renderSnapshot = {};
        for (const listener of this.listeners)
            listener();
    }
}
//# sourceMappingURL=baseField.js.map