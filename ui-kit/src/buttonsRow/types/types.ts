import React, {CSSProperties, HTMLAttributeAnchorTarget} from 'react';
import {IButtonProps} from '@src/button';
import {IBreakpoints} from '@krinopotam/common-hooks/useResponsive';
import {AnyType} from '@krinopotam/service-types';
import {IBaseComponentApi} from "@src/_shared/hooks/componentApiMethods/types/apiTypes";

interface IHotKey {
    ctrl?: boolean;
    alt?: boolean;
    shift?: boolean;
    meta?: boolean;
    key: string;
}

export interface IFormButton {
    /** Button title */
    title?: React.ReactNode;

    /** Component type */
    /**
     * - `button`: A standard button
     * - `link`: A hyperlink styled as a button
     * - `text`: A text element
     * - `divider`: A divider line
     * - `group`: A group of buttons
     * - `element`: A custom element
     * - `hotkey`: not displaying button working like a hotkey
     */
    type?: 'button' | 'link' | 'text' | 'divider' | 'group' | 'element' | 'hotkey';

    /** Color type*/
    colorType?: IButtonProps['colorType'];

    /** Is button active (set primary style) */
    active?: boolean;

    /** Is button has ghost (outline) style */
    ghost?: boolean;

    /** is button or divider dashed */
    dashed?: boolean;

    /** Is button disabled */
    disabled?: boolean;

    /** Is button in loading mode */
    loading?: boolean;

    /** Is button hidden (not displayed) */
    hidden?: boolean;

    /** Button position */
    position?: 'center' | 'left' | 'right';

    /** Button icon */
    icon?: string | React.ReactNode;

    /** Icon for expand DropDown menu (right side icon)/ Default: <DownOutlined />*/
    expandIcon?: React.ReactNode;

    /** Button size*/
    size?: 'large' | 'middle' | 'small';

    /** Button hotkeys */
    hotKeys?: IHotKey[];

    /** Button tooltip */
    tooltip?: string;

    /** Href for link button type */
    href?: string;

    /** Targets for link button type */
    target?: HTMLAttributeAnchorTarget;

    /** Rel for link button type */
    rel?: string;

    /** Button dropDown children*/
    children?: Record<string, Omit<IFormButton, 'expandIcon' | 'danger' | 'width'> | null>;

    /** Button style*/
    style?: CSSProperties;

    /** Button width */
    width?: CSSProperties['width'];

    /** Button class name*/
    className?: string;

    /** Button shape */
    shape?: IButtonProps['shape'];

    /** Order weight (default 0) */
    weight?: number;

    /************* Callbacks *************/
    /**Button onClick callback */
    onClick?: (buttonName: string, button: IFormButton, context?: AnyType) => void;
}

export type IFormButtons = Record<string, IFormButton | null>;

export interface IButtonRowProps {
    /** Component id */
    componentId?: string;

    /** Buttons props */
    buttons?: IFormButtons;

    /** Buttons row container class name */
    className?: string;

    /** Buttons row container style */
    style?: React.CSSProperties;

    /** Form type */
    colorType?: IButtonProps['colorType'];

    /** A mutable object to merge with these controls api */
    apiRef?: IButtonsRowApi;

    /** Any context. Will use in buttons callbacks  */
    context?: unknown;

    /** allow select buttons using arrows keys */
    arrowsSelection?: boolean;

    /** When button arrowSelection mode the active button will be of type Primary. Otherwise, the active button will have focus */
    makeActivePrimary?: boolean;

    /** Breakpoint for responsive design. If the screen decreases below the specified value, the names of the buttons will be hidden, only the icons will remain */
    responsiveBreakpoint?: IBreakpoints;

    /** Show icons only */
    iconsOnly?: boolean;

    /** Disable all buttons */
    disableAll?: boolean;
}

export interface IButtonsRowApi extends IBaseComponentApi<IButtonRowProps>{
    /** Get or set buttons */
    buttons: (buttons?: IFormButtons) => IFormButtons;
    /** Update buttons */
    updateButtons: (buttons: IFormButtons) => IFormButtons;
    /** Set next button active (select next button)*/
    setNextActive: (direction: 'forward' | 'backward') => void;
    /** Set button active (select button) */
    setActive: (buttonId: string, active?: boolean) => void;
    /** Get or set button loading state */
    loading: (buttonId: string, loading?: boolean) => boolean;
    /** Get or set button disabled state */
    disabled: (buttonId: string, disabled?: boolean) => boolean;
    /** Get or set button hidden state */
    hidden: (buttonId: string, hidden?: boolean) => boolean;
    /** Trigger button click */
    triggerClick: (buttonId: string) => void;
    /** Trigger active button click */
    activeTriggerClick: () => void;
    /** Get buttons props */
    getProps: () => IButtonRowProps;
    /** Disable all buttons (all buttons will be disabled regardless of their own disabled states) */
    disableAll: (state: boolean) => void;
}