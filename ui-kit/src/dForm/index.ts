import {IAnyFieldProps} from '@src/dForm/fields/base/baseField';
import {IInputFieldProps} from '@src/dForm/fields/input/inputField';
import {ITabsFieldProps} from '@src/dForm/fields/tabs/tabsField';
import {IInlineGroupFieldProps} from '@src/dForm/fields/inlineGroup/inlineGroupField';
import {IPasswordFieldProps} from '@src/dForm/fields/password/passwordField';
import {ICustomFieldProps} from '@src/dForm/fields/custom/customField';
import {IDateTimeFieldProps} from '@src/dForm/fields/dateTime/dateTimeField';
import {IDividerFieldProps} from '@src/dForm/fields/divider/dividerField';
import {IQuillEditorFieldProps} from '@src/dForm/fields/quillEditor/quillEditorField';
import {ILinkFieldProps} from '@src/dForm/fields/link/linkField';
import {INumberFieldProps} from '@src/dForm/fields/number/numberField';
import {ICheckboxFieldProps} from '@src/dForm/fields/checkbox/checkboxField';
import {IUploadDraggerFieldProps} from '@src/dForm/fields/fileDrop/uploadDraggerField';
import {ISelectFieldProps} from '@src/dForm/fields/select/selectField';
import {ITabulatorGridFieldProps} from '@src/dForm/fields/tabulatorGrid/tabulatorGridField';
import {ISwitchFieldProps} from '@src/dForm/fields/switch/switchField';
import {ITextAreaFieldProps} from '@src/dForm/fields/textArea/textAreaField';
import {ITreeSelectFieldProps} from '@src/dForm/fields/treeSelect/treeSelectField';

export {DForm} from './dForm';
export type {IDFormValidationRules, IDFormMode, IDFormProps, IDFormDataSet, IDFormDataSourcePromise, IDFormCallbacks, IDFormApi} from './types/dFormTypes';

export {DModel} from './dModel';
export type {IDFormBaseCallbacks, IDFormModelCallbacks, IDFormSubmitResultObject, IDFormSubmitResultPromise} from './types/dModelTypes';

export {BaseValidator} from './validators/baseValidator';
export type {IRuleType, IRuleCustom, IRuleDate, IRuleFile, IRuleNumber, IRuleString, IRuleObject} from './validators/baseValidator';

/************** Fields **********************/
export {BaseField} from './fields/base/baseField';
export type {IAnyFieldProps, IBaseFieldProps, IBaseField} from './fields/base/baseField';

export {CheckboxField} from './fields/checkbox/checkboxField';
export type {ICheckboxFieldProps} from './fields/checkbox/checkboxField';

export {CustomField} from './fields/custom/customField';
export type {ICustomFieldProps} from './fields/custom/customField';

export {DateTimeField} from './fields/dateTime/dateTimeField';
export type {IDateTimeFieldProps} from './fields/dateTime/dateTimeField';

export {DividerField} from './fields/divider/dividerField';
export type {IDividerFieldProps} from './fields/divider/dividerField';

export {UploadDraggerField} from './fields/fileDrop/uploadDraggerField';
export type {IUploadDraggerFieldProps} from './fields/fileDrop/uploadDraggerField';

export {InlineGroupField} from './fields/inlineGroup/inlineGroupField';
export type {IInlineGroupFieldProps} from './fields/inlineGroup/inlineGroupField';

export {InputField} from './fields/input/inputField';
export type {IInputFieldProps} from './fields/input/inputField';

export {LinkField} from './fields/link/linkField';
export type {ILinkFieldProps} from './fields/link/linkField';

export {NumberField} from './fields/number/numberField';
export type {INumberFieldProps} from './fields/number/numberField';

export {PasswordField} from './fields/password/passwordField';
export type {IPasswordFieldProps} from './fields/password/passwordField';

export {QuillEditorField} from './fields/quillEditor/quillEditorField';
export type {IQuillEditorFieldProps} from './fields/quillEditor/quillEditorField';

export {SelectField} from './fields/select/selectField';
export type {ISelectFieldProps} from './fields/select/selectField';

export {SwitchField} from './fields/switch/switchField';
export type {ISwitchFieldProps} from './fields/switch/switchField';

export {TabsField} from './fields/tabs/tabsField';
export type {ITabsFieldProps} from './fields/tabs/tabsField';

export {TabulatorGridField} from './fields/tabulatorGrid/tabulatorGridField';
export type {ITabulatorGridFieldProps,ITabulatorGridFieldPropsBase} from './fields/tabulatorGrid/tabulatorGridField';

export {TextAreaField} from './fields/textArea/textAreaField';
export type {ITextAreaFieldProps} from './fields/textArea/textAreaField';

export {TreeSelectField} from './fields/treeSelect/treeSelectField';
export type {ITreeSelectFieldProps, ITreeSelectFieldOnlyProps} from './fields/treeSelect/treeSelectField';

export type IDFormFieldProps =
    | IInlineGroupFieldProps
    | ITabsFieldProps
    | IInputFieldProps
    | IPasswordFieldProps
    | ICustomFieldProps
    | ICheckboxFieldProps
    | IDateTimeFieldProps
    | IDividerFieldProps
    | ILinkFieldProps
    | INumberFieldProps
    | IQuillEditorFieldProps
    | IUploadDraggerFieldProps
    | ISelectFieldProps
    | ITabulatorGridFieldProps
    | ITextAreaFieldProps
    | ISwitchFieldProps
    | ITreeSelectFieldProps
    | IAnyFieldProps;

/** Fields properties collection */
export type IDFormFieldsProps = Record<string, IDFormFieldProps>;
