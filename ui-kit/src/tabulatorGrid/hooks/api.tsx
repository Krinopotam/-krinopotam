import React, {MutableRefObject, useCallback, useRef, useState} from 'react';
import {HelpersStrings, HelpersObjects} from '@krinopotam/js-helpers';
import {IDFormModalApi} from '@src/dFormModal';
import {IButtonsRowApi} from '@src/buttonsRow/buttonsRow';
import useUnmountedRef from 'ahooks/lib/useUnmountedRef';
import {IGridDeletePromise, IGridProps, IGridRowData} from '../tabulatorGrid';
import {RowComponent, ScrollToRowPosition, TabulatorFull as Tabulator} from 'tabulator-tables';
import {ITabulator} from '@src/tabulatorBase';
import {MessageBox, MessageBoxApi} from '@src/messageBox';
import {GenerateAjaxRequestFunc} from '@src/tabulatorGrid/helpers/fetchHelpers';

type IRowKey = IGridRowData['id'];
type IRowKeys = IRowKey | IRowKey[];

export interface IGridApi {
    /** Get grid ID */
    getGridId: () => string;

    /** Current grid props */
    gridProps: IGridProps;

    /** Component table instance (Tabulator) */
    tableApi: ITabulator | undefined;

    /** Get grid mounted state */
    getIsMounted: () => boolean;

    /** Get current data set*/
    getDataSet: () => IGridRowData[] | undefined;

    /** Set data set*/
    setDataSet: (dataSet: IGridRowData[] | null | undefined) => void;

    /** Get current loading state */
    getIsLoading: () => boolean;

    /** Set current loading state */
    setIsLoading: (isLoading: boolean) => void;

    /** Insert new row/rows */
    insertRows: (rowData: IGridRowData | IGridRowData[], place?: 'above' | 'below', key?: IRowKey, updateActiveRow?: boolean) => void;

    /** Update existed row/rows */
    updateRows: (rowData: IGridRowData | IGridRowData[], updateActiveRow?: boolean) => void;

    /** Delete existed row/rows by keys */
    removeRowsByKeys: (keys: IRowKeys) => void;

    /** Simple remove existed row/rows from grid without any logic (not to be confused with deleteRows) */
    removeRows: (rowData: IGridRowData | IGridRowData[]) => void;

    /** Delete existed row/rows from grid with deletion confirmation and asynchronous processing (not to be confused with removeRows) */
    deleteRows: (rowData: IGridRowData | IGridRowData[]) => void;

    /** Set active row */
    setActiveRowKey: (key: IRowKey | null, clearSelection?: boolean, scrollPosition?: ScrollToRowPosition) => void;

    /* Get active row key */
    getActiveRowKey: () => IRowKey | undefined;

    /** Get active row node */
    getActiveNode: () => RowComponent | undefined;

    /** Get active row */
    getActiveRow: () => IGridRowData | undefined;

    /* Get next row key */
    getNextRowKey: (key: IRowKey | undefined, step?: number) => IRowKey | undefined;

    /* Get previous row key */
    getPrevRowKey: (key: IRowKey | undefined, step?: number) => IRowKey | undefined;

    /** Get selected rows keys */
    getSelectedRowKeys: () => IRowKey[];

    /** Set selected row/rows keys */
    setSelectedRowKeys: (keys: IRowKeys | null | undefined, clearPrevSelection?: boolean) => void;

    /** Get selected tabulator row nodes */
    getSelectedNodes: () => RowComponent[];

    /** Get selected rows */
    getSelectedRows: () => IGridRowData[];

    /**
     * @return row data (suitable as a dataSet for dForm)
     * @param node - row node
     * @param withParent - Add parent information to data
     * @param selfParent - The parent of a row must be the row itself
     * @param parentOnly - The data should not contain any data other than parent data
     * @param withChildren - The data must contain children data
     */
    getRowData: (
        node: RowComponent | undefined,
        withParent?: boolean,
        selfParent?: boolean,
        parentOnly?: boolean,
        withChildren?: boolean
    ) => Record<string, unknown>;

