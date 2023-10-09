/**
 * @DateTimeComponent
 * @version 0.0.35.17
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useCallback, useEffect} from 'react';
import dayjs, {Dayjs} from 'dayjs';

import {IDFormComponentProps, IDFormFieldProps} from './baseComponent';
import {IDFormApi} from "@src/dynamicForm";
import {PanelMode} from "rc-picker/lib/interface";
import {DatePicker, IDatePickerProps} from "@src/datePicker";
import {GetDatePickerFormat} from "@src/datePicker/datePicker";

export {default as dayjs, Dayjs} from 'dayjs';

// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDFormFieldDateTimeProps extends IDFormFieldProps {
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
    onOk?: (date: Dayjs, formApi: IDFormApi) => void;

    /** Callback function, can be executed whether the popup calendar is popped up or closed */
    onOpenChange?: (open: boolean, formApi: IDFormApi) => void;

    /** */
    onSelect?: (value: Dayjs, formApi: IDFormApi) => void;

    /** Callback function for panel changing */
    onPanelChange?: (value: Dayjs, mode: PanelMode, formApi: IDFormApi) => void;

    /** Callback function for mouse down */
    onMouseDown?: (e: React.MouseEvent<HTMLDivElement>, formApi: IDFormApi) => void;
}

interface IDFormDatetimeComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldDateTimeProps
}

export const DateTimeComponent = ({formApi, fieldName, fieldProps}: IDFormDatetimeComponentProps): React.JSX.Element => {
    let value = formApi.model.getFieldValue(fieldName) as IDatePickerProps['value'];

    const fieldFormat = GetDatePickerFormat(fieldProps.mode, fieldProps.timeMode, fieldProps.format)

    if (!value && !formApi.model.isFieldDirty(fieldName) && !formApi.model.isFieldTouched(fieldName)) {
        value = dayjs(new Date())
        formApi.model.setFieldValue(fieldName, value.format(fieldFormat), true);
    }
    const onChange = useCallback(
        (e: dayjs.Dayjs | null) => {
            formApi.model.setFieldValue(fieldName, e?.format(fieldFormat));
            formApi.model.setFieldDirty(fieldName, true);
        },
        [fieldFormat, fieldName, formApi.model]
    );

    const onBlur = useCallback(() => {
        formApi.model.setFieldTouched(fieldName, true);
    }, [fieldName, formApi.model]);


    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);

    return (
        <DatePicker
            {...fieldProps}
            disabled={formApi.model.isFieldDisabled(fieldName)}
            readOnly={formApi.model.isFieldReadOnly(fieldName)}
            format={fieldFormat}
            name={fieldName}
            value={value}
            style={{width: '100%'}}

            /** --- Callbacks ---------- */
            onBlur={onBlur}
            onChange={onChange}
            onOk={(value: Dayjs) => fieldProps?.onOk?.(value, formApi)}
            onOpenChange={(open: boolean) => fieldProps?.onOpenChange?.(open, formApi)}
            onSelect={(value: Dayjs) => fieldProps?.onSelect?.(value, formApi)}
            onPanelChange={(value: Dayjs, mode: PanelMode) => fieldProps?.onPanelChange?.(value, mode, formApi)}
            onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => fieldProps?.onMouseDown?.(e, formApi)}
        />
    );
};
