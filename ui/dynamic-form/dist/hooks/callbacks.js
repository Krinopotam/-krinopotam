import React, { useMemo } from 'react';
import { MessageBox } from '@krinopotam/ui-message-box';
export const useCallbacks = (formProps, formApi) => {
    return useMemo(() => {
        return {
            onFieldValueChanged: (fieldName, value, prevValue) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldValueChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, value, prevValue, formApi);
            },
            onFieldTouchedStateChanged: (fieldName, state) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldTouchedStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, state, formApi);
            },
            onFieldDirtyStateChanged: (fieldName, state) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldDirtyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, state, formApi);
            },
            onFieldErrorChanged: (fieldName, error) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldErrorChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, error, formApi);
            },
            onFieldHiddenStateChanged: (fieldName, state) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldHiddenStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, state, formApi);
            },
            onFieldReadOnlyStateChanged: (fieldName, state) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldReadOnlyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, state, formApi);
            },
            onFieldDisabledStateChanged: (fieldName, state) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldDisabledStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, state, formApi);
            },
            onFieldReady: (fieldName) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldReady) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, formApi);
            },
            onTabHiddenStateChanged: (tabName, state) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldHiddenStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, tabName, state, formApi);
            },
            onTabReadOnlyStateChanged: (tabName, state) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onTabReadOnlyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, tabName, state, formApi);
            },
            onTabDisabledStateChanged: (tabName, state) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onTabDisabledStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, tabName, state, formApi);
            },
            onFormDirtyStateChanged: (state) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFormDirtyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, state, formApi);
            },
            onFormReadOnlyStateChanged: (state) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFormReadOnlyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, state, formApi);
            },
            onFormInit: () => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFormInit) === null || _b === void 0 ? void 0 : _b.call(_a, formApi);
            },
            onFormReadyStateChanged: (state) => {
                var _a, _b, _c, _d, _e, _f;
                if (((_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFormReadyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, state, formApi)) === false)
                    return;
                console.log('formReady: ' + state);
                if (state)
                    (_d = (_c = formApi.buttonsApi).disabled) === null || _d === void 0 ? void 0 : _d.call(_c, 'ok', false);
                else
                    (_f = (_e = formApi.buttonsApi).disabled) === null || _f === void 0 ? void 0 : _f.call(_e, 'ok', true);
            },
            onFieldValidated: (fieldName, value, error, isSubmit) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFieldValidated) === null || _b === void 0 ? void 0 : _b.call(_a, fieldName, value, error, isSubmit, formApi);
            },
            onFormValidated: (values, errors, isSubmit) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFormValidated) === null || _b === void 0 ? void 0 : _b.call(_a, values, errors, isSubmit, formApi);
            },
            onFormHasErrors: (values, errors) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFormHasErrors) === null || _b === void 0 ? void 0 : _b.call(_a, values, errors, formApi);
            },
            onFormHasNoErrors: (values) => {
                var _a, _b, _c, _d;
                if (((_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onFormHasNoErrors) === null || _b === void 0 ? void 0 : _b.call(_a, values, formApi)) === false)
                    return;
                (_d = (_c = formApi.buttonsApi).disabled) === null || _d === void 0 ? void 0 : _d.call(_c, 'ok', false);
            },
            onDataFetch: () => {
                var _a, _b;
                return (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onDataFetch) === null || _b === void 0 ? void 0 : _b.call(_a, formApi);
            },
            onDataFetchSuccess: (result) => {
                var _a, _b;
                if (((_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onDataFetchSuccess) === null || _b === void 0 ? void 0 : _b.call(_a, result, formApi)) === false)
                    return;
            },
            onDataFetchError: (message, code) => {
                var _a, _b;
                if (((_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onDataFetchError) === null || _b === void 0 ? void 0 : _b.call(_a, message, code, formApi)) === false)
                    return;
                const box = MessageBox.confirm({
                    content: (React.createElement(React.Fragment, null,
                        React.createElement("p", null, message),
                        React.createElement("p", null, 'Попробовать снова?'))),
                    type: 'error',
                    buttons: {
                        ok: {
                            onClick: () => {
                                box.destroy();
                                formApi.model.fetchData();
                            },
                        },
                    },
                });
            },
            onDataFetchComplete: () => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onDataFetchComplete) === null || _b === void 0 ? void 0 : _b.call(_a, formApi);
            },
            onSubmitValidation: (values, errors) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onSubmitValidation) === null || _b === void 0 ? void 0 : _b.call(_a, values, errors, formApi);
            },
            onSubmit: (values) => {
                var _a, _b, _c, _d, _e, _f;
                (_b = (_a = formApi.buttonsApi).disabled) === null || _b === void 0 ? void 0 : _b.call(_a, 'ok', true);
                if (!formProps.confirmChanges)
                    (_d = (_c = formApi.buttonsApi).loading) === null || _d === void 0 ? void 0 : _d.call(_c, 'ok', true);
                return (_f = (_e = formProps.callbacks) === null || _e === void 0 ? void 0 : _e.onSubmit) === null || _f === void 0 ? void 0 : _f.call(_e, values, formApi);
            },
            onSubmitSuccess: (values, resultValues) => {
                var _a, _b;
                (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onSubmitSuccess) === null || _b === void 0 ? void 0 : _b.call(_a, values, resultValues, formApi);
            },
            onSubmitError: (values, message, code) => {
                var _a, _b;
                if (((_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onSubmitError) === null || _b === void 0 ? void 0 : _b.call(_a, values, message, code, formApi)) === false)
                    return;
                MessageBox.alert({ content: message, type: 'error' });
            },
            onSubmitComplete: (values, errors) => {
                var _a, _b, _c, _d, _e, _f;
                if (((_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onSubmitComplete) === null || _b === void 0 ? void 0 : _b.call(_a, values, errors, formApi)) === false)
                    return;
                (_d = (_c = formApi.buttonsApi).disabled) === null || _d === void 0 ? void 0 : _d.call(_c, 'ok', false);
                (_f = (_e = formApi.buttonsApi).loading) === null || _f === void 0 ? void 0 : _f.call(_e, 'ok', false);
            },
            onDataSetChange: (dataSet) => {
                var _a, _b;
                return (_b = (_a = formProps.callbacks) === null || _a === void 0 ? void 0 : _a.onDataSetChange) === null || _b === void 0 ? void 0 : _b.call(_a, dataSet, formApi);
            },
        };
    }, [formProps.callbacks, formProps.confirmChanges, formApi]);
};
