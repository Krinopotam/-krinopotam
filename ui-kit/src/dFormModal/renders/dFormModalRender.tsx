import {DForm, IDFormProps} from '@src/dForm';
import {IFormButtons} from '@src/buttonsRow/buttonsRow';

import {Modal} from '@src/modal/modal';
import {ButtonsRender} from '@src/modal/renders/buttonsRender';
import React from 'react';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {IExtendedModalOwnProps} from '@src/dFormModal/types/dFormModalTypes';

interface IDFormModalRenderProps {
    /** the form ID */
    formId: string;

    /** form buttons collection */
    buttons?: IFormButtons;

    /** Is the form open centered */
    centered?: boolean;

    /** form api */
    formApi: IDFormModalApi;

    /** Modal component props */
    modalProps: IExtendedModalOwnProps;

    /** Child dynamic form props only */
    formProps: IDFormProps;

    /** Full DFormModal props (contains formProps and modalProps values)  */
    modalFormProps: IDFormModalProps;

    /** On submit button click callback */
    onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;

    /** On cancel button click callback */
    onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DFormModalRender = ({formId, buttons, formApi, formProps, modalProps, modalFormProps}: IDFormModalRenderProps): React.JSX.Element => {
    return (
        <Modal
            {...modalProps}
            // no override section
            modalId={formId}
            style={modalFormProps.modalStyle}
            styles={modalFormProps.modalStyles}
            onCancel={formApi.close}
            centered={typeof modalProps.centered === 'undefined' ? true : modalProps.centered}
            maskClosable={false}
            keyboard={false}
            destroyOnClose={true}
            footer={
                <ButtonsRender
                    buttons={buttons}
                    colorType={modalFormProps.colorType}
                    buttonsApi={formApi.getButtonsApi()}
                    arrowsSelection={modalFormProps.arrowsButtonsSelection}
                    context={formApi}
                />
            }
            title={formApi.getTitle()}
        >
            {modalFormProps.open ? (
                <DForm
                    apiRef={formApi}
                    {...formProps}
                    formStyle={{height: '100%', width: '100%', ...formProps.formStyle}}
                    containerStyle={{height: '100%', ...formProps.containerStyle}}
                    _overriddenApi={{
                        getId: true,
                        getButtonsApi: true,
                        getProps: true,
                        setProps: true,
                        updateProps: true,
                        getIsMounted: true,
                    }}
                />
            ) : null}
        </Modal>
    );
};
