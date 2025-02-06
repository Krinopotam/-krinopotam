import {BaseFieldInfo, IFieldPropsInfo} from '@src/dFormConstructor/fields/baseFieldInfo';
import {INumberFieldProps, NumberField} from '@src/dForm/fields/number';

export class NumberInfo extends BaseFieldInfo {
    override getFieldClass() {
        return NumberField;
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
        } satisfies IFieldPropsInfo<INumberFieldProps>;
    }
}
