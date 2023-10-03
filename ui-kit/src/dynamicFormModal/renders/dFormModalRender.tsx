import {DForm, IDFormCallbacks, IDFormMode, IDFormProps} from '@src/dynamicForm';
import {IButtonsRowApi, IFormButtons} from '@src/buttonsRow/buttonsRow';

import {ButtonsRender, Modal} from '@src/modal';
import {IDFormModalApi} from '../hooks/api';
import {IDFormModalProps} from '../dFormModal';
import React from 'react';

interface IDFormModalRenderProps {
    /** the form ID (important property) */
    formId: string;

    /** form buttons collection */
    buttons?: IFormButtons;

    /** Form buttons api */
    buttonsApi?: IButtonsRowApi;

    /** Form callbacks */
    callbacks?: IDFormCallbacks;

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
export const DFormModalRender = ({formId, buttons, buttonsApi, callbacks, formApi, formProps, modalFormProps}: IDFormModalRenderProps): React.JSX.Element => {
    const formMode = modalFormProps.formMode ?? 'create'; //form model does not initialize yet
    const modalTitle = useFormTitle(formMode, modalFormProps.title);

    return (
        <Modal
            dispatcherFormId={formId}
            open={modalFormProps.isOpened}
            //onOk={formApi.submitForm} // Not required, as separate parameters for buttons are used
            onCancel={formApi.close}
            centered
            destroyOnClose={true}
            footer={
                <ButtonsRender
                    formId={formId}
                    buttons={buttons}
                    formType={modalFormProps.formType}
                    buttonsApi={buttonsApi}
                    arrowsSelection={false}
                    context={formApi}
                />
            }
            maskClosable={false}
            keyboard={false}
            bodyHeight={modalFormProps.bodyHeight}
            bodyMinHeight={modalFormProps.bodyMinHeight}
            bodyMaxHeight={modalFormProps.bodyMaxHeight}
            width={modalFormProps.width}
            minWidth={modalFormProps.minWidth}
            maxWidth={modalFormProps.maxWidth}
            notScrollable={modalFormProps.notScrollable}
            resizable={modalFormProps.resizable !== false}
            title={modalTitle}
        >
            {modalFormProps.isOpened ? <DForm callbacks={callbacks} apiRef={formApi} {...formProps} /> : null}
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
