import {BaseField, IDFormBaseFieldProps,} from "@src/dForm/fields/base/baseField";
import React from "react";
import {DateTimeFieldRender} from "@src/dForm/fields/dateTime/dateTimeFieldRender";
import {IDatePickerProps} from "@src/datePicker";
import {PanelMode} from "rc-picker/lib/interface";
import {Dayjs} from "dayjs";

export interface IDFormDateTimeFieldProps extends IDFormBaseFieldProps<DateTimeField> {
    /** Whether to show clear button */
    allowClear?: IDatePickerProps['allowClear'];

    /** The custom clear icon */
    clearIcon?: IDatePickerProps['clearIcon'];

    /** Custom rendering function for date cells */
    dateRender?: IDatePickerProps['dateRender'];

    /** Default value. If start time or end time is null or undefined, the date range will be an open interval */
    value?: IDatePickerProps['value'];

    /** To set default picker date */
    defaultPickerValue?: IDatePickerProps['defaultPickerValue'];

    /** Specify the date that cannot be selected */
    disabledDate?: IDatePickerProps['disabledDate'];

    /** To specify the time that cannot be selected */
    disabledTime?: IDatePickerProps['disabledTime'];

    /** To set the date format, refer to dayjs. Default DD.MM.YYYY HH:mm:ss */
    format?: IDatePickerProps['format'];

    /** The DatePicker mode */
    mode?: IDatePickerProps['mode'];

    /** The DatePicker time mode */
    timeMode?: IDatePickerProps['timeMode'];

    /** To customize the className of the popup calendar */
    popupClassName?: IDatePickerProps['popupClassName'];

    /** Make input readOnly to avoid popup keyboard in mobile */
    inputReadOnly?: IDatePickerProps['inputReadOnly'];

    /** The custom next icon */
    nextIcon?: IDatePickerProps['nextIcon'];

    /** Customize panel render */
    panelRender?: IDatePickerProps['panelRender'];

    /** The position where the selection box pops up (default bottomLeft) */
    placement?: IDatePickerProps['placement'];

    /** To customize the style of the popup calendar */
    popupStyle?: IDatePickerProps['popupStyle'];

    /** The preset ranges for quick selection */
    presets?: IDatePickerProps['presets'];

    /** The custom prev icon */
    prevIcon?: IDatePickerProps['prevIcon'];

    /** Render extra footer in panel */
    renderExtraFooter?: IDatePickerProps['renderExtraFooter'];

    /** Whether to show 'Now' button on panel when showTime is set */
    showNow?: IDatePickerProps['showNow'];

    /** Whether to show Today button (default true) */
    showToday?: IDatePickerProps['showToday'];

    /** The custom suffix icon */
    //suffixIcon?: IDatePickerProps['suffixIcon'];

    /** The custom super next icon */
    superNextIcon?: IDatePickerProps['superNextIcon'];

    /** The custom super prev icon */
    superPrevIcon?: IDatePickerProps['superPrevIcon'];

    /** --- Callbacks -----------*/
    /** Callback when click ok button */
    onOk?: (date: Dayjs, field: DateTimeField) => void;

    /** Callback function, can be executed whether the popup calendar is popped up or closed */
    onOpenChange?: (open: boolean, field: DateTimeField) => void;

    /** */
    onSelect?: (value: Dayjs, field: DateTimeField) => void;

    /** Callback function for panel changing */
    onPanelChange?: (value: Dayjs, mode: PanelMode, field: DateTimeField) => void;

    /** Callback function for mouse down */
    onMouseDown?: (e: React.MouseEvent<HTMLDivElement>, field: DateTimeField) => void;
}

export class DateTimeField extends BaseField<IDFormDateTimeFieldProps> {
    protected render() {
        return <DateTimeFieldRender field={this} />
    }
}
