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
import {Dayjs} from 'dayjs';
import {DisabledTime} from 'rc-picker/lib/interface';
import {SharedTimeProps} from 'rc-picker/lib/panels/TimePanel/index';
import React from "react";


export type IDatePickerProps = Omit<AntDatePickerProps, "picker"> & {
    readOnly?: boolean;
    showTime?: boolean | SharedTimeProps<Dayjs>;
    disabledTime?: DisabledTime<Dayjs>;
    showNow?: boolean;
};


/*
const dp = forwardRef<typeof AntDatePicker, AntDatePickerProps>(({...props}, ref)=>{
    return  <AntDatePicker {...props} ref ={ref} />
})
dp.displayName = "DatePicker"
*/

export const DatePicker = ({
                               readOnly,
                               allowClear,
                               open,
                               inputReadOnly,
                               panelRender,
                               showTime,
                               format,
                               ...props
                           }: IDatePickerProps): React.JSX.Element => {
    const defaultDateFormat = 'DD.MM.YYYY';
    const defaultTimeFormat = 'HH:mm:ss';
    const dateTimeFormat = format || defaultDateFormat + (showTime ? ' ' + defaultTimeFormat : '');

    let showTimeFormat = showTime;
    if (showTimeFormat === true) showTimeFormat = {format: dateTimeFormat} as SharedTimeProps<Dayjs>;

    return (
        <AntDatePicker
            {...props}
            allowClear={readOnly ? false : allowClear}
            open={readOnly ? false : open}
            inputReadOnly={readOnly ? true : inputReadOnly}
            panelRender={readOnly ? () => null : panelRender}
            showTime={showTimeFormat}
            format={dateTimeFormat}

            className={props.className}
        />
        //<AntDatePicker {...props} />
    );
};

