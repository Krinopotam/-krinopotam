import { IFormButton } from '../buttonsRow/buttonsRow';
import { PopconfirmProps } from 'antd';
import React from 'react';
import { IColorType } from "../button/button";
export interface IPopConfirmProps extends Omit<PopconfirmProps, 'okType' | 'okButtonProps' | 'cancelButtonProps'> {
    content?: React.ReactNode;
    colorType?: IColorType;
    okButtonProps?: IFormButton;
    cancelButtonProps?: IFormButton;
}
export declare const PopConfirm: ({ content, ...props }: IPopConfirmProps) => React.JSX.Element;
