import {IDFormAnyFieldProps} from '@src/dForm/fields/base/baseField';
import {IDFormInputFieldProps} from '@src/dForm/fields/input/inputField';
import {IDFormTabsFieldProps} from '@src/dForm/fields/tabs/tabsField';
import {IDFormInlineGroupProps} from '@src/dForm/fields/inlineGroup/inlineGroupField';
import {IDFormPasswordFieldProps} from '@src/dForm/fields/password/passwordField';
import {IDFormCustomFieldProps} from '@src/dForm/fields/custom/customField';
import {IDFormDateTimeFieldProps} from '@src/dForm/fields/dateTime/dateTimeField';
import {IDFormDividerFieldProps} from '@src/dForm/fields/divider/dividerField';

export {DForm} from './dForm';
export type {IDFormCallbacks, IDFormProps, IDFormDataSet, IDFormDataSourcePromise, IDFormMode, IDFormFieldValidationRules} from './dForm';

export type {IDFormApi} from './hooks/api';

export {DModel} from './dModel';
export type {IDFormBaseCallbacks, IDFormModelCallbacks, IDFormSubmitResultObject, IDFormSubmitResultPromise} from './dModel';

export type IDFormFieldProps =
    | IDFormInlineGroupProps
    | IDFormTabsFieldProps
    | IDFormInputFieldProps
    | IDFormPasswordFieldProps
    | IDFormCustomFieldProps
    | IDFormDateTimeFieldProps
    | IDFormDividerFieldProps
    | IDFormAnyFieldProps;

/** Fields properties collection */
export type IDFormFieldsProps = Record<string, IDFormFieldProps>;
