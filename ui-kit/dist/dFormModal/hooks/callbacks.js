import React, { useMemo } from 'react';
import { MessageBox } from '../../messageBox';
export const useFormCallbacks = (formModalApi, modalFormProps) => {
    return useMemo(() => {
        return {
            onTabHiddenStateChanged: (tabName, state) => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onTabHiddenStateChanged) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, tabName, state, formModalApi); },
            onTabReadOnlyStateChanged: (tabName, state) => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onTabReadOnlyStateChanged) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, tabName, state, formModalApi); },
            onTabDisabledStateChanged: (tabName, state) => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onTabDisabledStateChanged) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, tabName, state, formModalApi); },
            onFormDirtyStateChanged: (state) => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onFormDirtyStateChanged) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, state, formModalApi); },
            onFormReadOnlyStateChanged: (state) => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onFormReadOnlyStateChanged) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, state, formModalApi); },
            onFormInit: () => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onFormInit) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, formModalApi); },
            onFormReadyStateChanged: (state) => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onFormReadyStateChanged) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, state, formModalApi); },
            onFormValidated: (values, errors, isSubmit) => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onFormValidated) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, values, errors, isSubmit, formModalApi); },
            onFormHasErrors: (values, errors) => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onFormHasErrors) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, values, errors, formModalApi); },
            onFormHasNoErrors: (values) => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onFormHasNoErrors) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, values, formModalApi); },
            onDataFetch: () => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onDataFetch) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, formModalApi); },
            onDataFetchSuccess: (result) => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onDataFetchSuccess) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, result, formModalApi); },
            onDataFetchError: error => {
                var _a;
                if (((_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onDataFetchError) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, error, formModalApi)) === false)
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
            onDataFetchComplete: () => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onDataFetchComplete) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, formModalApi); },
            onSubmitValidation: (values, errors) => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onSubmitValidation) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, values, errors, formModalApi); },
            onSubmit: (values) => {
                var _a, _b, _c, _d, _e, _f, _g;
                (_b = (_a = formModalApi.buttonsApi).disabled) === null || _b === void 0 ? void 0 : _b.call(_a, 'ok', true);
                (_d = (_c = formModalApi.buttonsApi).disabled) === null || _d === void 0 ? void 0 : _d.call(_c, 'cancel', true);
                if (!modalFormProps.confirmChanges)
                    (_f = (_e = formModalApi.buttonsApi).loading) === null || _f === void 0 ? void 0 : _f.call(_e, 'ok', true);
                return (_g = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onSubmit) === null || _g === void 0 ? void 0 : _g.call(modalFormProps, values, formModalApi);
            },
            onSubmitSuccess: (values, resultValues) => {
                var _a;
                if (((_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onSubmitSuccess) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, values, resultValues, formModalApi)) === false)
                    return false;
                formModalApi.forceClose();
            },
            onSubmitError: (values, error) => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onSubmitError) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, values, error, formModalApi); },
            onSubmitComplete: (values, errors) => {
                var _a, _b, _c, _d, _e, _f, _g;
                if (((_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onSubmitComplete) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, values, errors, formModalApi)) === false)
                    return false;
                (_c = (_b = formModalApi.buttonsApi).disabled) === null || _c === void 0 ? void 0 : _c.call(_b, 'ok', false);
                (_e = (_d = formModalApi.buttonsApi).disabled) === null || _e === void 0 ? void 0 : _e.call(_d, 'cancel', false);
                (_g = (_f = formModalApi.buttonsApi).loading) === null || _g === void 0 ? void 0 : _g.call(_f, 'ok', false);
            },
            onDataSetChange: (dataSet) => { var _a; return (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.onDataSetChange) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, dataSet, formModalApi); },
        };
    }, [formModalApi, modalFormProps]);
};
//# sourceMappingURL=callbacks.js.map