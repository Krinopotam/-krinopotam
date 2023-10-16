/**
 * @CustomDatePicker
 * @version 0.0.0.5
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {DatePicker as AntDatePicker} from 'antd';
import {DatePickerProps as AntDatePickerProps} from "antd/lib/date-picker";
import 'antd/es/date-picker/style/index';
import dayjs, {Dayjs} from 'dayjs';
import {SharedTimeProps} from 'rc-picker/lib/panels/TimePanel/index';
import React from "react";
import {DisabledTime} from 'rc-picker/lib/interface';


export type IDatePickerProps = Omit<AntDatePickerProps, 'mode' | 'picker' | 'showTime'> & {
    mode?: 'time' | 'date' | 'dateTime' | 'week' | 'month' | 'quarter' | 'year';
    timeMode?: 'seconds' | 'minutes' | 'hours'
    readOnly?: boolean;
    format?: string;
    value?: string | Dayjs;

    disabledTime?: DisabledTime<Dayjs>; //WORKAROUND: re-added type since AntDatePickerProps doesn't expose it
    showNow?: boolean; //WORKAROUND: re-added type since AntDatePickerProps doesn't expose it
    showToday?: boolean; //WORKAROUND: re-added type since AntDatePickerProps doesn't expose it
    popupClassName?: string; //WORKAROUND: re-added type since AntDatePickerProps doesn't expose it
};


/*
const dp = forwardRef<typeof AntDatePicker, AntDatePickerProps>(({...props}, ref)=>{
    return  <AntDatePicker {...props} ref ={ref} />
})
dp.displayName = "DatePicker"
*/

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


    const [fieldMode, fieldPicker, fieldFormat, fieldShowTime] = GetDatePickerParams(mode, timeMode, format)

    const fieldValue = value ? dayjs(value, fieldFormat) : undefined;

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

type IDatePickerMode = "time" | "date" | "week" | "month" | "quarter" | "year" | undefined
type IDatePickerPickerMode = "date" | "week" | "month" | "quarter" | "year" | undefined

export const GetDatePickerParams = (mode: IDatePickerProps['mode'], timeMode: IDatePickerProps['timeMode'], format?: string): [IDatePickerMode, IDatePickerPickerMode, string, SharedTimeProps<Dayjs> | undefined] => {
    let fieldMode: IDatePickerMode
    let fieldPicker: IDatePickerPickerMode

    let timeFormat = "HH:mm:ss"
    if (timeMode === 'minutes') timeFormat = "HH:mm"
    else if (timeMode === 'hours') timeFormat = "HH"

    const fieldFormat = GetDatePickerFormat(mode, timeMode, format);

    let fieldShowTime: SharedTimeProps<Dayjs> | undefined
    if (!mode || mode === 'date') {
        fieldMode = 'date';
    } else if (mode === 'time') {
        fieldMode = 'time';
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - antd datePicker bug - no type for time picker
        fieldPicker = 'time';
    } else if (mode === 'dateTime') {
        fieldMode = 'date';
        fieldShowTime = {format: timeFormat}
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

    return [fieldMode, fieldPicker, fieldFormat, fieldShowTime]
}

export const GetDatePickerFormat = (mode: IDatePickerProps['mode'], timeMode: IDatePickerProps['timeMode'], format?: IDatePickerProps['format']) => {
    let timeFormat = "HH:mm:ss"
    if (timeMode === 'minutes') timeFormat = "HH:mm"
    else if (timeMode === 'hours') timeFormat = "HH"

    let fieldFormat: string;

    switch (mode) {
        case 'time':
            fieldFormat = format ?? timeFormat;
            break;
        case 'dateTime':
            fieldFormat = format ?? 'DD.MM.YYYY ' + timeFormat
            break;
        case 'week':
            fieldFormat = format ?? 'YYYY-wo'
            break;
        case 'month':
            fieldFormat = format ?? 'MMMM YYYY'
            break;
        case 'quarter':
            fieldFormat = format ?? 'Q кв'
            break;
        case 'year':
            fieldFormat = format ?? 'YYYY'
            break;
        case 'date':
        default:
            fieldFormat = format ?? 'DD.MM.YYYY'
            break;
    }

    return fieldFormat
}