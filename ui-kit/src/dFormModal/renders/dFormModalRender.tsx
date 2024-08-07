import {DForm, IDFormMode, IDFormProps} from '@src/dForm';
import {IButtonsRowApi, IFormButtons} from '@src/buttonsRow/buttonsRow';

import {Modal} from '@src/modal/modal';
import {ButtonsRender} from '@src/modal/renders/buttonsRender';
import React, {useState} from 'react';
import {GetUuid} from '@krinopotam/js-helpers';
import {IDFormModalApi, IDFormModalProps} from "@src/dFormModal";

interface IDFormModalRenderProps {
    /** the form ID */
    formId?: string;

    /** form buttons collection */
    buttons?: IFormButtons;

    /** Form buttons api */
    buttonsApi?: IButtonsRowApi;

    /** Is the form open centered */
    centered?: boolean;

    /** form api */
    formApi: IDFormModalApi;

    /** Child dynamic form props only */
    formProps: IDFormProps;

    /** Dynamic modal form props (contains formProps values)  */
    modalFormProps: IDFormModalProps;

    /** On submit button click callback */
    onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;

    /** On cancel button click callback */
    onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DFormModalRender = ({formId, buttons, buttonsApi, formApi, formProps, modalFormProps}: IDFormModalRenderProps): React.JSX.Element => {
    const [formIdVal] = useState(formId ?? 'dFormModal-' + GetUuid());
    const formMode = modalFormProps.formMode ?? 'create'; //The form model has not yet been initialized
    const modalTitle = useFormTitle(formMode, modalFormProps.title);

    return (
        <Modal
            modalId={formIdVal}
            open={modalFormProps.isOpened}
            //onOk={formApi.submitForm} // Not required, as separate parameters for buttons are used
            onCancel={formApi.close}
            centered
            destroyOnClose={true}
            footer={
                <ButtonsRender
                    buttons={buttons}
                    colorType={modalFormProps.colorType}
                    buttonsApi={buttonsApi}
                    arrowsSelection={modalFormProps.arrowsButtonsSelection}
                    context={formApi}
                />
            }
            footerStyle={modalFormProps.footerStyle}
            maskClosable={false}
            keyboard={false}
            width={modalFormProps.width}
            minWidth={modalFormProps.minWidth}
            maxWidth={modalFormProps.maxWidth}
            notScrollable={modalFormProps.notScrollable}
            resizable={modalFormProps.resizable !== false}
            title={modalTitle}
            headerIcon={modalFormProps.headerIcon}
            headerStyle={modalFormProps.headerStyle}
            colorType={formProps.colorType}
            bodyHeight={modalFormProps.bodyHeight}
            bodyMinHeight={modalFormProps.bodyMinHeight}
            bodyMaxHeight={modalFormProps.bodyMaxHeight}
            bodyCss={modalFormProps.bodyStyle}
            isDraggable={modalFormProps.isDraggable}
        >
            {modalFormProps.isOpened ? (
                <DForm
                    apiRef={formApi}
                    {...formProps}
                    formStyle={{height: '100%', ...formProps.formStyle}}
                    containerStyle={{height: '100%', ...formProps.containerStyle}}
                />
            ) : null}
        </Modal>
    );
};

const useFormTitle = (formMode: IDFormMode, title?: React.ReactNode) => {
    if (title) return title;
    if (formMode === 'view') return 'Просмотр';
    if (formMode === 'create') return 'Создание';
    if (formMode === 'clone') return 'Клонирование';
    if (formMode === 'update') return 'Редактирование';
    return '&nbsp;';
};
