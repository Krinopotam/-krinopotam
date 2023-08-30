import { IDFormFieldProps } from '../components/baseComponent';
import { BaseComponentConfig } from './baseComponentConfig';
import { IDFormFieldSwitchProps } from '../components/switchComponent';
export declare class SwitchComponentConfig<T> extends BaseComponentConfig<T> {
    constructor(id: keyof T);
    helpClass(value: IDFormFieldProps['helpClass']): this;
    label(value: IDFormFieldProps['label']): this;
    placeholder(value: IDFormFieldProps['placeholder']): this;
    tab(value: IDFormFieldProps['tab']): this;
    inlineGroup(value: IDFormFieldProps['inlineGroup']): this;
    default(value: IDFormFieldSwitchProps['default']): this;
    hidden(value: IDFormFieldProps['hidden']): this;
    disabled(value: IDFormFieldProps['disabled']): this;
    readOnly(value: IDFormFieldProps['readOnly']): this;
    dependsOn(value: IDFormFieldProps['dependsOn']): this;
    width(value: IDFormFieldProps['width']): this;
    autoFocus(value: IDFormFieldProps['autoFocus']): this;
    requiredMark(value: IDFormFieldProps['requiredMark']): this;
    callbacks(value: IDFormFieldProps['callbacks']): this;
    style(value: IDFormFieldProps['style']): this;
    checkedChildren(value: IDFormFieldSwitchProps['checkedChildren']): this;
    unCheckedChildren(value: IDFormFieldSwitchProps['unCheckedChildren']): this;
    loading(value: IDFormFieldSwitchProps['loading']): this;
    getConfig(): IDFormFieldSwitchProps;
}
