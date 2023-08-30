import { IDFormFieldProps } from '../components/baseComponent';
import { BaseComponentConfig } from './baseComponentConfig';
import { IDFormFieldTextAreaProps } from '../components/textAreaComponent';
export declare class TextAreaComponentConfig<T> extends BaseComponentConfig<T> {
    constructor(id: keyof T);
    helpClass(value: IDFormFieldProps['helpClass']): this;
    label(value: IDFormFieldProps['label']): this;
    placeholder(value: IDFormFieldProps['placeholder']): this;
    tab(value: IDFormFieldProps['tab']): this;
    inlineGroup(value: IDFormFieldProps['inlineGroup']): this;
    default(value: IDFormFieldTextAreaProps['default']): this;
    hidden(value: IDFormFieldProps['hidden']): this;
    disabled(value: IDFormFieldProps['disabled']): this;
    readOnly(value: IDFormFieldProps['readOnly']): this;
    dependsOn(value: IDFormFieldProps['dependsOn']): this;
    width(value: IDFormFieldProps['width']): this;
    autoFocus(value: IDFormFieldProps['autoFocus']): this;
    requiredMark(value: IDFormFieldProps['requiredMark']): this;
    callbacks(value: IDFormFieldProps['callbacks']): this;
    style(value: IDFormFieldProps['style']): this;
    autoSize(value: IDFormFieldTextAreaProps['autoSize']): this;
    cols(value: IDFormFieldTextAreaProps['cols']): this;
    rows(value: IDFormFieldTextAreaProps['rows']): this;
    wrap(value: IDFormFieldTextAreaProps['wrap']): this;
    getConfig(): IDFormFieldTextAreaProps;
}
