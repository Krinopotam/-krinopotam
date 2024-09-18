import React, {useMemo} from 'react';
import {MessageBox} from '@src/messageBox';
import {IsDebugMode} from '@krinopotam/common-hooks';
import {IDFormApi, IDFormBaseCallbacks, IDFormProps} from '@src/dForm';
import {ErrorMessage} from '@src/errorMessage';

/**
 * Override form callbacks
 * @param props
 */
export const useOverrideCallbacks = (props: IDFormProps) => {
    return useMemo((): IDFormProps => {
        const callbacks: IDFormBaseCallbacks<IDFormApi> = {
            /** fires when a form ready state changed */
            onFormReadyStateChanged: (state, api) => {
                if (props?.onFormReadyStateChanged?.(state, api) === false) return false;
                if (state) api.getButtonsApi().disabled?.('ok', false);
                else api.getButtonsApi().disabled?.('ok', true);
            },

            /** fires when the form has no errors */
            onFormHasNoErrors: (values, dataSet, api) => {
                if (props?.onFormHasNoErrors?.(values, dataSet, api) === false) return false;
                api.getButtonsApi().disabled?.('ok', false);
            },

            /** fires when the form fetch failed */
            onDataFetchError: (error, api) => {
                if (props?.onDataFetchError?.(error, api) === false) return false;

                const box = MessageBox.confirm({
                    language: props.language,
                    content: (
                        <>
                            <p>
                                <b>{error.message}</b>
                            </p>
                            {error.stack && IsDebugMode() ? <p>{error.stack}</p> : ''}
                            <p>{api.t('tryAgainQt')}</p>
                        </>
                    ),
                    colorType: 'danger',
                    buttons: {
                        ok: {
                            onClick: () => {
                                box.destroy();
                                api.model.fetchData();
                            },
                        },
                    },
                });
            },

            /** fires on submitting the form */
            onSubmit: (values, dataSet, api) => {
                api.getButtonsApi().disabled?.('ok', true);
                if (!props.confirmChanges) api.getButtonsApi().loading?.('ok', true);
                return props?.onSubmit?.(values, dataSet, api);
            },

            /** fires on submit error */
            onSubmitError: (values, dataSet, error, api) => {
                if (props?.onSubmitError?.(values, dataSet, error, api) === false) return false;
                MessageBox.alert({
                    language: props.language,
                    title: api.t('error'),
                    content: <ErrorMessage error={error} />,
                    colorType: 'danger',
                });
            },

            /** fires after the completion of sending the form, regardless of the result */
            onSubmitComplete: (values, dataSet, errors, api) => {
                if (props?.onSubmitComplete?.(values, dataSet, errors, api) === false) return false;
                api.getButtonsApi().disabled?.('ok', false);
                api.getButtonsApi().loading?.('ok', false);
            },
        };

        return {...props, ...callbacks};
    }, [props]);
};
