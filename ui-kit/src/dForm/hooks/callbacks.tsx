import React, {useMemo} from 'react';

import {MessageBox} from '@src/messageBox';
import {IsDebugMode} from "@krinopotam/common-hooks";
import {IDFormApi, IDFormDataSet, IDFormModelCallbacks, IDFormProps} from "@src/dForm";
import {Collapse} from "antd";

/**
 * Preparing callbacks for redirection to the model
 * @param formProps
 * @param formApi
 */
export const useModelCallbacks = (formProps: IDFormProps, formApi: IDFormApi) => {
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
                if (state) formApi.buttonsApi.disabled?.('ok', false);
                else formApi.buttonsApi.disabled?.('ok', true);
            },

            /** fires when the form values changed  */
            onFormValuesChanged: (fieldName: string, values: Record<string, unknown>) => formProps?.onFormValuesChanged?.(fieldName, values, formApi),

            /** fires when the form validated */
            onFormValidated: (values: Record<string, unknown>, errors: Record<string, string>, isSubmit: boolean) =>
                formProps?.onFormValidated?.(values, errors, isSubmit, formApi),

            /** fires when the form has errors */
            onFormHasErrors: (values: Record<string, unknown>, errors: Record<string, unknown>) => formProps?.onFormHasErrors?.(values, errors, formApi),

            /** fires when the form has no errors */
            onFormHasNoErrors: (values: Record<string, unknown>) => {
                if (formProps?.onFormHasNoErrors?.(values, formApi) === false) return false;
                formApi.buttonsApi.disabled?.('ok', false);
            },

            /** fires when the form trying to fetch data */
            onDataFetch: () => formProps?.onDataFetch?.(formApi),

            /** fires when the form fetch success */
            onDataFetchSuccess: (result: { data: Record<string, unknown> }) => {
                if (formProps?.onDataFetchSuccess?.(result, formApi) === false) return false;
                //formApi.buttonsApi.disabled?.('ok', false)
            },

            /** fires when the form fetch failed */
            onDataFetchError: error => {
                if (formProps?.onDataFetchError?.(error, formApi) === false) return false;

                const box = MessageBox.confirm({
                    content: (
                        <>
                            <p>
                                <b>{error.message}</b>
                            </p>
                            {error.stack && IsDebugMode() ? <p>{error.stack}</p> : ''}
                            <p>{'Попробовать снова?'}</p>
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
            onSubmitValidation: (values: Record<string, unknown>, errors: Record<string, string | undefined>) =>
                formProps?.onSubmitValidation?.(values, errors, formApi),

            /** fires on submitting the form */
            onSubmit: (values: Record<string, unknown>) => {
                formApi.buttonsApi.disabled?.('ok', true);
                if (!formProps.confirmChanges) formApi.buttonsApi.loading?.('ok', true);
                return formProps?.onSubmit?.(values, formApi);
            },

            /** fires on submit success */
            onSubmitSuccess: (values: Record<string, unknown>, resultValues: Record<string, unknown> | undefined) =>
                formProps?.onSubmitSuccess?.(values, resultValues, formApi),

            /** fires on submit error */
            onSubmitError: (values: Record<string, unknown>, error) => {
                if (formProps?.onSubmitError?.(values, error, formApi) === false) return false;
                MessageBox.alert({
                    title: 'Error',
                    content: (
                        <>
                            <p>
                                <b>{error.message}</b>
                            </p>
                            {error.stack && IsDebugMode() && <Collapse
                                items={[{key: '1', label: 'Stack', children: <p>{error.stack}</p>}]}
                            />}
                        </>
                    ),
                    colorType: 'danger',
                });
            },

            /** fires after the completion of sending the form, regardless of the result */
            onSubmitComplete: (values: Record<string, unknown>, errors: Record<string, string | undefined>) => {
                if (formProps?.onSubmitComplete?.(values, errors, formApi) === false) return false;
                formApi.buttonsApi.disabled?.('ok', false);
                formApi.buttonsApi.loading?.('ok', false);
            },

            /** fires, when the form dataSet changed. Unlike onFormValuesChanged, it is triggered only when a new dataSet is set via setFormValues and is not called when the user changes the field values */
            onDataSetChange: (dataSet: IDFormDataSet | undefined) => formProps?.onDataSetChange?.(dataSet, formApi),
        };
    }, [formProps, formApi]);
};
