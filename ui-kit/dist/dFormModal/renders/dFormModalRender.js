import { DForm } from '../../dForm';
import { ButtonsRender, Modal } from '../../modal';
import React, { useState } from 'react';
import { HelpersStrings } from '@krinopotam/js-helpers';
export const DFormModalRender = ({ formId, buttons, buttonsApi, formApi, formProps, modalFormProps }) => {
    var _a;
    const [formIdVal] = useState(formId !== null && formId !== void 0 ? formId : 'dFormModal-' + HelpersStrings.getUuid());
    const formMode = (_a = modalFormProps.formMode) !== null && _a !== void 0 ? _a : 'create';
    const modalTitle = useFormTitle(formMode, modalFormProps.title);
    return (React.createElement(Modal, { modalId: formIdVal, open: modalFormProps.isOpened, onCancel: formApi.close, centered: true, destroyOnClose: true, footer: React.createElement(ButtonsRender, { buttons: buttons, colorType: modalFormProps.colorType, buttonsApi: buttonsApi, arrowsSelection: modalFormProps.arrowsButtonsSelection, context: formApi }), footerStyle: modalFormProps.footerStyle, maskClosable: false, keyboard: false, bodyHeight: modalFormProps.bodyHeight, bodyMinHeight: modalFormProps.bodyMinHeight, bodyMaxHeight: modalFormProps.bodyMaxHeight, width: modalFormProps.width, minWidth: modalFormProps.minWidth, maxWidth: modalFormProps.maxWidth, notScrollable: modalFormProps.notScrollable, resizable: modalFormProps.resizable !== false, title: modalTitle, headerIcon: modalFormProps.headerIcon, headerStyle: modalFormProps.headerStyle, colorType: formProps.colorType }, modalFormProps.isOpened ? (React.createElement(DForm, Object.assign({ apiRef: formApi }, formProps, { formStyle: Object.assign({ height: '100%' }, formProps.formStyle), containerStyle: Object.assign({ height: '100%' }, formProps.containerStyle) }))) : null));
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
