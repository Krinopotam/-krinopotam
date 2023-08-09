import { IDFormProps } from '../dForm';
import { BaseComponentConfig } from './baseComponentConfig';
import { IDFormFieldProps } from '../components/baseComponent';
import { IRuleType } from '../validators/baseValidator';
export declare class DFormConfig<T> {
    protected _config: Record<string, unknown>;
    constructor(formId: string);
    apiRef(value: IDFormProps['apiRef']): this;
    buttons(value: IDFormProps['buttons']): this;
    callbacks(value: IDFormProps['callbacks']): this;
    className(value: IDFormProps['className']): this;
    containerClassName(value: IDFormProps['containerClassName']): this;
    contentIndent(value: IDFormProps['contentIndent']): this;
    dataSet(value: IDFormProps['dataSet']): this;
    parentDataSet(value: IDFormProps['parentDataSet']): this;
    fieldsProps(value: Record<keyof T, IDFormFieldProps>): this;
    formType(value: IDFormProps['formType']): this;
    labelCol(value: IDFormProps['labelCol']): this;
    layout(value: IDFormProps['layout']): this;
    formMode(value: IDFormProps['formMode']): this;
    readOnly(value: IDFormProps['readOnly']): this;
    noAutoHideDependedFields(value: IDFormProps['noAutoHideDependedFields']): this;
    tabsProps(value: IDFormProps['tabsProps']): this;
    unfilledForm(value: IDFormProps['unfilledForm']): this;
    validationRules(value: Record<keyof T, IRuleType[]>): this;
    wrapperCol(value: IDFormProps['wrapperCol']): this;
    confirmChanges(value: IDFormProps['confirmChanges']): this;
    submitConfirmMessage(value: IDFormProps['submitConfirmMessage']): this;
    addFields(...args: BaseComponentConfig<T>[]): this;
    addTab(tabName: string, ...args: BaseComponentConfig<T>[]): this;
    protected addFieldsConfig(tabName: string | undefined, configs: BaseComponentConfig<T>[]): this;
    protected updateFieldsProps(configClass: BaseComponentConfig<T>, tabName?: string): void;
    getConfig(): IDFormProps;
}
