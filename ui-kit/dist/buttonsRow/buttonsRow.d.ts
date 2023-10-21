import React, { CSSProperties, HTMLAttributeAnchorTarget } from 'react';
import { IButtonProps } from '../button';
interface IHotKey {
    ctrl?: boolean;
    alt?: boolean;
    shift?: boolean;
    meta?: boolean;
    key: string;
}
export interface IFormButton {
    title?: React.ReactNode;
    type?: 'button' | 'link' | 'text' | 'divider' | 'group' | 'element';
    colorType?: IButtonProps['colorType'];
    active?: boolean;
    ghost?: boolean;
    dashed?: boolean;
    disabled?: boolean;
    loading?: boolean;
    hidden?: boolean;
    position?: 'center' | 'left' | 'right';
    icon?: string | React.ReactNode;
    expandIcon?: React.ReactNode;
    size?: 'large' | 'middle' | 'small';
    hotKeys?: IHotKey[];
    tooltip?: string;
    href?: string;
    target?: HTMLAttributeAnchorTarget;
    rel?: string;
    children?: IFormButtons;
    style?: CSSProperties;
    className?: string;
    shape?: IButtonProps['shape'];
    weight?: number;
    onClick?: (buttonName: string, button: IFormButton, context?: unknown) => void;
}
export type IFormButtons = Record<string, IFormButton | null>;
export interface IButtonRowProps {
    buttons?: IFormButtons;
    className?: string;
    style?: React.CSSProperties;
    colorType?: IButtonProps['colorType'];
    apiRef?: IButtonsRowApi;
    context?: unknown;
    arrowsSelection?: boolean;
    makeActivePrimary?: boolean;
}
export interface IButtonsRowApi {
    buttons: (buttons?: IFormButtons) => IFormButtons;
    updateButtons: (buttons: IFormButtons) => IFormButtons;
    setNextActive: (direction: 'forward' | 'backward') => void;
    setActive: (name: string, active?: boolean) => void;
    loading: (name: string, loading?: boolean) => boolean;
    disabled: (name: string, disabled?: boolean) => boolean;
    hidden: (name: string, hidden?: boolean) => boolean;
    triggerClick: (name: string) => void;
    activeTriggerClick: () => void;
}
export declare const ButtonsRow: (props: IButtonRowProps) => React.JSX.Element;
export default ButtonsRow;
