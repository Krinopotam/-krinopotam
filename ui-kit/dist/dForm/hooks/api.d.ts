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
