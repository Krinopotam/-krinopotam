import {AnyType, IKey} from '@krinopotam/service-types';
import {IBaseComponentApi} from '@src/_shared/hooks/componentApiMethods/types/apiTypes';
import {IButtonProps} from '@src/button';
import {IButtonRowProps, IButtonsRowApi, IFormButtons} from '@src/buttonsRow';
import {DModel, IDFormBaseCallbacks, IRuleType} from '@src/dForm';
import {IBaseFieldProps} from '@src/dForm/fields/base';
import {translations} from '@src/dForm/translations/translations';
import {ColProps} from 'antd';
import {RequiredMark} from 'antd/es/form/Form';
import {FormLabelAlign} from 'antd/es/form/interface';
import React, {CSSProperties} from 'react';

export type IDFormValidationRules = Record<string, IRuleType[]>;

export type IDFormMode = 'view' | 'create' | 'update' | 'clone' | 'delete' | 'constructor';

/** Fields properties collection */
export type IDFormFieldsProps<TFieldsProps extends Record<string, AnyType> = Record<string, AnyType>> = {
    [K in keyof TFieldsProps]: IBaseFieldProps<AnyType, AnyType>;
};

export interface IDFormPropsNoCB<TFieldsProps extends Record<string, AnyType> = Record<string, AnyType>> {
    /** A mutable object to merge with these controls api */
    apiRef?: unknown;

    /** Form formId */
    formId?: string;

    /** Buttons properties */
    buttons?: IFormButtons | null;

    /** Buttons row style */
    buttonsRowStyle?: CSSProperties;

    /** Buttons row styles for each block (left, center, right) */
    buttonsRowStyles?: IButtonRowProps['styles'];

    /** Form CSS class */
    className?: string;

    /** Form style */
    formStyle?: CSSProperties;

    /** Form container class name */
    containerClassName?: string;

    /** Form container style*/
    containerStyle?: CSSProperties;

    /** Indent from the beginning of the controls (default 12)  */
    contentIndent?: number;

    /** Form default values. Unlike dataSet, defaultValues sets field values in Create form mode.
     * Has a priority lower than the field's set value */
    defaultValues?: Record<string, AnyType>;

    /** Form data (are not set in Create form mode) */
    dataSet?: IDFormDataSet;

    /** Parent form data */
    parentDataSet?: IDFormDataSet;

    /** Fields properties */
    fieldsProps?: IDFormFieldsProps<TFieldsProps>;

    /** Form color type */
    colorType?: IButtonProps['color'];

    /** label column parameters, for example span:'8' */
    labelCol?: ColProps;

    /** wrapper column parameters, for example span:'16' */
    wrapperCol?: ColProps;

    /** text align of label of all items */
    labelAlign?: FormLabelAlign;

    /** Form layout (horizontal or vertical). Vertical is default */
    layout?: 'horizontal' | 'vertical';

    /** Form mode */
    formMode?: IDFormMode;

    /** The form is read only */
    readOnly?: boolean;

    /** The form is disabled */
    disabled?: boolean;

    /** Automatically disable fields if they depend on fields whose value is not set. Otherwise, such fields will be automatically hidden */
    disableDepended?: boolean;

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

    /** Keep fields read only state on form props change (rerender) */
    keepReadOnlyState?: boolean;

    /** Keep fields disabled state on form props change (rerender)   */
    keepDisabledState?: boolean;

    /** Keep fields hidden state on form props change (rerender)   */
    keepHiddenState?: boolean;

    /**  If specified, additional values will be added to the resulting form data depending on the form mode
     *  @example {create:'isNew', clone?:'clonedFrom', update?:'isUpdating'}
     */
    assignExtraValues?: {
        create?: string;
        clone?: string;
        update?: string;
    };

    /** If true, the form will fetch data in any form mode, including 'create' */
    fetchOnCreate?: boolean;

    /** Language */
    language?: keyof typeof translations;

    /** Custom translation */
    translation?: Partial<typeof translations.en_US>;

    /** CONSTRUCTOR MODE: highlighted field */
    highlightedField?: string;

    /** @private A service property meaning that the form is used in another component that overrides the api part (for example DModalForm)  */
    _overriddenApi?: {[K in keyof IDFormApi as string extends K ? never : K]?: boolean};
}

export interface IDFormCallbacks<TApi = IDFormApi, TProps = IDFormProps> extends IDFormBaseCallbacks<TApi> {
    /** On first render callback */
    onFirstRender?: (props: TProps) => IDFormProps | void;

    /** fires when the highlighted field changed (in CONSTRUCTOR MODE) */
    onHighlightedFieldChanged?: (fieldId: string | undefined, prevFieldId: string | undefined, formApi: TApi) => void;
}

export type IDFormProps<TFieldsProps extends Record<string, AnyType> = Record<string, AnyType>> = IDFormPropsNoCB<TFieldsProps> & IDFormCallbacks;

/** Form data set type */
export interface IDFormDataSet extends Record<string, AnyType> {
    id?: IKey;
}

export type IDFormDataSourcePromise = Promise<{data: Record<string, AnyType>}>;

export interface IDFormApi<TProps extends object = IDFormProps> extends IBaseComponentApi<TProps> {
    /** Get translation */
    t: (str: keyof (typeof translations)['en_US']) => string;

    /** Form model instance */
    model: DModel;

    /** Get buttons row api */
    getButtonsApi: () => IButtonsRowApi;

    /** Validate form */
    validateForm: (showAlert: boolean) => Record<string, string | undefined>;

    /** Submit form */
    submitForm: () => void;
}
