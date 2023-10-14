import React, {useMemo} from 'react';

import {IDFormApi} from './api';
import {IDFormModelCallbacks} from '../dModel';
import {IDFormDataSet, IDFormProps} from '../dForm';
import {MessageBox} from '@src/messageBox';

/**
 * Preparing callbacks for redirection to the model
 * @param formProps
 * @param formApi
 */
export const useModelCallbacks = (formProps: IDFormProps, formApi: IDFormApi) => {
    return useMemo((): IDFormModelCallbacks => {
        return {
            // Tabs callbacks
            /** fires when the hidden state of a tab changed */
            onTabHiddenStateChanged: (tabName: string, state: boolean) => formProps?.onTabHiddenStateChanged?.(tabName, state, formApi),

            /** fires when read only state of a tab changed */
            onTabReadOnlyStateChanged: (tabName: string, state: boolean) => formProps?.onTabReadOnlyStateChanged?.(tabName, state, formApi),

            /** fires when the disable state of a tab changes  */
            onTabDisabledStateChanged: (tabName: string, state: boolean) => formProps?.onTabDisabledStateChanged?.(tabName, state, formApi),

            // The form callback
            /** fires when the dirty state of the form changed */
            onFormDirtyStateChanged: (state: boolean) => formProps?.onFormDirtyStateChanged?.(state, formApi),

            /** fires when the read only state of the form changed */
            onFormReadOnlyStateChanged: (state: boolean) => formProps?.onFormReadOnlyStateChanged?.(state, formApi),

            /** fires when the form began initialization (renders for the first time) */
            onFormInit: () => formProps?.onFormInit?.(formApi),

            /** fires when a form ready state changed */
            onFormReadyStateChanged: (state: boolean) => {
                if (formProps?.onFormReadyStateChanged?.(state, formApi) === false) return false;
                if (state) formApi.buttonsApi.disabled?.('ok', false);
                else formApi.buttonsApi.disabled?.('ok', true);
            },

            /** fires when the form validated */
            onFormValidated: (values: Record<string, unknown>, errors: Record<string, string>, isSubmit: boolean) => formProps?.onFormValidated?.(values, errors, isSubmit, formApi),

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
            onDataFetchSuccess: (result: {data: Record<string, unknown>}) => {
                if (formProps?.onDataFetchSuccess?.(result, formApi) === false) return false;
                //formApi.buttonsApi.disabled?.('ok', false)
            },

            /** fires when the form fetch failed */
            onDataFetchError: (message: string, code: number) => {
                if (formProps?.onDataFetchError?.(message, code, formApi) === false) return false;

                const box = MessageBox.confirm({
                    content: (
                        <>
                            <p>{message}</p>
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
            onSubmitValidation: (values: Record<string, unknown>, errors: Record<string, string | undefined>) => formProps?.onSubmitValidation?.(values, errors, formApi),

            /** fires on submitting the form */
            onSubmit: (values: Record<string, unknown>) => {
                formApi.buttonsApi.disabled?.('ok', true);
                if (!formProps.confirmChanges) formApi.buttonsApi.loading?.('ok', true);
                return formProps?.onSubmit?.(values, formApi);
            },

            /** fires on submit success */
            onSubmitSuccess: (values: Record<string, unknown>, resultValues: Record<string, unknown> | undefined) => formProps?.onSubmitSuccess?.(values, resultValues, formApi),

            /** fires on submit error */
            onSubmitError: (values: Record<string, unknown>, message: string, code: number) => {
                if (formProps?.onSubmitError?.(values, message, code, formApi) === false) return false;
                MessageBox.alert({content: message, colorType: 'danger'});
            },

            /** fires after the completion of sending the form, regardless of the result */
            onSubmitComplete: (values: Record<string, unknown>, errors: Record<string, string | undefined>) => {
                if (formProps?.onSubmitComplete?.(values, errors, formApi) === false) return false;
                formApi.buttonsApi.disabled?.('ok', false);
                formApi.buttonsApi.loading?.('ok', false);
            },

            /** fires, when the dataSet change */
            onDataSetChange: (dataSet: IDFormDataSet | undefined) => formProps?.onDataSetChange?.(dataSet, formApi),
        };
    }, [formProps, formApi]);
};
