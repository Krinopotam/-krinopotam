import {IBaseFieldProps} from "@src/dForm/fields/base";
import {BaseField} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {DateTimeFieldRender} from '@src/dForm/fields/dateTime/dateTimeFieldRender';
import {IDatePickerProps} from '@src/datePicker';
import {PanelMode} from 'rc-picker/lib/interface';
import {Dayjs} from 'dayjs';


interface IDateTimeFieldOwnProps extends IBaseFieldProps<DateTimeField, 'now'| string> {
    /** Set current date as default value if field value is empty (default true) */
    nowIfEmpty?: boolean;

    /** Callback when click ok button */
    onOk?: (date: Dayjs, field: DateTimeField) => void;

    /** Callback function, can be executed whether the popup calendar is popped up or closed */
    onOpenChange?: (open: boolean, field: DateTimeField) => void;

    /** Callback function for panel changing */
    onPanelChange?: (value: Dayjs, mode: PanelMode, field: DateTimeField) => void;

    /** Callback function for mouse down */
    onMouseDown?: (e: React.MouseEvent<HTMLDivElement>, field: DateTimeField) => void;
}

export type IDateTimeFieldProps = IDateTimeFieldOwnProps & IDatePickerProps;

export class DateTimeField extends BaseField<IDateTimeFieldProps> {
    protected render() {
        return <DateTimeFieldRender field={this} />;
    }
}