    /** Open columns properties dialog */
    openColumnDialog: (open: boolean) => void;

    /** Select all rows*/
    // selectAll: () => void;

    /** Select next row */
    //selectNextRow: (direction: 'next' | 'previous', ensureVisible?: boolean) => void;

    /** Select first row */
    //selectFirstRow: (ensureVisible?: boolean) => void;

    /** Select last row */
    // selectLastRow: (ensureVisible?: boolean) => void;

    /** Returns row node by key */
    getNodeByKey: (key: IRowKey) => RowComponent | undefined;

    /** Returns row by key */
    getRowByKey: (key: IRowKey) => IGridRowData | undefined;

    /** edit form api */
    editFormApi: IDFormModalApi;

    /** Buttons api */
    buttonsApi: IButtonsRowApi & {refreshButtons: () => void};

    /** Fetch data. If onDataFetch callback  is undefined,the request will use the previously set onDataFetch callback  */
    fetchData: (onDataFetch?: IGridProps['onDataFetch'], params?: Record<string, unknown>) => void;

    /** Retry fetch data (with last fetch function) */
    retryFetchData: () => void;

    /** Set current data fetch handler */
    setCurrentDataFetchHandler: (dataFetchHandler: IGridProps['onDataFetch'], params?: Record<string, unknown>) => void;

    /** Get current data fetch handler */
    getCurrentDataFetchHandler: () => [IGridProps['onDataFetch'], Record<string, unknown> | undefined];
}

export const useInitGridApi = ({
    gridApi,
    props,
    tableRef,
    editFormApi,
    buttonsApi,
    openColumnsDialog,
}: {
    gridApi: IGridApi;
    props: IGridApi['gridProps'];
    tableRef: MutableRefObject<Tabulator | undefined>;
    editFormApi: IGridApi['editFormApi'];
    buttonsApi: IGridApi['buttonsApi'];
    openColumnsDialog: React.Dispatch<React.SetStateAction<boolean>>;
}): IGridApi => {
    const dataSetRef = useRef<IGridProps['dataSet']>(undefined);
    const curDataFetchHandler = useRef<IGridProps['onDataFetch'] | undefined>();
    const curDataFetchParams = useRef<Record<string, unknown> | undefined>();

    const [isLoading, setIsLoading] = useState(false);
    const unmountRef = useUnmountedRef();

    useUpdateDataSetFromProps(dataSetRef, props.dataSet);

    gridApi.gridProps = props;
    gridApi.tableApi = tableRef.current as ITabulator;
    gridApi.editFormApi = editFormApi;
    gridApi.buttonsApi = buttonsApi;
    gridApi.getIsMounted = useApiIsMounted(unmountRef);
    gridApi.getGridId = useApiGetGridId(gridApi);
    gridApi.getDataSet = useApiGetDataSet(dataSetRef);
    gridApi.setDataSet = useApiSetDataSet(dataSetRef, gridApi);
    gridApi.getIsLoading = useApiGetIsLoading(isLoading);
    gridApi.setIsLoading = useApiSetIsLoading(setIsLoading);
    gridApi.setActiveRowKey = useApiSetActiveRowKey(gridApi);
    gridApi.getActiveRowKey = useApiGetActiveRowKey(gridApi);
    gridApi.getActiveNode = useApiGetActiveNode(gridApi);
    gridApi.getActiveRow = useApiGetActiveRow(gridApi);
    gridApi.getNextRowKey = useApiGetNextRowKey(gridApi);
    gridApi.getPrevRowKey = useApiGetPrevRowKey(gridApi);
    gridApi.getSelectedRowKeys = useApiGetSelectedRowKeys(gridApi);
    gridApi.getSelectedNodes = useApiGetSelectedNodes(gridApi);
    gridApi.getSelectedRows = useApiGetSelectedRows(gridApi);
    gridApi.setSelectedRowKeys = useApiSetSelectedRowsKeys(gridApi);
    gridApi.getNodeByKey = useApiGetNodeByKey(gridApi);
    gridApi.getRowByKey = useApiGetRowByKey(gridApi);
    gridApi.insertRows = useApiInsertRows(dataSetRef, gridApi);
    gridApi.updateRows = useApiUpdateRows(dataSetRef, gridApi);
    gridApi.removeRowsByKeys = useApiRemoveRowsByKeys(dataSetRef, gridApi);
    gridApi.removeRows = useApiRemoveRows(gridApi);
    gridApi.deleteRows = useApiDeleteRows(gridApi);
    gridApi.fetchData = useApiFetchData(gridApi);
    gridApi.retryFetchData = useApiRetryFetchData(gridApi);
    gridApi.setCurrentDataFetchHandler = useSetCurrentDataFetchHandler(curDataFetchHandler, curDataFetchParams);
    gridApi.getCurrentDataFetchHandler = useGetCurrentDataFetchHandler(curDataFetchHandler, curDataFetchParams);
    gridApi.getRowData = useApiGetRowData(gridApi);
    gridApi.openColumnDialog = useApiOpenColumnDialog(gridApi, openColumnsDialog);

    /*
    gridApi.selectAll = useApiSelectAll(gridApi);
    gridApi.selectNextRow = useApiSelectNextRow(gridApi);
    gridApi.selectFirstRow = useApiSelectFirstRow(gridApi);
    gridApi.selectLastRow = useApiSelectLastRow(gridApi);*/

    return gridApi;
};

