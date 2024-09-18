import {IDFormApi} from '@src/dForm';
import {MessageBox} from '@src/messageBox';

export const useApiSubmitForm = (api: IDFormApi) => {
    return () => {
        api.model.incrementSubmitCount();

        const errors = api.validateForm(true);
        if (Object.keys(errors).length > 0) return;

        const formProps = api.model.getFormProps();

        if (!formProps.confirmChanges) {
            api.getButtonsApi().loading('ok', true);
            api.model.submit();
            return;
        }

        const waiter = MessageBox.confirmWaiter({
            language: formProps.language,
            content: formProps.submitConfirmMessage ?? api.t('confirmChangesQs'),
            okText: api.t('yes'),
            cancelText: api.t('cancel'),
            onOk: () => {
                api.model.submit({onSubmitComplete});
            },
        });

        const onSubmitComplete = () => {
            waiter.destroy();
        };
    };
};