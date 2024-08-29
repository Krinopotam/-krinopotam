import {IButtonsRowApi} from '@src/buttonsRow';
import {IDFormProps} from '@src/dForm';
import {MessageBox} from '@src/messageBox';
import {CloneObject} from "@krinopotam/js-helpers";
import {useCallback, useEffect, useState} from 'react';
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
    const getDefaultTitle = useGetDefaultTitle(modalFormProps);
    const [title, setTitle] = useState(getDefaultTitle())
    useEffect(() => {
        setTitle(getDefaultTitle())
    }, [getDefaultTitle, modalFormProps]);

    formApi.getFormId = useApiGetFormId(formId)

    /** overridden api */
    formApi.buttonsApi = buttonsApi;
    formApi.getFormProps = useApiGetModalFormProps(modalFormProps);
    formApi.setFormProps = useApiSetModalFormProps(modalFormProps, updateFormProps);
    /** --------------*/

    formApi.open = useApiFormOpen(formApi);
    formApi.close = useApiTryToCloseForm(formApi, modalFormProps);
    formApi.forceClose = useApiFormForceClose(formApi);
    formApi.getTitle = useApiGetTitle(title);
    formApi.setTitle = useApiSetTitle(setTitle);
};

const useApiGetFormId = (formId: string) => {
    return useCallback(() => {
        return formId;
    }, [formId]);
};


const useApiGetModalFormProps = (modalFormProps: IDFormModalProps):IDFormModalApi['getFormProps'] => {
    return useCallback(() => {
        return modalFormProps;
    }, [modalFormProps]);
};

const useApiSetModalFormProps = (modalFormProps: IDFormModalProps, setModalFormProps: (props: IDFormModalProps) => void):IDFormModalApi['setFormProps'] => {
    return useCallback(
        (props: Partial<IDFormModalProps>) => {
            setModalFormProps({...modalFormProps, ...props});
        },
        [modalFormProps, setModalFormProps]
    );
};

const useGetDefaultTitle = (modalFormProps: IDFormModalProps) => {
    const t = useTranslate(modalFormProps)
    return useCallback<() => IDFormModalProps['title']>(() => {
        const formMode = modalFormProps.formMode ?? 'create';
        const title = modalFormProps.title
        if (title) return title;
        if (formMode === 'view') return t('viewing');
        if (formMode === 'create') return t('creating');
        if (formMode === 'clone') return t('cloning');
        if (formMode === 'update') return t('editing');
        return '&nbsp;';
    }, [modalFormProps, t])
}

const useApiGetTitle = (title: IDFormModalProps['title']):IDFormModalApi['getTitle'] => {
    return useCallback(() => title, [title]);
};

const useApiSetTitle = (setTitle: (title: IDFormModalProps['title']) => void):IDFormModalApi['setTitle'] => {
    return useCallback((title: IDFormModalProps['title']) => {
        setTitle(title)
    }, [setTitle]);
};

const useApiFormOpen = (formApi: IDFormModalApi):IDFormModalApi['open'] => {
    return useCallback(
        (formMode: IDFormProps['formMode'],  extraProps?: Partial<IDFormModalProps>) => {
            if (!formMode) {
                if (IsDebugMode()) console.warn('The form mode is not set');
                return;
            }

            const newDataSet = extraProps?.dataSet ?? formApi.getFormProps().dataSet;
            const clonedDataSet = newDataSet ? CloneObject(newDataSet) : undefined;
            const modalFormProps = formApi.getFormProps();
            if (modalFormProps.onOpen?.(formApi, clonedDataSet) === false) return;
            if (extraProps?.onOpen?.(formApi, clonedDataSet) === false) return;

            formApi.setFormProps({
                open: true,
                formMode: formMode,
                dataSet: clonedDataSet,
                ...extraProps
            });

            modalFormProps.onOpened?.(formApi, clonedDataSet);
            extraProps?.onOpened?.(formApi, clonedDataSet);
        },
        [formApi]
    );
};

/** Api method: force close form. Form will be closed without confirmation  */
const useApiFormForceClose = (formApi: IDFormModalApi):IDFormModalApi['close'] => {
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
                language: formProps.language,
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

