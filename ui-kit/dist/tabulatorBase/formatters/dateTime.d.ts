import { ColumnDefinition, ValueStringCallback } from "tabulator-tables";
export interface IDateTimeFormatterParams {
    inputFormat?: string | undefined;
    outputFormat?: string | undefined;
    invalidPlaceholder?: string | number | ValueStringCallback;
}
export declare const DateTimeFormatter: ColumnDefinition['formatter'];
