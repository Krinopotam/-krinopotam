import { IButtonsRowApi } from '@krinopotam/ui-buttons-row';
import { IDFormProps } from '@krinopotam/ui-dynamic-form';
import { IDFormApi } from '@krinopotam/ui-dynamic-form/hooks/api';
import { IDFormModalProps } from '../dFormModal';
export interface IDFormModalApi extends Omit<IDFormApi, 'getFormProps' | 'setFormProps'> {
    getFormProps: () => IDFormModalProps;
    setFormProps: (formProps: Partial<Omit<IDFormModalProps, 'fieldsProps'>>) => void;
    open: (formMode: IDFormProps['formMode'], dataSet?: IDFormProps['dataSet']) => void;
    close: () => void;
    forceClose: () => void;
}
export declare const useInitModalFormApi: (formId: string, formApi: IDFormModalApi, modalFormProps: IDFormModalProps, buttonsApi: IButtonsRowApi, updateFormProps: (props: IDFormProps) => void) => void;
export declare const useApiGetFormId: (formId: string) => () => string;
