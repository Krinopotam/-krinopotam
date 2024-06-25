import {CellComponent, EmptyCallback, FilterType, ValueBooleanCallback, ValueVoidCallback} from 'tabulator-tables';
import dayjs from 'dayjs';

export interface IDateTimeRangeHeaderFilterParams {
    /** Filter type */
    filterType?: 'date' | 'datetime';

    /** Show seconds for Time or DateTime formats */
    showSeconds?: boolean;

    /** Data values format */
    valuesFormat?: string;

    /** Should empty values be excluded from filtering */
    keepEmpty?: boolean;
}

export const DateTimeRangeHeaderFilter = (
    cell: CellComponent,
    onRendered: EmptyCallback,
    success: ValueBooleanCallback,
    cancel: ValueVoidCallback,
    editorParams?: IDateTimeRangeHeaderFilterParams
) => {
    const $inputFrom = document.createElement('input');
    const $inputTo = document.createElement('input');
    const column = cell.getColumn();
    column.getDefinition().headerFilterLiveFilter = false;

    //const table = cell.getColumn().getTable();
    //const field = cell.getColumn().getField();

    //create and style input
    let initialRowValue = cell.getValue();
    const initialParts = initialRowValue.split(' - ');
    const initialFromVal = initialParts[0] ?? '';
    const initialToVal = initialParts[1] ?? '';

    const onChange = (from: boolean) => {
        const fromVal = $inputFrom.value;
        const toVal = $inputTo.value;
        const value = from ? fromVal : toVal;
        const initVal = from ? initialFromVal : initialToVal;

        if (initVal && value === initVal) {
            cancel(undefined);
            return;
        }

        const rowVal = fromVal + ' - ' + toVal;

        if (success(rowVal)) {
            console.log(rowVal);
            initialRowValue = rowVal; //persist value if successfully validated in case editor is used as header filter
        }
    };
/*    const inputFromOnChange = () => {
        onChange(true);
    };
    const inputToOnChange = () => {
        onChange(false);
    };*/

    const onBlur = (e: FocusEvent, from: boolean) => {
        if (e.relatedTarget) onChange(from); // only on a "true" blur; not when focusing browser's date/time picker
    };

    const inputFromOnBlur = (e: FocusEvent) => {
        onBlur(e, true);
    };

    const inputToOnBlur = (e: FocusEvent) => {
        onBlur(e, false);
    };

    const onKeyDown = (e: KeyboardEvent, from: boolean) => {
        switch (e.keyCode) {
            // case 9:
            case 13: //enter
                onChange(from);
                break;
            case 27: //Esc
                cancel(undefined);
                break;
            case 35: //home
            case 36: //end
                e.stopPropagation();
                break;
        }
    };

    const inputFromOnKeyDown = (e: KeyboardEvent) => {
        onKeyDown(e, true);
    };

    const inputToOnKeyDown = (e: KeyboardEvent) => {
        onKeyDown(e, false);
    };

    const filterDom = document.createElement('div');
    filterDom.style.display = 'flex';
    filterDom.style.flexDirection = 'row';
    filterDom.addEventListener("keyup", (e)=>{e.stopPropagation(); });
    filterDom.addEventListener("search", (e)=>{e.stopPropagation(); });

    const fieldType = editorParams?.filterType === 'datetime' ? 'datetime-local' : 'date';
    const fieldStep = editorParams?.filterType === 'datetime' && editorParams?.showSeconds ? '1' : '';

    $inputFrom.value = initialFromVal;
    $inputFrom.type = fieldType;
    $inputFrom.step = fieldStep;
    $inputFrom.style.flex = '1';
    $inputFrom.style.padding = '4px';
    $inputFrom.style.marginLeft = '6px';
    $inputFrom.style.marginRight = '6px';
    $inputFrom.style.boxSizing = 'border-box';
    //$inputFrom.addEventListener('change', inputFromOnChange);
    $inputFrom.addEventListener('blur', inputFromOnBlur);
    $inputFrom.addEventListener('keydown', inputFromOnKeyDown);

    $inputTo.value = initialToVal;
    $inputTo.type = fieldType;
    $inputTo.step = fieldStep;
    $inputTo.style.flex = '1';
    $inputTo.style.padding = '4px';
    $inputTo.style.marginLeft = '6px';
    $inputTo.style.boxSizing = 'border-box';
    //$inputTo.addEventListener('change', inputToOnChange);
    $inputTo.addEventListener('blur', inputToOnBlur);
    $inputTo.addEventListener('keydown', inputToOnKeyDown);

    const $from = document.createTextNode('с');
    const $to = document.createTextNode('по');
    filterDom.appendChild($from);
    filterDom.appendChild($inputFrom);
    filterDom.appendChild($to);
    filterDom.appendChild($inputTo);

    onRendered(function () {
        if (cell.getType() === 'cell') {
            //if editor used in cell edit mode
            $inputFrom.focus({preventScroll: true});
            $inputFrom.select();
        }
    });

    return filterDom;
};

export const DateTimeRangeHeaderFilterFunc = (
    headerValue: string,
    rowValue: string,
    rowData: Record<string, unknown>,
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

export const DateTimeRangeHeaderFilterFunc2 = (
    data: Record<string, unknown>,
    filterParams: IDateTimeRangeHeaderFilterParams & {
        field: string;
        type: FilterType;
        filterValue?: string;
    }
) => {
    const filterValue = filterParams.filterValue;
    if (!filterValue) return true;

    const value = data[filterParams.field] as string;
    if (!value) return !!filterParams.keepEmpty;

    let dataFormat = filterParams.valuesFormat;
    if (!dataFormat) {
        if (value.length === 10) dataFormat = 'DD.MM.YYYY';
        else if (value.length === 16) dataFormat = 'DD.MM.YYYY HH:mm';
        else dataFormat = 'DD.MM.YYYY HH:mm:ss';
    }

    const valueDate = dayjs(value, dataFormat);
    const filterDate = dayjs(filterValue);

    if (!valueDate.isValid()) return !!filterParams.keepEmpty;
    if (!filterDate.isValid()) return true;

    switch (filterParams.type) {
        case '=':
            return valueDate.isSame(filterDate);
        case '!=':
            return !valueDate.isSame(filterDate);
        case '>':
            return valueDate.isAfter(filterDate);
        case '>=':
            return valueDate.isAfter(filterDate) || valueDate.isSame(filterDate);
        case '<':
            return valueDate.isBefore(filterDate);
        case '<=':
            return valueDate.isBefore(filterDate) || valueDate.isSame(filterDate);
    }

    return false;
};
