//region Types
import React from 'react';
import {GetProps, Select as AntdSelect} from 'antd';

export type ISelectValue = string | number | ISelectLabeledValue | (string | number | ISelectLabeledValue)[];
export type ISelectBaseValue =
    string
    | number
    | ISelectBaseLabeledValue
    | (string | number | ISelectBaseLabeledValue)[];

interface ISelectBaseLabeledValue extends Record<string, unknown> {
    value: string | number;
    label?: React.ReactNode;
}

export interface ISelectLabeledValue extends Record<string, unknown> {
    id: string | number;
    label?: React.ReactNode;
}

/**
 * Item of select control or enum table column
 */
export interface ISelectNodeBase extends Record<string, unknown> {
    id?: string | number;
    label?: string | React.ReactNode;
    disabled?: boolean;
    icon?: React.ReactNode;
    className?: string;
    children?: Omit<ISelectNode, 'children'>;
}

export type ISelectNode<T extends Record<string, unknown> = Record<string, unknown>> = ISelectNodeBase & T;
export type IAntdSelectProps = GetProps<typeof AntdSelect>;

export interface ISelectBaseProps extends Record<string, unknown> {
    /** Select options list*/
    dataSet?: ISelectNode[];

    /** Selected values */
    value?: ISelectValue;

    /** Read only state */
    readOnly?: boolean;

    /********** Callbacks **********/
    /** Fires when selection changed */
    onChange?: (value: ISelectValue, option: ISelectNode | ISelectNode[]) => void;

    /** Fires when item selected */
    onSelect?: (value: ISelectValue, option: ISelectNode | ISelectNode[]) => void;

    /** Fires when item deselected */
    onDeselect?: (value: ISelectValue, option: ISelectNode | ISelectNode[]) => void;
}

export type ISelectProps = ISelectBaseProps & Omit<IAntdSelectProps, 'onChange' | 'onSelect' | 'onDeselect' | 'value'>;