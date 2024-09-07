import {DModel, IDFormBaseCallbacks, IRuleType} from '@src/dForm';
import {IButtonsRowApi, IFormButtons} from '@src/buttonsRow';
import React, {CSSProperties, Key} from 'react';
import {IColorType} from '@src/button';
import {ColProps} from 'antd';
import {FormLabelAlign} from 'antd/es/form/interface';
import {RequiredMark} from 'antd/es/form/Form';
import {translations} from '@src/dForm/translations/translations';
import {IBaseComponentApi} from '@src/_shared/hooks/componentApiMethods/types/apiTypes';
import {IAnyFieldProps} from '@src/dForm/fields/base';

export type IDFormValidationRules = Record<string, IRuleType[]>;

export type IDFormMode = 'view' | 'create' | 'update' | 'clone' | 'delete';

/** Fields properties collection */
export type IDFormFieldsProps = Record<string, IAnyFieldProps>;

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
    formStyle?: CSSProperties;

    /** Form container class name */
    containerClassName?: string;

    /** Form container style*/
    containerStyle?: CSSProperties

    /** Indent from the beginning of the controls (default 12)  */
    contentIndent?: number;

    /** Form default values. Unlike dataSet, defaultValues sets field values in Create form mode.
     * Has a priority lower than the field's set value */
    defaultValues?: Record<string, unknown>

    /** Form data (are not set in Create form mode) */
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

    /**  If specified, additional values will be added to the resulting form data depending on the form mode
     *  @example {create:'isNew', clone?:'clonedFrom', update?:'isUpdating'}
    */
    assignExtraValues?: {
        create?: string,
        clone?: string,
        update?: string,
    }

    /** Language */
    language?: keyof typeof translations;

    /** Custom translation */
    translation?: Partial<typeof translations.en>

    /** @private O A service property meaning that the form is used in another component that overrides the api part (for example DModalForm)  */
    _overriddenApi?: { [K in keyof IDFormApi as string extends K ? never : K]?: boolean; }

}

export type IDFormCallbacks = IDFormBaseCallbacks<IDFormApi>

/** Form data set type */
export interface IDFormDataSet extends Record<string, unknown> {
    id?: Key;
}

export type IDFormDataSourcePromise = Promise<{ data: Record<string, unknown> }>;

export interface IDFormApi<TProps extends object = IDFormProps> extends IBaseComponentApi<TProps> {
    /** Form model instance */
    model: DModel;

    /** Get buttons row api */
    getButtonsApi: () => IButtonsRowApi;

    /** Validate form */
    validateForm: (showAlert: boolean) => Record<string, string | undefined>;

    /** Submit form */
    submitForm: () => void;
}