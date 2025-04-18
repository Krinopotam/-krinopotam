import dayjs from 'dayjs';
import {ColumnDefinition, ValueStringCallback} from 'tabulator-tables';

export interface IDateTimeFormatterParams {
    // datetime
    inputFormat?: string | undefined;
    outputFormat?: string | undefined;
    invalidPlaceholder?: string | number | ValueStringCallback;
}

export const DateTimeFormatter: ColumnDefinition['formatter'] = function (cell, formatterParams: IDateTimeFormatterParams) {
    //cell - the cell component
    //formatterParams - parameters set for the column
    //onRendered - function to call when the formatter has been rendered
    const cellVal = cell.getValue();
    if (!cellVal) return '';

    const inputFormat = formatterParams.inputFormat ?? getDefaultDateFormat(cellVal);
    const outputFormat = formatterParams.outputFormat ?? getDefaultDateFormat(cellVal);

    const invalid = typeof formatterParams.invalidPlaceholder !== 'undefined' ? formatterParams.invalidPlaceholder : '';

    const dt = dayjs(cellVal, inputFormat);
    if (!dt.isValid()) return typeof invalid === 'function' ? invalid(cellVal) : invalid.toString();

    return dt.format(outputFormat);
};

const getDefaultDateFormat = (value: string) => {
    if (value.length === 10) return 'DD.MM.YYYY';
    else if (value.length === 16) return 'DD.MM.YYYY HH:mm';
    else return 'DD.MM.YYYY HH:mm:ss';
}