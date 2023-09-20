/**
 * @DateTimeComponent
 * @version 0.0.35.17
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {CSSProperties, DragEvent, MouseEvent, useCallback, useEffect} from 'react';
import dayjs, {Dayjs} from 'dayjs';

import {DatePicker, IDatePickerProps} from '@src/datepicker';
import {IDFormComponentProps, IDFormFieldCallbacks, IDFormFieldProps} from './baseComponent';
import {PanelMode} from "rc-picker/lib/interface";
import {GetTimePickerFormat} from "@src/datepicker/datePicker";
import {IDFormApi} from "@src/dynamic-form";

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
    timeMode?:  IDatePickerProps['timeMode'];

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

    /** Field callbacks */
    callbacks?: IDFormDataPickerComponentCallbacks
}

export interface IDFormDataPickerComponentCallbacks extends IDFormFieldCallbacks {
    /** Callback function, can be executed whether the popup calendar is popped up or closed */
    onOpenChange?: IDatePickerProps['onOpenChange'];

    /** Callback when click ok button */
    onOk?: IDatePickerProps['onOk'];
}
interface IDFormDatetimeComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldDateTimeProps
}

export const DateTimeComponent = ({formApi, fieldName, fieldProps}: IDFormDatetimeComponentProps): React.JSX.Element => {
    const {value: defaultFieldValue, ...fieldPros} = fieldProps;

    //if (!formApi.model.isFieldTouched(fieldName) && !value && defaultValue) {
        // Workaround: update the field model value to the calculated default value.
        // The form model should be the only data source. It does not keep track of the state of the DatePicker.defaultValue prop
        //value = defaultValue?.format(fieldFormat);
        //formApi.model.setFieldValue(fieldName, value, true);
        //fieldValue = defaultValue;
    //}

    const fieldFormat = GetTimePickerFormat(fieldProps.mode, fieldProps.timeMode, fieldProps.format)

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
            {...fieldPros}
            disabled={formApi.model.isFieldDisabled(fieldName)}
            readOnly={formApi.model.isFieldReadOnly(fieldName)}
            format={fieldFormat}
            name={fieldName}
            onBlur={onBlur}
            onChange={onChange}
            //value={fieldValue}
            style={{width: '100%'}}

            onOk={fieldProps.callbacks?.onOk}
            onOpenChange={fieldProps.callbacks?.onOpenChange}
        />
    );
};
