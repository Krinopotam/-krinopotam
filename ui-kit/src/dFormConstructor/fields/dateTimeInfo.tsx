import {BaseFieldInfo, IFieldPropsInfo} from '@src/dFormConstructor/fields/baseFieldInfo';
import {DateTimeField, IDateTimeFieldProps} from '@src/dForm/fields/dateTime';

export class DateTimeInfo extends BaseFieldInfo {
    override getFieldClass() {
        return DateTimeField;
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
        } satisfies IFieldPropsInfo<IDateTimeFieldProps>;
    }
}
