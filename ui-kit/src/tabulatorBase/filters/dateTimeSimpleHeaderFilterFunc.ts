import {AnyType} from '@krinopotam/service-types';
import dayjs from 'dayjs';

export interface IDateTimeHeaderFilterParams {
    /** Filter type (like is default) */
    type?: '=' | 'like' | 'starts' | 'ends';

    /** Input data values date format (date format for converting string cell data to date) */
    inputFormat?: string;

    /** Output data values date format (date format for converting date to string before comparing) */
    outputFormat?: string;

    /** Should empty values be excluded from filtering */
    keepEmpty?: boolean;
}

/** Convert cell date value to string and compare with header value  */
export const DateTimeSimpleHeaderFilterFunc = (
    headerValue: string,
    cellVal: string,
    _rowData: Record<string, AnyType>,
    filterParams: IDateTimeHeaderFilterParams
) => {
    if (!headerValue) return true;
    if (!cellVal) return !!filterParams.keepEmpty;

    const inputFormat = filterParams.inputFormat ?? getDefaultDateFormat(cellVal);
    const outputFormat = filterParams.outputFormat ?? getDefaultDateFormat(cellVal);

    const cellDate = dayjs(cellVal, inputFormat);

    if (!cellDate.isValid()) return !!filterParams.keepEmpty;

    if (filterParams.type === '=') return checkEqual(headerValue, cellDate, outputFormat);
    else if (filterParams.type === 'starts') return checkStarts(headerValue, cellDate, outputFormat);
    else if (filterParams.type === 'ends') return checkEnds(headerValue, cellDate, outputFormat);
    else return checkLike(headerValue, cellDate, outputFormat);
};

const getDefaultDateFormat = (value: string) => {
    if (value.length === 10) return 'DD.MM.YYYY';
    else if (value.length === 16) return 'DD.MM.YYYY HH:mm';
    else return 'DD.MM.YYYY HH:mm:ss';
}

const checkEqual = (filterVal: string, cellDate: dayjs.Dayjs, dateFormat: string) => {
    const celValStr = cellDate.format(dateFormat);
    return celValStr.toLowerCase() === filterVal.toLowerCase();
};

const checkLike = (filterVal: string, cellDate: dayjs.Dayjs, dateFormat: string) => {
    const celValStr = cellDate.format(dateFormat);
    return celValStr.toLowerCase().includes(filterVal.toLowerCase());
};

const checkStarts = (filterVal: string, cellDate: dayjs.Dayjs, dateFormat: string) => {
    const celValStr = cellDate.format(dateFormat);
    return celValStr.toLowerCase().startsWith(filterVal.toLowerCase());
};

const checkEnds = (filterVal: string, cellDate: dayjs.Dayjs, dateFormat: string) => {
    const celValStr = cellDate.format(dateFormat);
    return celValStr.toLowerCase().endsWith(filterVal.toLowerCase());
}
