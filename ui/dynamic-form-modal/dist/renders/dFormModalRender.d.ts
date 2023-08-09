import { IDFormCallbacks, IDFormProps } from '@krinopotam/ui-dynamic-form';
import { IButtonsRowApi, IFormButtons } from '@krinopotam/ui-buttons-row';
import { IDFormModalApi } from '../hooks/api';
import { IDFormModalProps } from '../dFormModal';
import React from 'react';
interface IDFormModalRenderProps {
    formId: string;
    buttons?: IFormButtons;
    buttonsApi?: IButtonsRowApi;
    callbacks?: IDFormCallbacks;
    centered?: boolean;
    formApi: IDFormModalApi;
    formProps: IDFormProps;
    modalFormProps: IDFormModalProps;
    onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const DFormModalRender: ({ formId, buttons, buttonsApi, callbacks, formApi, formProps, modalFormProps }: IDFormModalRenderProps) => React.JSX.Element;
export {};
