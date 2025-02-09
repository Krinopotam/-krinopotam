import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {DateTimeField, IDateTimeFieldProps} from '@src/dForm/fields/dateTime';
import {Space} from 'antd';
import {CalendarOutlined} from '@ant-design/icons';
import React from 'react';

export class DateTimeInfo extends BaseComponentInfo {
    public override readonly CODE = 'dateTime';
    public override readonly TITLE = (
        <Space>
            <CalendarOutlined />
            Date/Time input
        </Space>
    );

    public override readonly CLASS = DateTimeField;

    override getPropsInfo() {
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
        } satisfies IComponentPropsInfo<IDateTimeFieldProps>;
    }
}
