import {IDFormProps} from '@src/dForm';
import {MessageBox} from '@src/messageBox';
import {CloneObject, GetNanoId} from '@krinopotam/js-helpers';
import React, {useCallback, useEffect, useState} from 'react';
import {IsDebugMode} from '@krinopotam/common-hooks';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {translations} from '@src/dFormModal/translations/translations';
import {useApiGetId} from '@src/_shared/hooks/componentApiMethods/useApiGetId';
import {useApiGetProps} from '@src/_shared/hooks/componentApiMethods/useApiGetProps';
import {useApiSetProps} from '@src/_shared/hooks/componentApiMethods/useApiSetProps';
import {useApiUpdateProps} from '@src/_shared/hooks/componentApiMethods/useApiUpdateProps';
import {useApiIsMounted} from '@src/_shared/hooks/componentApiMethods/useApiIsMointed';
import {useApiGetButtonsApi} from '@src/_shared/hooks/componentApiMethods/useApiGetButtonsApi';

export const useInitModalFormApi = ({
    formApi,
    props,
    setProps,
}: {
    formApi: IDFormModalApi;
    props: IDFormModalProps;
    setProps: React.Dispatch<React.SetStateAction<IDFormModalProps>>;
}) => {
    const getDefaultTitle = useGetDefaultTitle(props);
    const [title, setTitle] = useState(getDefaultTitle());
    useEffect(() => {
        setTitle(getDefaultTitle());
    }, [getDefaultTitle, props]);

    /** overridden api */
    formApi.getId = useApiGetId(props.formId ?? 'dFormModal-' + GetNanoId());
    formApi.getButtonsApi = useApiGetButtonsApi();
    formApi.getProps = useApiGetProps(props);
    formApi.setProps = useApiSetProps(setProps);
    formApi.updateProps = useApiUpdateProps(props, setProps);
    formApi.getIsMounted = useApiIsMounted();
    /** --------------*/

    formApi.open = useApiFormOpen(formApi);
    formApi.close = useApiTryToCloseForm(formApi, props);
    formApi.forceClose = useApiFormForceClose(formApi);
    formApi.getTitle = useApiGetTitle(title);
    formApi.setTitle = useApiSetTitle(setTitle);
};

const useGetDefaultTitle = (formProps: IDFormModalProps) => {
    const t = useTranslate(formProps.language, translations, formProps.translation);
    return useCallback<() => IDFormModalProps['title']>(() => {
        const formMode = formProps.formMode ?? 'create';
        const title = formProps.title;
        if (title) return title;
        if (formMode === 'view') return t('viewing');
        if (formMode === 'create') return t('creating');
        if (formMode === 'clone') return t('cloning');
        if (formMode === 'update') return t('editing');
        return '&nbsp;';
    }, [formProps, t]);
};

const useApiGetTitle = (title: IDFormModalProps['title']): IDFormModalApi['getTitle'] => {
    return useCallback(() => title, [title]);
};

const useApiSetTitle = (setTitle: (title: IDFormModalProps['title']) => void): IDFormModalApi['setTitle'] => {
    return useCallback(
        (title: IDFormModalProps['title']) => {
            setTitle(title);
        },
        [setTitle]
    );
};

const useApiFormOpen = (formApi: IDFormModalApi): IDFormModalApi['open'] => {
    return useCallback(
        (formMode: IDFormProps['formMode'], extraProps?: Partial<IDFormModalProps>) => {
            if (!formMode) {
                if (IsDebugMode()) console.warn('The form mode is not set');
                return;
            }

            const newDataSet = extraProps?.dataSet ?? formApi.getProps().dataSet;
            const clonedDataSet = newDataSet ? CloneObject(newDataSet) : undefined;
            const formProps = formApi.getProps();

            const newProps = {
                open: true,
                formMode: formMode,
                dataSet: clonedDataSet,
                ...extraProps,
            };

            if (formProps.onOpen?.(formApi, clonedDataSet) === false) return;
            if (extraProps?.onOpen?.(formApi, clonedDataSet) === false) return;

            formApi.updateProps(newProps);

            setTimeout(() => {
                /** Should have time to set props */
                const props = formApi.getProps();
                props.onOpened?.(formApi, props.dataSet);
            }, 0);
        },
        [formApi]
    );
};

/** Api method: force close form. Form will be closed without confirmation  */
const useApiFormForceClose = (formApi: IDFormModalApi): IDFormModalApi['close'] => {
    return useCallback(() => {
        const modalFormProps = formApi.getProps();

        if (modalFormProps.onClosing?.(formApi) === false) return false;

        formApi.updateProps({open: false});
        modalFormProps.onClosed?.(formApi);
    }, [formApi]);
};

/** Api method: try to close modal form */
const useApiTryToCloseForm = (formApi: IDFormModalApi, formProps: IDFormModalProps) => {
    const t = useTranslate(formProps.language, translations, formProps.translation);
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
