import { ColumnDefinition } from "tabulator-tables";
import { IGridApi } from "./api";
import { IReactTabulatorProps } from "@krinopotam/ui-tabulator-react";
export declare const useColumnDef: (columnDef: ColumnDefinition | undefined, gridApi: IGridApi) => ColumnDefinition;
export declare const usePrepareColumns: (columns: IReactTabulatorProps['columns'], dataTree: boolean | undefined, gridApi: IGridApi) => ColumnDefinition[] | undefined;
