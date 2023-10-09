import {BaseField, IDFormFieldCallbacks, IDFormFieldPropsOnly} from "@src/dForm/fields/base/baseField";

export interface IDFormFieldInputPropsOnly extends IDFormFieldPropsOnly {
    /** Default value */
    value?: string | number ;

    /** Whether show text count */
    showCount?: boolean;

    /** The max length */
    maxLength?: number;
}

export interface IDFormInputFieldCallbacks extends IDFormFieldCallbacks<InputField> {

}

export type  IDFormFieldInputProps = IDFormFieldInputPropsOnly & IDFormInputFieldCallbacks


export class InputField extends BaseField<IDFormFieldInputPropsOnly, IDFormInputFieldCallbacks> {
    protected renderField() {
        super.renderField();
    }

}
