import { HelpersObjects } from '@krinopotam/js-helpers';
import { BaseValidator } from './validators/baseValidator';
import { InlineGroupField } from '../dForm/fields/inlineGroup/inlineGroupField';
export class DModel {
    constructor(formId) {
        this._formProps = {};
        this._fieldsProps = {};
        this._fieldsMap = {};
        this._rootFields = {};
        this._dataSet = undefined;
        this._labels = {};
        this._values = {};
        this._touched = {};
        this._dirty = {};
        this._errors = {};
        this._hidden = {};
        this._readOnly = {};
        this._disabled = {};
        this._ready = {};
        this._formDisabled = false;
        this._formReadOnly = false;
        this._formDirty = false;
        this._formReady = undefined;
        this._isFormMounted = false;
        this._formMode = 'create';
        this._submitCount = 0;
        this._isSubmitting = false;
        this._isFetching = false;
        this._isFetchingFailed = false;
        this._callbacks = {};
        this._formRenderListeners = [];
        this._formRenderSnapshot = {};
        this._formId = formId;
        this._validator = new BaseValidator();
    }
    initModel(formProps, callbacks) {
        var _a, _b;
        const startTime = new Date().getTime();
        this._callbacks = callbacks;
        if (this._formProps === formProps)
            return;
        this._formProps = formProps;
        this._formMode = (_a = formProps.formMode) !== null && _a !== void 0 ? _a : 'create';
        this._formReadOnly = !!formProps.readOnly;
        const prevFieldsMap = this._fieldsMap;
        [this._fieldsMap, this._rootFields] = this.prepareFieldCollection(formProps.fieldsProps);
        const oldDataSet = this.getFormDataSet();
        [this._labels, this._values, this._hidden, this._readOnly, this._disabled] = this.initFieldsParameters(this._fieldsMap, prevFieldsMap, this._values, oldDataSet !== formProps.dataSet ? formProps.dataSet : undefined, (_b = formProps.formMode) !== null && _b !== void 0 ? _b : 'create');
        this._dataSet = formProps.dataSet;
        if (!formProps.disableDepended)
            this._hidden = this.calculateLockedFields();
        else
            this._disabled = this.calculateLockedFields();
        const endTime = new Date().getTime();
        console.log(`dModel init: ${endTime - startTime}ms`);
    }
    prepareFieldCollection(fieldsProps, parent) {
        const fieldsMap = {};
        const rootFields = {};
        if (!fieldsProps)
            return [fieldsMap, rootFields];
        const _fieldsProps = this.modifyFieldsProps(fieldsProps);
        for (const fieldName in _fieldsProps) {
            const fieldProps = _fieldsProps[fieldName];
            if (fieldsMap[fieldName])
                console.error(`The form contains duplicate field names  "${fieldName}"!`);
            const field = new fieldProps.component(fieldName, fieldProps, this, parent);
            fieldsMap[fieldName] = field;
            rootFields[fieldName] = field;
            const [plainChildren] = field.initChildrenFields();
            for (const childName in plainChildren) {
                if (fieldsMap[childName])
                    console.error(`The form contains duplicate field names  "${childName}"!`);
                fieldsMap[childName] = plainChildren[childName];
            }
        }
        return [fieldsMap, rootFields];
    }
    modifyFieldsProps(fieldsProps) {
        const fieldsPropsGroups = {};
        let i = 0;
        for (const fieldName in fieldsProps) {
            i++;
            const fieldProps = Object.assign({}, fieldsProps[fieldName]);
            let groupName = '';
            if (fieldProps.inlineGroup) {
                groupName = fieldProps.inlineGroup;
                fieldProps.inlineGroup = undefined;
            }
            else
                groupName = '[__group__]-' + i;
            if (!fieldsPropsGroups[groupName])
                fieldsPropsGroups[groupName] = {};
            fieldsPropsGroups[groupName][fieldName] = fieldProps;
        }
        const result = {};
        for (const groupName in fieldsPropsGroups) {
            const group = fieldsPropsGroups[groupName];
            if (Object.keys(group).length > 1) {
                result[groupName] = {
                    component: InlineGroupField,
                    fieldsProps: group,
                };
            }
            else {
                const fieldName = Object.keys(group)[0];
                result[fieldName] = group[fieldName];
            }
        }
        return result;
    }
    initFieldsParameters(fieldsMap, prevFieldsMap, curValues, dataSet, mode) {
        var _a;
        const values = {};
        const hidden = {};
        const readOnly = {};
        const disabled = {};
        const labels = {};
        for (const fieldName in fieldsMap) {
            const field = fieldsMap[fieldName];
            const oldField = prevFieldsMap[fieldName];
            const fieldProps = field.getProps();
            labels[fieldName] = fieldProps.label;
            hidden[fieldName] = !!fieldProps.hidden;
            readOnly[fieldName] = !!fieldProps.readOnly || mode === 'view';
            disabled[fieldName] = !!fieldProps.disabled;
            if (oldField && field.constructor.name === oldField.constructor.name) {
                values[fieldName] = curValues[fieldName];
                continue;
            }
            let fieldValue = undefined;
            if (mode === 'create')
                fieldValue = fieldProps.value;
            else
                fieldValue = (_a = fieldProps.value) !== null && _a !== void 0 ? _a : dataSet === null || dataSet === void 0 ? void 0 : dataSet[fieldName];
            values[fieldName] = fieldValue;
        }
        return [labels, values, hidden, readOnly, disabled];
    }
    calculateLockedFields() {
        const result = {};
        for (const fieldName in this._fieldsMap)
            result[fieldName] = this.isFieldMustBeLocked(this._fieldsMap[fieldName]);
        return result;
    }
    lockDependedFields(field, noEvents, noRerender) {
        const disableDepended = this._formProps.disableDepended;
        const fieldName = field.getName();
        for (const childName in this._fieldsMap) {
            const childField = this._fieldsMap[childName];
            const childProps = childField.getProps();
            if (!(childProps === null || childProps === void 0 ? void 0 : childProps.dependsOn) || childProps.dependsOn.indexOf(fieldName) < 0)
                continue;
            const isLocked = this.isFieldMustBeLocked(childField);
            if (disableDepended)
                childField.setDisabled(isLocked, noEvents, noRerender);
            else
                childField.setHidden(isLocked, noEvents, noRerender);
        }
    }
    isFieldMustBeLocked(field) {
        var _a;
        const fieldProps = field.getProps();
        if (!((_a = fieldProps.dependsOn) === null || _a === void 0 ? void 0 : _a.length))
            return !!fieldProps.hidden;
        for (const parentName of fieldProps.dependsOn) {
            const parentField = this._fieldsMap[parentName];
            if (!parentField)
                continue;
            const parentProps = parentField.getProps();
            if (parentProps.hidden ||
                parentField.isHidden() ||
                parentField.isEmptyValue())
                return true;
            if (this.isFieldMustBeLocked(parentField))
                return true;
        }
        return false;
    }
    getFieldsMap() {
        return this._fieldsMap;
    }
    getRootFields() {
        return this._rootFields;
    }
    getField(fieldName) {
        return this._fieldsMap[fieldName];
    }
    getFormId() {
        return this._formId;
    }
    getFormProps() {
        return this._formProps;
    }
    getFormLabels() {
        return this._labels;
    }
    getFormValues() {
        return this._values;
    }
    setFormValues(dataSet, noEvents, noRerender) {
        var _a, _b, _c;
        const newDataSet = noEvents ? dataSet : (_c = (_b = (_a = this._callbacks).onDataSetChange) === null || _b === void 0 ? void 0 : _b.call(_a, dataSet, this)) !== null && _c !== void 0 ? _c : dataSet;
        this._dataSet = newDataSet;
        for (const fieldName in this._fieldsMap) {
            const field = this._fieldsMap[fieldName];
            field.setValue(newDataSet === null || newDataSet === void 0 ? void 0 : newDataSet[fieldName], noEvents, noRerender);
        }
    }
    getFormTouchedFields() {
        return this._touched;
    }
    getFormDirtyFields() {
        return this._dirty;
    }
    getFormDisabledFields() {
        return this._disabled;
    }
    getFormReadOnlyFields() {
        return this._readOnly;
    }
    getFormHiddenFields() {
        return this._hidden;
    }
    getFormReadyFields() {
        return this._ready;
    }
    getFormErrors() {
        return this._errors;
    }
    getFormDataSet() {
        return this._dataSet;
    }
    getValidator() {
        return this._validator;
    }
    getModelCallbacks() {
        return this._callbacks;
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
    isFormDisabled() {
        return this._formDisabled;
    }
    setFormDisabled(value, noEvents, noRerender) {
        var _a, _b;
        const prevValue = this.isFormDisabled();
        this._formDisabled = value;
        if (prevValue === value)
            return;
        const fields = this.getFieldsMap();
        for (const fieldName in fields) {
            const field = fields[fieldName];
            field.setDisabled(value, noEvents, true);
        }
        if (!noEvents)
            (_b = (_a = this.getModelCallbacks()) === null || _a === void 0 ? void 0 : _a.onFormDisabledStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, value, this);
        if (!noRerender)
            this.emitFormRender();
    }
    isFormReadOnly() {
        return this.getFormMode() === 'view' || this._formReadOnly;
    }
    setFormReadOnly(value, noEvents, noRerender) {
        var _a, _b;
        const prevValue = this.isFormReadOnly();
        this._formReadOnly = value;
        if (prevValue === value)
            return;
        const fields = this.getFieldsMap();
        for (const fieldName in fields) {
            const field = fields[fieldName];
            field.setReadOnly(value, noEvents, true);
        }
        if (!noEvents)
            (_b = (_a = this.getModelCallbacks()) === null || _a === void 0 ? void 0 : _a.onFormReadOnlyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, value, this);
        if (!noRerender)
            this.emitFormRender();
    }
    setFormInit() {
        var _a, _b;
        this.setFormReady(false);
        (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFormInit) === null || _b === void 0 ? void 0 : _b.call(_a, this);
    }
    isFormReady() {
        return this._formReady;
    }
    setFormReady(value, noEvents) {
        setTimeout(() => {
            var _a, _b, _c, _d;
            const prevValue = this.isFormReady();
            if (this.isFormFetching() || this.isFormFetchingFailed())
                value = false;
            if (!value) {
                this._formReady = value;
                if (prevValue !== value && !noEvents)
                    (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onFormReadyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, value, this);
                return;
            }
            for (const fieldName in this._fieldsMap) {
                const field = this._fieldsMap[fieldName];
                if (field.isHidden())
                    continue;
                if (!field.isReady()) {
                    value = false;
                    break;
                }
            }
            this._formReady = value;
            if (prevValue !== value && !noEvents)
                (_d = (_c = this._callbacks) === null || _c === void 0 ? void 0 : _c.onFormReadyStateChanged) === null || _d === void 0 ? void 0 : _d.call(_c, value, this);
        }, 0);
    }
    validateForm(noEvents, noRerender) {
        var _a, _b;
        for (const fieldName in this._fieldsMap) {
            const field = this._fieldsMap[fieldName];
            field.validate(noEvents, noRerender);
        }
        this.emitFormRender();
        const formValues = this.getFormValues();
        const dataSet = this.getFormDataSet();
        const values = Object.assign(Object.assign({}, dataSet), formValues);
        (_b = (_a = this._callbacks).onFormValidated) === null || _b === void 0 ? void 0 : _b.call(_a, values, this.getFormErrors(), this.isFormSubmitting(), this);
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
            if (errors[fieldName])
                return true;
        }
        return false;
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
    submit(onSubmitSuccess, onSubmitError, onSubmitComplete) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4;
        if (this.isFormSubmitting())
            return;
        this.incrementSubmitCount();
        this.setFormSubmitting(true);
        const formValues = this.getFormValues();
        const dataSet = this.getFormDataSet();
        const values = Object.assign(Object.assign({}, dataSet), formValues);
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
        const result = (_k = this._callbacks) === null || _k === void 0 ? void 0 : _k.onSubmit(values, this);
        if (HelpersObjects.isPromise(result)) {
            const promiseResult = result;
            promiseResult
                .then(promiseResult => {
                var _a, _b, _c, _d;
                if (!this.isFormMounted())
                    return;
                this.setFormSubmitting(false);
                onSubmitSuccess === null || onSubmitSuccess === void 0 ? void 0 : onSubmitSuccess(values, promiseResult.data || values, this);
                onSubmitComplete === null || onSubmitComplete === void 0 ? void 0 : onSubmitComplete(values, errors, this);
                (_b = (_a = this._callbacks) === null || _a === void 0 ? void 0 : _a.onSubmitSuccess) === null || _b === void 0 ? void 0 : _b.call(_a, values, promiseResult.data || values, this);
                (_d = (_c = this._callbacks) === null || _c === void 0 ? void 0 : _c.onSubmitComplete) === null || _d === void 0 ? void 0 : _d.call(_c, values, errors, this);
            })
                .catch(error => {
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
    subscribeRenderForm(listener) {
        this._formRenderListeners = [...this._formRenderListeners, listener];
        return () => {
            this._formRenderListeners = this._formRenderListeners.filter(l => l !== listener);
        };
    }
    emitFormRender() {
        this._formRenderSnapshot = {};
        if (!this._formRenderListeners)
            return;
        for (const listener of this._formRenderListeners)
            listener();
    }
    getFormRenderSnapshot() {
        return this._formRenderSnapshot;
    }
}
