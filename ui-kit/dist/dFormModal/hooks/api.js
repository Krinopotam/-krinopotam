import { MessageBox } from '../../messageBox';
import { CloneObject } from "@krinopotam/js-helpers";
import { useCallback } from 'react';
export const useInitModalFormApi = (formId, formApi, modalFormProps, buttonsApi, updateFormProps) => {
    formApi.getFormId = useApiGetFormId(formId);
    formApi.buttonsApi = buttonsApi;
    formApi.getFormProps = useApiGetModalFormProps(modalFormProps);
    formApi.setFormProps = useApiSetModalFormProps(modalFormProps, updateFormProps);
    formApi.open = useApiFormOpen(formApi);
    formApi.close = useApiTryToCloseForm(formApi);
    formApi.forceClose = useApiFormForceClose(formApi);
};
const useApiGetFormId = (formId) => {
    return useCallback(() => {
        return formId;
    }, [formId]);
};
const useApiGetModalFormProps = (modalFormProps) => {
    return useCallback(() => {
        return modalFormProps;
    }, [modalFormProps]);
};
const useApiSetModalFormProps = (modalFormProps, setModalFormProps) => {
    return useCallback((props) => {
        setModalFormProps(Object.assign(Object.assign({}, modalFormProps), props));
    }, [modalFormProps, setModalFormProps]);
};
const useApiFormOpen = (formApi) => {
    return useCallback((formMode, dataSet) => {
        var _a, _b;
        if (!formMode) {
            if (process.env.NODE_ENV !== 'production')
                console.warn('The form mode is not set');
            return;
        }
        const newDataSet = dataSet !== null && dataSet !== void 0 ? dataSet : formApi.getFormProps().dataSet;
        const clonedDataSet = newDataSet ? CloneObject(newDataSet) : undefined;
        const modalFormProps = formApi.getFormProps();
        if (((_a = modalFormProps.onOpen) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, formApi, clonedDataSet)) === false)
            return;
        formApi.setFormProps({
            isOpened: true,
            formMode: formMode,
            dataSet: clonedDataSet,
        });
        (_b = modalFormProps.onOpened) === null || _b === void 0 ? void 0 : _b.call(modalFormProps, formApi, clonedDataSet);
    }, [formApi]);
};
const useApiFormForceClose = (formApi) => {
    return useCallback(() => {
        var _a, _b;
        const modalFormProps = formApi.getFormProps();
        if (((_a = modalFormProps.onClosing) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, formApi)) === false)
            return false;
        formApi.setFormProps({ isOpened: false });
        (_b = modalFormProps.onClosed) === null || _b === void 0 ? void 0 : _b.call(modalFormProps, formApi);
    }, [formApi]);
};
const useApiTryToCloseForm = (formApi) => {
    return useCallback(() => {
        var _a, _b;
        const modalFormProps = formApi.getFormProps();
        if (((_a = modalFormProps.onClosing) === null || _a === void 0 ? void 0 : _a.call(modalFormProps, formApi)) === false)
            return;
        if (formApi.model.isFormDirty() && modalFormProps.confirmChanges) {
            MessageBox.confirm({
                content: (_b = modalFormProps.closeFormConfirmMessage) !== null && _b !== void 0 ? _b : 'Отменить сделанные изменения?',
                okText: 'Да',
                cancelText: 'Нет',
                onOk: () => {
                    formApi.forceClose();
                },
            });
            return;
        }
        formApi.forceClose();
    }, [formApi]);
};
