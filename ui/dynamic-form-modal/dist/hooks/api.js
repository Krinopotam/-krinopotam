import { MessageBox } from '@krinopotam/ui-message-box';
import { HelpersObjects } from "@krinopotam/js-helpers";
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
export const useApiGetFormId = (formId) => {
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
        var _a, _b, _c, _d;
        if (!formMode) {
            if (process.env.NODE_ENV !== 'production')
                console.warn('The form mode is not set');
            return;
        }
        const newDataSet = dataSet !== null && dataSet !== void 0 ? dataSet : formApi.getFormProps().dataSet;
        const clonedDataSet = newDataSet ? HelpersObjects.cloneObject(newDataSet) : undefined;
        const modalFormProps = formApi.getFormProps();
        if (((_b = (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onOpen) === null || _b === void 0 ? void 0 : _b.call(_a, formApi, clonedDataSet)) === false)
            return;
        formApi.setFormProps({
            isOpened: true,
            formMode: formMode,
            dataSet: clonedDataSet,
        });
        (_d = (_c = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.callbacks) === null || _c === void 0 ? void 0 : _c.onOpened) === null || _d === void 0 ? void 0 : _d.call(_c, formApi, clonedDataSet);
    }, [formApi]);
};
const useApiFormForceClose = (formApi) => {
    return useCallback(() => {
        var _a, _b, _c, _d;
        const modalFormProps = formApi.getFormProps();
        if (((_b = (_a = modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onClosing) === null || _b === void 0 ? void 0 : _b.call(_a, formApi)) === false)
            return false;
        formApi.setFormProps({ isOpened: false });
        (_d = (_c = modalFormProps.callbacks) === null || _c === void 0 ? void 0 : _c.onClosed) === null || _d === void 0 ? void 0 : _d.call(_c, formApi);
    }, [formApi]);
};
const useApiTryToCloseForm = (formApi) => {
    return useCallback(() => {
        var _a, _b, _c;
        const modalFormProps = formApi.getFormProps();
        if (((_b = (_a = modalFormProps === null || modalFormProps === void 0 ? void 0 : modalFormProps.callbacks) === null || _a === void 0 ? void 0 : _a.onClosing) === null || _b === void 0 ? void 0 : _b.call(_a, formApi)) === false)
            return;
        if (formApi.model.isFormDirty() && modalFormProps.confirmChanges) {
            MessageBox.confirm({
                content: (_c = modalFormProps.closeFormConfirmMessage) !== null && _c !== void 0 ? _c : 'Отменить сделанные изменения?',
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
