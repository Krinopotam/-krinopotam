import { MutableRefObject } from 'react';
import { IDFormModalApi } from '@krinopotam/ui-dynamic-form-modal/hooks/api';
import { IButtonsRowApi } from '@krinopotam/ui-buttons-row';
import { TPromise } from '@krinopotam/service-types';
import { IGridProps, IGridRowData } from '../tabulatorGrid';
import { RowComponent, ScrollToRowPosition, TabulatorFull as Tabulator } from 'tabulator-tables';
import { ITabulator } from '../reactTabulator/reactTabulator';
type IRowKey = IGridRowData['id'];
type IRowKeys = IRowKey | IRowKey[];
export interface IGridApi {
    getGridId: () => string;
    gridProps: IGridProps;
    tableApi: ITabulator | undefined;
    getIsMounted: () => boolean;
    getDataSet: () => IGridRowData[];
    setDataSet: (dataSet: IGridRowData[] | null | undefined) => void;
    getIsLoading: () => boolean;
    setIsLoading: (isLoading: boolean) => void;
    insertRows: (rowData: IGridRowData | IGridRowData[], place?: 'above' | 'below', key?: IRowKey, updateActiveRow?: boolean) => void;
    updateRows: (rowData: IGridRowData | IGridRowData[], updateActiveRow?: boolean) => void;
    deleteRowsByKeys: (keys: IRowKeys) => void;
    deleteRows: (rowData: IGridRowData | IGridRowData[]) => void;
    setActiveRowKey: (key: IRowKey | null, clearSelection?: boolean, scrollPosition?: ScrollToRowPosition) => void;
    getActiveRowKey: () => IRowKey | undefined;
    getActiveNode: () => RowComponent | undefined;
    getActiveRow: () => IGridRowData | undefined;
    getNextRowKey: (key: IRowKey | undefined, step?: number) => IRowKey | undefined;
    getPrevRowKey: (key: IRowKey | undefined, step?: number) => IRowKey | undefined;
    getSelectedRowKeys: () => IRowKey[];
    setSelectedRowKeys: (keys: IRowKeys | null | undefined, clearPrevSelection?: boolean) => void;
    getSelectedNodes: () => RowComponent[];
    getSelectedRows: () => IGridRowData[];
    getNodeByKey: (key: IRowKey) => RowComponent | undefined;
    getRowByKey: (key: IRowKey) => IGridRowData | undefined;
    editFormApi: IDFormModalApi;
    buttonsApi: IButtonsRowApi & {
        refreshButtons: () => void;
    };
    fetchData: (dataSource?: IGridDataFetchPromise) => void;
    addToInitQue: (func: () => void) => void;
    getInitQue: () => (() => void)[];
}
export type IGridDataFetchPromise = TPromise<{
    data: IGridRowData[];
}, {
    message: string;
    code: number;
}>;
export declare const useInitGridApi: ({ gridApi, props, tableRef, editFormApi, buttonsApi, initQue, }: {
    gridApi: IGridApi;
    props: IGridApi['gridProps'];
    tableRef: MutableRefObject<Tabulator | undefined>;
    editFormApi: IGridApi['editFormApi'];
    buttonsApi: IGridApi['buttonsApi'];
    initQue: (() => void)[];
}) => IGridApi;
export {};
