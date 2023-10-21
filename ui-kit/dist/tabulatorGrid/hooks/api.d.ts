import { MutableRefObject } from 'react';
import { IDFormModalApi } from '../../dFormModal';
import { IButtonsRowApi } from '../../buttonsRow/buttonsRow';
import { IGridProps, IGridRowData } from '../tabulatorGrid';
import { RowComponent, ScrollToRowPosition, TabulatorFull as Tabulator } from 'tabulator-tables';
import { ITabulator } from '../../tabulatorBase';
type IRowKey = IGridRowData['id'];
type IRowKeys = IRowKey | IRowKey[];
export interface IGridApi {
    getGridId: () => string;
    gridProps: IGridProps;
    tableApi: ITabulator | undefined;
    getIsMounted: () => boolean;
    getDataSet: () => IGridRowData[] | undefined;
    setDataSet: (dataSet: IGridRowData[] | null | undefined) => void;
    getIsLoading: () => boolean;
    setIsLoading: (isLoading: boolean) => void;
    insertRows: (rowData: IGridRowData | IGridRowData[], place?: 'above' | 'below', key?: IRowKey, updateActiveRow?: boolean) => void;
    updateRows: (rowData: IGridRowData | IGridRowData[], updateActiveRow?: boolean) => void;
    removeRowsByKeys: (keys: IRowKeys) => void;
    removeRows: (rowData: IGridRowData | IGridRowData[]) => void;
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
    getRowData: (node: RowComponent | undefined, withParent?: boolean, selfParent?: boolean, parentOnly?: boolean, withChildren?: boolean) => Record<string, unknown>;
    getNodeByKey: (key: IRowKey) => RowComponent | undefined;
    getRowByKey: (key: IRowKey) => IGridRowData | undefined;
    editFormApi: IDFormModalApi;
    buttonsApi: IButtonsRowApi & {
        refreshButtons: () => void;
    };
    fetchData: (params?: Record<string, unknown>) => void;
}
export declare const useInitGridApi: ({ gridApi, props, tableRef, editFormApi, buttonsApi, }: {
    gridApi: IGridApi;
    props: IGridApi['gridProps'];
    tableRef: MutableRefObject<Tabulator | undefined>;
    editFormApi: IGridApi['editFormApi'];
    buttonsApi: IGridApi['buttonsApi'];
}) => IGridApi;
export {};
