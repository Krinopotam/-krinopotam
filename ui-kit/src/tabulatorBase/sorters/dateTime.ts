import {ColumnDefinition} from "tabulator-tables";
import dayjs from "dayjs";

export interface IDateTimeSorterParams {
    format?: string | undefined;
    alignEmptyValues?: 'top'|'bottom';
}
export const dateTimeSorter: ColumnDefinition['sorter'] = function (a, b, aRow, bRow, column, dir, params:IDateTimeSorterParams) {
    let format = params.format;
    if (!format) {
        if (a.length === 10) format = 'DD.MM.YYYY';
        else if (a.length === 16) format = 'DD.MM.YYYY HH:mm';
        else format = "DD.MM.YYYY HH:mm:ss";
    }

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