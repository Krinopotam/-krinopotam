import { IButtonsRowApi, IFormButtons } from '../../buttonsRow/buttonsRow';
import React from 'react';
import { IColorType } from "../../button/button";
interface IFormButtonsRenderProps {
    buttons?: IFormButtons;
    buttonsApi?: IButtonsRowApi;
    colorType?: IColorType;
    containerStyle?: React.CSSProperties;
    arrowsSelection?: boolean;
    context?: unknown;
}
export declare const ButtonsRender: ({ colorType, buttons, buttonsApi, containerStyle, arrowsSelection, context, }: IFormButtonsRenderProps) => React.JSX.Element | null;
export {};
