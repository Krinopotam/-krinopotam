import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {IDFormProps} from '@src/dForm';
import {IsDebugMode} from '@krinopotam/common-hooks';
import {CloneObject} from '@krinopotam/js-helpers/helpersObjects/cloneObject';
import {CallbackControl} from "@src/_shared/classes/callbackControl";

export const useApiFormOpen = (api: IDFormModalApi): IDFormModalApi['open'] => {
    return (formMode: IDFormProps['formMode'], extraProps?: Partial<IDFormModalProps>) => {
        if (!formMode) {
            if (IsDebugMode()) console.warn('The form mode is not set');
            return;
        }

        const newDataSet = extraProps?.dataSet ?? api.getProps().dataSet;
        const clonedDataSet = newDataSet ? CloneObject(newDataSet) : undefined;
        const formProps = api.getProps();

        const newProps:IDFormModalProps = {
            open: true,
            formMode: formMode,
            dataSet: clonedDataSet,
            ...extraProps,
        };

        if (formProps.onOpen?.(api, clonedDataSet, newProps, new CallbackControl()) === false) return;
        if (extraProps?.onOpen?.(api, clonedDataSet, newProps, new CallbackControl()) === false) return;

        api.updateProps(newProps);

        setTimeout(() => {
            /** Should have time to set props */
            const props = api.getProps();
            props.onOpened?.(api, props.dataSet, new CallbackControl());
        }, 0);
    };
};