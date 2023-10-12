import {IDFormFieldProps} from '@src/dForm/fields/base/baseField';
import {IDFormInputFieldProps} from '@src/dForm/fields/input/inputField';
import {IDFormTabsFieldProps} from '@src/dForm/fields/tabs/tabsField';
import {IDFormInlineGroupProps} from '@src/dForm/fields/inlineGroup/inlineGroupField';

export {DForm} from './dForm';
export type {IDFormCallbacks, IDFormProps, IDFormDataSet, IDFormDataSourcePromise, IDFormMode, IDFormFieldValidationRules} from './dForm';

export type {IDFormApi} from './hooks/api';

export {DModel} from './dModel';
export type {IDFormBaseCallbacks, IDFormModelCallbacks, IDFormSubmitResultObject, IDFormSubmitResultPromise} from './dModel';

/** Fields properties collection */
export type IDFormFieldsProps = Record<string, IDFormFieldProps | IDFormInlineGroupProps | IDFormTabsFieldProps | IDFormInputFieldProps>;
