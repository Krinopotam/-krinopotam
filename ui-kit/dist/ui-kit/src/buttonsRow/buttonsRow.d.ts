import { IButtonProps } from '../button/button';
import React from 'react';
import { IFormType } from '../modal/modal';
interface IHotKey {
    ctrl?: boolean;
    alt?: boolean;
    shift?: boolean;
    meta?: boolean;
    key: string;
}
export interface IFormButton {
    type?: 'default' | 'dashed' | 'link' | 'text' | 'element';
    active?: boolean;
    danger?: boolean;
    disabled?: boolean;
    ghost?: boolean;
    loading?: boolean;
    hidden?: boolean;
    title?: React.ReactNode;
    position?: 'center' | 'left' | 'right';
    onClick?: (buttonName: string, button: IFormButton, context?: unknown) => void;
    props?: IButtonProps;
    icon?: string | React.ReactNode;
    size?: 'large' | 'middle' | 'small';
    hotKeys?: IHotKey[];
    tooltip?: string;
    href?: string;
    children?: IFormButton[];
}
export type IFormButtons = Record<string, IFormButton | null>;
interface IButtonRowProps {
    formId: string;
    buttons?: IFormButtons;
    className?: string;
    style?: React.CSSProperties;
    formType?: IFormType;
    apiRef?: IButtonsRowApi;
    context?: unknown;
    arrowsSelection?: boolean;
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
export declare const ButtonsGroup: ({ buttons, position, context, }: {
    buttons?: IFormButtons | undefined;
    position: 'left' | 'center' | 'right' | undefined;
    context?: unknown;
}) => React.JSX.Element | null;
export {};
