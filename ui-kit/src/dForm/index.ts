import {IAnyFieldProps} from '@src/dForm/fields/base/baseField';
import {IInputFieldProps} from '@src/dForm/fields/input/inputField';
import {ITabsFieldProps} from '@src/dForm/fields/tabs/tabsField';
import {IInlineGroupProps} from '@src/dForm/fields/inlineGroup/inlineGroupField';
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
export type {IDFormCallbacks, IDFormProps, IDFormDataSet, IDFormDataSourcePromise, IDFormMode, IDFormValidationRules} from './dForm';

export type {IDFormApi} from './hooks/api';

export {DModel} from './dModel';
export type {IDFormBaseCallbacks, IDFormModelCallbacks, IDFormSubmitResultObject, IDFormSubmitResultPromise} from './dModel';

export type IDFormFieldProps =
    | IInlineGroupProps
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
