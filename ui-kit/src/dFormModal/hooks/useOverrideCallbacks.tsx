import React, {useMemo} from 'react';
import {MessageBox} from '@src/messageBox';
import {IDFormModalCallbacks, IDFormModalProps} from '@src/dFormModal';
import {ErrorMessage} from '@src/errorMessage';

/**
 * Preparing callbacks for redirection to the form
 * @param props
 */
export const useOverrideCallbacks = (props: IDFormModalProps) => {
    return useMemo(() => {
        const callbacks: IDFormModalCallbacks = {
            /** fires when the form fetch failed */
            onDataFetchError: (error, api, cbControl) => {
                props?.onDataFetchError?.(error, api, cbControl);
                if (cbControl.isPrevented()) return;
                cbControl.preventOriginal();

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
                        cancel: {
                            onClick: () => {
                                box.destroy();
                                api.forceClose?.();
                            },
                        },
                    },
                });
            },

            /** fires on submitting the form */
            onSubmit: (values, dataSet, api, cbControl) => {
                const result = props?.onSubmit?.(values, dataSet, api, cbControl);
                if (cbControl.isPrevented()) return result;
                cbControl.preventOriginal();

                api.getButtonsApi().disabled?.('ok', true);
                api.getButtonsApi().disabled?.('cancel', true);
                if (!props.confirmChanges) api.getButtonsApi().loading?.('ok', true);
                return result;
            },

            /** fires on submit success */
            onSubmitSuccess: (values, dataSet, resultData, api, cbControl) => {
                props?.onSubmitSuccess?.(values, dataSet, resultData, api, cbControl);
                if (cbControl.isPrevented()) return;

                api.forceClose();
            },

            /** fires after the completion of sending the form, regardless of the result */
            onSubmitComplete: (values, dataSet, errors, api, cbControl) => {
                props?.onSubmitComplete?.(values, dataSet, errors, api, cbControl);
                if (cbControl.isPrevented()) return;
                cbControl.preventOriginal();

                api.getButtonsApi().disabled?.('ok', false);
                api.getButtonsApi().disabled?.('cancel', false);
                api.getButtonsApi().loading?.('ok', false);
            },
        };

        return {...props, ...callbacks};
    }, [props]);
};
