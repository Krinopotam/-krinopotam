import {IButtonsRowApi} from '@src/buttonsRow';
import {IDFormProps} from '@src/dForm';
import {MessageBox} from '@src/messageBox';
import {CloneObject} from "@krinopotam/js-helpers";
import {useCallback} from 'react';
import {IsDebugMode} from "@krinopotam/common-hooks";
import {IDFormModalApi, IDFormModalProps} from "@src/dFormModal";
import {useTranslate} from "@src/dFormModal/hooks/translate";

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
    formApi.close = useApiTryToCloseForm(formApi, modalFormProps);
    formApi.forceClose = useApiFormForceClose(formApi);
};

/** Get the current form ID */
const useApiGetFormId = (formId: string) => {
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
                if (IsDebugMode()) console.warn('The form mode is not set');
                return;
            }

            const newDataSet = dataSet ?? formApi.getFormProps().dataSet;
            const clonedDataSet = newDataSet ? CloneObject(newDataSet) : undefined;
            const modalFormProps = formApi.getFormProps();
            if (modalFormProps.onOpen?.(formApi, clonedDataSet) === false) return;

            formApi.setFormProps({
                open: true,
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

        formApi.setFormProps({open: false});
        modalFormProps.onClosed?.(formApi);
    }, [formApi]);
};

/** Api method: try to close modal form */
const useApiTryToCloseForm = (formApi: IDFormModalApi, formProps: IDFormModalProps) => {
    const t = useTranslate(formProps)
    return useCallback(() => {
        if (formProps.onClosing?.(formApi) === false) return;

        if (formApi.model.isFormDirty() && formProps.confirmChanges) {
            MessageBox.confirm({
                language:formProps.language,
                content: formProps.closeFormConfirmMessage ?? t('cancelChangesQn'),
                okText: t('yes'),
                cancelText: t('no'),
                onOk: () => {
                    formProps.onCancel?.(formApi);
                    formApi.forceClose();
                },
            });

            return;
        }

        formProps.onCancel?.(formApi);
        formApi.forceClose();
    }, [formApi, formProps, t]);
};

