import { IDFormFieldProps } from '../components/baseComponent';
import { IRuleType } from '../validators/baseValidator';
export declare class BaseComponentConfig<T> {
    protected _config: Record<string, unknown>;
    protected readonly _id: keyof T;
    protected _validationRules: IRuleType[];
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
    requiredMark(value: IDFormFieldProps['requiredMark']): this;
    callbacks(value: IDFormFieldProps['callbacks']): this;
    style(value: IDFormFieldProps['style']): this;
    validationRules(...args: IRuleType[]): this;
    getValidationRules(): IRuleType[];
    getId(): keyof T;
    getConfig(): IDFormFieldProps;
}
