import { IButtonsRowApi, IFormButtons } from '../../buttonsRow/buttonsRow';
import { IFormType } from '../modal';
import React from 'react';
interface IFormButtonsRenderProps {
    formId: string;
    buttons?: IFormButtons;
    buttonsApi?: IButtonsRowApi;
    formType?: IFormType;
    containerStyle?: React.CSSProperties;
    arrowsSelection?: boolean;
    context?: unknown;
}
export declare const ButtonsRender: ({ formId, formType, buttons, buttonsApi, containerStyle, arrowsSelection, context, }: IFormButtonsRenderProps) => JSX.Element | null;
export {};
