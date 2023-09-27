import dayjs from "dayjs";
import {ColumnDefinition, ValueStringCallback} from "tabulator-tables";

export interface IDateTimeFormatterParams {
    // datetime
    inputFormat?: string | undefined;
    outputFormat?: string | undefined;
    invalidPlaceholder?: string | number | ValueStringCallback;
}

export const dateTimeFormatter: ColumnDefinition['formatter'] = function (cell, formatterParams: IDateTimeFormatterParams) {
    //cell - the cell component
    //formatterParams - parameters set for the column
    //onRendered - function to call when the formatter has been rendered
    const value = cell.getValue();
    if (!value) return '';
    const inputFormat = formatterParams.inputFormat || "DD.MM.YYYY HH:mm:ss";
    const outputFormat = formatterParams.outputFormat || "DD.MM.YYYY HH:mm:ss";
    const invalid = typeof formatterParams.invalidPlaceholder !== 'undefined' ? formatterParams.invalidPlaceholder : '';

    const dt = dayjs(value, inputFormat)
    if (!dt.isValid()) {
        if (typeof invalid === "function") {
            return invalid(value);
        } else {
            return invalid.toString();
        }
    }

    return dt.format(outputFormat)
}