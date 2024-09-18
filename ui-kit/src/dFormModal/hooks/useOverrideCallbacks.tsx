import React, {useMemo} from 'react';
import {MessageBox} from '@src/messageBox';
import {IsDebugMode} from '@krinopotam/common-hooks';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {IDFormBaseCallbacks} from '@src/dForm';

/**
 * Preparing callbacks for redirection to the form
 * @param props
 */
export const useOverrideCallbacks = (props: IDFormModalProps) => {
    return useMemo(() => {
        const callbacks: IDFormBaseCallbacks<IDFormModalApi> = {
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
                        cancel: {
                            onClick: () => {
                                box.destroy();
                                api.forceClose?.();
                            },
                        },
                    },
                });

                return false;
            },

            /** fires on submitting the form */
            onSubmit: (values, dataSet, api) => {
                api.getButtonsApi().disabled?.('ok', true);
                api.getButtonsApi().disabled?.('cancel', true);
                if (!props.confirmChanges) api.getButtonsApi().loading?.('ok', true);
                return props?.onSubmit?.(values, dataSet, api);
            },

            /** fires on submit success */
            onSubmitSuccess: (values, dataSet, resultData, api) => {
                if (props?.onSubmitSuccess?.(values, dataSet, resultData, api) === false) return false;
                api.forceClose();
            },

            /** fires after the completion of sending the form, regardless of the result */
            onSubmitComplete: (values, dataSet, errors, api) => {
                if (props?.onSubmitComplete?.(values, dataSet, errors, api) === false) return false;
                api.getButtonsApi().disabled?.('ok', false);
                api.getButtonsApi().disabled?.('cancel', false);
                api.getButtonsApi().loading?.('ok', false);
            },
        };

        return {...props, ...callbacks};
    }, [props]);
};
