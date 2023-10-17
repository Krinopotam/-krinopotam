import { Select as AntdSelect } from 'antd';
import React, { ComponentProps } from 'react';
export type ISelectValue = string | number | ISelectLabeledValue | (string | number | ISelectLabeledValue)[];
export interface ISelectLabeledValue extends Record<string, unknown> {
    id: string | number;
    label?: React.ReactNode;
}
export interface ISelectNode extends Record<string, unknown> {
    id?: string | number;
    label?: string | React.ReactNode;
    disabled?: boolean;
    icon?: React.ReactNode;
    className?: string;
    children?: Omit<ISelectNode, 'children'>;
}
export type ISelectOptions = ISelectNode[];
type IAntdSelectProps = ComponentProps<typeof AntdSelect>;
export interface ISelectBaseProps extends Record<string, unknown> {
    dataSet?: ISelectOptions;
    value?: ISelectValue;
    readOnly?: boolean;
    onChange?: (value: ISelectValue, option: ISelectNode | ISelectNode[]) => void;
    onSelect?: (value: ISelectValue, option: ISelectNode | ISelectNode[]) => void;
    onDeselect?: (value: ISelectValue, option: ISelectNode | ISelectNode[]) => void;
}
export type ISelectProps = ISelectBaseProps & Omit<IAntdSelectProps, 'onChange' | 'onSelect' | 'onDeselect' | 'value'>;
export declare const Select: (props: ISelectProps) => React.JSX.Element;
export {};
