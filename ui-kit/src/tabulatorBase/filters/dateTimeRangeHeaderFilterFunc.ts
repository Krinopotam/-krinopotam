import {AnyType} from '@krinopotam/service-types';
import dayjs from 'dayjs';
import {IDateTimeRangeHeaderFilterParams} from '@src/tabulatorBase';

export const DateTimeRangeHeaderFilterFunc = (
    headerValue: string,
    rowValue: string,
    rowData: Record<string, AnyType>,
    filterParams: IDateTimeRangeHeaderFilterParams
) => {
    if (!headerValue) return true;
    if (!rowValue) return !!filterParams.keepEmpty;

    const filterValParts = headerValue.split(' - ');
    const filterFromVal = filterValParts[0];
    const filterToVal = filterValParts[1];
    const filterFromDate = dayjs(filterFromVal);
    const filterToDate = dayjs(filterToVal);
    if (!filterFromDate.isValid() && !filterToDate.isValid()) return true;

    let dataFormat = filterParams.valuesFormat;
    if (!dataFormat) {
        if (rowValue.length === 10) dataFormat = 'DD.MM.YYYY';
        else if (rowValue.length === 16) dataFormat = 'DD.MM.YYYY HH:mm';
        else dataFormat = 'DD.MM.YYYY HH:mm:ss';
    }

    const valueDate = dayjs(rowValue, dataFormat);

    if (!valueDate.isValid()) return !!filterParams.keepEmpty;

    let result: undefined | boolean = undefined;
    if (filterFromDate.isValid()) result = valueDate.isAfter(filterFromDate) || valueDate.isSame(filterFromDate);
    if (filterToDate.isValid() && result !== false) result = valueDate.isBefore(filterToDate) || valueDate.isSame(filterToDate);

    return !!result;
};