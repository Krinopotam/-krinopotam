import {ColumnDefinition} from "tabulator-tables";
import dayjs from "dayjs";

export interface IDateTimeSorterParams {
    format?: string;
    alignEmptyValues?: 'top'|'bottom';
}
export const DateTimeSorter: ColumnDefinition['sorter'] = function (a, b, _aRow, _bRow, _column, dir, params:IDateTimeSorterParams) {
    const format = params.format ?? getDefaultDateFormat(a);

    const alignEmptyValues = params.alignEmptyValues;
    let emptyAlign = 0;

    const valA = dayjs(a, format)
    const valB = dayjs(b, format)


    if (!valA.isValid()) {
        emptyAlign = !valB.isValid() ? 0 : -1;
    } else if (!valB.isValid()) {
        emptyAlign = 1;
    } else {
        //compare valid values
        if (valA.isSame(valB)) return 0
        return valA.isBefore(valB) ? -1 : 1
    }

    //fix empty values in position
    if ((alignEmptyValues === "top" && dir === "desc") || (alignEmptyValues === "bottom" && dir === "asc")) {
        emptyAlign *= -1;
    }

    return emptyAlign;
}

const getDefaultDateFormat = (value: string) => {
    if (value.length === 10) return 'DD.MM.YYYY';
    else if (value.length === 16) return 'DD.MM.YYYY HH:mm';
    else return 'DD.MM.YYYY HH:mm:ss';
}