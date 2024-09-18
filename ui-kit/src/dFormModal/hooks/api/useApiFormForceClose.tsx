import {IDFormModalApi} from "@src/dFormModal";

/** Api method: force close form. Form will be closed without confirmation  */
export const useApiFormForceClose = (api: IDFormModalApi): IDFormModalApi['close'] => {
    return () => {
        const modalFormProps = api.getProps();

        if (modalFormProps.onClosing?.(api) === false) return false;

        api.updateProps({open: false});
        modalFormProps.onClosed?.(api);
    };
};