import {IDFormModalApi} from "@src/dFormModal";
import {CallbackControl} from "@src/_shared/classes/callbackControl";

/** Api method: force close form. Form will be closed without confirmation  */
export const useApiFormForceClose = (api: IDFormModalApi): IDFormModalApi['close'] => {
    return () => {
        const modalFormProps = api.getProps();

        if (modalFormProps.onClosing?.(api, new CallbackControl()) === false) return false;

        api.updateProps({open: false});
        modalFormProps.onClosed?.(api, new CallbackControl());
    };
};