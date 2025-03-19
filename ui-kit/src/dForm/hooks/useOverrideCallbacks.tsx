import React, {useMemo} from 'react';
import {MessageBox} from '@src/messageBox';
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
            onFormReadyChanged: (state, api, cbControl) => {
                props?.onFormReadyChanged?.(state, api, cbControl);
                if (cbControl.isPrevented()) return;

                api.getButtonsApi().disabled?.('ok', !state);
            },

            /** fires when the form has no errors */
            onFormHasNoErrors: (values, dataSet, api, cbControl) => {
                props?.onFormHasNoErrors?.(values, dataSet, api, cbControl);
                if (cbControl.isPrevented()) return;

                api.getButtonsApi().disabled?.('ok', false);
            },

            /** fires when the form fetch failed */
            onDataFetchError: (error, api, cbControl) => {
                props?.onDataFetchError?.(error, api, cbControl);
                if (cbControl.isPrevented()) return;

                const box = MessageBox.confirm({
                    language: props.language,
                    title: api.t('error'),
                    content: <ErrorMessage error={error} extraMessage={api.t('tryAgainQt')} />,
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
            onSubmit: (values, dataSet, api, cbControl) => {
                const result = props?.onSubmit?.(values, dataSet, api, cbControl);
                if (cbControl.isPrevented()) return result;

                api.getButtonsApi().disabled?.('ok', true);
                if (!props.confirmChanges) api.getButtonsApi().loading?.('ok', true);
                return result;
            },

            /** fires on submit error */
            onSubmitError: (values, dataSet, error, api, cbControl) => {
                props?.onSubmitError?.(values, dataSet, error, api, cbControl);
                if (cbControl.isPrevented()) return;

                MessageBox.alert({
                    language: props.language,
                    title: api.t('error'),
                    content: <ErrorMessage error={error} />,
                    colorType: 'danger',
                });
            },

            /** fires after the completion of sending the form, regardless of the result */
            onSubmitComplete: (values, dataSet, errors, api, cbControl) => {
                props?.onSubmitComplete?.(values, dataSet, errors, api, cbControl);
                if (cbControl.isPrevented()) return;

                api.getButtonsApi().disabled?.('ok', false);
                api.getButtonsApi().loading?.('ok', false);
            },
        };

        return {...props, ...callbacks};
    }, [props]);
};
