import { ButtonProps as AntButtonProps } from 'antd';
import React from 'react';
export type IColorType = 'neutral' | 'info' | 'success' | 'warning' | 'danger';
export interface IButtonProps extends Omit<AntButtonProps, 'danger'> {
    colorType?: IColorType;
}
export declare const Button: React.ForwardRefExoticComponent<IButtonProps & React.RefAttributes<HTMLElement>>;
