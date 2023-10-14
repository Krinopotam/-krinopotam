import {IButtonsRowApi} from '@src/buttonsRow';
import {IDFormProps, IDFormApi} from '@src/dForm';
import {IDFormModalProps} from '../dFormModal';
import {MessageBox} from '@src/messageBox';
import {HelpersObjects}  from "@krinopotam/js-helpers";
import {useCallback} from 'react';

export interface IDFormModalApi extends IDFormApi {
    /** Get the current modal form props */
    getFormProps: () => IDFormModalProps;

    /** Update the current modal form props (will cause rerender of the modal form). Can't update field props, because it is used in form model */
    setFormProps: (formProps: Partial<Omit<IDFormModalProps, 'fieldsProps'>>) => void;

    /** Open controls */
    open: (formMode: IDFormProps['formMode'], dataSet?: IDFormProps['dataSet']) => void;

    /** Close controls with confirmation*/
    close: () => void;

    /** Close controls without confirmation*/
    forceClose: () => void;
}

export type {IDFormApi} from '@src/dynamicForm/hooks/api'

export const useInitModalFormApi = (
    formId: string,
    formApi: IDFormModalApi,
    modalFormProps: IDFormModalProps,
    buttonsApi: IButtonsRowApi,
    updateFormProps: (props: IDFormModalProps) => void
) => {
    formApi.getFormId = useApiGetFormId(formId)
    formApi.buttonsApi = buttonsApi;
    formApi.getFormProps = useApiGetModalFormProps(modalFormProps);
    formApi.setFormProps = useApiSetModalFormProps(modalFormProps, updateFormProps);
    formApi.open = useApiFormOpen(formApi);
    formApi.close = useApiTryToCloseForm(formApi);
    formApi.forceClose = useApiFormForceClose(formApi);
};

/** Get the current form ID */
export const useApiGetFormId = (formId: string) => {
    return useCallback(() => {
        return formId;
    }, [formId]);
};


const useApiGetModalFormProps = (modalFormProps: IDFormModalProps) => {
    return useCallback(() => {
        return modalFormProps;
    }, [modalFormProps]);
};

const useApiSetModalFormProps = (modalFormProps: IDFormModalProps, setModalFormProps: (props: IDFormModalProps) => void) => {
    return useCallback(
        (props: Partial<Omit<IDFormModalProps, 'fieldsProps'>>) => {
            setModalFormProps({...modalFormProps, ...props});
        },
        [modalFormProps, setModalFormProps]
    );
};

const useApiFormOpen = (formApi: IDFormModalApi) => {
    return useCallback(
        (formMode: IDFormProps['formMode'], dataSet?: IDFormProps['dataSet']) => {
            if (!formMode) {
                if (process.env.NODE_ENV !== 'production') console.warn('The form mode is not set');
                return;
            }

            const newDataSet = dataSet ?? formApi.getFormProps().dataSet;
            const clonedDataSet = newDataSet ? HelpersObjects.cloneObject(newDataSet) : undefined;
            const modalFormProps = formApi.getFormProps();
            if (modalFormProps.onOpen?.(formApi, clonedDataSet) === false) return;

            formApi.setFormProps({
                isOpened: true,
                formMode: formMode,
                dataSet: clonedDataSet,
            });

            modalFormProps.onOpened?.(formApi, clonedDataSet);
        },
        [formApi]
    );
};

/** Api method: force close form. Form will be closed without confirmation  */
const useApiFormForceClose = (formApi: IDFormModalApi) => {
    return useCallback(() => {
        const modalFormProps = formApi.getFormProps();

        if (modalFormProps.onClosing?.(formApi) === false) return false;

        formApi.setFormProps({isOpened: false});
        modalFormProps.onClosed?.(formApi);
    }, [formApi]);
};

/** Api method: try to close modal form */
const useApiTryToCloseForm = (formApi: IDFormModalApi) => {
    return useCallback(() => {
        const modalFormProps = formApi.getFormProps();
        if (modalFormProps.onClosing?.(formApi) === false) return;

        if (formApi.model.isFormDirty() && modalFormProps.confirmChanges) {
            MessageBox.confirm({
                content: modalFormProps.closeFormConfirmMessage ?? 'Отменить сделанные изменения?',
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

