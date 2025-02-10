import {CalendarOutlined} from '@ant-design/icons';
import {DateTimeField, IDateTimeFieldProps} from '@src/dForm/fields/dateTime';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {Space} from 'antd';
import React from 'react';

export class DateTimeInfo extends BaseComponentInfo {
    public override readonly CODE = 'dateTime';
    public override readonly CLASS = DateTimeField;
    public override readonly INTERFACE_NAME = 'IDateTimeFieldProps';

    public override readonly TITLE = (
        <Space>
            <CalendarOutlined />
            Date/Time
        </Space>
    );

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
