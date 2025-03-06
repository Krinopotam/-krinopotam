import {CalendarOutlined} from '@ant-design/icons';
import {DateTimeField, IDateTimeFieldProps} from '@src/dForm/fields/dateTime';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import React from 'react';

export class DateTimeInfo extends BaseComponentInfo {
    public override readonly CODE = 'dateTime';
    public override readonly CLASS = DateTimeField;
    public override readonly INTERFACE_NAME = 'IDateTimeFieldProps';
    public override readonly ICON = (<CalendarOutlined />);
    public override readonly TITLE = ' Date/Time';

    override getPropsInfo() {
        const baseProps = super.getPropsInfo();
        return {
            ...baseProps,
            nowIfEmpty: 'boolean',
            mode: ['time', 'date', 'dateTime', 'week', 'month', 'quarter', 'year'],
            timeMode: ['seconds', 'minutes', 'hours'],
            format: 'string',
            showWeek: 'boolean',
            showTime: 'boolean',
            showNow: 'boolean',
            showHour: 'boolean',
            showMinute: 'boolean',
            showSecond: 'boolean',
            showMillisecond: 'boolean',
            allowClear: 'boolean',
            preserveInvalidOnBlur: 'boolean',
            needConfirm: 'boolean',
            variant: ['outlined', 'borderless', 'filled'],
            multiple: 'boolean',
        } satisfies IComponentPropsInfo<IDateTimeFieldProps>;
    }
}
