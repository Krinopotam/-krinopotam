import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {MessageBox} from '@src/messageBox';
import {CallbackControl} from "@src/_shared/classes/callbackControl";

/** Api method: try to close modal form */
export const useApiTryToCloseForm = (api: IDFormModalApi, props: IDFormModalProps) => {
    return () => {
        if (props.onClosing?.(api, new CallbackControl()) === false) return;

        if (api.model.isFormDirty() && props.confirmChanges) {
            MessageBox.confirm({
                language: props.language,
                content: props.closeFormConfirmMessage ?? api.t('cancelChangesQn'),
                okText: api.t('yes'),
                cancelText: api.t('no'),
                onOk: () => {
                    props.onCancel?.(api, new CallbackControl());
                    api.forceClose();
                },
            });

            return;
        }

        props.onCancel?.(api, new CallbackControl());
        api.forceClose();
    };
};