/**
 * DataSet can change both via Props and via api.
 * If the DataSet has changed via Props, set the new current dataSet
 */
const useUpdateDataSetFromProps = (curDataSetRef: MutableRefObject<IGridProps['dataSet'] | undefined>, propsDataSet: IGridProps['dataSet']) => {
    const propsDataSetRef = useRef<IGridProps['dataSet']>(undefined);
    if (propsDataSetRef.current === propsDataSet) return;
    propsDataSetRef.current = propsDataSet;
    curDataSetRef.current = propsDataSet;
};

const useApiGetGridId = (gridApi: IGridApi): IGridApi['getGridId'] => {
    const [gridId] = useState(gridApi.gridProps.id ?? 'grid-' + HelpersStrings.getUuid());
    return useCallback(() => gridId, [gridId]);
};

const useApiIsMounted = (unmountRef: React.MutableRefObject<boolean>): IGridApi['getIsMounted'] => {
    return useCallback(() => !unmountRef.current, [unmountRef]);
};

const useApiGetDataSet = (dataSetRef: React.MutableRefObject<IGridProps['dataSet'] | undefined>): IGridApi['getDataSet'] => {
    return useCallback(() => dataSetRef.current ?? undefined, [dataSetRef]);
};

const useApiSetDataSet = (dataSetRef: React.MutableRefObject<IGridProps['dataSet']>, gridApi: IGridApi): IGridApi['setDataSet'] => {
    return useCallback(
        (dataSet: IGridProps['dataSet'] | null) => {
            if (!gridApi.tableApi) return;

            dataSetRef.current = dataSet ?? undefined;

            gridApi.tableApi?.deselectRow();
            gridApi.tableApi?.clearData();
            gridApi.tableApi?.setData(dataSetRef.current);

            gridApi.gridProps.onDataChanged?.(dataSetRef.current, gridApi);
        },
        [dataSetRef, gridApi]
    );
};

const useApiGetIsLoading = (isLoading: boolean): IGridApi['getIsLoading'] => {
    return useCallback(() => {
        return isLoading;
    }, [isLoading]);
};

