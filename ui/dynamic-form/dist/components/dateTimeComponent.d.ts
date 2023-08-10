import React, { CSSProperties } from 'react';
import { Dayjs } from 'dayjs';
import { IDatePickerProps } from '@krinopotam/ui-datepicker';
import { IDFormComponentProps, IDFormFieldProps } from './baseComponent';
export { default as dayjs, Dayjs } from 'dayjs';
export interface IDFormFieldDateTimeProps extends IDFormFieldProps {
    allowClear?: boolean;
    clearIcon?: React.ReactNode;
    dateRender?: (currentDate: Dayjs, today: Dayjs) => React.ReactNode;
    default?: string | Dayjs;
    defaultPickerValue?: Dayjs;
    disabledDate?: (currentDate: Dayjs) => boolean;
    disabledTime?: IDatePickerProps['disabledTime'];
    format?: string;
    mode?: 'time' | 'date' | 'month' | 'year' | 'decade';
    popupClassName: string;
    inputReadOnly?: boolean;
    nextIcon?: React.ReactNode;
    panelRender?: (originPanel: React.ReactNode) => React.ReactNode;
    picker?: 'date' | 'week' | 'month' | 'quarter' | 'year';
    placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
    popupStyle?: CSSProperties;
    presets?: IDatePickerProps['presets'];
    prevIcon?: React.ReactNode;
    renderExtraFooter?: (mode: 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year' | 'decade') => React.ReactNode;
    showNow?: boolean;
    showTime?: boolean;
    showToday?: boolean;
    superNextIcon?: React.ReactNode;
    superPrevIcon?: React.ReactNode;
    onOpenChange?: (open: boolean) => void;
    onOk?: (date: Dayjs) => void;
}
interface IDFormDatetimeComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldDateTimeProps;
}
export declare const DateTimeComponent: ({ formApi, fieldName, fieldProps }: IDFormDatetimeComponentProps) => React.JSX.Element;
