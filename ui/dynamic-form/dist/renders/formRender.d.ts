import { IFormButtons } from '@krinopotam/ui-buttons-row';
import React from 'react';
import { IDFormApi } from '../hooks/api';
interface IFormRenderProps {
    formApi: IDFormApi;
    formButtons: IFormButtons;
    isLoading?: boolean;
    isSubmitting?: boolean;
}
export declare const FormRender: ({ formApi, formButtons }: IFormRenderProps) => React.JSX.Element;
export {};
