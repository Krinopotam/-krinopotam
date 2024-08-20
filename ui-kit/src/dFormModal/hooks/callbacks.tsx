import React, {useMemo} from 'react';
import {MessageBox} from '@src/messageBox';
import {IsDebugMode} from "@krinopotam/common-hooks";
import {IDFormCallbacks, IDFormDataSet} from "@src/dForm/types/dFormTypes";
import {IDFormModalApi, IDFormModalProps} from "@src/dFormModal";
import {useTranslate} from "@src/dFormModal/hooks/translate";

/**
 * Preparing callbacks for redirection to the form
 * @param formModalApi
 * @param modalFormProps
 */
export const useFormCallbacks = (formModalApi: IDFormModalApi, modalFormProps: IDFormModalProps) => {
    const t = useTranslate(modalFormProps)
    return useMemo((): IDFormCallbacks => {
        return {
            // Form callbacks
            /** fires when the dirty state of the form changed */
            onFormDirtyStateChanged: (state: boolean) => modalFormProps?.onFormDirtyStateChanged?.(state, formModalApi),

            /** fires when the read only state of the form changed */
            onFormReadOnlyStateChanged: (state: boolean) => modalFormProps?.onFormReadOnlyStateChanged?.(state, formModalApi),

            /** fires when the form began initialization (renders for the first time) */
            onFormInit: () => modalFormProps?.onFormInit?.(formModalApi),

            /** fires when the form model has been initialized */
            onFormModelInitialized: () => modalFormProps?.onFormModelInitialized?.(formModalApi),

            /** fires when a form ready state changed */
            onFormReadyStateChanged: (state: boolean) => modalFormProps?.onFormReadyStateChanged?.(state, formModalApi),

            /** fires when the form values changed  */
            onFormValuesChanged: (fieldName:string, values: Record<string, unknown>) => modalFormProps?.onFormValuesChanged?.(fieldName, values, formModalApi),

            /** fires when the form validated */
            onFormValidated: (values: Record<string, unknown>, errors: Record<string, string>, isSubmit: boolean) =>
                modalFormProps?.onFormValidated?.(values, errors, isSubmit, formModalApi),

            /** fires when the form has errors */
            onFormHasErrors: (values: Record<string, unknown>, errors: Record<string, unknown>) =>
                modalFormProps?.onFormHasErrors?.(values, errors, formModalApi),

            /** fires when the form has no errors */
            onFormHasNoErrors: (values: Record<string, unknown>) => modalFormProps?.onFormHasNoErrors?.(values, formModalApi),

            /** fires when the form trying to fetch data */
            onDataFetch: () => modalFormProps?.onDataFetch?.(formModalApi),

            /** fires when the form fetch success */
            onDataFetchSuccess: (result: {data: Record<string, unknown>}) => modalFormProps?.onDataFetchSuccess?.(result, formModalApi),

            /** fires when the form fetch failed */
            onDataFetchError: error => {
                if (modalFormProps?.onDataFetchError?.(error, formModalApi) === false) return false;

                const box = MessageBox.confirm({
                    language:modalFormProps.language,
                    content: (
                        <>
                            <p>
                                <b>{error.message}</b>
                            </p>
                            {error.stack && IsDebugMode() ? <p>{error.stack}</p> : ''}
                            <p>{t('tryAgainQt')}</p>
                        </>
                    ),
                    colorType: 'danger',
                    buttons: {
                        ok: {
                            onClick: () => {
                                box.destroy();
                                formModalApi.model.fetchData();
                            },
                        },
                        cancel: {
                            onClick: () => {
                                box.destroy();
                                formModalApi.forceClose?.();
                            },
                        },
                    },
                });

                return false;
            },

            /** fires after the completion of fetching the data, regardless of the result */
            onDataFetchComplete: () => modalFormProps?.onDataFetchComplete?.(formModalApi),

            /** fires on submit validation */
            onSubmitValidation: (values: Record<string, unknown>, errors: Record<string, string | undefined>) =>
                modalFormProps?.onSubmitValidation?.(values, errors, formModalApi),

            /** fires on submitting the form */
            onSubmit: (values: Record<string, unknown>) => {
                formModalApi.buttonsApi.disabled?.('ok', true);
                formModalApi.buttonsApi.disabled?.('cancel', true);
                if (!modalFormProps.confirmChanges) formModalApi.buttonsApi.loading?.('ok', true);
                return modalFormProps?.onSubmit?.(values, formModalApi);
            },

            /** fires on submit success */
            onSubmitSuccess: (values: Record<string, unknown>, resultValues: Record<string, unknown> | undefined) => {
                if (modalFormProps?.onSubmitSuccess?.(values, resultValues, formModalApi) === false) return false;
                formModalApi.forceClose();
            },

            /** fires on submit error */
            onSubmitError: (values: Record<string, unknown>, error) => modalFormProps?.onSubmitError?.(values, error, formModalApi),

            /** fires after the completion of sending the form, regardless of the result */
            onSubmitComplete: (values: Record<string, unknown>, errors: Record<string, string | undefined>) => {
                if (modalFormProps?.onSubmitComplete?.(values, errors, formModalApi) === false) return false;
                formModalApi.buttonsApi.disabled?.('ok', false);
                formModalApi.buttonsApi.disabled?.('cancel', false);
                formModalApi.buttonsApi.loading?.('ok', false);
            },

            /** fires, when the form dataSet changed. Unlike onFormValuesChanged, it is triggered only when a new dataSet is set via setFormValues and is not called when the user changes the field values */
            onDataSetChange: (dataSet: IDFormDataSet | undefined) => modalFormProps?.onDataSetChange?.(dataSet, formModalApi),
        } as IDFormCallbacks;
    }, [formModalApi, modalFormProps]);
};
