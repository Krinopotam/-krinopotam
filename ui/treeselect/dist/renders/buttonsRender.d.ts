import { IButtonsRowApi, IFormButtons } from '@krinopotam/ui-buttons-row';
import React from 'react';
interface ITreeSelectButtonsRenderProps {
    containerId: string;
    buttons?: IFormButtons;
    buttonsApi?: IButtonsRowApi;
    context?: unknown;
}
export declare const ButtonsRender: ({ containerId, buttons, buttonsApi, context }: ITreeSelectButtonsRenderProps) => React.JSX.Element | null;
export {};
