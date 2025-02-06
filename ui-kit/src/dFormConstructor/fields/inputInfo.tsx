import {BaseFieldInfo, IFieldPropsInfo} from '@src/dFormConstructor/fields/baseFieldInfo';
import {IInputFieldProps, InputField} from '@src/dForm/fields/input';

export class InputInfo extends BaseFieldInfo {
    override getFieldClass() {
        return InputField;
    }

    override getFieldPropsInfo() {
        return {
            id: 'string',
            label: 'string',
            maxLength: 'number',
            width: 'string',
            placeholder: 'string',
            readOnly: 'boolean',
            disabled: 'boolean',
            hidden: 'boolean',
            tooltip: 'string',
        } satisfies IFieldPropsInfo<IInputFieldProps>;
    }
}