const useApiSetIsLoading = (setIsLoading: React.Dispatch<React.SetStateAction<boolean>>): IGridApi['setIsLoading'] => {
    return useCallback(
        (isLoading: boolean) => {
            setIsLoading(isLoading);
        },
        [setIsLoading]
    );
};

const useApiSetActiveRowKey = (gridApi: IGridApi): IGridApi['setActiveRowKey'] => {
    return useCallback(
        (key: IRowKey | null, clearSelection?: boolean, scrollPosition?: ScrollToRowPosition) => {
            if (!gridApi.tableApi) return;
            gridApi.tableApi.setActiveRowByKey(key, clearSelection, scrollPosition);
        },
        [gridApi]
    );
};

const useApiGetActiveRowKey = (gridApi: IGridApi): IGridApi['getActiveRowKey'] => {
    return useCallback(() => gridApi.tableApi?.getActiveRowKey?.(), [gridApi]);
};

const useApiGetActiveNode = (gridApi: IGridApi): IGridApi['getActiveNode'] => {
    return useCallback(() => gridApi.tableApi?.getActiveRow?.(), [gridApi]);
};

const useApiGetActiveRow = (gridApi: IGridApi): IGridApi['getActiveRow'] => {
    return useCallback(() => {
        return gridApi.getActiveNode()?.getData();
    }, [gridApi]);
};

const useApiGetNextRowKey = (gridApi: IGridApi): IGridApi['getNextRowKey'] => {
    return useCallback(
        (key: IRowKey | undefined, step?: number) => {
            if (!gridApi.tableApi || !key) return undefined;
            if (!step) step = 1;
            let curNode: RowComponent | undefined = gridApi.tableApi?.getRow(key);
            if (!curNode) return undefined;
            for (let i = 0; i < step; i++) {
                const nextNode = curNode?.getNextRow();
                if (!nextNode) return curNode.getData().id;
                curNode = nextNode;
            }

            return curNode.getData().id;
        },
        [gridApi.tableApi]
    );
};

const useApiGetPrevRowKey = (gridApi: IGridApi): IGridApi['getPrevRowKey'] => {
    return useCallback(
        (key: IRowKey | undefined, step?: number) => {
            if (!gridApi.tableApi || !key) return undefined;
            if (!step) step = 1;
            let curNode: RowComponent | undefined = gridApi.tableApi?.getRow(key);
            if (!curNode) return undefined;
            for (let i = 0; i < step; i++) {
                const prevNode = curNode?.getPrevRow();
                if (!prevNode) return curNode.getData().id;
                curNode = prevNode;
            }

            return curNode.getData().id;
        },
        [gridApi.tableApi]
    );
};

const useApiGetSelectedRowKeys = (gridApi: IGridApi): IGridApi['getSelectedRowKeys'] => {
    const emptyArray = useRef<IRowKey[]>([]);
    return useCallback((): IRowKey[] => {
        if (!gridApi.tableApi) return emptyArray.current;
        const selectedRows = gridApi.tableApi.getSelectedData() as IGridRowData[];

        const result: IRowKey[] = [];

        for (const row of selectedRows) {
            result.push(row.id);
        }

        return result;
    }, [gridApi]);
};

const useApiSetSelectedRowsKeys = (gridApi: IGridApi): IGridApi['setSelectedRowKeys'] => {
    return useCallback(
        (keys: IRowKeys | null | undefined, clearPrevSelection?: boolean) => {
            if (!gridApi.tableApi) return;

            if (!keys || clearPrevSelection) gridApi.tableApi?.deselectRow();

            const selKeys: IRowKey[] = HelpersObjects.isArray(keys) ? (keys as IRowKey[]) : [keys as IRowKey];
            gridApi.tableApi?.selectRow(selKeys);
        },
        [gridApi]
    );
};

const useApiGetSelectedNodes = (gridApi: IGridApi): IGridApi['getSelectedNodes'] => {
    return useCallback((): RowComponent[] => gridApi.tableApi?.getSelectedRows?.() ?? [], [gridApi]);
};

