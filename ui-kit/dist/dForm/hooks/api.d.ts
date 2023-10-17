import { DModel } from '../dModel';
import { IButtonsRowApi } from '../../buttonsRow';
import { IDFormProps } from '../dForm';
export interface IDFormApi extends Record<string, unknown> {
    model: DModel;
    buttonsApi: IButtonsRowApi;
    getFormProps: () => IDFormProps;
    setFormProps: (formProps: Partial<IDFormProps>) => void;
    validateForm: (showAlert: boolean) => Record<string, string | undefined>;
    submitForm: () => void;
    forceUpdate: () => void;
}
export declare const useInitFormApi: (formApi: IDFormApi, model: DModel, formProps: IDFormProps, buttonsApi: IButtonsRowApi, updateFormProps: (props: IDFormProps) => void) => void;
export declare const useApiGetFormProps: (formProps: IDFormProps) => () => IDFormProps;
export declare const useApiSetFormProps: (formProps: IDFormProps, setFormProps: (props: IDFormProps) => void) => (props: Partial<IDFormProps>) => void;
export declare const useApiValidateForm: (formApi: IDFormApi) => (showAlert?: boolean) => Record<string, string>;
