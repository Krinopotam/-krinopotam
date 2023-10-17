import { ColumnDefinition } from "tabulator-tables";
export interface IDateTimeSorterParams {
    format?: string | undefined;
    alignEmptyValues?: 'top' | 'bottom';
}
export declare const dateTimeSorter: ColumnDefinition['sorter'];
