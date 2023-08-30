import { IDFormFieldProps } from '../components/baseComponent';
import { BaseComponentConfig } from './baseComponentConfig';
import { IDFormFieldNumberProps } from '../components/numberComponent';
export declare class NumberComponentConfig<T> extends BaseComponentConfig<T> {
    constructor(id: keyof T);
    helpClass(value: IDFormFieldProps['helpClass']): this;
    label(value: IDFormFieldProps['label']): this;
    placeholder(value: IDFormFieldProps['placeholder']): this;
    tab(value: IDFormFieldProps['tab']): this;
    inlineGroup(value: IDFormFieldProps['inlineGroup']): this;
    default(value: IDFormFieldNumberProps['default']): this;
    hidden(value: IDFormFieldProps['hidden']): this;
    disabled(value: IDFormFieldProps['disabled']): this;
    readOnly(value: IDFormFieldProps['readOnly']): this;
    dependsOn(value: IDFormFieldProps['dependsOn']): this;
    width(value: IDFormFieldProps['width']): this;
    autoFocus(value: IDFormFieldProps['autoFocus']): this;
    requiredMark(value: IDFormFieldProps['requiredMark']): this;
    callbacks(value: IDFormFieldProps['callbacks']): this;
    style(value: IDFormFieldProps['style']): this;
    addonAfter(value: IDFormFieldNumberProps['addonAfter']): this;
    addonBefore(value: IDFormFieldNumberProps['addonBefore']): this;
    controls(value: IDFormFieldNumberProps['controls']): this;
    decimalSeparator(value: IDFormFieldNumberProps['decimalSeparator']): this;
    formatter(value: IDFormFieldNumberProps['formatter']): this;
    keyboard(value: IDFormFieldNumberProps['keyboard']): this;
    maxLength(value: IDFormFieldNumberProps['maxLength']): this;
    max(value: IDFormFieldNumberProps['max']): this;
    min(value: IDFormFieldNumberProps['min']): this;
    parser(value: IDFormFieldNumberProps['parser']): this;
    precision(value: IDFormFieldNumberProps['precision']): this;
    prefix(value: IDFormFieldNumberProps['prefix']): this;
    step(value: IDFormFieldNumberProps['step']): this;
    stringMode(value: IDFormFieldNumberProps['stringMode']): this;
    upHandler(value: IDFormFieldNumberProps['upHandler']): this;
    downHandler(value: IDFormFieldNumberProps['downHandler']): this;
    className(value: IDFormFieldNumberProps['className']): this;
    prefixCls(value: IDFormFieldNumberProps['prefixCls']): this;
    getConfig(): IDFormFieldNumberProps;
}