const useApiGetSelectedRows = (gridApi: IGridApi): IGridApi['getSelectedRows'] => {
    return useCallback((): IGridRowData[] => gridApi.tableApi?.getSelectedData?.() ?? [], [gridApi]);
};

const useApiGetNodeByKey = (gridApi: IGridApi): IGridApi['getNodeByKey'] => {
    return useCallback(
        (key: IRowKey) => {
            if (!key || !gridApi.tableApi) return undefined;
            return gridApi.tableApi?.getRow(key);
        },
        [gridApi]
    );
};

const useApiGetRowByKey = (gridApi: IGridApi): IGridApi['getRowByKey'] => {
    return useCallback(
        (key: IRowKey) => {
            return gridApi.getNodeByKey(key)?.getData();
        },
        [gridApi]
    );
};

const useApiInsertRows = (dataSetRef: React.MutableRefObject<IGridProps['dataSet'] | undefined>, gridApi: IGridApi): IGridApi['insertRows'] => {
    return useCallback(
        (rows: IGridRowData[] | IGridRowData, place?: 'above' | 'below', key?: IRowKey, updateActiveRow?: boolean) => {
            const tableApi = gridApi.tableApi;
            if (!tableApi) return;

            const dataTree = gridApi.gridProps.dataTree;

            const above = place === 'above';

            const _rows: IGridRowData[] = HelpersObjects.isArray(rows) ? [...(rows as IGridRowData[])] : [rows as IGridRowData];

            for (const row of _rows) {
                if (!dataTree) tableApi.addData([row], above, key).then();
                else addTreeRows(gridApi, [row], place, key);
            }

            dataSetRef.current = tableApi.getData() || [];
            gridApi.gridProps.onDataChanged?.(dataSetRef.current, gridApi);

            if (updateActiveRow && _rows[0]) gridApi.setActiveRowKey(_rows[0].id, true, 'center');

            tableApi.setTableBodyFocus();
        },
        [dataSetRef, gridApi]
    );
};

const useApiUpdateRows = (dataSetRef: React.MutableRefObject<IGridProps['dataSet'] | undefined>, gridApi: IGridApi): IGridApi['updateRows'] => {
    return useCallback(
        (rows: IGridRowData[] | IGridRowData, updateActiveRow?: boolean) => {
            if (!gridApi.tableApi) return;
            const dataTree = gridApi.gridProps.dataTree;

            const _rows: IGridRowData[] = HelpersObjects.isArray(rows) ? [...(rows as IGridRowData[])] : [rows as IGridRowData];

            for (const row of _rows) {
                if (!dataTree) gridApi.tableApi.updateData([row]).then();
                else updateTreeRows(gridApi, row);
            }

            dataSetRef.current = gridApi.tableApi?.getData() || [];
            gridApi.gridProps.onDataChanged?.(dataSetRef.current, gridApi);

            if (updateActiveRow && _rows[0]) gridApi.setActiveRowKey(_rows[0].id, true, 'center');
            gridApi.tableApi.setTableBodyFocus();
        },
        [dataSetRef, gridApi]
    );
};

const findParentNode = (gridApi: IGridApi, row: IGridRowData) => {
    if (!gridApi.tableApi) return undefined;
    const parentFieldKey = gridApi.tableApi.options.dataTreeParentField;
    const indexField = gridApi.tableApi.options.index;
    if (!indexField || !parentFieldKey || !row[parentFieldKey]) return undefined;
    let parentKey: string | number | undefined;
    if (typeof row[parentFieldKey] === 'string' || typeof row[parentFieldKey] === 'number') parentKey = row[parentFieldKey] as string | number;
    else if (typeof row[parentFieldKey] === 'object') parentKey = (row[parentFieldKey] as IGridRowData)[indexField] as string | number | undefined;

    if (!parentKey) return undefined;

    return gridApi.tableApi.getRow(parentKey) || undefined;
};

