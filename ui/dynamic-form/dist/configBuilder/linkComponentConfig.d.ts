import { IDFormFieldProps } from '../components/baseComponent';
import { BaseComponentConfig } from './baseComponentConfig';
import { IDFormFieldLinkProps } from '../components/linkComponent';
export declare class LinkComponentConfig<T> extends BaseComponentConfig<T> {
    constructor(id: keyof T);
    helpClass(value: IDFormFieldProps['helpClass']): this;
    label(value: IDFormFieldProps['label']): this;
    placeholder(value: IDFormFieldProps['placeholder']): this;
    tab(value: IDFormFieldProps['tab']): this;
    inlineGroup(value: IDFormFieldProps['inlineGroup']): this;
    default(value: IDFormFieldProps['default']): this;
    hidden(value: IDFormFieldProps['hidden']): this;
    disabled(value: IDFormFieldProps['disabled']): this;
    readOnly(value: IDFormFieldProps['readOnly']): this;
    dependsOn(value: IDFormFieldProps['dependsOn']): this;
    width(value: IDFormFieldProps['width']): this;
    autoFocus(value: IDFormFieldProps['autoFocus']): this;
    callbacks(value: IDFormFieldProps['callbacks']): this;
    href(value: IDFormFieldLinkProps['href']): this;
    target(value: IDFormFieldLinkProps['target']): this;
    getConfig(): IDFormFieldLinkProps;
}
