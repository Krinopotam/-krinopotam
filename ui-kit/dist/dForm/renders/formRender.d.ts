import { IFormButtons } from '../../buttonsRow';
import React from 'react';
import { IDFormApi, IDFormProps } from '../../dForm';
interface IFormRenderProps {
    formProps: IDFormProps;
    formApi: IDFormApi;
    formButtons: IFormButtons;
    isLoading?: boolean;
    isSubmitting?: boolean;
}
export declare const FormRender: ({ formProps, formApi, formButtons }: IFormRenderProps) => React.JSX.Element;
export {};