const addTreeRows = (gridApi: IGridApi, rows: IGridRowData[] | IGridRowData, place?: 'above' | 'below', key?: IRowKey) => {
    if (!gridApi.tableApi) return;
    if (!gridApi.gridProps.dataTree) {
        console.warn('TreeData mode is disabled. Tree row updating not available');
        return;
    }

    const above = place === 'above';
    const clonedRows: IGridRowData[] = HelpersObjects.isArray(rows) ? [...(rows as IGridRowData[])] : [rows as IGridRowData];

    for (const rowData of clonedRows) {
        const parentNode = findParentNode(gridApi, rowData);
        if (!parentNode) gridApi.tableApi?.addData([rowData], above, key);
        else {
            parentNode.addTreeChild(rowData);
            cascadeNodeExpand(parentNode);
            parentNode.reformat();
        }
    }
};

const updateTreeRows = (gridApi: IGridApi, rows: IGridRowData[] | IGridRowData) => {
    if (!gridApi.tableApi) return;
    if (!gridApi.gridProps.dataTree) {
        console.warn('TreeData mode is disabled. Tree row updating not available');
        return;
    }

    const indexField = gridApi.tableApi.options.index;
    const childField = gridApi.tableApi.options.dataTreeChildField;
    if (!indexField || !childField) return;

    const clonedRows: IGridRowData[] = HelpersObjects.isArray(rows) ? [...(rows as IGridRowData[])] : [rows as IGridRowData];

    for (const rowData of clonedRows) {
        const rowKey = rowData[indexField] as string | number;
        const node = gridApi.tableApi.getRow(rowKey);

        // current node has not found
        if (!node) {
            gridApi.tableApi.addData([rowData]).then();
            continue;
        }

        const parentNode = node.getTreeParent();
        const newParentNode = findParentNode(gridApi, rowData);

        if (
            // the same parent
            (!parentNode && !newParentNode) ||
            (parentNode && newParentNode && parentNode.getData()[indexField] === newParentNode.getData()[indexField])
        ) {
            gridApi.tableApi.updateData([rowData]).then();
            continue;
        }

        //remove old node
        rowData[childField] = node.getData()[childField]; //keep row children rows

        gridApi.tableApi.deselectRow(node);
        gridApi.tableApi.deleteRow(rowKey);
        if (parentNode) parentNode.reformat();

        // the parent has changed to root
        if (!newParentNode) {
            gridApi.tableApi.addData([rowData]).then();
            continue;
        }

        // the parent changed to node
        newParentNode.addTreeChild(rowData);
        cascadeNodeExpand(newParentNode);
        newParentNode.reformat();
    }
};

const cascadeNodeExpand = (node: RowComponent | false) => {
    if (!node) return;
    const nodeParent = node.getTreeParent();
    cascadeNodeExpand(nodeParent);
    if (!node.isTreeExpanded()) node.treeExpand();
};

const useApiRemoveRowsByKeys = (dataSetRef: React.MutableRefObject<IGridProps['dataSet'] | undefined>, gridApi: IGridApi): IGridApi['removeRowsByKeys'] => {
    return useCallback(
        (keys: IRowKeys) => {
            const table = gridApi.tableApi;
            if (!table) return;
            const indexField = table.options.index;

            const _keys: IGridRowData['id'][] = HelpersObjects.isArray(keys) ? [...(keys as IRowKey[])] : [keys as IRowKey];

            let newActiveNode: RowComponent | false = false;
            let newActiveNodeCandidate: RowComponent | false = false;
            for (const key of _keys) {
                const node = table.getRow(key);
                if (!node) continue;
                if (newActiveNode && node === newActiveNode) newActiveNode = false;
                newActiveNodeCandidate = node.getNextRow() || node.getPrevRow();
                if (newActiveNodeCandidate) newActiveNode = newActiveNodeCandidate;

                const parentNode = table.options.dataTree ? node.getTreeParent() : false;
                table.deselectRow(node);
                table.deleteRow(key);
                if (parentNode) parentNode.reformat();
            }

            if (newActiveNode && indexField) newActiveNode = table.getRow(newActiveNode.getData()[indexField]); //we update the link to the node, because after deleting the node map is rebuilt and the objects are not equal to each other (glitches occur)
            table.setActiveRow(newActiveNode || null, true, 'bottom');

            dataSetRef.current = table?.getData() ?? [];

            gridApi.gridProps.onDataChanged?.(dataSetRef.current, gridApi);

            table.setTableBodyFocus();
        },
        [dataSetRef, gridApi]
    );
};

