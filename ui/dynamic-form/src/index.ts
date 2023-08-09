export {DForm} from "./dForm";
export type {
    IFormType, IDFormCallbacks, IDFormProps, IDFormTabsProps, IDFormDataSet, IDFormDataSourcePromise, IDFormMode, IDFormFieldValidationRules
} from './dForm';

export {DModel} from "./dModel";
export type {IDFormModelCallbacks, IDFormSubmitResultObject, IDFormSubmitResultPromise, TPromise} from "./dModel";

/*
export {BaseValidator} from "./validators/baseValidator";
export type {IRuleType, IRuleCustom, IRuleDate, IRuleFile, IRuleNumber, IRuleObject, IRuleString} from "./validators/baseValidator";

export {useApiGetFormId, useApiGetFormProps, useApiSetFormProps, useInitFormApi, useApiValidateForm} from "./hooks/api";
export type {IDFormApi} from "./hooks/api";

export {useGetButtons} from "./hooks/buttons";

export {useCallbacks} from "./hooks/callbacks";


/** Components */
/*
export {CheckboxComponent} from "./components/checkboxComponent";
export type {IDFormFieldCheckBoxProps} from "./components/checkboxComponent";

export {SelectComponent, SelectComponentElementRenderTitle} from "./components/selectComponent";
export type {IDFormFieldSelectProps, ISelectComponentElement} from "./components/selectComponent";

export {SwitchComponent} from "./components/switchComponent";
export type {IDFormFieldSwitchProps} from "./components/switchComponent";

export {TextAreaComponent} from "./components/textAreaComponent";
export type {IDFormFieldTextAreaProps} from "./components/textAreaComponent";

export {DateTimeComponent} from "./components/dateTimeComponent";
export type {IDFormFieldDateTimeProps} from "./components/dateTimeComponent";

export {DragAndDropComponent} from "./components/dragAndDropComponent";
export type {IDFormFieldDragAndDropProps} from "./components/dragAndDropComponent";

export {InputComponent} from "./components/inputComponent";
export type {IDFormFieldInputProps} from "./components/inputComponent";

export {LinkComponent} from "./components/linkComponent";
export type {IDFormFieldLinkProps} from "./components/linkComponent";

export {NumberComponent} from "./components/numberComponent";
export type {IDFormFieldNumberProps} from "./components/numberComponent";

export {PasswordComponent} from "./components/passwordComponent";
export type {IDFormFieldPasswordProps} from "./components/passwordComponent";

export {TextEditorComponent} from "./components/textEditorComponent";
export type {IDFormTextEditorProps} from "./components/textEditorComponent";

import {DFormConfig} from "./configBuilder/dFormConfig"
import {BaseComponentConfig} from "./configBuilder/baseComponentConfig"
import {CheckboxComponentConfig} from "./configBuilder/checkboxComponentConfig"
import {InputComponentConfig} from "./configBuilder/inputComponentConfig"
import {LinkComponentConfig} from "./configBuilder/linkComponentConfig"
import {DateTimeComponentConfig} from "./configBuilder/dateTimeComponentConfig"
import {DragAndDropComponentConfig} from "./configBuilder/dragAndDropComponentConfig"
import {NumberComponentConfig} from "./configBuilder/numberComponentConfig"
import {PasswordComponentConfig} from "./configBuilder/passwordComponentConfig"
import {SelectComponentConfig} from "./configBuilder/selectComponentConfig"
import {SwitchComponentConfig} from "./configBuilder/switchComponentConfig"
import {TextAreaComponentConfig} from "./configBuilder/textAreaComponentConfig"
import {TextEditorComponentConfig} from "./configBuilder/textEditorComponentConfig"

export const configBuilder = {
    DFormConfig: DFormConfig,
    BaseComponentConfig: BaseComponentConfig,
    CheckboxComponentConfig: CheckboxComponentConfig,
    InputComponentConfig: InputComponentConfig,
    LinkComponentConfig: LinkComponentConfig,
    DateTimeComponentConfig: DateTimeComponentConfig,
    DragAndDropComponentConfig: DragAndDropComponentConfig,
    NumberComponentConfig: NumberComponentConfig,
    PasswordComponentConfig: PasswordComponentConfig,
    SelectComponentConfig: SelectComponentConfig,
    SwitchComponentConfig: SwitchComponentConfig,
    TextAreaComponentConfig: TextAreaComponentConfig,
    TextEditorComponentConfig: TextEditorComponentConfig
}

*/