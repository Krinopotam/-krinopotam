import {IInlineGroupFieldProps} from "@src/dForm/fields/inlineGroup";
import {ITabsFieldProps} from "@src/dForm/fields/tabs";
import {IInputFieldProps} from "@src/dForm/fields/input";
import {IPasswordFieldProps} from "@src/dForm/fields/password";
import {ICustomFieldProps} from "@src/dForm/fields/custom";
import {ICheckboxFieldProps} from "@src/dForm/fields/checkbox";
import {IDateTimeFieldProps} from "@src/dForm/fields/dateTime";
import {IDividerFieldProps} from "@src/dForm/fields/divider";
import {ILinkFieldProps} from "@src/dForm/fields/link";
import {INumberFieldProps} from "@src/dForm/fields/number";
import {IQuillEditorFieldProps} from "@src/dForm/fields/quillEditor";
import {IUploadDraggerFieldProps} from "@src/dForm/fields/fileDrop";
import {ISelectFieldProps} from "@src/dForm/fields/select";
import {ITabulatorGridFieldProps} from "@src/dForm/fields/tabulatorGrid";
import {ITextAreaFieldProps} from "@src/dForm/fields/textArea";
import {ISwitchFieldProps} from "@src/dForm/fields/switch";
import {ITreeSelectFieldProps} from "@src/dForm/fields/treeSelect";
import {IAnyFieldProps} from "@src/dForm/fields/base";

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