const useApiRemoveRows = (gridApi: IGridApi): IGridApi['removeRows'] => {
    return useCallback(
        (rows: IGridRowData | IGridRowData[]) => {
            const clonedRows: IGridRowData[] = HelpersObjects.isArray(rows) ? [...(rows as IGridRowData[])] : [rows as IGridRowData];
            const keys: IRowKey[] = [];
            for (const row of clonedRows) keys.push(row.id);
            gridApi.removeRowsByKeys(keys);
        },
        [gridApi]
    );
};

const useApiDeleteRows = (gridApi: IGridApi): IGridApi['deleteRows'] => {
    return useCallback(
        (rows: IGridRowData | IGridRowData[] | undefined) => {
            if (!rows) return;
            const rowsData = Array.isArray(rows) ? rows : [rows];
            const gridProps = gridApi.gridProps;
            let messageBox: MessageBoxApi;
            const removeRows = () => {
                const deletePromise = gridProps?.onDelete?.(rowsData, gridApi);

                if (HelpersObjects.isPromise(deletePromise)) {
                    if (!gridProps.confirmDelete) gridApi.setIsLoading(true);
                    const promiseResult = deletePromise as IGridDeletePromise;
                    promiseResult
                        .then(() => {
                            if (!gridApi.getIsMounted()) return;
                            gridApi.removeRows(rowsData);
                            if (!gridProps.confirmDelete) gridApi.setIsLoading(false);
                            else messageBox?.destroy();
                        })
                        .catch(error => {
                            if (!gridApi.getIsMounted()) return;
                            if (!gridProps.confirmDelete) gridApi.setIsLoading(false);
                            else messageBox?.destroy();
                            MessageBox.alert({content: error.message, colorType: 'danger'});
                        });
                    return;
                }

                gridApi.removeRows(rowsData);
                if (messageBox) messageBox.destroy();
            };

            if (gridProps.confirmDelete) {
                messageBox = MessageBox.confirmWaiter({
                    content: gridProps.rowDeleteMessage ?? 'Удалить выбранные строки?',
                    onOk: removeRows,
                });
            } else {
                removeRows();
            }
        },
        [gridApi]
    );
};

const useApiFetchData = (gridApi: IGridApi): IGridApi['fetchData'] => {
    return useCallback(
        (dataFetchHandler?: IGridProps['onDataFetch'], params?: Record<string, unknown>) => {
            const table = gridApi.tableApi;
            if (!table) return;

            table.modules.page.dataChanging = true; //WORKAROUND: by default dataChanging=false and tabulator will reset params
            table.modules.ajax.setUrl('-'); //WORKAROUND^ Tabulator will request ajax data only when ((!data && url) || typeof dataSet === 'string')

            if (dataFetchHandler) {
                table.modules.ajax.loaderPromise = GenerateAjaxRequestFunc(gridApi, dataFetchHandler, params); //WORKAROUND: update current table AjaxRequestFunc
            }

            console.log('api params', params);
            table.setData(undefined, params).then();
        },
        [gridApi]
    );
};

