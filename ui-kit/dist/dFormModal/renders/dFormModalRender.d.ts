import { IDFormProps } from '../../dForm';
import { IButtonsRowApi, IFormButtons } from '../../buttonsRow/buttonsRow';
import { IDFormModalApi } from '../hooks/api';
import { IDFormModalProps } from '../dFormModal';
import React from 'react';
interface IDFormModalRenderProps {
    formId?: string;
    buttons?: IFormButtons;
    buttonsApi?: IButtonsRowApi;
    centered?: boolean;
    formApi: IDFormModalApi;
    formProps: IDFormProps;
    modalFormProps: IDFormModalProps;
    onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const DFormModalRender: ({ formId, buttons, buttonsApi, formApi, formProps, modalFormProps }: IDFormModalRenderProps) => React.JSX.Element;
export {};
