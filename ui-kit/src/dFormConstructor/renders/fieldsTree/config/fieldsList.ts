import {InputInfo} from '@src/dFormConstructor/fields/inputInfo';
import {NumberInfo} from '@src/dFormConstructor/fields/numberInfo';
import {DateTimeInfo} from '@src/dFormConstructor/fields/dateTimeInfo';
import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';

export const FIELDS_INFO_MAP: Record<string, typeof BaseComponentInfo> = {
    input: InputInfo,
    number: NumberInfo,
    dateTime: DateTimeInfo,
};