const useSetCurrentDataFetchHandler = (
    curDataFetchHandler: React.MutableRefObject<IGridProps['onDataFetch'] | undefined>,
    curDataFetchParams: React.MutableRefObject<Record<string, unknown> | undefined>
) => {
    return useCallback(
        (dataFetchFunc?: IGridProps['onDataFetch'], params?: Record<string, unknown>) => {
            curDataFetchHandler.current = dataFetchFunc;
            curDataFetchParams.current = params;
        },
        [curDataFetchHandler, curDataFetchParams]
    );
};

const useGetCurrentDataFetchHandler = (
    curDataFetchFunc: React.MutableRefObject<IGridProps['onDataFetch'] | undefined>,
    curDataFetchParams: React.MutableRefObject<Record<string, unknown> | undefined>
) => {
    return useCallback((): [IGridProps['onDataFetch'], Record<string, unknown> | undefined] => {
        return [curDataFetchFunc.current, curDataFetchParams.current];
    }, [curDataFetchFunc, curDataFetchParams]);
};

const useApiRetryFetchData = (gridApi: IGridApi): IGridApi['fetchData'] => {
    return useCallback(() => {
        const [currentDataFetchHandler, currentFetchParams] = gridApi.getCurrentDataFetchHandler();
        if (currentDataFetchHandler) gridApi.fetchData(currentDataFetchHandler, currentFetchParams);
    }, [gridApi]);
};

const useApiGetRowData = (gridApi: IGridApi): IGridApi['getRowData'] => {
    return useCallback(
        (node: RowComponent | undefined, withParent?: boolean, selfParent?: boolean, parentOnly?: boolean, withChildren?: boolean) => {
            const tableApi = gridApi.tableApi;

            if (!tableApi || !node) return {};

            const rowData = parentOnly ? {} : {...node.getData()};

            if (!tableApi.options.dataTree) return rowData;

            const parentFieldKey = tableApi.options.dataTreeParentField;
            const childrenKey = tableApi.options.dataTreeChildField;

            if (!withChildren && childrenKey) delete rowData[childrenKey];

            if (!parentFieldKey || typeof rowData[parentFieldKey] !== 'undefined') return rowData;

            const parentNode = selfParent ? node : node.getTreeParent();
            if (!parentNode) return rowData;
            const parentData = parentNode.getData();
            if (!withChildren && childrenKey) delete parentData[childrenKey];
            rowData[parentFieldKey] = parentNode.getData();

            return rowData;
        },
        [gridApi]
    );
};

const useApiOpenColumnDialog = (gridApi: IGridApi, openColumnsDialog: React.Dispatch<React.SetStateAction<boolean>>) => {
    return useCallback(
        (open: boolean) => {
            openColumnsDialog(open);
        },
        [openColumnsDialog]
    );
};
/*

const useApiSelectAll = (gridApi: IGridApi) => {
    return useCallback(() => {
        gridApi.setSelectedRows(gridApi.dataSet(), true);
    }, [gridApi]);
};

const useApiSelectFirstRow = (gridApi: IGridApi) => {
    return useCallback(
        (ensureVisible?: boolean) => {
            const rows = gridApi.dataSet();
            if (rows.length === 0) return;
            const nextRowId = rows[0].id;
            gridApi.setSelectedRowKeys(nextRowId, true);

            if (ensureVisible) gridApi.scrollToRowKey(nextRowId, true);
        },
        [gridApi]
    );
};

const useApiSelectLastRow = (gridApi: IGridApi) => {
    return useCallback(
        (ensureVisible?: boolean) => {
            const rows = gridApi.dataSet();
            if (rows.length === 0) return;
            const nextRowId = rows[rows.length - 1].id;
            gridApi.setSelectedRowKeys(nextRowId, true);

            if (ensureVisible) gridApi.scrollToRowKey(nextRowId, true);
        },
        [gridApi]
    );
};





*/
