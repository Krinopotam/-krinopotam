import { BaseField, IBaseFieldProps } from "../../../dForm/fields/base/baseField";
import React from "react";
import { IDatePickerProps } from "../../../datePicker";
import { PanelMode } from "rc-picker/lib/interface";
import { Dayjs } from "dayjs";
export interface IDateTimeFieldProps extends IBaseFieldProps<DateTimeField> {
    allowClear?: IDatePickerProps['allowClear'];
    clearIcon?: IDatePickerProps['clearIcon'];
    dateRender?: IDatePickerProps['dateRender'];
    value?: IDatePickerProps['value'];
    defaultPickerValue?: IDatePickerProps['defaultPickerValue'];
    disabledDate?: IDatePickerProps['disabledDate'];
    disabledTime?: IDatePickerProps['disabledTime'];
    format?: IDatePickerProps['format'];
    mode?: IDatePickerProps['mode'];
    timeMode?: IDatePickerProps['timeMode'];
    popupClassName?: IDatePickerProps['popupClassName'];
    inputReadOnly?: IDatePickerProps['inputReadOnly'];
    nextIcon?: IDatePickerProps['nextIcon'];
    panelRender?: IDatePickerProps['panelRender'];
    placement?: IDatePickerProps['placement'];
    popupStyle?: IDatePickerProps['popupStyle'];
    presets?: IDatePickerProps['presets'];
    prevIcon?: IDatePickerProps['prevIcon'];
    renderExtraFooter?: IDatePickerProps['renderExtraFooter'];
    showNow?: IDatePickerProps['showNow'];
    showToday?: IDatePickerProps['showToday'];
    superNextIcon?: IDatePickerProps['superNextIcon'];
    superPrevIcon?: IDatePickerProps['superPrevIcon'];
    onOk?: (date: Dayjs, field: DateTimeField) => void;
    onOpenChange?: (open: boolean, field: DateTimeField) => void;
    onSelect?: (value: Dayjs, field: DateTimeField) => void;
    onPanelChange?: (value: Dayjs, mode: PanelMode, field: DateTimeField) => void;
    onMouseDown?: (e: React.MouseEvent<HTMLDivElement>, field: DateTimeField) => void;
}
export declare class DateTimeField extends BaseField<IDateTimeFieldProps> {
    protected render(): React.JSX.Element;
}
