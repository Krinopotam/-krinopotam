import { HelpersObjects } from '@krinopotam/js-helpers';
import { BaseValidator } from './validators/baseValidator';
export class DModel {
    constructor(formId) {
        this._formProps = {};
        this._fieldsProps = {};
        this._tabsProps = {};
        this._validationRules = {};
        this._dataSet = undefined;
        this._labels = {};
        this._values = {};
        this._touched = {};
        this._dirty = {};
        this._errors = {};
        this._hidden = {};
        this._hiddenTabs = {};
        this._readOnly = {};
        this._readOnlyTabs = {};
        this._disabled = {};
        this._disabledTabs = {};
        this._ready = {};
        this._formReadOnly = false;
        this._formDirty = false;
        this._formReady = undefined;
        this._isFormMounted = false;
        this._formMode = "create";
        this._submitCount = 0;
        this._isSubmitting = false;
        this._isFetching = false;
        this._isFetchingFailed = false;
        this._callbacks = {};
        this._fieldRenderListeners = {};
        this._fieldRenderSnapshots = {};
        this._groupRenderListeners = {};
        this._groupRenderSnapshots = {};
        this._tabRenderListeners = {};
        this._tabRenderSnapshots = {};
        this._formRenderListeners = [];
        this._formRenderSnapshot = () => 0;
        this._formId = formId;
        this._validator = new BaseValidator();
    }
    reinitModel(formProps, callbacks) {
        var _a, _b, _c, _d;
        this._callbacks = callbacks;
        if (this._formProps === formProps)
            return;
        this._formProps = formProps;
        this._formMode = (_a = formProps.formMode) !== null && _a !== void 0 ? _a : 'create';
        this._formReadOnly = !!formProps.readOnly;
        this._validationRules = (_b = formProps.validationRules) !== null && _b !== void 0 ? _b : {};
        const oldFieldsProps = this.getFieldsProps();
        if (oldFieldsProps !== formProps.fieldsProps) {
            this._fieldsProps = (_c = formProps.fieldsProps) !== null && _c !== void 0 ? _c : {};
            this._tabsProps = this.preparePropsCollection(this._fieldsProps);
            [this._labels, this._values, this._hidden, this._readOnly, this._disabled] = this.initFieldsParameters(oldFieldsProps, formProps.fieldsProps, (_d = formProps.formMode) !== null && _d !== void 0 ? _d : 'create');
        }
        const oldDataSet = this.getFormDataSet();
        if (oldDataSet !== formProps.dataSet)
            this.setFormValues(formProps.dataSet, true);
        if (!formProps.noAutoHideDependedFields)
            this._hidden = this.calculateHiddenFields(this.getFieldsProps(), this.getFormValues(), this._hidden);
    }
    preparePropsCollection(fieldsProps) {
        var _a, _b;
        const tabsProps = {};
        if (!fieldsProps)
            return tabsProps;
        let i = 1;
        for (const fieldName in fieldsProps) {
            const field = fieldsProps[fieldName];
            const tabName = (_a = field.tab) !== null && _a !== void 0 ? _a : '[__default__]';
            const groupName = (_b = field.inlineGroup) !== null && _b !== void 0 ? _b : '[__group__]' + i++;
            if (!tabsProps[tabName])
                tabsProps[tabName] = {};
            if (!tabsProps[tabName][groupName])
                tabsProps[tabName][groupName] = {};
            tabsProps[tabName][groupName][fieldName] = field;
        }
        return tabsProps;
    }
    initFieldsParameters(oldFieldsProps, fieldsProps, mode) {
        const values = {};
        const hidden = {};
        const readOnly = {};
        const disabled = {};
        const labels = {};
        if (!fieldsProps)
            return [labels, values, hidden, readOnly, disabled];
        for (const fieldName in fieldsProps) {
            const oldField = oldFieldsProps === null || oldFieldsProps === void 0 ? void 0 : oldFieldsProps[fieldName];
            const field = fieldsProps[fieldName];
            let fieldValue = undefined;
            if (oldField === field)
                fieldValue = this._values[fieldName];
            if (mode === 'create' && field.default && !fieldValue)
                fieldValue = field.default;
            labels[fieldName] = field.label;
            values[fieldName] = fieldValue;
            hidden[fieldName] = !!field.hidden;
            readOnly[fieldName] = !!field.readOnly || mode === 'view';
            disabled[fieldName] = !!field.disabled;
        }
        return [labels, values, hidden, readOnly, disabled];
    }
    calculateHiddenFields(fieldsProps, values, hiddenFields) {
        const result = {};
        for (const fieldName in fieldsProps)
            result[fieldName] = this.isFieldMustBeHidden(fieldName, fieldsProps, values, hiddenFields);
        return result;
    }
    getTabsProps() {
        return this._tabsProps;
    }
    getGroupsProps(tabName) {
        return this._tabsProps[tabName];
    }
    getFieldLabel(fieldName) {
        return this._labels[fieldName];
    }
    setFieldLabel(fieldName, value, noEvents) {
        var _a, _b, _c, _d, _e;
        const prevValue = this.getFieldLabel(fieldName);
        this._labels[fieldName] = value;
        if (noEvents || prevValue === value)
            return;
        (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFieldLabelChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, value, prevValue, this);
        (_e = (_d = (_c = this.getFieldProps('fieldName')) === null || _c === void 0 ? void 0 : _c.callbacks) === null || _d === void 0 ? void 0 : _d.onLabelChanged) === null || _e === void 0 ? void 0 : _e.call(_d, value, prevValue, this);
        this.emitFieldRender(fieldName);
    }
    getFieldValue(fieldName) {
        return this._values[fieldName];
    }
    setFieldValue(fieldName, value, noEvents) {
        var _a, _b, _c, _d, _e;
        const prevValue = this.getFieldValue(fieldName);
        const values = this.getFormValues();
        values[fieldName] = value;
        if (noEvents || prevValue === value)
            return;
        (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFieldValueChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, value, prevValue, this);
        (_e = (_d = (_c = this.getFieldProps('fieldName')) === null || _c === void 0 ? void 0 : _c.callbacks) === null || _d === void 0 ? void 0 : _d.onValueChanged) === null || _e === void 0 ? void 0 : _e.call(_d, value, prevValue, this);
        this.emitFieldRender(fieldName);
        this.validateField(fieldName);
        if (!this.getFormProps().noAutoHideDependedFields)
            this.hideDependedFields(fieldName);
    }
    isFieldTouched(fieldName) {
        return !!this._touched[fieldName];
    }
    setFieldTouched(fieldName, value, noEvents) {
        var _a, _b, _c, _d, _e;
        const prevValue = this.isFieldTouched(fieldName);
        this._touched[fieldName] = value;
        if (noEvents || prevValue === value)
            return;
        (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFieldTouchedStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, value, this);
        (_e = (_d = (_c = this.getFieldProps('fieldName')) === null || _c === void 0 ? void 0 : _c.callbacks) === null || _d === void 0 ? void 0 : _d.onTouchedStateChanged) === null || _e === void 0 ? void 0 : _e.call(_d, value, this);
    }
    isFieldDirty(fieldName) {
        return !!this._dirty[fieldName];
    }
    setFieldDirty(fieldName, value, noEvents) {
        var _a, _b, _c, _d, _e;
        const prevValue = this.isFieldDirty(fieldName);
        this._dirty[fieldName] = value;
        if (!noEvents && prevValue !== value) {
            (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFieldDirtyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, value, this);
            (_e = (_d = (_c = this.getFieldProps('fieldName')) === null || _c === void 0 ? void 0 : _c.callbacks) === null || _d === void 0 ? void 0 : _d.onDirtyStateChanged) === null || _e === void 0 ? void 0 : _e.call(_d, value, this);
        }
        let formDirty = value;
        if (!value) {
            for (const key in this._dirty) {
                if (this.isFieldDirty(key)) {
                    formDirty = true;
                    break;
                }
            }
        }
        this.setFormDirty(formDirty, noEvents);
    }
    isFieldDisabled(fieldName) {
        return !!this._disabled[fieldName];
    }
    setFieldDisabled(fieldName, value, noEvents) {
        var _a, _b, _c, _d, _e;
        const prevValue = this.isFieldDisabled(fieldName);
        this._disabled[fieldName] = value;
        if (noEvents || prevValue === value)
            return;
        (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFieldDisabledStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, value, this);
        (_e = (_d = (_c = this.getFieldProps('fieldName')) === null || _c === void 0 ? void 0 : _c.callbacks) === null || _d === void 0 ? void 0 : _d.onDisabledStateChanged) === null || _e === void 0 ? void 0 : _e.call(_d, value, this);
        this.emitFieldRender(fieldName);
    }
    isFieldReadOnly(fieldName) {
        return !!this._readOnly[fieldName] || this._formMode === 'view';
    }
    setFieldReadOnly(fieldName, value, noEvents) {
        var _a, _b, _c, _d, _e;
        const prevValue = this.isFieldReadOnly(fieldName);
        this._readOnly[fieldName] = value;
        if (noEvents || prevValue === value)
            return;
        (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFieldReadOnlyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, value, this);
        (_e = (_d = (_c = this.getFieldProps('fieldName')) === null || _c === void 0 ? void 0 : _c.callbacks) === null || _d === void 0 ? void 0 : _d.onReadOnlyStateChanged) === null || _e === void 0 ? void 0 : _e.call(_d, value, this);
        this.emitFieldRender(fieldName);
    }
    isFieldHidden(fieldName) {
        return !!this._hidden[fieldName];
    }
    setFieldHidden(fieldName, value, noEvents) {
        var _a, _b, _c, _d;
        const prevValue = this.isFieldHidden(fieldName);
        let prevGroupValue = false;
        const field = this.getFieldProps('fieldName');
        if ((field === null || field === void 0 ? void 0 : field.tab) && field.inlineGroup)
            prevGroupValue = this.isGroupHidden(field.tab, field.inlineGroup);
        this._hidden[fieldName] = value;
        if (value)
            this.setFieldReady(fieldName, false, true);
        if (noEvents || prevValue === value)
            return;
        (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFieldHiddenStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, value, this);
        (_d = (_c = field === null || field === void 0 ? void 0 : field.callbacks) === null || _c === void 0 ? void 0 : _c.onHiddenStateChanged) === null || _d === void 0 ? void 0 : _d.call(_c, value, this);
        this.emitFieldRender(fieldName);
        if (!this.getFormProps().noAutoHideDependedFields)
            this.hideDependedFields(fieldName);
        if (!(field === null || field === void 0 ? void 0 : field.tab) || !field.inlineGroup)
            return;
        const curGroupValue = this.isGroupHidden(field.tab, field.inlineGroup);
        if (prevGroupValue !== curGroupValue)
            this.emitGroupRender(field.tab, field.inlineGroup);
    }
    isFieldReady(fieldName) {
        return !!this._ready[fieldName];
    }
    setFieldReady(fieldName, value, noEvents) {
        var _a, _b, _c, _d, _e;
        const prevValue = this.isFieldReady(fieldName);
        if (prevValue === value)
            return;
        this._ready[fieldName] = value;
        if (!noEvents && value && prevValue !== value) {
            (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFieldReady) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, this);
            (_e = (_d = (_c = this.getFieldProps('fieldName')) === null || _c === void 0 ? void 0 : _c.callbacks) === null || _d === void 0 ? void 0 : _d.onReady) === null || _e === void 0 ? void 0 : _e.call(_d, this);
        }
        this.setFormReady(value);
    }
    getFieldError(fieldName) {
        const errors = this.getFormErrors();
        return errors[fieldName] || '';
    }
    setFieldError(fieldName, value, noEvents) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const prevValue = this.getFieldError(fieldName);
        const errors = this.getFormErrors();
        if (!value)
            delete errors[fieldName];
        else
            errors[fieldName] = value;
        if (noEvents || prevValue === value)
            return;
        (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFieldErrorChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, value, this);
        (_e = (_d = (_c = this.getFieldProps('fieldName')) === null || _c === void 0 ? void 0 : _c.callbacks) === null || _d === void 0 ? void 0 : _d.onErrorChanged) === null || _e === void 0 ? void 0 : _e.call(_d, value, this);
        if (value)
            (_g = (_f = this._callbacks) === null || _f === void 0 ? void 0 : _f.onFormHasErrors) === null || _g === void 0 ? void 0 : _g.call(_f, this.getFormValues(), errors, this);
        else {
            if (this.isFormHasError())
                (_j = (_h = this._callbacks) === null || _h === void 0 ? void 0 : _h.onFormHasErrors) === null || _j === void 0 ? void 0 : _j.call(_h, this.getFormValues(), errors, this);
            else
                (_l = (_k = this._callbacks) === null || _k === void 0 ? void 0 : _k.onFormHasNoErrors) === null || _l === void 0 ? void 0 : _l.call(_k, this.getFormValues(), this);
        }
        this.emitFieldRender(fieldName);
    }
    validateField(fieldName, noEvents) {
        var _a, _b, _c, _d, _e;
        const error = !this.isFieldHidden(fieldName)
            ? this._validator.validateValue(this.getFieldValue(fieldName), this._validationRules[fieldName], this.getFormValues())
            : '';
        this.setFieldError(fieldName, error, noEvents);
        if (!noEvents && !this.isFieldHidden(fieldName)) {
            (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFieldValidated) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, this.getFieldValue(fieldName), error, this.isFormSubmitting(), this);
            (_e = (_d = (_c = this.getFieldProps('fieldName')) === null || _c === void 0 ? void 0 : _c.callbacks) === null || _d === void 0 ? void 0 : _d.onValidated) === null || _e === void 0 ? void 0 : _e.call(_d, this.getFieldValue(fieldName), error, this.isFormSubmitting(), this);
            this.emitFieldRender(fieldName);
        }
        return error;
    }
    getFieldProps(fieldName) {
        return this.getFieldsProps()[fieldName];
    }
    setFieldProps(fieldName, fieldProps) {
        if (!this.getFieldProps(fieldName))
            return;
        this._fieldsProps[fieldName] = fieldProps;
        this.emitFormRender();
    }
    updateFieldProps(fieldName, updatedProps) {
        const curProps = this.getFieldProps(fieldName);
        if (!curProps)
            return;
        this.setFieldProps(fieldName, Object.assign(Object.assign({}, curProps), updatedProps));
    }
    isGroupHidden(tabName, groupName) {
        var _a, _b;
        if (!((_b = (_a = this._tabsProps) === null || _a === void 0 ? void 0 : _a[tabName]) === null || _b === void 0 ? void 0 : _b[groupName]))
            return true;
        for (const fieldName in this._tabsProps[tabName][groupName]) {
            if (!this.isFieldHidden(fieldName))
                return false;
        }
        return true;
    }
    setGroupHidden(tabName, groupName, value) {
        var _a, _b;
        if (!((_b = (_a = this._tabsProps) === null || _a === void 0 ? void 0 : _a[tabName]) === null || _b === void 0 ? void 0 : _b[groupName]))
            return;
        let prevValue = this.isGroupHidden(tabName, groupName);
        for (const fieldName in this._tabsProps[tabName][groupName]) {
            if (!this.isFieldHidden(fieldName))
                prevValue = false;
            this.setFieldHidden(fieldName, value);
        }
        if (prevValue === value)
            return;
        this.emitGroupRender(tabName, groupName);
    }
    getFirstVisibleFieldInGroup(tabName, groupName) {
        var _a, _b;
        if (!((_b = (_a = this._tabsProps) === null || _a === void 0 ? void 0 : _a[tabName]) === null || _b === void 0 ? void 0 : _b[groupName]))
            return undefined;
        for (const fieldName in this._tabsProps[tabName][groupName]) {
            if (!this.isFieldHidden(fieldName))
                return this.getFieldsProps()[fieldName];
        }
        return undefined;
    }
    isTabHidden(tabName) {
        return !!this._hiddenTabs[tabName];
    }
    setTabHidden(tabName, value) {
        var _a, _b;
        const tab = this._tabsProps[tabName];
        if (!tab)
            return;
        const prevValue = this.isTabHidden(tabName);
        this._hiddenTabs[tabName] = value;
        for (const groupName in tab) {
            const group = tab[groupName];
            for (const fieldName in group)
                this.setFieldHidden(fieldName, value, true);
        }
        if (prevValue !== value)
            (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onTabHiddenStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, tabName, value, this);
        this.emitTabRender(tabName);
    }
    isTabReadOnly(tabName) {
        return !!this._readOnlyTabs[tabName] || this._formMode === 'view';
    }
    setTabReadOnly(tabName, value) {
        var _a, _b;
        const tab = this._tabsProps[tabName];
        if (!tab)
            return;
        const prevValue = this.isTabReadOnly(tabName);
        this._readOnlyTabs[tabName] = value;
        for (const groupName in tab) {
            const group = tab[groupName];
            for (const fieldName in group)
                this.setFieldReadOnly(fieldName, value, true);
        }
        if (prevValue !== value)
            (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onTabReadOnlyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, tabName, value, this);
        this.emitTabRender(tabName);
    }
    isTabDisabled(tabName) {
        return !!this._disabledTabs[tabName];
    }
    setTabDisabled(tabName, value) {
        var _a, _b;
        const tab = this._tabsProps[tabName];
        if (!tab)
            return;
        const prevValue = this.isTabDisabled(tabName);
        this._disabledTabs[tabName] = value;
        for (const groupName in tab) {
            const group = tab[groupName];
            for (const fieldName in group)
                this.setFieldDisabled(fieldName, value, true);
        }
        if (prevValue !== value)
            (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onTabDisabledStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, tabName, value, this);
        this.emitTabRender(tabName);
    }
    getFormId() {
        return this._formId;
    }
    getFormValues() {
        return this._values;
    }
    setFormValues(dataSet, noEvents) {
        var _a, _b;
        const newDataSet = noEvents ? dataSet : ((_b = (_a = this._callbacks).onDataSetChange) === null || _b === void 0 ? void 0 : _b.call(_a, dataSet, this)) || dataSet;
        this._dataSet = newDataSet;
        const fieldsProps = this.getFieldsProps();
        for (const fieldName in fieldsProps) {
            this.setFieldValue(fieldName, newDataSet === null || newDataSet === void 0 ? void 0 : newDataSet[fieldName], noEvents);
        }
    }
    getFormDataSet() {
        return this._dataSet;
    }
    isFormDirty() {
        return this._formDirty;
    }
    setFormDirty(value, noEvents) {
        var _a, _b;
        const prevValue = this.isFormDirty();
        this._formDirty = value;
        if (!noEvents && prevValue !== value)
            (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFormDirtyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, value, this);
    }
    isFormReadOnly() {
        return this.getFormMode() === 'view' || this._formReadOnly;
    }
    setFormReadOnly(value) {
        var _a, _b;
        const prevValue = this.isFormReadOnly();
        this._formReadOnly = value;
        const fieldsProps = this.getFieldsProps();
        for (const fieldName in fieldsProps) {
            this._readOnly[fieldName] = value;
        }
        if (prevValue !== value) {
            (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFormReadOnlyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, value, this);
            this.emitFormRender();
        }
    }
    setFormInit() {
        var _a, _b;
        this.setFormReady(false);
        (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFormInit) === null || _b === void 0 ? void 0 : _b.call(_a, this);
    }
    isFormReady() {
        return this._formReady;
    }
    setFormReady(value) {
        setTimeout(() => {
            var _a, _b, _c, _d;
            const prevValue = this.isFormReady();
            if (this.isFormFetching() || this.isFormFetchingFailed())
                value = false;
            if (!value) {
                this._formReady = value;
                if (prevValue !== value)
                    (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFormReadyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, value, this);
                return;
            }
            const fieldsProps = this.getFieldsProps();
            for (const fieldName in fieldsProps) {
                if (this.isFieldHidden(fieldName))
                    continue;
                if (!HelpersObjects.isObjectHasOwnProperty(this._ready, fieldName) || !this.isFieldReady(fieldName)) {
                    value = false;
                    break;
                }
            }
            this._formReady = value;
            if (prevValue !== value)
                (_d = (_c = this._callbacks) === null || _c === void 0 ? void 0 : _c.onFormReadyStateChanged) === null || _d === void 0 ? void 0 : _d.call(_c, value, this);
        }, 0);
    }
    validateForm(noEvents) {
        var _a, _b;
        const fieldsProps = this.getFieldsProps();
        for (const fieldName in fieldsProps) {
            this.validateField(fieldName, noEvents);
            if (!noEvents)
                this.emitFieldRender(fieldName);
        }
        this.emitFormRender();
        (_b = (_a = this._callbacks).onFormValidated) === null || _b === void 0 ? void 0 : _b.call(_a, this.getFormValues(), this.getFormErrors(), this.isFormSubmitting(), this);
        return this.getFormErrors();
    }
    isFormSubmitting() {
        return this._isSubmitting;
    }
    setFormSubmitting(value) {
        const prevValue = this.isFormSubmitting();
        this._isSubmitting = value;
        if (prevValue !== value)
            this.emitFormRender();
    }
    isFormFetching() {
        return this._isFetching;
    }
    setFormFetching(value) {
        const prevValue = this.isFormFetching();
        this._isFetching = value;
        if (prevValue !== value)
            this.emitFormRender();
    }
    setFormFetchingFailed(value) {
        this._isFetchingFailed = value;
    }
    isFormFetchingFailed() {
        return this._isFetchingFailed;
    }
    isFormHasError() {
        const errors = this.getFormErrors();
        for (const fieldName in errors) {
            if (this.getFieldError(fieldName))
                return true;
        }
        return false;
    }
    getFormErrors() {
        return this._errors;
    }
    isFormMounted() {
        return this._isFormMounted;
    }
    setFormMounted(value) {
        this._isFormMounted = value;
    }
    getFormMode() {
        return this._formMode;
    }
    fetchData() {
        var _a, _b;
        const dataSource = (_b = (_a = this._callbacks).onDataFetch) === null || _b === void 0 ? void 0 : _b.call(_a, this);
        if (!dataSource)
            return;
        dataSource.then((result) => {
            var _a, _b, _c, _d;
            if (!this.isFormMounted())
                return;
            this.setFormFetching(false);
            this.setFormFetchingFailed(false);
            (_b = (_a = this._callbacks).onDataFetchSuccess) === null || _b === void 0 ? void 0 : _b.call(_a, result, this);
            (_d = (_c = this._callbacks).onDataFetchComplete) === null || _d === void 0 ? void 0 : _d.call(_c, this);
            const values = result.data;
            this.setFormValues(values);
            this.setFormReady(true);
        }, (error) => {
            var _a, _b, _c, _d;
            if (!this.isFormMounted())
                return;
            this.setFormFetching(false);
            this.setFormFetchingFailed(true);
            (_b = (_a = this._callbacks).onDataFetchError) === null || _b === void 0 ? void 0 : _b.call(_a, error.message, error.code, this);
            (_d = (_c = this._callbacks).onDataFetchComplete) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        });
        this.setFormReady(false);
        this.setFormFetching(true);
        this.setFormFetchingFailed(false);
    }
    getFieldsProps() {
        return this._fieldsProps;
    }
    getFormProps() {
        return this._formProps;
    }
    submit(onSubmitSuccess, onSubmitError, onSubmitComplete) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4;
        if (this.isFormSubmitting())
            return;
        this.incrementSubmitCount();
        this.setFormSubmitting(true);
        const values = this.getFormValues();
        if (this._formMode === 'create' || this._formMode === 'clone')
            values.id = '';
        const errors = this.validateForm();
        (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onSubmitValidation) === null || _b === void 0 ? void 0 : _b.call(_a, values, errors, this);
        if (this.isFormHasError()) {
            this.setFormSubmitting(false);
            onSubmitComplete === null || onSubmitComplete === void 0 ? void 0 : onSubmitComplete(values, errors, this);
            (_d = (_c = this._callbacks) === null || _c === void 0 ? void 0 : _c.onSubmitComplete) === null || _d === void 0 ? void 0 : _d.call(_c, values, errors, this);
            return;
        }
        if (!((_e = this._callbacks) === null || _e === void 0 ? void 0 : _e.onSubmit)) {
            this.setFormSubmitting(false);
            onSubmitError === null || onSubmitError === void 0 ? void 0 : onSubmitError(values, 'The onSubmit callback not specified', 405, this);
            onSubmitComplete === null || onSubmitComplete === void 0 ? void 0 : onSubmitComplete(values, errors, this);
            (_g = (_f = this._callbacks) === null || _f === void 0 ? void 0 : _f.onSubmitError) === null || _g === void 0 ? void 0 : _g.call(_f, values, 'The onSubmit callback not specified', 405, this);
            (_j = (_h = this._callbacks) === null || _h === void 0 ? void 0 : _h.onSubmitComplete) === null || _j === void 0 ? void 0 : _j.call(_h, values, errors, this);
            return;
        }
        const result = (_k = this._callbacks) === null || _k === void 0 ? void 0 : _k.onSubmit(this.getFormValues(), this);
        if (HelpersObjects.isPromise(result)) {
            const promiseResult = result;
            promiseResult
                .then((promiseResult) => {
                var _a, _b, _c, _d;
                if (!this.isFormMounted())
                    return;
                this.setFormSubmitting(false);
                onSubmitSuccess === null || onSubmitSuccess === void 0 ? void 0 : onSubmitSuccess(values, promiseResult.data || values, this);
                onSubmitComplete === null || onSubmitComplete === void 0 ? void 0 : onSubmitComplete(values, errors, this);
                (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onSubmitSuccess) === null || _b === void 0 ? void 0 : _b.call(_a, values, promiseResult.data || values, this);
                (_d = (_c = this._callbacks) === null || _c === void 0 ? void 0 : _c.onSubmitComplete) === null || _d === void 0 ? void 0 : _d.call(_c, values, errors, this);
            })
                .catch((error) => {
                var _a, _b, _c, _d;
                if (!this.isFormMounted())
                    return;
                this.setFormSubmitting(false);
                onSubmitError === null || onSubmitError === void 0 ? void 0 : onSubmitError(values, error.message, error.code, this);
                onSubmitComplete === null || onSubmitComplete === void 0 ? void 0 : onSubmitComplete(values, errors, this);
                (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onSubmitError) === null || _b === void 0 ? void 0 : _b.call(_a, values, error.message, error.code, this);
                (_d = (_c = this._callbacks) === null || _c === void 0 ? void 0 : _c.onSubmitComplete) === null || _d === void 0 ? void 0 : _d.call(_c, values, errors, this);
            });
            return;
        }
        if (typeof result === 'object') {
            this.setFormSubmitting(false);
            const objectResult = result;
            if ((_l = objectResult.error) === null || _l === void 0 ? void 0 : _l.message) {
                onSubmitError === null || onSubmitError === void 0 ? void 0 : onSubmitError(values, objectResult.error.message || '', objectResult.error.code || 400, this);
                (_o = (_m = this._callbacks) === null || _m === void 0 ? void 0 : _m.onSubmitError) === null || _o === void 0 ? void 0 : _o.call(_m, values, objectResult.error.message || '', objectResult.error.code || 400, this);
            }
            else {
                onSubmitSuccess === null || onSubmitSuccess === void 0 ? void 0 : onSubmitSuccess(values, (_p = objectResult.data) !== null && _p !== void 0 ? _p : values, this);
                (_r = (_q = this._callbacks) === null || _q === void 0 ? void 0 : _q.onSubmitSuccess) === null || _r === void 0 ? void 0 : _r.call(_q, values, (_s = objectResult.data) !== null && _s !== void 0 ? _s : values, this);
            }
            onSubmitComplete === null || onSubmitComplete === void 0 ? void 0 : onSubmitComplete(values, errors, this);
            (_u = (_t = this._callbacks) === null || _t === void 0 ? void 0 : _t.onSubmitComplete) === null || _u === void 0 ? void 0 : _u.call(_t, values, errors, this);
            return;
        }
        this.setFormSubmitting(false);
        if (typeof result === 'boolean') {
            if (result) {
                onSubmitSuccess === null || onSubmitSuccess === void 0 ? void 0 : onSubmitSuccess(values, values, this);
                (_w = (_v = this._callbacks) === null || _v === void 0 ? void 0 : _v.onSubmitSuccess) === null || _w === void 0 ? void 0 : _w.call(_v, values, values, this);
            }
            else {
                onSubmitError === null || onSubmitError === void 0 ? void 0 : onSubmitError(values, 'Неизвестная ошибка', 400, this);
                (_y = (_x = this._callbacks) === null || _x === void 0 ? void 0 : _x.onSubmitError) === null || _y === void 0 ? void 0 : _y.call(_x, values, 'Неизвестная ошибка', 400, this);
            }
            onSubmitComplete === null || onSubmitComplete === void 0 ? void 0 : onSubmitComplete(values, errors, this);
            (_0 = (_z = this._callbacks) === null || _z === void 0 ? void 0 : _z.onSubmitComplete) === null || _0 === void 0 ? void 0 : _0.call(_z, values, errors, this);
            return;
        }
        if (typeof result === 'undefined') {
            onSubmitSuccess === null || onSubmitSuccess === void 0 ? void 0 : onSubmitSuccess(values, values, this);
            onSubmitComplete === null || onSubmitComplete === void 0 ? void 0 : onSubmitComplete(values, errors, this);
            (_2 = (_1 = this._callbacks) === null || _1 === void 0 ? void 0 : _1.onSubmitSuccess) === null || _2 === void 0 ? void 0 : _2.call(_1, values, values, this);
            (_4 = (_3 = this._callbacks) === null || _3 === void 0 ? void 0 : _3.onSubmitComplete) === null || _4 === void 0 ? void 0 : _4.call(_3, values, errors, this);
        }
    }
    getSubmitCount() {
        return this._submitCount;
    }
    incrementSubmitCount() {
        this._submitCount++;
    }
    hideDependedFields(fieldName) {
        const fieldsProps = this.getFieldsProps();
        const fieldProps = fieldsProps[fieldName];
        if (!fieldProps)
            return;
        for (const childName in fieldsProps) {
            const childProps = fieldsProps[childName];
            if (!(childProps === null || childProps === void 0 ? void 0 : childProps.dependsOn) || childProps.dependsOn.indexOf(fieldName) < 0)
                continue;
            this.setFieldHidden(childName, this.isFieldMustBeHidden(childName, fieldsProps, this.getFormValues(), this._hidden));
        }
    }
    isFieldMustBeHidden(fieldName, fieldsProps, values, hiddenFields) {
        const field = fieldsProps[fieldName];
        if (!field)
            return true;
        if (field.hidden)
            return true;
        if (!field.dependsOn)
            return false;
        for (const parentName of field.dependsOn) {
            const parentField = fieldsProps[parentName];
            if (!parentField)
                continue;
            if (parentField.hidden)
                return true;
            const parentHasNoValue = !(values === null || values === void 0 ? void 0 : values[parentName]);
            const parentIsHidden = hiddenFields[parentName] && !field.dependsOn;
            if (parentHasNoValue || parentIsHidden)
                return true;
            if (this.isFieldMustBeHidden(parentName, fieldsProps, values, hiddenFields))
                return true;
        }
        return false;
    }
    subscribeRenderField(fieldName) {
        return (listener) => {
            if (!this._fieldRenderListeners[fieldName])
                this._fieldRenderListeners[fieldName] = [];
            this._fieldRenderListeners[fieldName] = [...this._fieldRenderListeners[fieldName], listener];
            return () => {
                this._fieldRenderListeners[fieldName] = this._fieldRenderListeners[fieldName].filter((l) => l !== listener);
            };
        };
    }
    emitFieldRender(fieldName) {
        const result = this._fieldRenderSnapshots[fieldName] ? this._fieldRenderSnapshots[fieldName]() + 1 : 0;
        this._fieldRenderSnapshots[fieldName] = () => result;
        if (!this._fieldRenderListeners[fieldName])
            return;
        for (const listener of this._fieldRenderListeners[fieldName])
            listener();
    }
    getFieldRenderSnapshots() {
        return this._fieldRenderSnapshots;
    }
    subscribeRenderGroup(tabName, groupName) {
        return (listener) => {
            if (!this._groupRenderListeners[tabName])
                this._groupRenderListeners[tabName] = {};
            if (!this._groupRenderListeners[tabName][groupName])
                this._groupRenderListeners[tabName][groupName] = [];
            this._groupRenderListeners[tabName][groupName] = [...this._groupRenderListeners[tabName][groupName], listener];
            return () => {
                this._groupRenderListeners[tabName][groupName] = this._groupRenderListeners[tabName][groupName].filter((l) => l !== listener);
            };
        };
    }
    emitGroupRender(tabName, groupName) {
        var _a, _b, _c;
        if (!this._groupRenderSnapshots[tabName])
            this._groupRenderSnapshots[tabName] = {};
        const result = ((_a = this._groupRenderSnapshots[tabName]) === null || _a === void 0 ? void 0 : _a[groupName]) ? this._groupRenderSnapshots[tabName][groupName]() + 1 : 0;
        this._groupRenderSnapshots[tabName][groupName] = () => result;
        if (!((_c = (_b = this._groupRenderListeners) === null || _b === void 0 ? void 0 : _b[tabName]) === null || _c === void 0 ? void 0 : _c[groupName]))
            return;
        for (const listener of this._groupRenderListeners[tabName][groupName])
            listener();
    }
    getGroupRenderSnapshots() {
        return this._groupRenderSnapshots;
    }
    subscribeRenderTab(tabName) {
        return (listener) => {
            if (!this._tabRenderListeners[tabName])
                this._tabRenderListeners[tabName] = [];
            this._tabRenderListeners[tabName] = [...this._tabRenderListeners[tabName], listener];
            return () => {
                this._tabRenderListeners[tabName] = this._tabRenderListeners[tabName].filter((l) => l !== listener);
            };
        };
    }
    emitTabRender(tabName) {
        const result = this._tabRenderSnapshots[tabName] ? this._tabRenderSnapshots[tabName]() + 1 : 0;
        this._tabRenderSnapshots[tabName] = () => result;
        if (!this._tabRenderListeners[tabName])
            return;
        for (const listener of this._tabRenderListeners[tabName])
            listener();
    }
    getTabRenderSnapshots() {
        return this._tabRenderSnapshots;
    }
    subscribeRenderForm() {
        return (listener) => {
            if (!this._formRenderListeners)
                this._formRenderListeners = [];
            this._formRenderListeners = [...this._formRenderListeners, listener];
            return () => {
                this._formRenderListeners = this._formRenderListeners.filter((l) => l !== listener);
            };
        };
    }
    emitFormRender() {
        const result = this._formRenderSnapshot ? this._formRenderSnapshot() + 1 : 0;
        this._formRenderSnapshot = () => result;
        if (!this._formRenderListeners)
            return;
        for (const listener of this._formRenderListeners)
            listener();
    }
    getFormRenderSnapshot() {
        return this._formRenderSnapshot;
    }
}
