import React, {useMemo} from 'react';
import {MessageBox} from '@src/messageBox';
import {IsDebugMode} from "@krinopotam/common-hooks";
import {IDFormCallbacks, IDFormDataSet} from "@src/dForm/types/dFormTypes";
import {IDFormModalApi, IDFormModalProps} from "@src/dFormModal";
import {useTranslate} from "@src/_shared/hooks/useTranslate";
import {translations} from "@src/dFormModal/translations/translations";

/**
 * Preparing callbacks for redirection to the form
 * @param formModalApi
 * @param modalFormProps
 */
export const useFormCallbacks = (formModalApi: IDFormModalApi, modalFormProps: IDFormModalProps) => {
    const t = useTranslate(modalFormProps.language, translations, modalFormProps.translation);

    return useMemo((): IDFormCallbacks => {
        return {
            // Form callbacks
            /** fires when the dirty state of the form changed */
            onFormDirtyStateChanged: (state: boolean) => modalFormProps?.onFormDirtyStateChanged?.(state, formModalApi),

            /** fires when the read only state of the form changed */
            onFormReadOnlyStateChanged: (state: boolean) => modalFormProps?.onFormReadOnlyStateChanged?.(state, formModalApi),

            /** On first render callback */
            onFirstRender: () => modalFormProps?.onFirstRender?.(modalFormProps),

            /** fires when the form began initialization (renders for the first time) */
            onFormInit: () => modalFormProps?.onFormInit?.(formModalApi),

            /** fires when the form model has been initialized */
            onFormModelInitialized: () => modalFormProps?.onFormModelInitialized?.(formModalApi),

            /** fires when a form ready state changed */
            onFormReadyStateChanged: (state: boolean) => modalFormProps?.onFormReadyStateChanged?.(state, formModalApi),

            /** fires when the form values changed  */
            onFormValuesChanged: (fieldName:string, values: Record<string, unknown>) => modalFormProps?.onFormValuesChanged?.(fieldName, values, formModalApi),

            /** fires when the form validated */
            onFormValidated: (values: Record<string, unknown>, dataSet:IDFormDataSet, errors: Record<string, string>, isSubmit: boolean) =>
                modalFormProps?.onFormValidated?.(values, dataSet, errors, isSubmit, formModalApi),

            /** fires when the form has errors */
            onFormHasErrors: (values: Record<string, unknown>, dataSet:IDFormDataSet, errors: Record<string, unknown>) =>
                modalFormProps?.onFormHasErrors?.(values, dataSet, errors, formModalApi),

            /** fires when the form has no errors */
            onFormHasNoErrors: (values: Record<string, unknown>, dataSet:IDFormDataSet) => modalFormProps?.onFormHasNoErrors?.(values, dataSet, formModalApi),

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
            onSubmitValidation: (values: Record<string, unknown>, dataSet:IDFormDataSet, errors: Record<string, string | undefined>) =>
                modalFormProps?.onSubmitValidation?.(values, dataSet, errors, formModalApi),

            /** fires on submitting the form */
            onSubmit: (values: Record<string, unknown>, dataSet:IDFormDataSet) => {
                formModalApi.getButtonsApi().disabled?.('ok', true);
                formModalApi.getButtonsApi().disabled?.('cancel', true);
                if (!modalFormProps.confirmChanges) formModalApi.getButtonsApi().loading?.('ok', true);
                return modalFormProps?.onSubmit?.(values, dataSet, formModalApi);
            },

            /** fires on submit success */
            onSubmitSuccess: (values: Record<string, unknown>, dataSet:IDFormDataSet, resultData: Record<string, unknown> | undefined) => {
                if (modalFormProps?.onSubmitSuccess?.(values, dataSet, resultData, formModalApi) === false) return false;
                formModalApi.forceClose();
            },

            /** fires on submit error */
            onSubmitError: (values: Record<string, unknown>, dataSet:IDFormDataSet, error) => modalFormProps?.onSubmitError?.(values, dataSet, error, formModalApi),

            /** fires after the completion of sending the form, regardless of the result */
            onSubmitComplete: (values: Record<string, unknown>, dataSet:IDFormDataSet, errors: Record<string, string | undefined>) => {
                if (modalFormProps?.onSubmitComplete?.(values, dataSet, errors, formModalApi) === false) return false;
                formModalApi.getButtonsApi().disabled?.('ok', false);
                formModalApi.getButtonsApi().disabled?.('cancel', false);
                formModalApi.getButtonsApi().loading?.('ok', false);
            },

            /** fires, when the form dataSet changed. Unlike onFormValuesChanged, it is triggered only when a new dataSet is set via setFormValues and is not called when the user changes the field values */
            onDataSetChange: (dataSet: IDFormDataSet | undefined) => modalFormProps?.onDataSetChange?.(dataSet, formModalApi),
        } as IDFormCallbacks;
    }, [formModalApi, modalFormProps, t]);
};
