import React, { useMemo } from 'react';
import { MessageBox } from '@krinopotam/ui-message-box';
export const useCallbacks = (formModalApi, modalFormProps) => {
    return useMemo(() => {
        return {
            onFieldValueChanged: (fieldName, value, prevValue) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldValueChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, value, prevValue, formModalApi);
            },
            onFieldTouchedStateChanged: (fieldName, state) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldTouchedStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, state, formModalApi);
            },
            onFieldDirtyStateChanged: (fieldName, state) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldDirtyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, state, formModalApi);
            },
            onFieldErrorChanged: (fieldName, error) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldErrorChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, error, formModalApi);
            },
            onFieldHiddenStateChanged: (fieldName, state) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldHiddenStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, state, formModalApi);
            },
            onFieldReadOnlyStateChanged: (fieldName, state) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldReadOnlyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, state, formModalApi);
            },
            onFieldDisabledStateChanged: (fieldName, state) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldDisabledStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, state, formModalApi);
            },
            onFieldReady: (fieldName) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldReady) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, formModalApi);
            },
            onTabHiddenStateChanged: (tabName, state) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldHiddenStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, tabName, state, formModalApi);
            },
            onTabReadOnlyStateChanged: (tabName, state) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onTabReadOnlyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, tabName, state, formModalApi);
            },
            onTabDisabledStateChanged: (tabName, state) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onTabDisabledStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, tabName, state, formModalApi);
            },
            onFormDirtyStateChanged: (state) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFormDirtyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, state, formModalApi);
            },
            onFormReadOnlyStateChanged: (state) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFormReadOnlyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, state, formModalApi);
            },
            onFormInit: () => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFormInit) === null || _b === void 0 ? void 0 : _b.call(_a, formModalApi);
            },
            onFormReadyStateChanged: (state) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFormReadyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, state, formModalApi);
            },
            onFieldValidated: (fieldName, value, error, isSubmit) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldValidated) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, value, error, isSubmit, formModalApi);
            },
            onFormValidated: (values, errors, isSubmit) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFormValidated) === null || _b === void 0 ? void 0 : _b.call(_a, values, errors, isSubmit, formModalApi);
            },
            onFormHasErrors: (values, errors) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFormHasErrors) === null || _b === void 0 ? void 0 : _b.call(_a, values, errors, formModalApi);
            },
            onFormHasNoErrors: (values) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFormHasNoErrors) === null || _b === void 0 ? void 0 : _b.call(_a, values, formModalApi);
            },
            onDataFetch: () => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onDataFetch) === null || _b === void 0 ? void 0 : _b.call(_a, formModalApi);
            },
            onDataFetchSuccess: (result) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onDataFetchSuccess) === null || _b === void 0 ? void 0 : _b.call(_a, result, formModalApi);
            },
            onDataFetchError: (message, code) => {
                var _a, _b;
                if (((_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onDataFetchError) === null || _b === void 0 ? void 0 : _b.call(_a, message, code, formModalApi)) === false)
                    return false;
                const box = MessageBox.confirm({
                    content: (React.createElement(React.Fragment, null,
                        React.createElement("p", null, message),
                        React.createElement("p", null, 'Попробовать снова?'))),
                    type: 'error',
                    buttons: {
                        ok: {
                            onClick: () => {
                                box.destroy();
                                formModalApi.model.fetchData();
                            },
                        },
                        cancel: {
                            onClick: () => {
                                var _a;
                                box.destroy();
                                (_a = formModalApi.forceClose) === null || _a === void 0 ? void 0 : _a.call(formModalApi);
                            },
                        },
                    },
                });
                return false;
            },
            onDataFetchComplete: () => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onDataFetchComplete) === null || _b === void 0 ? void 0 : _b.call(_a, formModalApi);
            },
            onSubmitValidation: (values, errors) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onSubmitValidation) === null || _b === void 0 ? void 0 : _b.call(_a, values, errors, formModalApi);
            },
            onSubmit: (values) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                (_b = (_a = formModalApi.buttonsApi).disabled) === null || _b === void 0 ? void 0 : _b.call(_a, 'ok', true);
                (_d = (_c = formModalApi.buttonsApi).disabled) === null || _d === void 0 ? void 0 : _d.call(_c, 'cancel', true);
                if (!modalFormProps.confirmChanges)
                    (_f = (_e = formModalApi.buttonsApi).loading) === null || _f === void 0 ? void 0 : _f.call(_e, 'ok', true);
                return (_h = (_g = modalFormProps.callbacks) === null || _g === void 0 ? void 0 : _g.onSubmit) === null || _h === void 0 ? void 0 : _h.call(_g, values, formModalApi);
            },
            onSubmitSuccess: (values, resultValues) => {
                var _a, _b;
                if (((_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onSubmitSuccess) === null || _b === void 0 ? void 0 : _b.call(_a, values, resultValues, formModalApi)) === false)
                    return false;
                formModalApi.forceClose();
            },
            onSubmitError: (values, message, code) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onSubmitError) === null || _b === void 0 ? void 0 : _b.call(_a, values, message, code, formModalApi);
            },
            onSubmitComplete: (values, errors) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (((_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onSubmitComplete) === null || _b === void 0 ? void 0 : _b.call(_a, values, errors, formModalApi)) === false)
                    return false;
                (_d = (_c = formModalApi.buttonsApi).disabled) === null || _d === void 0 ? void 0 : _d.call(_c, 'ok', false);
                (_f = (_e = formModalApi.buttonsApi).disabled) === null || _f === void 0 ? void 0 : _f.call(_e, 'cancel', false);
                (_h = (_g = formModalApi.buttonsApi).loading) === null || _h === void 0 ? void 0 : _h.call(_g, 'ok', false);
            },
            onDataSetChange: (dataSet) => {
                var _a, _b;
                return (_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onDataSetChange) === null || _b === void 0 ? void 0 : _b.call(_a, dataSet, formModalApi);
            },
        };
    }, [formModalApi, modalFormProps.callbacks, modalFormProps.confirmChanges]);
};
