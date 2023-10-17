import { IButtonsRowApi } from '../../buttonsRow';
import { IDFormProps, IDFormApi } from '../../dForm';
import { IDFormModalProps } from '../dFormModal';
export interface IDFormModalApi extends IDFormApi {
    getFormProps: () => IDFormModalProps;
    setFormProps: (formProps: Partial<Omit<IDFormModalProps, 'fieldsProps'>>) => void;
    open: (formMode: IDFormProps['formMode'], dataSet?: IDFormProps['dataSet']) => void;
    close: () => void;
    forceClose: () => void;
}
export type { IDFormApi } from '../../dForm/hooks/api';
export declare const useInitModalFormApi: (formId: string, formApi: IDFormModalApi, modalFormProps: IDFormModalProps, buttonsApi: IButtonsRowApi, updateFormProps: (props: IDFormModalProps) => void) => void;
export declare const useApiGetFormId: (formId: string) => () => string;
