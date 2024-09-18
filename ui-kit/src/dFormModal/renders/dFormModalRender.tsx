import {DForm, IDFormProps} from '@src/dForm';

import {Modal} from '@src/modal/modal';
import {ButtonsRender} from '@src/modal/renders/buttonsRender';
import React from 'react';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {IFormButtons} from '@src/buttonsRow';

interface IDFormModalRenderProps {
    /** form buttons collection */
    buttons?: IFormButtons;

    /** Is the form open centered */
    centered?: boolean;

    /** form api */
    formApi: IDFormModalApi;

    /** Child dynamic form props only */
    formProps: IDFormProps;

    /** Full DFormModal props (contains formProps and modalProps values)  */
    modalFormProps: IDFormModalProps;

    /** On submit button click callback */
    onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;

    /** On cancel button click callback */
    onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DFormModalRender = ({buttons, formApi, formProps, modalFormProps}: IDFormModalRenderProps): React.JSX.Element => {
    const modalProps = modalFormProps.modalProps;
    return (
        <Modal
            open={modalFormProps.open}
            /**
            By default, modal zIndex = 1000. 
            But we need zIndex = 1060 to be form above treeSelect dropdown, whose zIndex at the first level is 1050, and then grows to 1150 if it is on the form 
            */
            maskProps={{style: {zIndex: 1060}}}
            wrapProps={{style: {zIndex: 1060}}}
            modalId={formApi.getId()}
            centered
            maskClosable={false}
            keyboard={false}
            destroyOnClose
            title={formApi.getTitle()}
            onCancel={formApi.close}
            footer={
                <ButtonsRender
                    buttons={buttons}
                    colorType={modalFormProps.colorType}
                    buttonsApi={formApi.getButtonsApi()}
                    arrowsSelection={modalFormProps.arrowsButtonsSelection}
                    context={formApi}
                />
            }
            height={modalFormProps.height}
            maxHeight={modalFormProps.maxHeight}
            minHeight={modalFormProps.minHeight}
            width={modalFormProps.width}
            maxWidth={modalFormProps.maxWidth}
            minWidth={modalFormProps.minWidth}
            {...modalProps}
        >
            {modalFormProps.open ? (
                <DForm
                    apiRef={formApi}
                    {...formProps}
                    formStyle={{height: '100%', width: '100%', ...formProps.formStyle}}
                    containerStyle={{height: '100%', ...formProps.containerStyle}}
                    _overriddenApi={{
                        getId: true,
                        t: true,
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
