import { DatePickerProps as AntDatePickerProps } from "antd/lib/date-picker";
import 'antd/es/date-picker/style/index';
import { Dayjs } from 'dayjs';
import { DisabledTime } from 'rc-picker/lib/interface';
import { SharedTimeProps } from 'rc-picker/lib/panels/TimePanel/index';
import React from "react";
export type IDatePickerProps = Omit<AntDatePickerProps, "picker"> & {
    readOnly?: boolean;
    showTime?: boolean | SharedTimeProps<Dayjs>;
    disabledTime?: DisabledTime<Dayjs>;
    showNow?: boolean;
};
export declare const DatePicker: ({ readOnly, allowClear, open, inputReadOnly, panelRender, showTime, format, ...props }: IDatePickerProps) => React.JSX.Element;
