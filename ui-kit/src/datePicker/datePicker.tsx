/**
 * @CustomDatePicker
 * @version 0.0.0.5
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {DatePicker as AntDatePicker, GetProps} from 'antd';
import 'antd/es/date-picker/style/index';
import dayjs, {Dayjs} from 'dayjs';
import React from 'react';
import {SharedPickerProps} from 'rc-picker/lib/interface';

export type IAntDatePicker = GetProps<typeof AntDatePicker>;

export interface IDatePickerProps extends Omit<IAntDatePicker, 'mode' | 'picker' | 'showTime'> {
    mode?: 'time' | 'date' | 'dateTime' | 'week' | 'month' | 'quarter' | 'year';
    timeMode?: 'seconds' | 'minutes' | 'hours';
    readOnly?: boolean;
    format?: string;
    value?: string | dayjs.Dayjs;
}

/*const dp = forwardRef<typeof AntDatePicker, DatePickerProps>(({...props}, ref)=>{
    return  <AntDatePicker {...props} ref ={ref} />
})
dp.displayName = "DatePicker"*/

export const DatePicker = ({
    mode,
    timeMode,
    readOnly,
    allowClear,
    open,
    inputReadOnly,
    panelRender,
    format,
    value,
    ...props
}: IDatePickerProps): React.JSX.Element => {
    const [fieldMode, fieldPicker, fieldFormat, fieldShowTime] = GetDatePickerParams(mode, timeMode, format);

    const fieldValue = typeof value === 'string' ? dayjs(value, fieldFormat) : value;

    return (
        <AntDatePicker
            {...props}
            allowClear={readOnly ? false : allowClear}
            open={readOnly ? false : open}
            inputReadOnly={readOnly ? true : inputReadOnly}
            panelRender={readOnly ? () => null : panelRender}
            showTime={fieldShowTime}
            format={fieldFormat}
            mode={fieldMode}
            picker={fieldPicker}
            value={fieldValue}
        />
        //<AntDatePicker {...props} />
    );
};

type IDatePickerMode = 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year' | undefined;
type IDatePickerPickerMode = 'date' | 'week' | 'month' | 'quarter' | 'year' | undefined;

export const GetDatePickerParams = (
    mode: IDatePickerProps['mode'],
    timeMode: IDatePickerProps['timeMode'],
    format?: string
): [IDatePickerMode, IDatePickerPickerMode, string, SharedPickerProps<Dayjs>['showTime'] | undefined] => {
    let fieldMode: IDatePickerMode;
    let fieldPicker: IDatePickerPickerMode;

    let timeFormat = 'HH:mm:ss';
    if (timeMode === 'minutes') timeFormat = 'HH:mm';
    else if (timeMode === 'hours') timeFormat = 'HH';

    const fieldFormat = GetDatePickerFormat(mode, timeMode, format);

    let fieldShowTime: SharedPickerProps<Dayjs>['showTime'] | undefined;
    if (!mode || mode === 'date') {
        fieldMode = 'date';
    } else if (mode === 'time') {
        fieldMode = 'time';
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - antd datePicker bug - no type for time picker
        fieldPicker = 'time';
    } else if (mode === 'dateTime') {
        fieldMode = 'date';
        fieldShowTime = {format: timeFormat};
    } else if (mode === 'week') {
        fieldMode = 'week';
        fieldPicker = 'week';
    } else if (mode === 'month') {
        fieldMode = 'month';
        fieldPicker = 'month';
    } else if (mode === 'quarter') {
        fieldMode = 'quarter';
        fieldPicker = 'quarter';
    } else if (mode === 'year') {
        fieldMode = 'year';
        fieldPicker = 'year';
    }

    return [fieldMode, fieldPicker, fieldFormat, fieldShowTime];
};

export const GetDatePickerFormat = (mode: IDatePickerProps['mode'], timeMode: IDatePickerProps['timeMode'], format?: IDatePickerProps['format']) => {
    let timeFormat = 'HH:mm:ss';
    if (timeMode === 'minutes') timeFormat = 'HH:mm';
    else if (timeMode === 'hours') timeFormat = 'HH';

    let fieldFormat: string;
    if (format) return format;
    switch (mode) {
        case 'time':
            fieldFormat = timeFormat;
            break;
        case 'dateTime':
            fieldFormat = 'DD.MM.YYYY ' + timeFormat;
            break;
        case 'week':
            fieldFormat = 'YYYY-wo';
            break;
        case 'month':
            fieldFormat = 'MMMM YYYY';
            break;
        case 'quarter':
            //TODO: add internationalization
            fieldFormat = 'Q кв';
            break;
        case 'year':
            fieldFormat = 'YYYY';
            break;
        case 'date':
        default:
            fieldFormat = 'DD.MM.YYYY';
            break;
    }

    return fieldFormat;
};
