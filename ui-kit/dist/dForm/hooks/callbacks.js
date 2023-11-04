import React, { useMemo } from 'react';
import { MessageBox } from '../../messageBox';
export const useModelCallbacks = (formProps, formApi) => {
    return useMemo(() => {
        return {
            onTabHiddenStateChanged: (tabName, state) => { var _a; return (_a = formProps === null || formProps === void 0 ? void 0 : formProps.onTabHiddenStateChanged) === null || _a === void 0 ? void 0 : _a.call(formProps, tabName, state, formApi); },
            onTabReadOnlyStateChanged: (tabName, state) => { var _a; return (_a = formProps === null || formProps === void 0 ? void 0 : formProps.onTabReadOnlyStateChanged) === null || _a === void 0 ? void 0 : _a.call(formProps, tabName, state, formApi); },
            onTabDisabledStateChanged: (tabName, state) => { var _a; return (_a = formProps === null || formProps === void 0 ? void 0 : formProps.onTabDisabledStateChanged) === null || _a === void 0 ? void 0 : _a.call(formProps, tabName, state, formApi); },
            onFormDirtyStateChanged: (state) => { var _a; return (_a = formProps === null || formProps === void 0 ? void 0 : formProps.onFormDirtyStateChanged) === null || _a === void 0 ? void 0 : _a.call(formProps, state, formApi); },
            onFormReadOnlyStateChanged: (state) => { var _a; return (_a = formProps === null || formProps === void 0 ? void 0 : formProps.onFormReadOnlyStateChanged) === null || _a === void 0 ? void 0 : _a.call(formProps, state, formApi); },
            onFormInit: () => { var _a; return (_a = formProps === null || formProps === void 0 ? void 0 : formProps.onFormInit) === null || _a === void 0 ? void 0 : _a.call(formProps, formApi); },
            onFormReadyStateChanged: (state) => {
                var _a, _b, _c, _d, _e;
                if (((_a = formProps === null || formProps === void 0 ? void 0 : formProps.onFormReadyStateChanged) === null || _a === void 0 ? void 0 : _a.call(formProps, state, formApi)) === false)
                    return false;
                if (state)
                    (_c = (_b = formApi.buttonsApi).disabled) === null || _c === void 0 ? void 0 : _c.call(_b, 'ok', false);
                else
                    (_e = (_d = formApi.buttonsApi).disabled) === null || _e === void 0 ? void 0 : _e.call(_d, 'ok', true);
            },
            onFormValidated: (values, errors, isSubmit) => { var _a; return (_a = formProps === null || formProps === void 0 ? void 0 : formProps.onFormValidated) === null || _a === void 0 ? void 0 : _a.call(formProps, values, errors, isSubmit, formApi); },
            onFormHasErrors: (values, errors) => { var _a; return (_a = formProps === null || formProps === void 0 ? void 0 : formProps.onFormHasErrors) === null || _a === void 0 ? void 0 : _a.call(formProps, values, errors, formApi); },
            onFormHasNoErrors: (values) => {
                var _a, _b, _c;
                if (((_a = formProps === null || formProps === void 0 ? void 0 : formProps.onFormHasNoErrors) === null || _a === void 0 ? void 0 : _a.call(formProps, values, formApi)) === false)
                    return false;
                (_c = (_b = formApi.buttonsApi).disabled) === null || _c === void 0 ? void 0 : _c.call(_b, 'ok', false);
            },
            onDataFetch: () => { var _a; return (_a = formProps === null || formProps === void 0 ? void 0 : formProps.onDataFetch) === null || _a === void 0 ? void 0 : _a.call(formProps, formApi); },
            onDataFetchSuccess: (result) => {
                var _a;
                if (((_a = formProps === null || formProps === void 0 ? void 0 : formProps.onDataFetchSuccess) === null || _a === void 0 ? void 0 : _a.call(formProps, result, formApi)) === false)
                    return false;
            },
            onDataFetchError: error => {
                var _a;
                if (((_a = formProps === null || formProps === void 0 ? void 0 : formProps.onDataFetchError) === null || _a === void 0 ? void 0 : _a.call(formProps, error, formApi)) === false)
                    return false;
                const box = MessageBox.confirm({
                    content: (React.createElement(React.Fragment, null,
                        React.createElement("p", null,
                            React.createElement("b", null, error.message)),
                        error.stack && import.meta.env.MODE === 'development' ? React.createElement("p", null, error.stack) : '',
                        React.createElement("p", null, 'Попробовать снова?'))),
                    colorType: 'danger',
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
            onDataFetchComplete: () => { var _a; return (_a = formProps === null || formProps === void 0 ? void 0 : formProps.onDataFetchComplete) === null || _a === void 0 ? void 0 : _a.call(formProps, formApi); },
            onSubmitValidation: (values, errors) => { var _a; return (_a = formProps === null || formProps === void 0 ? void 0 : formProps.onSubmitValidation) === null || _a === void 0 ? void 0 : _a.call(formProps, values, errors, formApi); },
            onSubmit: (values) => {
                var _a, _b, _c, _d, _e;
                (_b = (_a = formApi.buttonsApi).disabled) === null || _b === void 0 ? void 0 : _b.call(_a, 'ok', true);
                if (!formProps.confirmChanges)
                    (_d = (_c = formApi.buttonsApi).loading) === null || _d === void 0 ? void 0 : _d.call(_c, 'ok', true);
                return (_e = formProps === null || formProps === void 0 ? void 0 : formProps.onSubmit) === null || _e === void 0 ? void 0 : _e.call(formProps, values, formApi);
            },
            onSubmitSuccess: (values, resultValues) => { var _a; return (_a = formProps === null || formProps === void 0 ? void 0 : formProps.onSubmitSuccess) === null || _a === void 0 ? void 0 : _a.call(formProps, values, resultValues, formApi); },
            onSubmitError: (values, error) => {
                var _a;
                if (((_a = formProps === null || formProps === void 0 ? void 0 : formProps.onSubmitError) === null || _a === void 0 ? void 0 : _a.call(formProps, values, error, formApi)) === false)
                    return false;
                MessageBox.alert({
                    content: (React.createElement(React.Fragment, null,
                        React.createElement("p", null,
                            React.createElement("b", null, error.message)),
                        error.stack && import.meta.env.MODE === 'development' ? React.createElement("p", null, error.stack) : '')),
                    colorType: 'danger',
                });
            },
            onSubmitComplete: (values, errors) => {
                var _a, _b, _c, _d, _e;
                if (((_a = formProps === null || formProps === void 0 ? void 0 : formProps.onSubmitComplete) === null || _a === void 0 ? void 0 : _a.call(formProps, values, errors, formApi)) === false)
                    return false;
                (_c = (_b = formApi.buttonsApi).disabled) === null || _c === void 0 ? void 0 : _c.call(_b, 'ok', false);
                (_e = (_d = formApi.buttonsApi).loading) === null || _e === void 0 ? void 0 : _e.call(_d, 'ok', false);
            },
            onDataSetChange: (dataSet) => { var _a; return (_a = formProps === null || formProps === void 0 ? void 0 : formProps.onDataSetChange) === null || _a === void 0 ? void 0 : _a.call(formProps, dataSet, formApi); },
        };
    }, [formProps, formApi]);
};
//# sourceMappingURL=callbacks.js.map