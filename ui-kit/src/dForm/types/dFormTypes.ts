import {DModel, IDFormBaseCallbacks, IDFormFieldsProps, IRuleType} from "@src/dForm";
import {IButtonsRowApi, IFormButtons} from "@src/buttonsRow";
import React, {CSSProperties} from "react";
import {IColorType} from "@src/button";
import {ColProps} from "antd";
import {FormLabelAlign} from "antd/es/form/interface";
import {RequiredMark} from "antd/es/form/Form";

export type IDFormValidationRules = Record<string, IRuleType[]>;

export type IDFormMode = 'view' | 'create' | 'update' | 'clone' | 'delete';

export interface IDFormProps extends IDFormCallbacks {
    /** A mutable object to merge with these controls api */
    apiRef?: unknown;

    /** Form formId */
    formId?: string;

    /** Buttons properties */
    buttons?: IFormButtons | null;

    /** Form CSS class */
    className?: string;

    /** Form style */
    formStyle?:CSSProperties;

    /** Form container class name */
    containerClassName?: string;

    /** Form container style*/
    containerStyle?:CSSProperties

    /** Indent from the beginning of the controls (default 12)  */
    contentIndent?: number;

    /** Form data */
    dataSet?: IDFormDataSet;

    /** Parent form data */
    parentDataSet?: IDFormDataSet;

    /** Fields properties */
    fieldsProps?: IDFormFieldsProps;

    /** Form color type */
    colorType?: IColorType;

    /** label column parameters, for example span:'8' */
    labelCol?: ColProps;

    /** wrapper column parameters, for example span:'16' */
    wrapperCol?: ColProps;

    /** text align of label of all items */
    labelAlign?: FormLabelAlign

    /** Form layout (horizontal or vertical). Vertical is default */
    layout?: 'horizontal' | 'vertical';

    /** Form mode */
    formMode?: IDFormMode;

    /** The form is read only */
    readOnly?: boolean;

    /** Automatically disable fields if they depend on fields whose value is not set. Otherwise, such fields will be automatically hidden */
    disableDepended?: boolean;

    /** Tabs panes height (default 40)*/
    tabsHeight?: number

    /** Form parent item data */
    // formParentData?: IFormDataSet;

    /** No use controls data */
    unfilledForm?: boolean;

    /** Validation rules */
    validationRules?: IDFormValidationRules;

    /** Should the form request confirmation before the form submitting or cancel, if the form data was changed by the user  */
    confirmChanges?: boolean;

    /** Confirm message before the form submitting */
    submitConfirmMessage?: React.ReactNode;

    /** Required mark style. Can use required mark or optional mark. You can not config to single Form.Item since this is a Form level config */
    requiredMark?: RequiredMark;

    /** allow select buttons using arrows keys */
    arrowsButtonsSelection?: boolean;
}

export type IDFormCallbacks = IDFormBaseCallbacks<IDFormApi>

/** Form data set type */
export interface IDFormDataSet extends Record<string, unknown> {
    id?: string | number;
}

export type IDFormDataSourcePromise = Promise<{ data: Record<string, unknown> }>;

export interface IDFormApi extends Record<string,unknown>{
    /** Form model instance */
    model: DModel;

    /** Buttons row API */
    buttonsApi: IButtonsRowApi;

    /** Get the current form props */
    getFormProps: () => IDFormProps;

    /** Update the current form props (will cause rerender of the form) */
    setFormProps: (formProps: Partial<IDFormProps>) => void;

    /** Validate form */
    validateForm: (showAlert: boolean) => Record<string, string | undefined>;

    /** Submit form */
    submitForm: () => void;

    /** force render update method */
    forceUpdate: () => void;
}