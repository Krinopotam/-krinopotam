import React, {useMemo} from 'react';

import {MessageBox} from '@src/messageBox';
import {IsDebugMode} from '@krinopotam/common-hooks';
import {IDFormApi, IDFormDataSet, IDFormModelCallbacks, IDFormProps} from '@src/dForm';
import {translations} from '@src/dForm/translations/translations';
import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {ErrorMessage} from '@src/errorMessage';

/**
 * Preparing callbacks for redirection to the model
 * @param formProps
 * @param formApi
 */
export const useModelCallbacks = (formProps: IDFormProps, formApi: IDFormApi) => {
    const t = useTranslate(formProps.language, translations, formProps.translation);
    return useMemo((): IDFormModelCallbacks => {
        return {
            // The form callback
            /** fires when the dirty state of the form changed */
            onFormDirtyStateChanged: (state: boolean) => formProps?.onFormDirtyStateChanged?.(state, formApi),

            /** fires when the read only state of the form changed */
            onFormReadOnlyStateChanged: (state: boolean) => formProps?.onFormReadOnlyStateChanged?.(state, formApi),

            /** fires when the form began initialization (renders for the first time) */
            onFormInit: () => formProps?.onFormInit?.(formApi),

            /** fires when the form model has been initialized */
            onFormModelInitialized: () => formProps?.onFormModelInitialized?.(formApi),

            /** fires when a form ready state changed */
            onFormReadyStateChanged: (state: boolean) => {
                if (formProps?.onFormReadyStateChanged?.(state, formApi) === false) return false;
                if (state) formApi.getButtonsApi().disabled?.('ok', false);
                else formApi.getButtonsApi().disabled?.('ok', true);
            },

            /** fires when the form values changed  */
            onFormValuesChanged: (fieldName: string, values: Record<string, unknown>) => formProps?.onFormValuesChanged?.(fieldName, values, formApi),

            /** fires when the form validated */
            onFormValidated: (values: Record<string, unknown>, dataSet: IDFormDataSet, errors: Record<string, string>, isSubmit: boolean) =>
                formProps?.onFormValidated?.(values, dataSet, errors, isSubmit, formApi),

            /** fires when the form has errors */
            onFormHasErrors: (values: Record<string, unknown>, dataSet: IDFormDataSet, errors: Record<string, unknown>) =>
                formProps?.onFormHasErrors?.(values, dataSet, errors, formApi),

            /** fires when the form has no errors */
            onFormHasNoErrors: (values: Record<string, unknown>, dataSet: IDFormDataSet) => {
                if (formProps?.onFormHasNoErrors?.(values, dataSet, formApi) === false) return false;
                formApi.getButtonsApi().disabled?.('ok', false);
            },

            /** fires when the form trying to fetch data */
            onDataFetch: () => formProps?.onDataFetch?.(formApi),

            /** fires when the form fetch success */
            onDataFetchSuccess: (result: {data: Record<string, unknown>}) => {
                if (formProps?.onDataFetchSuccess?.(result, formApi) === false) return false;
                //formApi.buttonsApi.disabled?.('ok', false)
            },

            /** fires when the form fetch failed */
            onDataFetchError: error => {
                if (formProps?.onDataFetchError?.(error, formApi) === false) return false;

                const box = MessageBox.confirm({
                    language: formProps.language,
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
                                formApi.model.fetchData();
                            },
                        },
                    },
                });
            },

            /** fires after the completion of fetching the data, regardless of the result */
            onDataFetchComplete: () => formProps?.onDataFetchComplete?.(formApi),

            /** fires on submit validation */
            onSubmitValidation: (values: Record<string, unknown>, dataSet: IDFormDataSet, errors: Record<string, string | undefined>) =>
                formProps?.onSubmitValidation?.(values, dataSet, errors, formApi),

            /** fires on submitting the form */
            onSubmit: (values: Record<string, unknown>, dataSet: IDFormDataSet) => {
                formApi.getButtonsApi().disabled?.('ok', true);
                if (!formProps.confirmChanges) formApi.getButtonsApi().loading?.('ok', true);
                return formProps?.onSubmit?.(values, dataSet, formApi);
            },

            /** fires on submit success */
            onSubmitSuccess: (values: Record<string, unknown>, dataSet: IDFormDataSet, resultData: Record<string, unknown> | undefined) =>
                formProps?.onSubmitSuccess?.(values, dataSet, resultData, formApi),

            /** fires on submit error */
            onSubmitError: (values: Record<string, unknown>, dataSet: IDFormDataSet, error) => {
                if (formProps?.onSubmitError?.(values, dataSet, error, formApi) === false) return false;
                MessageBox.alert({
                    language: formProps.language,
                    title: t('error'),
                    content: <ErrorMessage error={error} />,
                    colorType: 'danger',
                });
            },

            /** fires after the completion of sending the form, regardless of the result */
            onSubmitComplete: (values: Record<string, unknown>, dataSet: IDFormDataSet, errors: Record<string, string | undefined>) => {
                if (formProps?.onSubmitComplete?.(values, dataSet, errors, formApi) === false) return false;
                formApi.getButtonsApi().disabled?.('ok', false);
                formApi.getButtonsApi().loading?.('ok', false);
            },

            /** fires, when the form dataSet changed. Unlike onFormValuesChanged, it is triggered only when a new dataSet is set via setFormValues and is not called when the user changes the field values */
            onDataSetChange: (dataSet: IDFormDataSet | undefined) => formProps?.onDataSetChange?.(dataSet, formApi),
        };
    }, [formProps, formApi, t]);
};
