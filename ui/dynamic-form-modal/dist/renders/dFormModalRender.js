import { DForm } from '@krinopotam/ui-dynamic-form';
import { ButtonsRender, Modal } from '@krinopotam/ui-modal';
import React from 'react';
export const DFormModalRender = ({ formId, buttons, buttonsApi, callbacks, formApi, formProps, modalFormProps }) => {
    var _a;
    const formMode = (_a = modalFormProps.formMode) !== null && _a !== void 0 ? _a : 'create';
    const modalTitle = useFormTitle(formMode, modalFormProps.title);
    return (React.createElement(Modal, { dispatcherFormId: formId, open: modalFormProps.isOpened, onCancel: formApi.close, centered: true, destroyOnClose: true, footer: React.createElement(ButtonsRender, { formId: formId, buttons: buttons, formType: modalFormProps.formType, buttonsApi: buttonsApi, arrowsSelection: false, context: formApi }), maskClosable: false, keyboard: false, bodyHeight: modalFormProps.bodyHeight, bodyMinHeight: modalFormProps.bodyMinHeight, bodyMaxHeight: modalFormProps.bodyMaxHeight, width: modalFormProps.width, minWidth: modalFormProps.minWidth, maxWidth: modalFormProps.maxWidth, notScrollable: modalFormProps.notScrollable, resizable: modalFormProps.resizable !== false, wrapClassName: 'managed-dynamic-buttons-row', title: modalTitle }, modalFormProps.isOpened ? React.createElement(DForm, Object.assign({ callbacks: callbacks, apiRef: formApi }, formProps)) : null));
};
const useFormTitle = (formMode, title) => {
    if (title)
        return title;
    if (formMode === 'view')
        return 'Просмотр';
    if (formMode === 'create')
        return 'Создание';
    if (formMode === 'clone')
        return 'Клонирование';
    if (formMode === 'update')
        return 'Редактирование';
    return '&nbsp;';
};
